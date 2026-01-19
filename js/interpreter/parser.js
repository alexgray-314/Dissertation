class Parser {
  constructor() {}

  parse(tokens) {
    this.tokens = tokens;
    this.asts = [];
  }

  #prog() {
    while (this.#peek().tokens === "DEFINE" || this.#peek().token === "MOVE") {
      this.#Stmt();
      this.#eat({token: "SEMI_COLON"});
    }
    this.#eat({token: "END"});
  }

  #Stmt() {
    switch (this.#peek().token) {
      case "DEFINE":
        this.#parse_define();
        break;
      case "MOVE":
        this.#parse_move();
        break;
      default:
        throw "Illegal statement" + this.#peek().token;
    }
  }

  /// --------- DEFINE STATEMENTS
  #parse_define() {
    this.#eat({token: "DEFINE"});

  }

  #type() {
    return this.#eat(this.#peek().token);
  }

  #parse_move() {

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
    if (t === token.token) {
      this.tokens = this.tokens.slice(1)
      return t;
    } else {
      this.#traceExpected(token);
    }
  }


}
