import {Card, CARD_HEIGHT, CARD_WIDTH} from "./card";

const STACK_SPACING_X = 80;

import * as model from "../model/stack";
import {AREA_MARGIN, AREA_SPACING_Y} from "./area";
import {Rect} from "./hitbox";

export class Stack {

  cards : Card[];
  rect : Rect;

  constructor(stack : model.Stack, x : number, y : number) {
    this.cards = stack.cards.map(function(card) {return new Card(card)});
    this.rect = {
      x: AREA_MARGIN + x*STACK_SPACING_X,
      y: AREA_MARGIN + y*AREA_SPACING_Y,
      width: CARD_WIDTH,
      height: CARD_HEIGHT
    }
  }

  render(ctx : CanvasRenderingContext2D) {
    // Outline
    ctx.strokeStyle = "rgba(0,0,0,0.4)";
    ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

    // Draw top card
    // TODO add option to fan out cards (for example, patience)
    if (this.cards.length > 0) {
      this.cards[0].render(ctx, this.rect);
    }
  }

}
