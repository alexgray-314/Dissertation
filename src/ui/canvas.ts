import {State} from "../state/state";
import {Area} from "./area";
import {Hitbox} from "./hitbox";
import {Card} from "./card";
import {UI} from "../api/ui";

import * as model from "../model/area";
import {Position} from "../model/area";

export class Canvas implements UI{

  canvas : HTMLCanvasElement;
  areas: Record<string, Area>;
  hitBoxes : Hitbox[];

  constructor(initialState : State) {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;

    this.areas = {};
    this.hitBoxes = [];
    this.update(initialState, 0);
  }

  remove_card([a, s, p] : Position) {
    const card = this.areas[a].stacks[s].cards[p];
    this.areas[a].stacks[s].cards.splice(p, 1);
    return card;
  }

  push_card([a,s,p] : Position, card : Card) {
    this.areas[a].stacks[s].cards.splice(p, 0, card);
  }

  update(state : State, player : number) {
    // Convert all the state "areas" into UI "Areas"
    let y = 0;
    this.hitBoxes.splice(0, this.hitBoxes.length); // clear hitBoxes
    state.areas.forEach((area : model.Area, id : string) => {
      if (id !== "deck") { // Do not display the deck
        if (/\d+/.test(id) && id !== player.toString()) { // if it's an ID, check it's the current players ID
          delete this.areas[id];
        } else {
          this.areas[id] = new Area(area, y, this.hitBoxes);
          y++;
        }
      }
    })
  }

  render() {
    const ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let a of Object.values(this.areas)) {
      a.render(ctx);
    }
  }

}
