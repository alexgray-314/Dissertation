import {Handler} from "./api/handler";
import {State} from "./state/state";
import {UI} from "./api/ui";
import {dealLexer} from "./language/dealLexer";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {dealParser} from "./language/dealParser";
import {dealVisitor} from "./language/dealVisitor";
import {Interpreter} from "./engine/interpreter";

/**
 * Run tsc src/app.ts --outFile out/app.js --module es6
 * to compile .ts to .js
 */

const fileSelector = document.getElementById('file-selector') as HTMLInputElement;
fileSelector.addEventListener('change', (event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file : File = target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // LOAD THE GAME!!!!
      init((reader.result ?? "") as string);
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

function init(sourceCode : string) {

  const lexer = new dealLexer(CharStreams.fromString(sourceCode));
  const tokens = new CommonTokenStream(lexer);
  const parser = new dealParser(tokens);
  const tree = parser.prog();
  const state = new State(2);
  const interpreter : dealVisitor<void> = new Interpreter(state);
  try {
    interpreter.visit(tree);
  } catch (error) {
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
