export class Hitbox {

  rect: any;
  position: any;

  constructor(rect : any, position: any) {
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
