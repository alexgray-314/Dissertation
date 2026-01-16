const stmt = {
  node: "DEFINE",
  children: [
    {
      node: "AREA",
      children: [
        {
          node: "DATA",
          value: {
            id: "global",
            args: {
              "max": 5,
            }
          }
        }
      ]
    }
  ]
};


const lexer = new Lexer();
const parser = new Recogniser();
const tokens = lexer.lex("define area yourmum();");

const asts = parser.recognise(tokens);

console.log(asts);

const areas = [];
const handler = new Handler(areas);
const interpreter = new Interpreter(handler);

interpreter.interpret(asts);

for (let area of areas) {
  area.render();
}

