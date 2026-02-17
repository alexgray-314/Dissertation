class Canvas {

  constructor(initialState) {
    this.canvas = document.getElementById("canvas");

    this.areas = {};
    this.hitBoxes = [];
    this.update(initialState);
  }

  remove_card(position) {
    const card = this.areas[position.area].stacks[position.index.stack].cards[position.index.position];
    this.areas[position.area].stacks[position.index.stack].cards.splice(position.index.position, 1);
    return card;
  }

  push_card(position, card) {
    this.areas[position.area].stacks[position.index.stack].cards.splice(position.index.position, 0, card);
  }

  update(state) {
    // Convert all the state "areas" into UI "Areas"
    let y = 0;
    this.hitBoxes.splice(0, this.hitBoxes.length); // clear hitBoxes
    Object.entries(state.areas).forEach(([id, area]) => {
      if (id !== "deck") { // Do not display the deck
        if (/\d+/.test(id) && id !== activePlayer.toString()) { // if it's an ID, check it's the current players ID
          delete this.areas[id];
        } else {
          this.areas[id] = new Area(area, y, this.hitBoxes);
          y++;
        }
      }
    })
  }

  render() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let a of Object.values(this.areas)) {
      a.render(ctx);
    }
  }

}
