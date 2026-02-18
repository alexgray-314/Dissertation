import {Handler} from "./api/handler";
import {State} from "./state/state";
import {UI} from "./api/ui";
import {dealLexer} from "./language/dealLexer";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {dealParser} from "./language/dealParser";
import {dealVisitor} from "./language/dealVisitor";
import {Interpreter} from "./engine/interpreter";
import {Canvas} from "./ui/canvas";

/**
 * npm run build
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

let state : State | undefined = undefined;
let handler : Handler | undefined = undefined;
let canvas : Canvas | undefined = undefined;
// let actions;
let activePlayer : number = 0;
// let mouseHandler;

// Player selector
document.getElementById("playerSelector")?.addEventListener("change", event => {
  const target = event.target as HTMLSelectElement;
  activePlayer = Number(target.value);
  if (handler) {
    handler.notify();
  }
});


function init(sourceCode : string) {

  const lexer = new dealLexer(CharStreams.fromString(sourceCode));
  const tokens = new CommonTokenStream(lexer);
  const parser = new dealParser(tokens);
  const tree = parser.prog();
  const state = new State(4);
  const interpreter : dealVisitor<void> = new Interpreter(state);
  try {
    interpreter.visit(tree);
  } catch (error) {
    console.error(error);
  }

  canvas = new Canvas(state);
  handler = new Handler(state, canvas);

  // setup actions
  // actions = Object.values(state.actions).map((action) => {
  //   return new Action(action, handler);
  // });

  // Mouse input
  // mouseHandler = new MouseHandler(canvas, handler);

  render();

  console.log(state);
  console.log("canvas", canvas);

}

function render() {
  if (canvas) {
    canvas.render();
    // mouseHandler.render(canvas.canvas.getContext("2d"));
    requestAnimationFrame(render);
  }
}
