import {Handler} from "../../api/handler";
import {activePlayer} from "../../app";

export class Action {

  button: HTMLButtonElement;

  constructor(id : string, handler : Handler) {
    const row = document.getElementById("actions") as HTMLTableRowElement;
    const cell = row.insertCell(0);
    cell.innerHTML = "<button id='" + id + "'>" + id + "</button>";
    this.button = document.getElementById(id) as HTMLButtonElement;
    this.button.addEventListener("click", function() {
      handler.call({
        type: "ACTION",
        player: activePlayer,
        id: id
      });
    });
  }

}
