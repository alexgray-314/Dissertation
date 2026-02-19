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
    if (this.child !== model.SpecialCard.Empty && this.child !== model.SpecialCard.Joker) {
      if (this.child.faceup) {

        // face up
        ctx.fillStyle = "white";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

        ctx.strokeStyle = "black";
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

        if (this.child.suit === "hearts" || this.child.suit === "diamonds") {
          ctx.fillStyle = "red";
        } else {
          ctx.fillStyle = "black";
        }

        ctx.font = "16px Arial";
        ctx.fillText(this.child.toString(), rect.x + rect.width / 8, rect.y + rect.height / 4);

      } else {

        // face down
        this.drawCardBack(ctx, rect);

      }
    }
  }

  private drawCardBack(
      ctx: CanvasRenderingContext2D,
      rect: Rect,
  ): void {
    ctx.save();

    // --- Clip drawing to rectangle ---
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.clip();

    // --- Background ---
    ctx.fillStyle = "#1e3a8a"; // deep card blue
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

    // --- Inner border ---
    const border = Math.min(rect.width, rect.height) * 0.06;

    ctx.lineWidth = border * 0.4;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(
        rect.x + border,
        rect.y + border,
        rect.width - border * 2,
        rect.height - border * 2
    );

    // --- Pattern settings ---
    const spacing = Math.min(rect.width, rect.height) * 0.08;

    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 1;

    // Cross-hatch pattern
    ctx.beginPath();

    // diagonal lines /
    for (let i = -rect.height; i < rect.width; i += spacing) {
      ctx.moveTo(rect.x + i, rect.y);
      ctx.lineTo(rect.x + i + rect.height, rect.y + rect.height);
    }

    // diagonal lines \
    for (let i = 0; i < rect.width + rect.height; i += spacing) {
      ctx.moveTo(rect.x + i, rect.y);
      ctx.lineTo(rect.x + i - rect.height, rect.y + rect.height);
    }

    ctx.stroke();

    // --- Central ornament (mirrored diamonds) ---
    const cx = rect.x + rect.width / 2;
    const cy = rect.y + rect.height / 2;
    const size = Math.min(rect.width, rect.height) * 0.12;

    ctx.fillStyle = "rgba(255,255,255,0.85)";

    const drawDiamond = (px: number, py: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(px, py - s);
      ctx.lineTo(px + s, py);
      ctx.lineTo(px, py + s);
      ctx.lineTo(px - s, py);
      ctx.closePath();
      ctx.fill();
    };

    drawDiamond(cx, cy - size * 1.5, size);
    drawDiamond(cx, cy + size * 1.5, size);

    // --- Thin outer border ---
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

    ctx.restore();
  }

}
