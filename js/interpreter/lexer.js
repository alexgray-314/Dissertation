class Lexer {
  constructor() {
    this.input = "";
    this.line = 1;
  }

  #peek() {
    return this.input.charAt(0);
  }

  #eat(c) {
    if (this.#peek() === c) {
      this.input = this.input.substring(1);
    } else {
      console.log(this.input)
      throw "Invalid character |" + this.#peek() + "|. Expected " + c;
    }
  }

  #isMore() {
    return this.input.length > 0;
  }

  #init(s) {
    this.input = s;
    this.line = 1;
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
      case '@':
        this.#eat('@');
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
          throw "Invalid Character. Refer to documentation on players ";
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

  #lex_card() {
    let card = "";
    while(/[0-9jqkaJQKAhcsdHCSD]/.test(this.#peek())) {
      card += this.#peek();
      this.#eat(this.#peek());
    }
    return {
      line: this.line,
      token: "CARD",
      value: card,
    }
  }

  #lex_string() {
    this.#eat('"');
    let lexeme = "";
    while (this.#peek() !== '"') {
      lexeme += this.#peek();
      this.#eat(this.#peek());
    }
    this.#eat('"');
    return {
      line: this.line,
      token: "STRING",
      value: lexeme
    }
  }

  lex(s) {
    this.#init(s);
    let tokens = [];
    let comment = false;
    while (this.#isMore()) {
      const c = this.#peek();
      if (c === '\n') {
        this.#eat(c);
        this.line += 1;
        comment = false;
      } else if (comment) {
        this.#eat(c);
      } else if (c === '/') {
        this.#eat('/');
        if (this.#peek() === '/') {
          this.#eat('/');
          comment = true;
        } else {
          tokens.push({
            line: this.line,
            token: "FORWARD_SLASH"
          });
        }
      } else if (specialCharacters.hasOwnProperty(c)) {
        tokens.push({
          line: this.line,
          token: specialCharacters[c],
        });
        this.#eat(c);
      } else if (c === '"') {
        tokens.push(this.#lex_string());
      } else if (/[A-Za-z]/.test(c)) {
        tokens.push(this.#lex_kw_or_id());
      } else if (/\s/.test(c)) {
        // whitespace
        this.#eat(c);
      } else if (c === '#') {
        this.#eat('#');
        tokens.push(this.#lex_card());
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
      } else if (this.#peek() === '=') {
        this.#eat('=');
        if (this.#peek() === '=') {
          this.#eat('=');
          tokens.push({
            line: this.line,
            token:"EQUALS"
          })
        } else {
          tokens.push({
            line:this.line,
            token:"SET"
          })
        }

      } else {
        throw "Invalid Character: " + c;
      }

    }
    tokens.push({
      line: this.line,
      token:"END"
    })
    return tokens;
  }

}
