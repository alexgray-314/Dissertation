const AREA_SPACING_Y = 130;
const AREA_MARGIN = 20;

class Area {

  // Will generate a UI area from a state area
  constructor(area, y) {
    Object.assign(this, area);
    this.y = y;
    let x = 0
    this.stacks = area.stacks.map(function(stack) {
      x++;
      return new Stack(stack, x - 1, y) ;
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
