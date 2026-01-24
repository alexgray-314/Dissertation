class Canvas {

  constructor(initialState) {
    this.canvas = document.getElementById("canvas");

    this.areas = {};
    this.update(initialState);

    this.mouseHandler = new MouseHandler(this.canvas, this.areas);
  }

  update(state) {
    // Convert all the state "areas" into UI "Areas"
    let y = 0;
    Object.entries(state.areas).forEach(([id, area]) => {
      y++;
      this.areas[id] = new Area(area, y-1);
    })
  }

  render() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let a of Object.values(this.areas)) {
      a.render(ctx);
    }

    if (this.mouseHandler.draggedCard) {
      this.mouseHandler.draggedCard.render(
        ctx,
        {
          x: this.mouseHandler.mouseX - CARD_WIDTH / 2,
          y: this.mouseHandler.mouseY - CARD_HEIGHT / 2,
          width: CARD_WIDTH,
          height: CARD_HEIGHT
        }
      );
    }
    
  }

}
