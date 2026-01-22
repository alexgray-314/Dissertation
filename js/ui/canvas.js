const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rawAreas = loadProgram();

console.log("rawAreas", Object.values(rawAreas));

let area_y = 20 - AREA_SPACING_Y
const areas = Object.entries(rawAreas).map(function ([key, arr]) {
  area_y += AREA_SPACING_Y;
  return new Area(20, area_y, arr, {id: key});
});

const mouseHandler = new MouseHandler(canvas);

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let a of areas.values()) {
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
