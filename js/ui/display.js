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
const actions = [];
const handler = new Handler(areas, actions);
const interpreter = new Interpreter(handler);

for (let i = 0; i < handler.num_players; i++) {
  handler.define_area({
    type: "DEFINE",
    valueType: "AREA",
    id: "hand" + i,
    args: {
      min:1,
    }
  });
}

interpreter.interpret(asts);

function render() {
  for (let area of areas) {
    area.render();
  }
}

render();

