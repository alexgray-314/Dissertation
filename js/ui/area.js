const AREA_SPACING_Y = 130;
const AREA_MARGIN = 20;

class Area {

  // Will generate a UI area from a state area
  constructor(area, y) {
    Object.assign(this, area);
    this.y = y;
    let x = 0

    this.stacks = [];
    // check for min args
    for (let x = 0; x < area.args.min; x++) {
      this.stacks.push(new Stack(area.stacks[x] ?? {cards:[]}, x, y));
    }
  }

  render(ctx) {
    for (let s of this.stacks) {
      s.render(ctx);
    }

    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(this.args.text, AREA_MARGIN, AREA_MARGIN + this.y*AREA_SPACING_Y - 5);
  }

}
