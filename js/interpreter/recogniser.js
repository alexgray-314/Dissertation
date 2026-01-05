class Recogniser {
  constructor() {
    this.tokens = [];
  }

  recognise(tokens) {
    this.#init(tokens);
    this.#Prog();
  }

  #peek() {
    return this.tokens.at(0);
  }

  #eat(token) {
    if (this.#peek().token === token.token) {
      this.tokens = this.tokens.slice(1)
    } else {
      throw "invalid token";
    }
  }

  #init(tokens) {
    this.tokens = tokens;
  }

  #Prog() {
    switch(this.#peek().token) {
      case "DEFINE":
        this.#Exp();
        this.#eat({token:"SEMI_COLON"});
        this.#Exps();
        break;
        default:
          console.log("invalid token: " + this.#peek());
    }
  }

  #Exp() {
    switch(this.#peek().token) {
      case "DEFINE":
        this.#eat({token:"DEFINE"});
        this.#Type();
        this.#eat({token:"ID"});
        this.#Args();
        break;
      default:
        console.log("invalid token: " + this.#peek());
    }
  }

  #Exps() {
    switch(this.#peek().token) {
      case "DEFINE":
        this.#Exp();
        this.#eat({token:"SEMI_COLON"});
        this.#Exps();
        break;
      default: console.log("nullable: " + this.#peek());
      // this is nullable
    }
  }

  #Type() {
    switch(this.#peek().token) {
      case "AREA":
        this.#eat({token:"AREA"});
        break;
      case "EVENT":
        this.#eat({token:"EVENT"});
        break;
      case "DECK":
        this.#eat({token:"DECK"});
        break;
      default:
        console.log("invalid token: " + this.#peek());
    }
  }

  #Args() {
    switch(this.#peek().token) {
      case "L_PAREN":
        this.#eat({token:"L_PAREN"});
        this.#ArgFirst();
        break;
      default:
        console.log("invalid token: " + this.#peek());
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
        console.log("invalid token: " + this.#peek());
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
        console.log("invalid token: " + this.#peek());
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
        console.log("invalid token: " + this.#peek());
    }
  }

}
