const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const areas = [new Area(20, 20, [[
  {
    suit:"spades",
    number:"10"
  }
], [
  {
    suit:"hearts",
    number:"K"
  }
]])];

const mouseHandler = new MouseHandler(canvas);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let a of areas) {
    a.render(ctx);
  }

  if (mouseHandler.draggedCard) {
    mouseHandler.draggedCard.render(
      ctx,
      mouseHandler.mouseX - CARD_WIDTH / 2,
      mouseHandler.mouseY - CARD_HEIGHT / 2
    );
  }

  requestAnimationFrame(render);
}

render();
