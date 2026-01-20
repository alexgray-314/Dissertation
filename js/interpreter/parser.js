class Parser {
  constructor() {}

  parse(tokens) {
    this.tokens = tokens;
    this.asts = [];
    this.#prog();
    return this.asts;
  }

  #prog() {
    while (this.#peek().token === "DEFINE" || this.#peek().token === "MOVE" || this.#peek().token === "ON" || this.#peek().token === "IF" || this.#peek().token === "DEAL") {
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
      default:
        throw "Illegal statement" + this.#peek().token;
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

  /// --------- IF STATEMENTS -------------
  #parse_if() {

    this.#eat({token: "IF"});

    const a = this.#get_term();
    const comparator = this.#peek().token;
    this.#eat(this.#peek());
    const b = this.#get_term();
    const consequent = this.#get_subtree();
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

  }

  /// --------- ACTION TRIGGERS (ON) -----------
  #parse_on() {
    this.#eat({token: "ON"});
    const id = this.#peek().value;
    this.#eat({token: "ID"});

    const subTree = this.#get_subtree();

    return {
      type: "ON",
      id: id,
      subTree: subTree,
    };

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
    const type = this.#peek().token;
    this.#eat(this.#peek());
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
    return args;
  }

  #get_term() {
    switch (this.#peek().token) {
      case "ID":
        return this.#get_position();
      case "CARD":
        return this.#get_card();
      case "STRING":
        return this.#get_string();
      case "NUMBER":
        return this.#get_number();
      case "PLAYER":
        return this.#get_player_or_hand();
      default:
        throw "Illegal TERM";
    }
  }

  #get_player_or_hand() {
    const playerID = this.#peek().value;
    this.#eat({token: "PLAYER"});
    const player =  {
      type: "PLAYER",
      id: playerID,
    };

    // this is actually referencing a player's hand (which is a position)
    if (this.#peek().token === "L_SQUARE") {
      const index = this.#get_index();
      return {
        type: "POSITION",
        area: player,
        index: index,
      }
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

  #get_position() {
    const id = this.#peek().value;
    this.#eat({token: "ID"});
    const index = this.#get_index();
    return {
      type: "POSITION",
      area: id,
      index: index,
    }
  }

  #get_index() {
    this.#eat({token: "L_SQUARE"});
    const deck = this.#peek().value;
    this.#eat({token: "NUMBER"});
    let pos = 0;
    if (this.#peek().token !== "R_SQUARE") {
      this.#eat({token: "COMMA"});
      pos = this.#peek().value;
      this.#eat({token: "NUMBER"});
    }
    this.#eat({token: "R_SQUARE"});
    return {
      deck: deck,
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

    const number = value.slice(0, -1).toUpperCase();
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
      number: number,
      value: value
    }
  }

  #traceExpected(expected) {
    console.log(this.tokens);
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
