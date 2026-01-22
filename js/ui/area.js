const STACK_SPACING_X = 80;
const AREA_SPACING_Y = 130;

class Area {

  constructor(x, y, arr, data) {
    Object.assign(this, data);
    this.x = x;
    this.y = y;
    let i = -1;
    this.stacks = arr.map(function(data) {
      i++;
      return new Stack(x + i*STACK_SPACING_X, y, data) ;
    });
  }

  render(ctx) {
    for (let s of this.stacks) {
      s.render(ctx);
    }

    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(this.id, this.x, this.y - 5);
  }

}
