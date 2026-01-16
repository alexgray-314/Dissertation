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
              min:3
            }
          }
        }
      ]
    }
  ]
};

const asts = [stmt];
const areas = [];
const handler = new Handler(areas);
const interpreter = new Interpreter(handler);

interpreter.interpret(asts);

for (let area of areas) {
  area.render();
}

