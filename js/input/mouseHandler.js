class MouseHandler {
  constructor(canvas, UIAreas) {

    this.draggedCard = null;
    this.sourceStack = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.areas = UIAreas;

    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      for (const a of Object.values(this.areas)) {
        for (const stack of a.stacks) {
          if (stack.cards.length && stack.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = stack.get_top();
            this.sourceStack = stack;
            stack.remove({position: 0});
            break;
          }
        }
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
        for (const stack of a.stacks) {
          if (stack.contains(this.mouseX, this.mouseY)) {
            stack.push(this.draggedCard, {position: 0});
            this.draggedCard = null;
            this.sourceStack = null;
            return;
          }
        }
      }

      // if dropped nowhere → return to original stack
      this.sourceStack.push(this.draggedCard, {position:0});
      this.draggedCard = null;
      this.sourceStack = null;
    });

  }

}
