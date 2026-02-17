class Hitbox {
  constructor(rect, position) {
    this.rect = rect;
    this.position = position;
  }

  contains(x, y) {
    return (
      x >= this.rect.x &&
      x <= this.rect.x + this.rect.width &&
      y >= this.rect.y &&
      y <= this.rect.y + this.rect.height
    );
  }
}
