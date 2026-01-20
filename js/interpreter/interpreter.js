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
      }
    }

  }

  #if(ast) {
    switch (ast.comparator) {
      case "EQUALS":
        if (this.#object_equals(ast.left, ast.right)) {
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

    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
      return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => keysB.includes(key) && this.#object_equals(a[key], b[key]));
  }

}
