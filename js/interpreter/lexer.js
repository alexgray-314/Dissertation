class Lexer {
  constructor() {
    this.input = "";
  }

  #peek() {
    return this.input.charAt(this.input.length - 1);
  }

  #eat(c) {
    if (this.#peek() === c) {
      this.input = this.input.slice(0, this.input.length-1);
    } else {
      throw "invalid character " + c;
    }
  }

  #isMore() {
    return this.input.length > 0;
  }

  #lex_kw_or_id() {
    let lexeme = "";
    while(/[A-Za-z]/.test(this.#peek())) {
      const c = this.#peek();
      this.#eat(c);
      lexeme += c;
    }



  }

  init(s) {
    this.input = s;
  }

}
