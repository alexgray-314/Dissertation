class Recogniser {
  constructor() {
    this.tokens = [];
  }

  recognise(tokens) {
    this.#init(tokens);
    this.#Prog();
  }

  #trace() {
    //console.log(this.tokens);
    throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token;

  }

  #traceExpected(expected) {
    //console.log(this.tokens);
    throw "Invalid token on line " + this.#peek().line + ": " + this.#peek().token + ". Expected: " + expected.token;

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
    //console.log("Prog");
    this.#Stmts();
    this.#eat({token:"END"});
  }

  #Stmt() {
    //console.log("Stmt");
    switch(this.#peek().token) {
      case "DEFINE":
        this.#eat({token:"DEFINE"});
        this.#Type();
        this.#eat({token:"ID"});
        this.#Args();
        break;
      case "ON":
        this.#eat({token:"ON"});
        this.#Trigger();
        break;
      case "IF":
        this.#eat({token:"IF"});
        this.#Expr();
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        this.#ElseClause();
        break;
      case "MOVE":
        this.#eat({token:"MOVE"});
        this.#Term();
        this.#Term();
        break;
      case "DEAL":
        this.#eat({token:"DEAL"});
        this.#Args();
        break;
      case "PLAYER":
        this.#eat({token:"PLAYER"});
        this.#Update();
        break;
      case "CANCEL":
        this.#eat({token:"CANCEL"});
        break;
      case "ID":
        this.#Assign();
        break;
      default:
        this.#trace();
    }
  }

  // this is nullable
  #Stmts() {
    //console.log("Stmts");
    if (this.#peek().token === "DEFINE" || this.#peek().token === "ON" || this.#peek().token === "IF" || this.#peek().token === "MOVE" || this.#peek().token === "DEAL" || this.#peek().token === "PLAYER" || this.#peek().token === "CANCEL" || this.#peek().token === "ID") {
      this.#Stmt();
      this.#eat({token:"SEMI_COLON"});
      this.#Stmts();
    }
  }

  #Assign() {
    this.#eat({token:"ID"});
    this.#eat({token:"ASSIGN"});
    this.#Term();
  }

  #Type() {
    //console.log("Type");
    if(this.#peek().token === "ID") {
      this.#eat({token: "ID"});
    } else {
      this.#trace();
    }
  }

  // @ Nullable
  #Args() {
    //console.log("Args");
    switch(this.#peek().token) {
      case "L_PAREN":
        this.#eat({token:"L_PAREN"});
        this.#ArgFirst();
        break;
    }
  }

  #ArgFirst() {
    //console.log("ArgFirst");
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
    //console.log("ArgRest");
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
    //console.log("Arg");
    switch(this.#peek().token) {
      case "ID":
        this.#eat({token:"ID"});
        this.#eat({token:"COLON"});
        this.#Term();
        break;
      default:
        this.#trace();
    }
  }

  #Expr() {
    //console.log("Expr");
    this.#Term();
    this.#ExprRest();
  }

  #ExprRest() {
    //console.log("ExprRest");
    switch (this.#peek().token) {
      case "EQUALS":
        this.#eat({token:"EQUALS"});
        break;
      case "LESS_THAN":
        this.#eat({token:"LESS_THAN"});
        break;
      case "GREATER_THAN":
        this.#eat({token:"GREATER_THAN"});
        break;
      case "CONTAINS":
        this.#eat({token:"CONTAINS"});
        break;
      default:
        this.#trace();
    }
    this.#Term();
  }

  #Index() {
    //console.log("Index");
    switch(this.#peek().token) {
      case "L_SQUARE":
        this.#eat({token:"L_SQUARE"});
        this.#eat({token:"NUMBER"});
        this.#Set();
        this.#IndexRest();
        break;
      // default:
      // this is nullable
    }
  }

  #IndexRest() {
    //console.log("IndexRest");
    switch(this.#peek().token) {
      case "COMMA":
        this.#eat({token:"COMMA"});
        this.#eat({token:"NUMBER"});
        this.#Set();
        this.#eat({token:"R_SQUARE"});
        break;
      case "R_SQUARE":
        this.#eat({token:"R_SQUARE"});
        break;
      default:
        this.#trace();
    }
  }

  // @Nullable
  #Set() {
    //console.log("Set");
    if (this.#peek().token === "COLON") {
      this.#eat({token:"COLON"});
      this.#eat({token:"NUMBER"});
    }
  }

  #Term() {
    //console.log("Term");
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
      case "CARD":
        this.#eat({token:"CARD"});
        break;
      case "STRING":
        this.#eat({token:"STRING"});
        break;
      case "FORWARD_SLASH":
        this.#eat({token:"FORWARD_SLASH"});
        break;
      case "BACKWARD_SLASH":
        this.#eat({token:"BACKWARD_SLASH"});
        break;
      case "WILDCARD":
        this.#eat({token:"WILDCARD"});
        break;
      default:
        this.#trace();
    }
    this.#TermProperty();
  }

  #TermProperty() {
    //console.log("TermProperty");
    if (this.#peek().token === "DOT") {
      this.#eat({token:"DOT"});
      this.#eat({token:"ID"});
      this.#TermProperty();
    }
  }

  #Update() {
    switch(this.#peek().token) {
      case "PLUS":
        this.#eat({token:"PLUS"});
        this.#eat({token:"PLUS"});
        break;
      case "ASSIGN":
        this.#eat({token:"ASSIGN"});
        this.#Term();
        break;
      default:
        this.#trace();
    }
  }

  #Trigger() {
    switch(this.#peek().token) {
      case "MOVE":
        this.#eat({token:"MOVE"});
        this.#TriggerCatches();
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        break;
      case "ID":
        this.#eat({token:"ID"});
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
        break;
      default:
        this.#trace();
    }
  }

  // Nullable
  #TriggerCatches() {
    if (this.#peek().token !== "L_CURLY") {
      this.#Term();
      this.#Term();
    }
  }

  // Nullable
  #ElseClause() {
    switch(this.#peek().token) {
      case "ELSE":
        this.#eat({token:"ELSE"});
        this.#eat({token:"L_CURLY"});
        this.#Stmts();
        this.#eat({token:"R_CURLY"});
    }
  }

}
