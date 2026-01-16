class Area {
  constructor(id) {
    const table = document.getElementById("info");
    const row = table.insertRow(0);
    const cell = row.insertCell(0);
    cell.innerHTML = "<div id='" + id + "'>Example</div>";
    this.div = document.getElementById(id);
    this.decks = [];
    this.id = id;
    this.suitmap = {
      "s": "♠",
      "h": "♥",
      "c": "♣",
      "d": "♦"
    }
  }

  render() {
    let html = this.id + ": ";
    for (let i = 0; i < this.decks.length; i++) {
      html += this.#renderCard(this.decks[i][this.decks[i].length - 1]);
    }
    this.div.innerHTML = html;
  }

  #renderCard(raw) {
    try {
      const number = raw.slice(0, -1).toUpperCase();
      const suit = raw.slice(-1);
      if (/[hdHD]/.test(suit)) {
        return "[<span style=\"color: red\">" + number + this.suitmap[suit] + "</span>] ";
      } else {
        return "[<span style=\"color: black\">" + number + this.suitmap[suit] + "</span>] ";
      }
    } catch (e) {
      return "[] ";
    }
  }

}
