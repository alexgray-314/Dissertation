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
const parser = new Recogniser();
const tokens = lexer.lex("define area yourmum();");

const asts = parser.recognise(tokens);

console.log(asts);

const areas = [];
const handler = new Handler(areas);
const interpreter = new Interpreter(handler);

interpreter.interpret([stmt]);

for (let area of areas) {
  area.render();
}

