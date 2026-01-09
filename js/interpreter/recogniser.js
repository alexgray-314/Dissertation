class Recogniser {
  constructor() {
    this.tokens = [];
  }

  recognise(tokens) {
    this.#init(tokens);
    this.#Prog();
  }

  #trace() {
    if (this.#peek().hasOwnProperty("value")) {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().value;
    } else {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token;
    }

  }

  #peek() {
    return this.tokens.at(0);
  }

  #eat(token) {
    if (this.#peek().token === token.token) {
      this.tokens = this.tokens.slice(1)
    } else {
      this.#trace();
    }
  }

  #init(tokens) {
    this.tokens = tokens;
  }

  #Prog() {
      this.#Stmt();
      this.#eat({token:"SEMI_COLON"});
      this.#Stmts();
      this.#eat({token:"END"});
  }

  #Stmt() {
    switch(this.#peek().token) {
      case "DEFINE":
        this.#eat({token:"DEFINE"});
        this.#Type();
        this.#eat({token:"ID"});
        this.#Args();
        break;
      case "ON":
        this.#eat({token:"ON"});
        this.#eat({token:"ID"});
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        break;
      case "IF":
        this.#eat({token:"IF"});
        this.#Expr();
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        this.#eat({token:"ELSE"});
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        break;
      case "ID":
        this.#eat({token:"ID"});
        this.#Index();
        this.#eat({token:"DOUBLE_DOT"});
        this.#eat({token:"ID"});
        this.#Args();
        break;
      default:
        this.#trace();
    }
  }

  // this is nullable
  #Stmts() {
    if (this.#peek().token === "DEFINE" || this.#peek().token === "ON" || this.#peek().token === "IF" || this.#peek().token === "ID") {
        this.#Stmt();
        this.#eat({token:"SEMI_COLON"});
        this.#Stmts();
    }
  }

  #Type() {
    switch(this.#peek().token) {
      case "AREA":
        this.#eat({token:"AREA"});
        break;
      case "ACTION":
        this.#eat({token:"ACTION"});
        break;
      case "DECK":
        this.#eat({token:"DECK"});
        break;
      default:
        this.#trace();
    }
  }

  #Args() {
    switch(this.#peek().token) {
      case "L_PAREN":
        this.#eat({token:"L_PAREN"});
        this.#ArgFirst();
        break;
      default:
        this.#trace();
    }
  }

  #ArgFirst() {
    switch(this.#peek().token) {
      case "ID":
        this.#Arg();
        this.#ArgRest();
        break;
      case "R_PAREN":
        this.#eat({token:"R_PAREN"});
        break;
      default:
        this.#trace();
    }
  }

  #ArgRest() {
    switch(this.#peek().token) {
      case "COMMA":
        this.#eat({token:"COMMA"});
        this.#Arg();
        this.#ArgRest();
        break;
      case "R_PAREN":
        this.#eat({token:"R_PAREN"});
        break;
      default:
        this.#trace();
    }
  }

  #Arg() {
    switch(this.#peek().token) {
      case "ID":
        this.#eat({token:"ID"});
        this.#eat({token:"COLON"});
        this.#eat({token:"ID"});
        break;
      default:
        this.#trace();
    }
  }

  #Expr() {
    this.#Term();
    this.#ExprRest();
  }

  #ExprRest() {
    switch (this.#peek().token) {
      case "EQUALS":
        this.#eat({token:"EQUALS"});
        break;
      case "LESS_THAN":
        this.#eat({token:"LESS_THAN"});
        break;
      default:
        this.#trace();
    }
    this.#Term();
  }

  #Index() {
    switch(this.#peek().token) {
      case "L_SQUARE":
        this.#eat({token:"L_SQUARE"});
        this.#eat({token:"NUMBER"});
        this.#IndexRest();
        break;
      // default:
        // this is nullable
    }
  }

  #IndexRest() {
    switch(this.#peek().token) {
      case "COMMA":
        this.#eat({token:"COMMA"});
        this.#eat({token:"NUMBER"});
        this.#eat({token:"R_SQUARE"});
        break;
      case "R_CURLY":
        this.#eat({token:"R_CURLY"});
        break;
      default:
        this.#trace();
    }
  }

  #Term() {
    switch(this.#peek().token) {
      case "PLAYER":
        this.#eat({token:"PLAYER"});
        this.#Index();
        break;
      case "ID":
        this.#eat({token:"ID"});
        this.#Index();
        break;
      case "NUMBER":
        this.#eat({token:"NUMBER"});
        break;
      default:
        this.#trace();
    }
  }

}
