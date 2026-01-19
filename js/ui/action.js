class Action {
  constructor(id, args) {
    this.id = id;
    this.args = args;
    const row = document.getElementById("actions");
    const cell = row.insertCell(0);
    cell.innerHTML = "<button id='" + id + "'>" + args.text + "</button>";
    this.div = document.getElementById(id);
  }
}
