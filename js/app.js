let state;
let handler;
let canvas;
let actions;
let activePlayer = 0;
let mouseHandler;

// Player selector
document.getElementById("playerSelector").addEventListener("change", elem => {
  activePlayer = Number(elem.target.value);
  if (handler !== undefined) {
    handler.notify();
  }
});

function init(sourceCode) {
  state = new State(sourceCode, 4);
  canvas = new Canvas(state);
  handler = new Handler(state, canvas);

  // setup actions
  actions = Object.values(state.actions).map((action) => {
    return new Action(action, handler);
  });

  // Mouse input
  mouseHandler = new MouseHandler(canvas.canvas, canvas.areas, handler);

  render();

}

function render() {
  canvas.render();
  mouseHandler.render(canvas.canvas.getContext("2d"));
  requestAnimationFrame(render);
}
