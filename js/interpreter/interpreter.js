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
      }
    }

  }

  #define(ast) {
    switch (ast.valueType) {
      case "AREA":
        this.handler.define_area(ast);
        break;
    }
  }

  #move(ast) {
    switch (ast.source.type) {
      case "CARD":
        this.handler.add_card(ast.source, ast.destination);
        break;
      case "POSITION":
        // remove card from source position and add it to dest
        const c = handler.remove_card(ast.source);
        handler.add_card(c, ast.destination);
        break;
    }
  }

}
