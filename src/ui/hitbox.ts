import {Position} from "../model/area";

export type Rect = {
  x: number,
  y: number,
  width: number,
  height: number
}

export class Hitbox {

  rect: Rect;
  position: Position;

  constructor(rect : Rect, position: Position) {
    this.rect = rect;
    this.position = position;
  }

  contains(x : number, y : number): boolean {
    return (
      x >= this.rect.x &&
      x <= this.rect.x + this.rect.width &&
      y >= this.rect.y &&
      y <= this.rect.y + this.rect.height
    );
  }
}
