"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state/state");
var dealLexer_1 = require("./language/dealLexer");
var antlr4ts_1 = require("antlr4ts");
var dealParser_1 = require("./language/dealParser");
var interpreter_1 = require("./engine/interpreter");
/**
 * Run tsc src/app.ts --outFile out/app.js --module es6
 * to compile .ts to .js
 */
var fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', function (event) {
    var target = event.target;
    if (target.files && target.files.length > 0) {
        var file = target.files[0];
        var reader_1 = new FileReader();
        reader_1.addEventListener("load", function () {
            // LOAD THE GAME!!!!
            // init((reader.result ?? "") as string);
            console.log(reader_1.result);
        });
        reader_1.readAsText(file);
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
    var lexer = new dealLexer_1.dealLexer(antlr4ts_1.CharStreams.fromString(sourceCode));
    var tokens = new antlr4ts_1.CommonTokenStream(lexer);
    var parser = new dealParser_1.dealParser(tokens);
    var tree = parser.prog();
    var state = new state_1.State(2);
    var interpreter = new interpreter_1.Interpreter(state);
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
