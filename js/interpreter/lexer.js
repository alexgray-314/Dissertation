class Lexer {
  constructor() {
    this.input = "";
  }

  #peek() {
    return this.input.charAt(0);
  }

  #eat(c) {
    if (this.#peek() === c) {
      this.input = this.input.substring(1);
    } else {
      throw "invalid character";
    }

  }

  #isMore() {
    return this.input.length > 0;
  }

  #init(s) {
    this.input = s;
  }

  #lex_kw_or_id() {
    let lexeme = "";
    while(/[A-Za-z]/.test(this.#peek())) {
      const c = this.#peek();
      this.#eat(c);
      lexeme += c;
    }

    if (keyWords.includes(lexeme)) {
      return {token:Token.getByValue(lexeme)};
    } else {
      return {token:Token.ID, value: lexeme};
    }

  }

  lex(s) {
    this.#init(s);
    let tokens = [];
    while (this.#isMore()) {
      const c = this.#peek();
      if (specialCharacters.hasOwnProperty(c)) {
        tokens.push(specialCharacters[c]);
        this.#eat(c);
      } else if (/[A-Za-z]/.test(c)) {
        tokens.push(this.#lex_kw_or_id());
      } else if (/\s/.test(c)) {
        this.#eat(c);
      }

    }
    return tokens;
  }

}
