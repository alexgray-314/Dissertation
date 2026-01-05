const lexer = new Lexer();
const tokens = lexer.lex("define area global(facing:up); define deck primary();");

for (const t of tokens) {
  console.log(t);
}

const recogniser = new Recogniser();
recogniser.recognise(tokens);

document.getElementById("output").innerText = tokens.toString();
