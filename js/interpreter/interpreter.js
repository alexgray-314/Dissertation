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
      default:
        return term;
    }
  }

  #evaluate_player(term) {
    if (/^\d+$/.test(term.id)) {
      return term;
    } else {
      switch (term.id) {
        case 'ACTION':
          return {
            type: "PLAYER",
            id: this.handler.latest_action_player()
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
        term.area = "hand" + this.#evaluate_player(term.area).id;
      }
    }
    return term;
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
    ast.source = this.#evaluate_hand(ast.source);
    ast.destination = this.#evaluate_hand(ast.destination);

    if (ast.source.type === "CARD") {
      this.handler.add_card(ast.source, ast.destination);
    } else if (ast.source.type === "POSITION") {
      // remove card from source position and add it to dest
      const c = this.handler.remove_card(ast.source);
      handler.add_card(c, ast.destination);
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
