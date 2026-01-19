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
      "spades": "♠",
      "hearts": "♥",
      "clubs": "♣",
      "diamonds": "♦"
    }
  }

  render() {
    let html = this.id + ": ";
    for (let i = 0; i < this.decks.length; i++) {
      html += this.#renderCard(this.decks[i][0]);
    }
    this.div.innerHTML = html;
  }

  #renderCard(card) {
    try {
      if (card.suit === "hearts" || card.suit === "diamonds") {
        return "[<span style=\"color: red\">" + card.number + this.suitmap[card.suit] + "</span>] ";
      } else {
        return "[<span style=\"color: black\">" + card.number + this.suitmap[card.suit] + "</span>] ";
      }
    } catch (e) {
      return "[] ";
    }
  }

}
