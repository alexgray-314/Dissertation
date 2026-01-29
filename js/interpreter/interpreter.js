class Interpreter {

  constructor(state) {
    this.state = state;
    this.running = true; // if this is set to false, the interpreter will stop execution
  }

  interpret(asts) {

    for (let ast of asts) {
      if (this.running) {
        switch (ast.type) {
          case "DEFINE":
            this.#define(ast);
            break;
          case "MOVE":
            this.#move(ast);
            break;
          case "ON":
            this.#register_action_trigger(ast);
            break;
          case "IF":
            this.#if(ast);
            break;
          case "DEAL":
            this.state.deal(ast);
            break;
          case "UPDATE_TURN":
            this.#update_player(ast);
            break;
          case "CATCH":
            this.#add_catch(ast);
            break;
          case "CANCEL":
            this.#cancel_movement();
            break;
          case "ASSIGN":
            this.#assign_variable(ast);
            break;
        }
      }
    }

  }

  // If a term can be evaluated to another term
  evaluate(term) {
    if (term === undefined) return undefined;

    switch (term.type) {
      case "PLAYER":
        return this.#evaluate_player(term);
      case "POSITION":
        return this.#evaluate_position(term);
      case "PROPERTY":
        return this.#evaluate_property(term);
      case "VARIABLE":
        return this.#evaluate_variable(term.id);
      case "STACK":
        return this.#evaluate_stack(term);
      default:
        return term;
    }
  }

  // Evaluate the term to its most simple form (i.e. position -> card)
  evaluate_down(term) {
    switch (term.type) {
      case "POSITION":
        return this.evaluate_card(term);
      default:
        return term;
    }
  }

  #evaluate_stack(term) {

    let area = term.area;
    // check if area is a hand
    if (area.type === "PLAYER") {
      // the ids of the areas used to store player hands are hidden from the game
      area = this.#evaluate_player(area).id.toString();
    }

    if (this.state.areas.hasOwnProperty(area)) {
      return this.state.areas[area].stacks[term.index]??{cards:[]}.cards;
    } else {
      console.error("Invalid area id ", area);
      return undefined;
    }
  }

  #evaluate_variable(var_id) {
    if (!this.state.variables.hasOwnProperty(var_id)) {
      return undefined;
    }
    return this.state.variables[var_id].value;
  }

  #evaluate_property(term) {
    const subTerm = this.evaluate(term.term);
    if (subTerm === undefined) {
      return undefined;
    }
    return (subTerm??{})[term.property] ?? (this.evaluate_down(subTerm)??{})[term.property];
  }

  // <@> -> <0>
  #evaluate_player(term) {
    // TODO throw some kind of error if the player is not yet defined
    if (/^\d+$/.test(term.id)) {
      return term;
    } else {
      switch (term.id) {
        case 'ACTION':
          return {
            type: "PLAYER",
            id: this.state.get_latest_action_player()
          };
        case "TURN":
          return {
            type: "PLAYER",
            id: this.state.get_turn()
          };
        case "MOVE":
          return {
            type: "PLAYER",
            // if there is currently a player moving, return that. Otherwise return the last player who moved
            id: this.state.movementTracker.player_moving ?? this.state.movementTracker.last_successful_move_player
          };
        default:

          const value = this.#evaluate_variable(term.id);
          if (value !== undefined) {
            return {
              type: "PLAYER",
              id: value
            }
          }

          throw "Invalid player tag. Variable " + term.id + " is undefined";
      }
    }
  }

  // a[0, 0] -> #4S
  // POSITION -> CARD
  evaluate_card(term) {

    if (term.type === "POSITION") {
      return this.state.get_card(this.evaluate(term));
    }
    console.error("Could not get card. Invalid position", term);
    return undefined;

  }


  // <@>[0,0] -> position
  // / -> position
  // Takes a term that represents a position
  #evaluate_position(term) {
    if (term.type === "POSITION") {
      if (term.area === "MOVE_DESTINATION") {
        return this.state.movementTracker.destination;
      }
      if (term.area === "MOVE_SOURCE") {
        return this.state.movementTracker.source;
      }
      if (term.area.type === "PLAYER") {
        // the ids of the areas used to store player hands are hidden from the game
        const areaId = this.#evaluate_player(term.area).id.toString();
        return {
          type: "POSITION",
          area: areaId,
          index: term.index,
        };
      }
    }
    return term;
  }

  #assign_variable(ast) {
    if (this.state.variables.hasOwnProperty(ast.id)) {
      const variable = this.state.variables[ast.id];
      const value = this.#evaluate_term_to_type(ast.value, variable.type);
      if (value === undefined) {
        console.error("Cannot assign to " + ast.id + ", ", ast.value, " is not of type " + variable.type);
      } else {
        // distinction between returning undefined because the term is of the wrong type...
        // and a variable of the correct type, but with an undefined value
        if (typeof value !== 'boolean') {
          variable.value = value;
        }
      }
    } else {
      console.error("Variable " + ast.id + " is undefined");
    }
  }

  // Check whether a term can evaluate to a specific type
  // Will return undefined if not
  #evaluate_term_to_type(term, type) {
    // Check term is not undefined
    if (term === undefined) return undefined;

    // Check for javascript primitives
    if (type === "INT") {
      if (typeof this.evaluate(term) == 'number') {
        return term;
      } else {
        return undefined;
      }
    }

    // Check for language-defined types
    const evTerm = this.evaluate(term);
    if (evTerm.type === type) {
      return evTerm;
    }

    // If the term is a position, see if it can be evaluated to a card
    if (evTerm.type === "POSITION") {
      const card = this.evaluate_card(evTerm);
      // distinction between returning undefined because the term is of the wrong type...
      // and a variable of the correct type, but with an undefined value
      return card ?? false;
    }
    return undefined;
  }

  #update_player(ast) {
    let player = ast.player;
    if (player === "NEXT"){
      state.next_turn();
    } else {
      player = this.#evaluate_player(player);
      state.set_turn(player.id);
    }
  }

  #if(ast) {
    switch (ast.comparator) {
      case "EQUALS":
        if (this.object_equals(this.evaluate(ast.left), this.evaluate(ast.right))) {
          this.interpret(ast.consequent);
        } else {
          this.interpret(ast.antecedent);
        }
        break;
      case "CONTAINS":
        this.#contains(ast);
        break;
      case "GREATER_THAN":
        if (this.#greater_than(ast.left, ast.right)) {
          this.interpret(ast.consequent);
        } else {
          this.interpret(ast.antecedent);
        }
        break;
      default:
        throw ast.comparator + " is not a valid comparator";
    }
  }

  // String -> Number if possible
  // Rank -> Number
  #convert_to_number(term) {
    // Already a number
    if (typeof term === 'number') {
      return term;
    }
    // "0"
    if (!isNaN(Number(term))) {
      return Number(term);
    }
    // Rank
    if (typeof term === 'string') {
      return {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
      }[term.toUpperCase()] ?? undefined
    }

    return undefined;
  }

  #greater_than(left, right) {
    const l = this.#convert_to_number(this.evaluate(left));
    const r = this.#convert_to_number(this.evaluate(right));

    return l > r;
  }

  #contains(ast) {
    const left = this.evaluate_down(this.evaluate(ast.left));
    let property = undefined;
    let set = ast.right;

    if (ast.right.type === "PROPERTY") {
      property = ast.right.property;
      set = ast.right.term;
    }

    if (set.type === "SET") {
      const start = this.#evaluate_position(set.start);
      const end = this.#evaluate_position(set.end);
      const area = start.area;

      // LOOP through the set
      for (let stack = start.index.stack; stack <= end.index.stack; stack++) {
        for (let pos = start.index.position; pos <= end.index.position; pos++) {

          let right = this.evaluate_card({
            type: "POSITION",
              area: area,
              index: {
                stack: stack,
                position: pos
              }
          });

          if (property !== undefined) {
            right = this.#evaluate_property({
              type: "PROPERTY",
              property: property,
              term: right
            });
          }

          // Break out of loop early to save time
          if (right === undefined) {
            // The check will fail
            this.interpret(ast.antecedent);
            return;
          }

          // Check for equality
          if (this.object_equals(left, right)) {
            this.interpret(ast.consequent);
            return;
          }

        }
      }

      // Nothing in the set has matched with the left
      this.interpret(ast.antecedent);

    } else {
      throw "You can only perform the =? operator on a SET";
    }
  }

  #register_action_trigger(ast) {
    this.state.assign_action_subtree(ast);
  }

  #define(ast) {
    switch (ast.valueType) {
      case "AREA":
        this.state.define_area(ast);
        break;
      case "ACTION":
        this.state.define_action(ast);
        break;
      case "INT": case "CARD":
        this.state.define_variable(ast);
        break;
      default:
        console.error("Invalid valueType: ", ast.valueType);
    }
  }

  #move(ast) {
    // If either the source or destination is a players hand, it must be evaluated
    const source = this.evaluate(ast.source);
    const destination = this.evaluate(ast.destination);

    if (source === undefined || destination === undefined) return;

    if (source.type === "CARD") {
      this.state.add_card(source, destination);
    } else if (source.type === "POSITION") {
      // remove card from source position and add it to dest
      const c = this.state.get_card(source);
      this.state.remove_card(source);
      this.state.add_card(c, destination);
    } else if (source.type === "SET") {
      this.#move_set(source, destination);
    }
  }

  #move_set(set, destination) {

    const start = this.#evaluate_position(set.start);
    const end = this.#evaluate_position(set.end);
    const area = start.area;

    // LOOP through the set
    for (let stack = start.index.stack; stack <= end.index.stack; stack++) {
      for (let pos = start.index.position; pos <= end.index.position; pos++) {

        const source = this.evaluate({
          type: "POSITION",
          area: area,
          index: {
            stack: stack,
            position: 0 // we set the position to zero as we can just move the top card that number of times
          }
        })

        const card = this.state.get_card(source);
        if (card === undefined) return; // we're done moving
        this.state.remove_card(source);
        this.state.add_card(card, destination);
        console.log("moved");

      }
    }

  }

  #add_catch(ast) {
    // Append onto the end of the subTree
    this.state.add_catch(ast.subTree);
  }

  #cancel_movement() {
    this.state.movementTracker.cancelled = true;
    this.running = false;
  }

  // TODO actually use a library function here, this is silly
  object_equals(a, b) {
    if (a === b) return true;

    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null || a === undefined || b === undefined) {
      return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => keysB.includes(key) && this.object_equals(a[key], b[key]));
  }

}
