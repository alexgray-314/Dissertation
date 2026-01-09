class Lexer {
  constructor() {
    this.input = "";
    this.line = 0;
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

  #getDigit() {
    let lexeme = "";
    while(/\d/.test(this.#peek())) {
      const c = this.#peek();
      this.#eat(c);
      lexeme += c;
    }
    return Number(lexeme);
  }

  #lex_number() {
    const digit = this.#getDigit();
    return {
      line: this.line,
      token:"NUMBER",
      value: digit
    }
  }

  #lex_player() {

    switch(this.#peek()) {
      case '#':
        this.#eat('#');
        return {
          line: this.line,
          token:"PLAYER",
          value:"MOVE"
        };
      case '/':
        this.#eat('/');
        return {
          line: this.line,
          token:"PLAYER",
          value:"ACTION"
        };
      case '.':
        this.#eat('.');
        return {
          line: this.line,
          token:"PLAYER",
          value:"TURN",
        };
      default:
        if (/\d/.test(this.#peek())) {
          const digit = this.#getDigit();
          return {
            line: this.line,
            token:"PLAYER",
            value:digit
          };
        } else {
          throw "invalid character";
        }
    }


  }

  #lex_kw_or_id() {
    let lexeme = "";
    while(/[A-Za-z]/.test(this.#peek())) {
      const c = this.#peek();
      this.#eat(c);
      lexeme += c;
    }

    if (keyWords.hasOwnProperty(lexeme)) {
      return {
        line: this.line,
        token:keyWords[lexeme]
      };
    } else {
      return {
        line: this.line,
        token:"ID",
        value: lexeme
      };
    }

  }

  lex(s) {
    this.#init(s);
    let tokens = [];
    while (this.#isMore()) {
      const c = this.#peek();
      if (c === '\n') {
        console.log("new line");
        this.#eat(c);
        this.line += 1;
      } else if (specialCharacters.hasOwnProperty(c)) {
        tokens.push({
          line: this.line,
          token:specialCharacters[c],
        });
        this.#eat(c);
      } else if (/[A-Za-z]/.test(c)) {
        tokens.push(this.#lex_kw_or_id());
      } else if (/\s/.test(c)) {
        // whitespace
        this.#eat(c);
      } else if (this.#peek() === '<') {
        this.#eat('<');
        if (this.#peek() === '<') {
          this.#eat('<')
          tokens.push({
            line: this.line,
            token:"LESS_THAN"
          });
        } else {
          tokens.push(this.#lex_player());
          this.#eat('>');
        }
      } else if (/\d/.test(this.#peek())) {
        tokens.push(this.#lex_number());
      } else if (this.#peek() === '.') {
        this.#eat('.');
        if (this.#peek() === '.') {
          this.#eat('.');
          tokens.push({
            line: this.line,
            token:"DOUBLE_DOT"
          })
        } else {
          tokens.push({
            line: this.line,
            token:"DOT"
          })
        }
      }


    }
    tokens.push({
      line: this.line,
      token:"END"
    })
    return tokens;
  }

}
