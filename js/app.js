const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cards = [new Card(0, 0)];
const mouseHandler = new MouseHandler(canvas, cards);

function tick(deltaTime) {
  mouseHandler.tick();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < cards.length; i++) {
    cards[i].draw(ctx);
  }
}

let lastTime = 0;
function gameLoop(time) {
  const deltaTime = time - lastTime;
  lastTime = time;

  tick(deltaTime);
  draw();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
