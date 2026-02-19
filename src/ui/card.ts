import * as model from "../model/card";
import {Rect} from "./hitbox";

export const CARD_WIDTH = 70;
export const CARD_HEIGHT = 100;

export class Card {

  child : model.Card;

  constructor(card : model.Card) {
    this.child = card;
  }

  render(ctx : CanvasRenderingContext2D, rect : Rect) {
    ctx.fillStyle = "white";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

    ctx.strokeStyle = "black";
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

    if (this.child !== model.SpecialCard.Empty && this.child !== model.SpecialCard.Joker) {
      if (this.child.suit === "hearts" || this.child.suit === "diamonds") {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "black";
      }

      ctx.font = "16px Arial";
      ctx.fillText(this.child.toString(), rect.x + rect.width / 8, rect.y + rect.height / 4);
    }
  }
}
