import {Stack} from "./stack";

export const AREA_SPACING_Y = 130;
export const AREA_MARGIN = 20;
export const FAN_SPACING = 40;

import * as model from "../model/area";
import {Hitbox, Rect} from "./hitbox";
import {CARD_HEIGHT, CARD_WIDTH} from "./card";
import {Config} from "../engine/config";

export class Area {

  y : number;
  stacks : Stack[];
  child: model.Area;
  config : Config;

  // Will generate a UI area from a state area
  constructor(area : model.Area, y : number, hitBoxes : Hitbox[], config : Config) {
    this.child = area;
    this.y = y;
    this.config = config;

    this.stacks = [];
    // check for min args
    const min : number = Number(config.get("style", area.id, "min_display") ?? "1");
    for (let x = 0; x < Math.max(min, area.stacks.length); x++) {

      // Attributes
      const label : string | undefined = config.get("style", area.id, x.toString(), "label");
      const display : string = config.get("style", area.id, x.toString(), "display") ?? "single";

      const stack = new Stack(area.stacks[x] ?? {cards:[]}, x, y, label, display);
      this.stacks.push(stack);

      // Hitboxes
      if (display === "single") {
        // Users can only take the top card
        hitBoxes.push(new Hitbox(
          stack.rect,
          [area.id, x, 0]
        ));
      } else if (display === "spread") {
        // This is a hand, users can take any card

        for (let pos = 0; pos < Math.max(this.stacks[0].cards.length, 1); pos++) {
          hitBoxes.push(new Hitbox(
            {
              x: AREA_MARGIN + pos*FAN_SPACING,
              y: AREA_MARGIN + this.y*AREA_SPACING_Y,
              width: (pos < this.stacks[0].cards.length - 1) ? FAN_SPACING : CARD_WIDTH,
              height: CARD_HEIGHT,
            },
            [area.id, 0, pos]
          ));
        }
      }

    }
  }

  render(ctx : CanvasRenderingContext2D) {

      for (let s of this.stacks) {
        s.render(ctx);
      }

  }

}
