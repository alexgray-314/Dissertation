class Stack {
  constructor(x, y, arr) {
    this.x = x;
    this.y = y;
    this.cards = arr.map(function(card) {return new Card(card)});
  }

  get_top() {
    return this.cards[0];
  }

  get(index) {
    return this.cards[index.position];
  }

  push(card, index) {
    this.cards.splice(index.position, 0, card);
  }

  remove(index) {
    this.cards.splice(index.position, 1)
  }

  render(ctx) {
    // Outline
    ctx.strokeStyle = "rgba(0,0,0,0.4)";
    ctx.strokeRect(this.x, this.y, CARD_WIDTH, CARD_HEIGHT);

    // Draw top card
    // TODO add option to fan out cards (for example, patience)
    if (this.cards.length > 0) {
      this.cards[0].render(ctx, this.x, this.y);
    }
  }

  contains(x, y) {
    return (
      x >= this.x &&
      x <= this.x + CARD_WIDTH &&
      y >= this.y &&
      y <= this.y + CARD_HEIGHT
    );
  }
}
