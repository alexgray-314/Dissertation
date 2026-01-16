class Interpreter {

  constructor(handler) {
    this.asts = [];
    this.handler = handler;
  }

  interpret(asts) {
    this.asts = asts;

    for (let ast of asts) {
      switch (ast.node) {
        case "DEFINE":
          this.#define(ast.children[0]);
          break;
      }
    }

  }

  #define(head) {
    switch (head.node) {
      case "AREA":
        this.handler.define_area(head.children[0].value);
        break;
    }
  }

}
