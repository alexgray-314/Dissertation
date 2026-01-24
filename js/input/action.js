class Action {

  constructor(action, playerId, handler) {
    Object.assign(this, action);
    const row = document.getElementById("actions");
    const cell = row.insertCell(0);
    cell.innerHTML = "<button id='" + this.id + "'>" + this.args.text + "</button>";
    this.button = document.getElementById(this.id);
    this.button.addEventListener("click", function() {
      handler.call({
        type: "ACTION",
        player: playerId,
        id: this.id
      });
    });
  }

}
