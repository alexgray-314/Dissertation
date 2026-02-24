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
import {Config} from "./engine/config";

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
const playerSelector = document.getElementById("playerSelector");
playerSelector?.addEventListener("change", event => {
  const target = event.target as HTMLSelectElement;
  activePlayer = Number(target.value);
  if (handler) {
    handler.notify();
  }
});

function init(sourceCode : string) {

  const libraryContent = get_tree(lib);
  const tree = get_tree(sourceCode);
  const config = new Config();
  let num_players : number = 4;
  try {
    // CONFIG
    config.visit(tree)
    // Number of players
    const config_num_players : number = Number(config.get("config", "num_players"));
    if (!Number.isNaN(config_num_players)) {
      num_players = config_num_players;
    }
    // Title
    const title : string | undefined = config.get("config", "title")
    if (title !== undefined) {
      document.title = title;
    }
  } catch (error) {
    console.error(error);
  }

  // Update player selector based on number of players
  for (let i = 0; i < num_players; i++) {
    const opt = document.createElement('option');
    opt.value = i.toString();
    opt.innerHTML = "Player " + i.toString();
    playerSelector?.appendChild(opt);
  }

  // Loading the game
  const state = new State(num_players);
  const interpreter : dealVisitor<void> = new Interpreter(state);
  try {
    interpreter.visit(libraryContent)
    interpreter.visit(tree);
  } catch (error) {
    console.error(error);
  }

  canvas = new Canvas(state, config);
  handler = new Handler(state, canvas);

  // setup actions
  actions = Array.from(state.action_catches.keys()).map((id : string) => {
    return new Action(id, handler, config);
  });

  // Mouse input
  mouseHandler = new MouseHandler(canvas, handler);

  render();

  console.log("state",state);
  console.log("style",);
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
