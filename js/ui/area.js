const AREA_SPACING_Y = 130;
const AREA_MARGIN = 20;

class Area {

  // Will generate a UI area from a state area
  constructor(y, area) {
    Object.assign(this, area);
    this.y = y;
    let x = 0
    this.stacks = area.stacks.map(function(stack) {
      x++;
      return new Stack(x - 1, y, stack) ;
    });
  }

  render(ctx) {
    for (let s of this.stacks) {
      s.render(ctx);
    }

    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(this.id, AREA_MARGIN, AREA_MARGIN + this.y*AREA_SPACING_Y - 5);
  }

}
