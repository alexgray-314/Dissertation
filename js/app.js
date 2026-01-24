let state;
let handler;
let canvas;

function init(sourceCode) {
  state = new State(sourceCode, 2);
  handler = new Handler(state);
  canvas = new Canvas(state);
  render();
}

function render() {
  canvas.render();
  requestAnimationFrame(render);
}
