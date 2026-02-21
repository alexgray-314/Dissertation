import {Handler} from "./api/handler";
import {State} from "./state/state";
import {UI} from "./api/ui";
import {dealLexer} from "./language/dealLexer";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {dealParser} from "./language/dealParser";
import {dealVisitor} from "./language/dealVisitor";
import {Interpreter} from "./engine/interpreter";
import {Canvas} from "./ui/canvas";
import {MouseHandler} from "./ui/input/mouseHandler";
import {Action} from "./ui/input/action";
import {lib} from "../library/deck";
import {Style} from "./engine/style";

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

let handler : Handler;
let canvas : Canvas;
let actions : Action[] = [];
export var activePlayer : number = 0;
let mouseHandler : MouseHandler;

// Player selector
document.getElementById("playerSelector")?.addEventListener("change", event => {
  const target = event.target as HTMLSelectElement;
  activePlayer = Number(target.value);
  if (handler) {
    handler.notify();
  }
});


function init(sourceCode : string) {

  const libraryContent = get_tree(lib);
  const tree = get_tree(sourceCode);
  const state = new State(2);
  const style = new Style();
  const interpreter : dealVisitor<void> = new Interpreter(state, style);
  try {
    interpreter.visit(libraryContent)
    interpreter.visit(tree);
  } catch (error) {
    console.error(error);
  }

  canvas = new Canvas(state);
  handler = new Handler(state, canvas);

  // setup actions
  actions = Array.from(state.action_catches.keys()).map((action : string) => {
    return new Action(action, handler);
  });

  // Mouse input
  mouseHandler = new MouseHandler(canvas, handler);

  render();

  console.log("state",state);
  console.log("style",style);
  console.log("canvas", canvas);

}

function get_tree(sourceCode : string) {
  return (new dealParser(new CommonTokenStream(new dealLexer(CharStreams.fromString(sourceCode))))).prog();
}

function render() {
  if (canvas) {
    canvas.render();
    mouseHandler.render(canvas.canvas.getContext("2d") as CanvasRenderingContext2D);
    requestAnimationFrame(render);
  }
}
