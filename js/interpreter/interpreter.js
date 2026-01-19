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
    console.log("Moving");
    console.log(ast.source);
    console.log(ast.destination);
    switch (ast.source.type) {
      case "CARD":
        console.log("This actually is reachable");
        this.handler.add_card(ast.source, ast.destination);
        break;
      case "POSITION":
        // TODO remove card from soruce position and add it to dest
        break;
    }
  }

}
