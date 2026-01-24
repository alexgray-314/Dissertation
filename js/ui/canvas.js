class Canvas {

  constructor(initialState) {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.mouseHandler = new MouseHandler(canvas);

    this.render();
  }

  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let a of areas.values()) {
      a.render(ctx);
    }

    if (mouseHandler.draggedCard) {
      mouseHandler.draggedCard.render(
        this.ctx,
        this.mouseHandler.mouseX - CARD_WIDTH / 2,
        this.mouseHandler.mouseY - CARD_HEIGHT / 2
      );
    }

    requestAnimationFrame(this.render);
  }

}
