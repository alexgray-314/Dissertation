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

  render(ctx, x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, CARD_WIDTH, CARD_HEIGHT);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, CARD_WIDTH, CARD_HEIGHT);

    if (this.suit === "hearts" || this.suit === "diamonds") {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "black";
    }

    ctx.font = "16px Arial";
    ctx.fillText(this.rank + " " + SUIT_MAP[this.suit], x + CARD_WIDTH/7, y + CARD_HEIGHT/4);
  }
}
