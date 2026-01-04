const Token = {
  DEFINE: "define",
  AREA: "area",
  EVENT: "event",
  DECK: "deck",
  L_PAREN: "(",
  R_PAREN: ")",
  COMMA: ",",
  COLON: ":",
  SEMI_COLON: ";",
  ID: "id",
  END: "$",
  getByValue: function(value) {
    return Object.keys(this).find(key => this[key] === value);
  }
};

const Token = {
  "define": "DEFINE",
  "area": "AREA",
  "event": "EVENT",
  "deck": "DECK",
  "(": "L_PAREN",
  ")": "R_PAREN",
  ",": "COMMA",
  ":": "COLON",
  ";": "SEMI_COLON",
}

const keyWords = [Token.DEFINE, Token.AREA, Token.EVENT, Token.DECK];
const specialCharacters = {
  '(': Token.L_PAREN,
  ')': Token.R_PAREN,
  ',': Token.COMMA,
  ':': Token.COLON,
  ';': Token.SEMI_COLON
};
