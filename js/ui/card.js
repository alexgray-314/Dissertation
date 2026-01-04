class Card {

  constructor(x, y) {
    this.rect = {
      width: 50*1.5,
      height: 70*1.5,
      x: x,
      y: y
    };
  }

  draw(context) {
    context.fillStyle = "red";
    context.beginPath();
    context.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, [10]);
    context.fill();
  }


}
