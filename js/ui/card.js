const CARD_WIDTH = 70;
const CARD_HEIGHT = 100;
const SUIT_MAP = {
  "spades": "♠",
  "hearts": "♥",
  "clubs": "♣",
  "diamonds": "♦"
}

class Card {

  constructor(card) {
    Object.assign(this, card);
  }

  render(ctx, rect) {
    ctx.fillStyle = "white";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

    ctx.strokeStyle = "black";
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

    if (this.suit === "hearts" || this.suit === "diamonds") {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "black";
    }

    ctx.font = "16px Arial";
    ctx.fillText(this.rank + " " + SUIT_MAP[this.suit], rect.x + rect.width/7, rect.y + rect.height/4);
  }
}
