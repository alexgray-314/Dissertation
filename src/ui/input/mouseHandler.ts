import {UI} from "../../api/ui";
import {Handler} from "../../api/handler";
import {Card, CARD_HEIGHT, CARD_WIDTH} from "../card";
import {Position} from "../../model/area";
import {Canvas} from "../canvas";
import {activePlayer} from "../../app";

export class MouseHandler {

  draggedCard : Card | undefined;
  mouseX : number;
  mouseY : number;
  source: Position | undefined;
  destination : Position | undefined;
  ui : Canvas;

  constructor(ui : Canvas, handler : Handler) {

    this.draggedCard = undefined;
    this.mouseX = 0;
    this.mouseY = 0;
    this.ui = ui;

    // Position objects to be passed onto the handler
    this.source = undefined;
    this.destination = undefined;

    ui.canvas.addEventListener("mousedown", (e) => {
      const rect = ui.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      for (const box of this.ui.hitBoxes) {

          if (box.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = ui.remove_card(box.position);
            // SOURCE CARD for potential movement request
            this.source = box.position
            return;
          }

      }
    });

    ui.canvas.addEventListener("mousemove", (e) => {
      const rect = ui.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });

    ui.canvas.addEventListener("mouseup", () => {
      if (!this.draggedCard) return;
      if (!this.source) return;

      for (const box of this.ui.hitBoxes) {

          if (box.contains(this.mouseX, this.mouseY)) {
            this.draggedCard = undefined;

            // DESTINATION
            this.destination = box.position

            // call the handler
            handler.call({
              type: "MOVE",
              player: activePlayer,
              source: {
                area: this.source[0],
                stack: this.source[1],
                position: this.source[2]
              },
              destination: {
                area: this.destination[0],
                stack: this.destination[1],
                position: this.destination[2]
              }
            });

            return;
          }

      }

      if (!this.draggedCard) return;
      // User has let go of card
      ui.push_card(this.source, this.draggedCard);
      this.draggedCard = undefined;
    });

  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.draggedCard) {
      this.draggedCard.render(
        ctx,
        {
          x: this.mouseX - CARD_WIDTH / 2,
          y: this.mouseY - CARD_HEIGHT / 2,
          width: CARD_WIDTH,
          height: CARD_HEIGHT
        }
      );
    }
  }

}
