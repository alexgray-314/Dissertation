import {State} from "../state/state";
import {Area} from "./area";
import {Hitbox} from "./hitbox";
import {Card} from "./card";
import {UI} from "../api/ui";

import * as model from "../model/area";
import {Position} from "../model/area";
import {Config} from "../engine/config";

export const SCALE = 4;
export const AREA_SPACING_Y = 120*SCALE;
export const AREA_MARGIN = 20*SCALE;
export const FAN_SPACING = 40*SCALE;
export const CARD_WIDTH = 70*SCALE;
export const CARD_HEIGHT = 95*SCALE;
export const STACK_SPACING_X = 80*SCALE;

export class Canvas implements UI{

  canvas : HTMLCanvasElement;
  areas: Record<string, Area>;
  hitBoxes : Hitbox[];
  config: Config;

  constructor(initialState : State, config : Config) {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const displayWidth = 500;
    const displayHeight = 300;
    this.canvas.style.width = displayWidth + 'px';
    this.canvas.style.height = displayHeight + 'px';
    this.canvas.width = displayWidth * SCALE;
    this.canvas.height = displayHeight * SCALE;


    this.config = config;
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
    this.hitBoxes.splice(0, this.hitBoxes.length); // clear hitBoxes

    const usedY : number[] = [];
    state.areas.forEach((area : model.Area, id : string) => {
      let y = 0;
      for (let i = 0; i < 20; i++) {
        if (!usedY.includes(i)) {
          y = i;
          break;
        }
      }
      if (id !== "deck") { // Do not display the deck
          this.areas[id] = new Area(area, y, this.hitBoxes, this.config, usedY);
          y++
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
