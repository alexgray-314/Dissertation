import * as model from "../model/card";
import {Rect} from "./hitbox";
import {Canvas} from "./canvas";

export const CARD_WIDTH = 70;
export const CARD_HEIGHT = 95;

export class Card {

  child : model.Card;

  constructor(card : model.Card) {
    this.child = card;
  }

  render(ctx : CanvasRenderingContext2D, rect : Rect) {
    if (this.child !== model.SpecialCard.Empty) {
      if (this.child.faceup) {

        // face up
        ctx.fillStyle = "white";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

        ctx.strokeStyle = "black";
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

        if (this.child.suit === "joker") {
          this.drawJoker(ctx, rect.x, rect.y, rect.width, rect.height);
        } else {

          if (this.child.suit === "hearts" || this.child.suit === "diamonds") {
            ctx.fillStyle = "red";
          } else {
            ctx.fillStyle = "black";
          }

          ctx.font = "16px Arial";
          ctx.fillText(this.child.toString(), rect.x + rect.width / 8, rect.y + rect.height / 4);

        }

      } else {

        // face down
        this.drawCardBack(ctx, rect);

      }
    }
  }

  private drawJoker(ctx : CanvasRenderingContext2D, x : number, y : number, width : number, height : number) {
    const px = Math.floor(Math.min(width, height) / 20); // pixel size
    const centerX = x + width / 2;
    const centerY = y + height * (2/3);

    ctx.save();

    // -------- Card Background --------
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = px * 2;

    ctx.imageSmoothingEnabled = false; // crisp pixels

    function pixelRect(pxX : number, pxY : number, w : number, h : number, color : string) {
      ctx.fillStyle = color;
      ctx.fillRect(
          centerX + pxX * px,
          centerY + pxY * px,
          w * px,
          h * px
      );
    }

    // -------- Jester Hat (3 points) --------
    pixelRect(-6, -10, 4, 2, "#008000"); // left base
    pixelRect(2, -10, 4, 2, "#cc0000");  // right base
    pixelRect(-2, -12, 4, 2, "#008000"); // center base

    pixelRect(-8, -14, 4, 4, "#008000"); // left spike
    pixelRect(4, -14, 4, 4, "#cc0000");  // right spike
    pixelRect(-2, -18, 4, 6, "#cc0000"); // center spike

    // Bells
    pixelRect(-9, -15, 2, 2, "#ffd700");
    pixelRect(7, -15, 2, 2, "#ffd700");
    pixelRect(-1, -19, 2, 2, "#ffd700");

    // -------- Face --------
    pixelRect(-4, -8, 8, 8, "#ffe0bd"); // face block

    // Eyes
    pixelRect(-2, -6, 1, 1, "#000000");
    pixelRect(1, -6, 1, 1, "#000000");

    // Smile
    pixelRect(-2, -3, 4, 1, "#000000");
    pixelRect(-3, -4, 1, 1, "#000000");
    pixelRect(2, -4, 1, 1, "#000000");

    // -------- Body --------
    pixelRect(-5, 0, 5, 6, "#cc0000");  // left half
    pixelRect(0, 0, 5, 6, "#008000");   // right half

    // Collar
    pixelRect(-5, -1, 10, 1, "#ffd700");

    // Buttons
    pixelRect(-1, 1, 2, 1, "#ffd700");
    pixelRect(-1, 3, 2, 1, "#ffd700");

    ctx.restore();
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
