import {Stack} from "./stack";

export const AREA_SPACING_Y = 130;
export const AREA_MARGIN = 20;
export const FAN_SPACING = 40;

import * as model from "../model/area";
import {Hitbox, Rect} from "./hitbox";
import {CARD_HEIGHT, CARD_WIDTH} from "./card";

export class Area {

  y : number;
  stacks : Stack[];
  child: model.Area;

  // Will generate a UI area from a state area
  constructor(area : model.Area, y : number, hitBoxes : Hitbox[]) {
    this.child = area;
    this.y = y;

    this.stacks = [];
    // check for min args
    for (let x = 0; x < Math.max(Number(area.args.min), area.stacks.length); x++) {
      const stack = new Stack(area.stacks[x] ?? {cards:[]}, x, y);
      this.stacks.push(stack);

      // Hitboxes
      if (area.args.hand !== "true") {
        // Users can only take the top card
        hitBoxes.push(new Hitbox(
          stack.rect,
          [area.id, x, 0]
        ));
      } else {
        // This is a hand, users can take any card
        let pos = 0;
        for (let card of this.stacks[0].cards) {
          hitBoxes.push(new Hitbox(
            {
              x: AREA_MARGIN + pos*FAN_SPACING,
              y: AREA_MARGIN + this.y*AREA_SPACING_Y,
              width: (pos < this.stacks[0].cards.length - 1) ? FAN_SPACING : CARD_WIDTH,
              height: CARD_HEIGHT,
            },
            [area.id, 0, pos]
          ));
          pos++;
        }
      }

    }
  }

  render(ctx : CanvasRenderingContext2D) {

    if (this.child.args.hand === "true") {
      // The area is a players hand
      let rect : Rect = {
        x: AREA_MARGIN,
        y: AREA_MARGIN + this.y*AREA_SPACING_Y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }
      // Outline
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
      for (let card of this.stacks[0].cards) {
        card.render(ctx, rect);
        rect.x += FAN_SPACING;
      }
    } else {
      for (let s of this.stacks) {
        s.render(ctx);
      }
    }

    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(this.child.id, AREA_MARGIN, AREA_MARGIN + this.y*AREA_SPACING_Y - 5);
  }

}
