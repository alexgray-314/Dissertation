const STACK_SPACING_X = 80;
const AREA_SPACING_Y = 150;

class Area {

  constructor(x, y, arr) {
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
  }

}
