class Canvas {

  constructor(initialState) {
    this.canvas = document.getElementById("canvas");

    // Convert all the state "areas" into UI "Areas"
    let y = 0;
    this.areas = Object.fromEntries(
      Object.entries(initialState.areas).map(([id, area]) => {
        y++;
        return [id, new Area(area, y-1)];
      })
    );

    console.log(this.areas);

    this.mouseHandler = new MouseHandler(this.canvas, this.areas);
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
        this.mouseHandler.mouseX - CARD_WIDTH / 2,
        this.mouseHandler.mouseY - CARD_HEIGHT / 2
      );
    }
    
  }

}
