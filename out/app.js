"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state/state");
const dealLexer_1 = require("./language/dealLexer");
const antlr4ts_1 = require("antlr4ts");
const dealParser_1 = require("./language/dealParser");
const interpreter_1 = require("./engine/interpreter");
/**
 * Run tsc src/app.ts --outFile out/app.js --module es6
 * to compile .ts to .js
 */
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const target = event.target;
    if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            // LOAD THE GAME!!!!
            // init((reader.result ?? "") as string);
            console.log(reader.result);
        });
        reader.readAsText(file);
    }
});
// let state;
// let handler : Handler;
// let canvas : UI;
// let actions;
// let activePlayer = 0;
// let mouseHandler;
//
// // Player selector
// document.getElementById("playerSelector")?.addEventListener("change", elem => {
//   activePlayer = Number(elem.target?.value);
//   if (handler !== undefined) {
//     handler.notify();
//   }
// });
//
function init(sourceCode) {
    const lexer = new dealLexer_1.dealLexer(antlr4ts_1.CharStreams.fromString(sourceCode));
    const tokens = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new dealParser_1.dealParser(tokens);
    const tree = parser.prog();
    const state = new state_1.State(2);
    const interpreter = new interpreter_1.Interpreter(state);
    try {
        interpreter.visit(tree);
    }
    catch (error) {
        console.error(error);
    }
    console.log(state);
}
// function init(sourceCode : string) {
//   state = new State(4);
//   canvas = new Canvas(state);
//   handler = new Handler(state, canvas);
//
//   // setup actions
//   actions = Object.values(state.actions).map((action) => {
//     return new Action(action, handler);
//   });
//
//   // Mouse input
//   mouseHandler = new MouseHandler(canvas, handler);
//
//   render();
//
// }
//
// function render() {
//   canvas.render();
//   mouseHandler.render(canvas.canvas.getContext("2d"));
//   requestAnimationFrame(render);
// }
//# sourceMappingURL=app.js.map