class Interpreter {

  constructor(handler) {
    this.handler = handler;
  }

  interpret(asts) {

    for (let ast of asts) {
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
          this.handler.deal(ast);
          break;
        case "UPDATE_TURN":
          this.#update_player(ast);
          break;
      }
    }

  }

  // If a term can be evaluated to another term
  evaluate(term) {
    switch (term.type) {
      case "PLAYER":
        return this.#evaluate_player(term);
      case "POSITION":
        return this.#evaluate_position(term);
      case "PROPERTY":
        return this.#evaluate_property(term);
      default:
        return term;
    }
  }

  #evaluate_property(term) {
    const subTerm = this.evaluate(term.term);
    if (subTerm === undefined) {
      return undefined;
    }
    return subTerm[term.property];
  }

  #evaluate_player(term) {
    if (/^\d+$/.test(term.id)) {
      return term;
    } else {
      switch (term.id) {
        case 'ACTION':
          return {
            type: "PLAYER",
            id: handler.active_player_id()
          };
        case "TURN":
          return {
            type: "PLAYER",
            id: handler.turn
          }
        default:
          throw term.id + " is not a valid player tag";
      }
    }
  }

  #evaluate_position(term) {
    return this.handler.get_card(term);
  }

  // this needs to be run when a position is a players hand at runtime (so that </> works)
  #evaluate_hand(term) {
    if (term.type === "POSITION") {
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

  #update_player(ast) {
    let player = ast.player;
    if (player === "NEXT"){
      handler.next_turn();
    } else {
      player = this.#evaluate_player(player);
      handler.set_turn(player.id);
    }
  }

  #if(ast) {
    switch (ast.comparator) {
      case "EQUALS":
        if (this.#object_equals(this.evaluate(ast.left), this.evaluate(ast.right))) {
          this.interpret(ast.consequent);
        } else {
          this.interpret(ast.antecedent);
        }
        break;
      default:
        throw ast.comparator + " is not a valid comparator";
    }
  }

  #register_action_trigger(ast) {
    for (let a of this.handler.actions) {
      if (a.id === ast.id) {
        a.addListener(function () {
          handler.action();
          interpreter.interpret(ast.subTree);
          render();
        });
      }
    }
  }

  #define(ast) {
    switch (ast.valueType) {
      case "AREA":
        this.handler.define_area(ast);
        break;
      case "ACTION":
        this.handler.define_action(ast);
        break;
    }
  }

  #move(ast) {
    // If either the source or destination is a players hand, it must be evaluated
    const source = this.#evaluate_hand(ast.source);
    const destination = this.#evaluate_hand(ast.destination);

    if (source.type === "CARD") {
      this.handler.add_card(source, destination);
    } else if (source.type === "POSITION") {
      // remove card from source position and add it to dest
      const c = this.handler.remove_card(source);
      handler.add_card(c, destination);
    }
  }

  // TODO actually use a library function here, this is silly
  #object_equals(a, b) {
    if (a === b) return true;

    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null || a === undefined || b === undefined) {
      return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => keysB.includes(key) && this.#object_equals(a[key], b[key]));
  }

}
