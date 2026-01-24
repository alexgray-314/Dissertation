let state;
let handler;
let canvas;
let actions;
let activePlayer = 0;

function init(sourceCode) {
  state = new State(sourceCode, 2);
  canvas = new Canvas(state);
  handler = new Handler(state, canvas);

  // setup actions
  actions = Object.values(state.actions).map((action) => {
    return new Action(action, handler);
  });
  render();
}

function render() {
  canvas.render();
  requestAnimationFrame(render);
}
