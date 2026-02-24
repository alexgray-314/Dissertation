import {Card, CARD_HEIGHT, CARD_WIDTH} from "./card";

const STACK_SPACING_X = 80;

import * as model from "../model/stack";
import {AREA_MARGIN, AREA_SPACING_Y, FAN_SPACING} from "./area";
import {Rect} from "./hitbox";

export class Stack {

  cards : Card[];
  rect : Rect;
  label : string | undefined;
  display : string;
  visible : boolean;

  constructor(stack : model.Stack, x : number, yDefault : number, label : string | undefined, display : string, visible : boolean) {
    this.cards = stack.cards.map(function(card) {return new Card(card)});
    this.rect = {
      x: AREA_MARGIN + x*STACK_SPACING_X,
      y: AREA_MARGIN + yDefault*AREA_SPACING_Y,
      width: CARD_WIDTH,
      height: CARD_HEIGHT
    };
    this.label = label;
    this.display = display;
    this.visible = visible;
  }

  render(ctx : CanvasRenderingContext2D) {
    if (this.visible) {
      // Outline
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

      if (this.display == "single") {
        // Draw top card
        if (this.cards.length > 0) {
          this.cards[0].render(ctx, this.rect);
        }
      } else if (this.display === "spread") {
        let rect: Rect = {
          x: this.rect.x,
          y: this.rect.y,
          width: this.rect.width,
          height: this.rect.height,
        }
        for (let card of this.cards) {
          card.render(ctx, rect);
          rect.x += FAN_SPACING;
        }
      }

      // Draw label
      if (this.label !== undefined) {
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.fillText(this.label, this.rect.x, this.rect.y - 5);
      }

    }
  }

}
