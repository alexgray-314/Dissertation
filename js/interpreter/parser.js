class Parser {
  constructor() {}

  parse(tokens) {
    this.tokens = tokens;
    this.asts = [];
    this.#prog();
    return this.asts;
  }

  #prog() {
    while(this.#peek().token !== "END") {
      this.#Stmt();
      this.#eat({token: "SEMI_COLON"});
    }
    this.#eat({token: "END"});
  }

  #Stmt() {
    switch (this.#peek().token) {
      case "DEFINE":
        this.asts.push(this.#parse_define());
        break;
      case "MOVE":
        this.asts.push(this.#parse_move());
        break;
      case "ON":
        this.asts.push(this.#parse_on());
        break;
      case "IF":
        this.asts.push(this.#parse_if());
        break;
      case "DEAL":
        this.asts.push(this.#parse_deal());
        break;
      case "PLAYER":
        this.asts.push(this.#set_turn());
        break;
      case "CANCEL":
        this.asts.push(this.#parse_cancel());
        break;
      case "ID":
        this.asts.push(this.#parse_assign_or_function_call());
        break;
      default:
        throw "Illegal statement " + this.#peek().token;
    }
  }

  #parse_assign_or_function_call() {
    const id = this.#peek().value;
    this.#eat({token: "ID"});
    this.#eat({token: "ASSIGN"}); // =
    const term = this.#get_term();
    return {
      type: "ASSIGN",
      id: id,
      value: term
    }
  }

  #get_subtree() {
    this.#eat({token: "L_CURLY"});
    // keeps track of how many internal nested curly brackets we go through
    let nested = 0;
    const subTokens = [];
    while (nested > 0 || this.#peek().token !== "R_CURLY") {
      const t = this.#peek();
      if (t.token === "L_CURLY") {
        nested++;
      } else if (t.token === "R_CURLY") {
        nested--;
      }

      subTokens.push(t);
      this.#eat(t);

    }
    this.#eat({token: "R_CURLY"});
    subTokens.push({token: "END"});

    return (new Parser()).parse(subTokens);
  }

  // ---- SPECIAL CASE: setting players -------
  // A statement can only being with a player if they are setting a players turn
  #set_turn() {
    if (this.#peek().value !== "TURN") {
      throw "You can only set the player who's turn it is using <.>";
    } else {
      this.#eat({token: "PLAYER"});
      switch (this.#peek().token) {
        case "PLUS":
          this.#eat({token: "PLUS"});
          this.#eat({token: "PLUS"});
          return {
            type: "UPDATE_TURN",
            player: "NEXT"
          };
        case "ASSIGN":
          this.#eat({token: "ASSIGN"});
          const player = this.#get_player();
          return {
            type: "UPDATE_TURN",
            player: player,
          };
        default:
          throw "Line " + this.#peek().line + ": You haven't set the turn to anything";
      }
    }
  }

  /// --------- IF STATEMENTS -------------
  #parse_if() {

    this.#eat({token: "IF"});

    const a = this.#get_term();
    const comparator = this.#peek().token;
    this.#eat(this.#peek());
    const b = this.#get_term();
    const consequent = this.#get_subtree();

    // if {} else {};
    if (this.#peek().token === "ELSE") {
      this.#eat({token: "ELSE"});
      const antecedent = this.#get_subtree();
      return {
        type: "IF",
        comparator: comparator,
        left: a,
        right: b,
        consequent: consequent,
        antecedent: antecedent,
      };
    } else {
      // if {};
      return {
        type: "IF",
        comparator: comparator,
        left: a,
        right: b,
        consequent: consequent,
        antecedent: [],
      };
    }


  }

  /// --------- ACTION TRIGGERS (ON) -----------
  #parse_on() {
    this.#eat({token: "ON"});
    switch (this.#peek().token) {
      case "ID":
        return this.#parse_action_trigger();
      case "MOVE":
        return this.#parse_catch_move();
      default:
        throw "Invalid catch statement: on " + this.#peek().value;
    }

  }

  #parse_action_trigger() {
    const id = this.#peek().value;
    this.#eat({token: "ID"});

    const subTree = this.#get_subtree();

    return {
      type: "ON",
      id: id,
      subTree: subTree,
    };
  }

  #parse_catch_move() {
    this.#eat({token: "MOVE"});

    let catchSource = undefined;
    let catchDest = undefined;

    if (this.#peek().token !== "L_CURLY") {
      catchSource = this.#get_term();
      catchDest = this.#get_term();
    }

    let subTree = this.#get_subtree();

    if (catchSource !== undefined && catchSource.type !== "WILDCARD") {
      subTree = this.#add_catch_clause_to_subTree(catchSource, subTree, "MOVE_SOURCE");
    }

    if (catchDest !== undefined && catchDest.type !== "WILDCARD") {
      subTree = this.#add_catch_clause_to_subTree(catchDest, subTree, "MOVE_DESTINATION");
    }

    return {
      type: "CATCH",
      subTree: subTree
    }
  }

  // Target must either be "MOVE_SOURCE" or "MOVE_DESTINATION"
  #add_catch_clause_to_subTree(clause, subTree, target) {
    let comparator = undefined;
    switch (clause.type) {
      case "POSITION":
        comparator = "EQUALS";
        break;
      case "SET":
        comparator = "CONTAINS";
        break;
      default:
        console.error("Line " + this.#peek().line + ": Can only catch movement on positions or sets");
        return subTree;
    }

    return [{
      type: "IF",
      comparator: comparator,
      left: {
        type: "POSITION",
        area: target
      },
      right: clause, // this is a position,
      consequent: subTree,
      antecedent: [{
        type: "CANCEL"
      }]
    }]
  }

  #parse_cancel() {
    this.#eat({token: "CANCEL"});
    return {
      type: "CANCEL"
    }
  }

  /// --------- DEALING ---------
  #parse_deal() {
    this.#eat({token: "DEAL"});
    const args = this.#get_args();
    return {
      type: "DEAL",
      args: args,
      subTree: [] // TODO add the ability to embed code here
    }
  }

  /// --------- DEFINE STATEMENTS
  #parse_define() {
    this.#eat({token: "DEFINE"});
    const type = this.#peek().value.toUpperCase();
    this.#eat({token: "ID"});
    const id = this.#peek().value;
    this.#eat({token: "ID"});
    const args = this.#get_args();
    return {
      type: "DEFINE",
      valueType: type,
      id: id,
      args: args
    };
  }

  #get_args() {
    let args = {}
    // Check to see if there are any args
    if (this.#peek().token === "L_PAREN") {
      this.#eat({token: "L_PAREN"});
      while (this.#peek().token !== "R_PAREN") {
        const id = this.#peek().value;
        this.#eat({token: "ID"});
        this.#eat({token: "COLON"});

        const value = this.#get_term();

        if (this.#peek().token === "COMMA") {
          this.#eat({token: "COMMA"});
        }
        args[id] = value;
      }
      this.#eat({token: "R_PAREN"});
    }
    return args;
  }

  #get_position_or_variable() {
    const id = this.#peek().value;
    this.#eat({token: "ID"});
    if (this.#peek().token === "L_SQUARE") {
      return this.#get_position_or_set(id);
    }
    return {
      type: "VARIABLE",
      id: id
    }
  }

  #get_term() {
    let term;
    switch (this.#peek().token) {
      case "ID":
        term = this.#get_position_or_variable();
        break;
      case "CARD":
        term = this.#get_card();
        break;
      case "STRING":
        term = this.#get_string();
        break;
      case "NUMBER":
        term = this.#get_number();
        break;
      case "PLAYER":
        term = this.#get_player_or_hand();
        break;
      case "FORWARD_SLASH":
        term = this.#get_move_position();
        break;
      case "BACKWARD_SLASH":
        term = this.#get_move_position();
        break;
      case "WILDCARD":
        this.#eat({token: "WILDCARD"});
        term = {
          type: "WILDCARD"
        };
        break;
      default:
        throw "Illegal TERM " + this.#peek().token;
    }
    return this.#check_for_properties(term);
  }

  #check_for_properties(term) {
    if (this.#peek().token === "DOT") {
      this.#eat({token: "DOT"});
      const property = this.#peek().value;
      this.#eat({token: "ID"});
      return this.#check_for_properties({
        type: "PROPERTY",
        property: property,
        term: term
      });
    }
    return term;
  }

  #get_player() {
    const playerID = this.#peek().value;
    this.#eat({token: "PLAYER"});
    return {
      type: "PLAYER",
      id: playerID,
    };
  }

  #get_player_or_hand() {
    const player = this.#get_player();

    // this is actually referencing a player's hand (which is a position)
    if (this.#peek().token === "L_SQUARE") {
      return this.#get_position_or_set(player);
    }

    return player;

  }

  #get_number() {
    const n = this.#peek().value;
    this.#eat({token: "NUMBER"});
    return n;
  }

  #get_string() {
    const s = this.#peek().value;
    this.#eat({token: "STRING"});
    return s;
  }

  #get_move_position() {
    switch(this.#peek().token) {
      case "FORWARD_SLASH":
        this.#eat({token: "FORWARD_SLASH"});
        return {
          type: "POSITION",
          area:"MOVE_DESTINATION"
        };
      case "BACKWARD_SLASH":
        this.#eat({token: "BACKWARD_SLASH"});
        return {
          type: "POSITION",
          area: "MOVE_SOURCE"
        };
    }
  }

  #get_position_or_set(area) {

    const index = this.#get_index();
    if (index.type === "SET") {
      // Set (a[0, 0:0])
      return {
        type: "SET",
        start: {
          type: "POSITION",
          area: area,
          index: index.start
        },
        end: {
          type: "POSITION",
          area: area,
          index: index.end
        },
      }
    } else {
      // Referring to a stack
      if (index.position === undefined) {
        return {
          type: "STACK",
          area: area,
          index: index.stack
        }
      }

      // Referring to a card position
      return {
        type: "POSITION",
        area: area,
        index: index,
      };
    }

  }

  #get_index() {
    this.#eat({token: "L_SQUARE"});
    const stack = this.#peek().value;
    // TODO sets of stacks
    this.#eat({token: "NUMBER"});
    let pos = undefined;
    if (this.#peek().token !== "R_SQUARE") {
      this.#eat({token: "COMMA"});
      pos = this.#peek().value;
      this.#eat({token: "NUMBER"});
      if (this.#peek().token === "COLON") {
        this.#eat({token: "COLON"});
        const endPos = this.#peek().value;
        this.#eat({token: "NUMBER"});
        this.#eat({token: "R_SQUARE"});
        // Index is actually a SET
        return {
          type: "SET",
          start: {
            stack: stack,
            position: pos
          },
          end: {
            stack: stack,
            position: endPos
          }
        }
      }
    }
    this.#eat({token: "R_SQUARE"});
    return {
      stack: stack,
      position: pos,
    }
  }

  // MOVEMENT PARSING
  #parse_move() {
    this.#eat({token: "MOVE"});
    const source = this.#get_term();
    const dest = this.#get_term();
    return {
      type: "MOVE",
      source: source,
      destination: dest
    }
  }

  #get_card() {
    const value = this.#peek().value;
    this.#eat({token: "CARD"});

    const rank = value.slice(0, -1).toUpperCase();
    let suit = value.slice(-1);

    // Convert the suit from a single digit to the full name
    if (/[hH]/.test(suit)) {
      suit = "hearts";
    } else if (/[dD]/.test(suit)) {
      suit = "diamonds";
    } else if (/[cC]/.test(suit)) {
      suit = "clubs";
    } else if (/[sS]/.test(suit)) {
      suit = "spades";
    }

    return {
      type: "CARD",
      suit: suit,
      rank: rank,
    }
  }

  #traceExpected(expected) {
    console.log(this.asts);
    throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token + ". Expected: " + expected.token;

  }

  #peek() {
    return this.tokens.at(0);
  }

  #eat(token) {
    const t = this.#peek();
    if (t.token === token.token) {
      this.tokens = this.tokens.slice(1)
      return t;
    } else {
      this.#traceExpected(token);
    }
  }


}
