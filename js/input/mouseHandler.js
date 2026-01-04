class MouseHandler {

  constructor(canvas, cards) {
    this.canvas = canvas;
    this.cards = cards;
    this.active = -1;
    this.mouse = {
      x: 0,
      y: 0,
      down: false,
      dragOffsetX: 0,
      dragOffsetY: 0
    };

    // Listeners
    canvas.addEventListener("mousedown", (e) => {
      this.mouse.down = true;
      this.updateMousePosition(e);

      this.checkCollision();
      if (this.active >= 0) {
        this.mouse.dragOffsetX = this.mouse.x - this.rect.x;
        this.mouse.dragOffsetY = this.mouse.y - this.rect.y;
      }
    });

    canvas.addEventListener("mouseup", () => {
      this.mouse.down = false;
      this.active = -1;
    });

    canvas.addEventListener("mouseleave", () => {
      this.mouse.down = false;
      this.active = -1;
    });

    canvas.addEventListener("mousemove", (e) => {
      this.updateMousePosition();
    });

  }

  updateMousePosition(e) {
    const rectCanvas = canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rectCanvas.left;
    this.mouse.y = e.clientY - rectCanvas.top;
  }

  checkCollision() {

    let collided = false;

    for (let i = 0; i < this.cards.length; i++) {
      if (
        this.mouse.x >= this.cards[i].rect.x &&
        this.mouse.x <= this.cards[i].rect.x + this.cards[i].rect.width &&
        this.mouse.y >= this.cards[i].rect.y &&
        this.mouse.y <= this.cards[i].rect.y + this.cards[i].rect.height
      ) {
        this.active = true;
        collided = true;
      } else {
        if (!collided) {
          this.active = -1;
        }
      }
    }

  }

  tick() {
    if (this.active >= 0) {
      cards[this.active].rect.x = this.mouse.x - this.mouse.dragOffsetX;
      cards[this.active].rect.y = this.mouse.y - this.mouse.dragOffsetY;
    }
  }

}
