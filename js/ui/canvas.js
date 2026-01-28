class Canvas {

  constructor(initialState) {
    this.canvas = document.getElementById("canvas");

    this.areas = {};
    this.update(initialState);
  }

  update(state) {
    // Convert all the state "areas" into UI "Areas"
    this.areas = {}
    let y = 0;
    Object.entries(state.areas).forEach(([id, area]) => {
      if (id !== "deck") { // Do not display the deck
        if (!/\d+/.test(id) || id === activePlayer.toString()) { // if it's an ID, check it's the current players ID
          y++;
          this.areas[id] = new Area(area, y-1);
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
