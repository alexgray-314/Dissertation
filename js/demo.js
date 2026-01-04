const lexer = new Lexer();
const tokens = lexer.lex("define area global(facing:up)");

for (const t of tokens) {
  console.log(t);
}

document.getElementById("output").innerText = tokens.toString();
