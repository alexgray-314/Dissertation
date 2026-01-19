const stmt = {
  type: "DEFINE",
  valueType: "AREA",
  id: "globalAreaName",
  args: {
    min: 10,
    max: 7
  }
};


const lexer = new Lexer();
const recogniser = new Recogniser();
const parser = new Parser();
const program = localStorage.getItem("program");
const tokens = lexer.lex(program);

recogniser.recognise(tokens);
console.log("Valid Syntax");

asts = parser.parse(tokens);
console.log(asts);

const areas = [];
const handler = new Handler(areas);
const interpreter = new Interpreter(handler);

interpreter.interpret(asts);

for (let area of areas) {
  area.render();
}

