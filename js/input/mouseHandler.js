class MouseHandler {
  constructor(ui, handler) {

    this.draggedCard = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.ui = ui;

    // Position objects to be passed onto the handler
    this.source = undefined;
    this.destination = undefined;

    ui.canvas.addEventListener("mousedown", (e) => {
      const rect = ui.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      for (const box of this.ui.hitBoxes) {

          if (box.contains(this.mouseX, this.mouseY)) {
            console.log("box");
            this.draggedCard = ui.remove_card(box.position);
            // SOURCE CARD for potential movement request
            this.source = box.position
            return;
          }

      }
    });

    ui.canvas.addEventListener("mousemove", (e) => {
      const rect = ui.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });

    ui.canvas.addEventListener("mouseup", () => {
      if (!this.draggedCard) return;

      for (const box of this.ui.hitBoxes) {

          if (box.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = null;

            // DESTINATION
            this.destination = box.position

            // call the handler
            handler.call({
              type: "MOVE",
              player: activePlayer,
              source: this.source,
              destination: this.destination
            });

            return;
          }


      }

      if (!this.draggedCard) return;
      // User has let go of card
      ui.push_card(this.source, this.draggedCard);
      this.draggedCard = null;
    });

  }

  render(ctx) {
    if (this.draggedCard) {
      this.draggedCard.render(
        ctx,
        {
          x: this.mouseX - CARD_WIDTH / 2,
          y: this.mouseY - CARD_HEIGHT / 2,
          width: CARD_WIDTH,
          height: CARD_HEIGHT
        }
      );
    }
  }

}
