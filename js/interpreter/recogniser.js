class Recogniser {
  constructor() {
    this.tokens = [];
  }

  recognise(tokens) {
    this.#init(tokens);
    this.#Prog();
  }

  #trace() {
    console.log(this.tokens);
    if (this.#peek().hasOwnProperty("value")) {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().value;
    } else {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token;
    }

  }

  #traceExpected(expected) {
    console.log(this.tokens);
    if (this.#peek().hasOwnProperty("value")) {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().value + ". Expected: " + expected.token;
    } else {
      throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token + ". Expected: " + expected.token;
    }

  }

  #peek() {
    return this.tokens.at(0);
  }

  #eat(token) {
    if (this.#peek().token === token.token) {
      this.tokens = this.tokens.slice(1)
    } else {
      this.#traceExpected(token);
    }
  }

  #init(tokens) {
    this.tokens = tokens;
  }

  #Prog() {
      console.log("Prog");
      this.#Stmts();
      this.#eat({token:"END"});
  }

  #Stmt() {
    console.log("Stmt");
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
    console.log("Stmts");
    if (this.#peek().token === "DEFINE" || this.#peek().token === "ON" || this.#peek().token === "IF" || this.#peek().token === "ID") {
        this.#Stmt();
        this.#eat({token:"SEMI_COLON"});
        this.#Stmts();
    }
  }

  #Type() {
    console.log("Type");
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
    console.log("Args");
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
    console.log("ArgFirst");
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
    console.log("ArgRest");
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
    console.log("Arg");
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
    console.log("Expr");
    this.#Term();
    this.#ExprRest();
  }

  #ExprRest() {
    console.log("ExprRest");
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
    console.log("Index");
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
    console.log("IndexRest");
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
    console.log("Term");
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
