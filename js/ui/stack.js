const STACK_SPACING_X = 80;

class Stack {
  constructor(stack, x, y) {
    Object.assign(this, stack);
    this.cards = stack.cards.map(function(card) {return new Card(card)});
    this.rect = {
      x: AREA_MARGIN + x*STACK_SPACING_X,
      y: AREA_MARGIN + y*AREA_SPACING_Y,
      width: CARD_WIDTH,
      height: CARD_HEIGHT
    }
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
    ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

    // Draw top card
    // TODO add option to fan out cards (for example, patience)
    if (this.cards.length > 0) {
      this.cards[0].render(ctx, this.rect);
    }
  }

}
