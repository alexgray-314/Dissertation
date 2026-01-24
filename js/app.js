let state;
let handler;
let canvas;

function init(sourceCode) {
  state = new State(sourceCode, 2);
  canvas = new Canvas(state);
  handler = new Handler(state, canvas);

  // setup actions
  Object.values(state.actions).forEach((action) => {
    new Action(action, 0, handler);
  });
  render();
}

function render() {
  canvas.render();
  requestAnimationFrame(render);
}
