const AREA_SPACING_Y = 130;
const AREA_MARGIN = 20;

class Area {

  // Will generate a UI area from a state area
  constructor(area, y, hitBoxes) {
    Object.assign(this, area);
    this.y = y;

    this.stacks = [];
    // check for min args
    for (let x = 0; x < area.args.min; x++) {
      const stack = new Stack(area.stacks[x] ?? {cards:[]}, x, y);
      this.stacks.push(stack);

      // Hitboxes
      if (area.args.hand !== "true") {
        // Users can only take the top card
        hitBoxes.push(new Hitbox(
          stack.rect,
          {
            type: "POSITION",
            area: area.id,
            index: {
              position: 0,
              stack: x
            }
          }
        ));
      } else {
        // This is a hand, users can take any card
        let pos = 0;
        for (let card of this.stacks[0].cards) {
          hitBoxes.push(new Hitbox(
            {
              x: AREA_MARGIN + pos*40,
              y: AREA_MARGIN + this.y*AREA_SPACING_Y,
              width: 40,
              height: CARD_HEIGHT,
            },
            {
              type: "POSITION",
              area: area.id,
              index: {
                position: pos,
                stack: 0
              }
            }
          ));
          pos++;
        }
      }

    }
  }

  render(ctx) {

    if (this.args.hand === "true") {
      // The area is a players hand
      let rect = {
        x: AREA_MARGIN,
        y: AREA_MARGIN + this.y*AREA_SPACING_Y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }
      for (let card of this.stacks[0].cards) {
        card.render(ctx, rect);
        rect.x += 40;
      }
    } else {
      for (let s of this.stacks) {
        s.render(ctx);
      }
    }

    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(this.args.text, AREA_MARGIN, AREA_MARGIN + this.y*AREA_SPACING_Y - 5);
  }

}
