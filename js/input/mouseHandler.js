class MouseHandler {
  constructor(canvas, UIAreas, handler) {

    this.draggedCard = null;
    this.sourceStack = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.areas = UIAreas;

    // Position objects to be passed onto the handler
    this.source = undefined;
    this.destination = undefined;

    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      for (const a of Object.values(this.areas)) {

        a.stacks.forEach((stack, index) => {
          if (stack.cards.length && stack.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = stack.get_top();
            this.sourceStack = stack;
            stack.remove({position: 0});
            // SOURCE CARD for potential movement request
            this.source = {
              type: "POSITION",
              area: a.id,
              index: {
                stack: index,
                position: 0
              }
            };
            return;
          }
        });

      }
    });

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseup", () => {
      if (!this.draggedCard) return;

      for (const a of Object.values(this.areas)) {
        a.stacks.forEach((stack, index) => {

          if (stack.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = null;
            this.sourceStack = null;

            // DESTINATION
            this.destination = {
              type: "POSITION",
              area: a.id,
              index: {
                stack: index,
                position: 0
              }
            };

            // call the handler
            handler.call({
              type: "MOVE",
              player: activePlayer,
              source: this.source,
              destination: this.destination
            });

            return;
          }

        });
      }
      
      if (!this.draggedCard) return;
      // User has let go of card
      this.sourceStack.push(this.draggedCard, {position:0});
      this.draggedCard = null;
      this.sourceStack = null;
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
