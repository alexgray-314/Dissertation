import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Interpreter } from "../engine/interpreter";
import { State } from "../state/state";
import { UI } from "./ui";
import { MoveCatch } from "../state/move_catch";
import { Card } from "../model/card";
import { Comparator } from "../state/comparator";

type Request = {
    type: "ACTION",
    player: number,
    id: string
} |
{
    type: "MOVE",
    player: number,
    source: {
        area: string,
        stack: number,
        position: number
    },
    destination: {
        area: string,
        stack: number,
        position: number
    }
}

export class Handler {

    state : State;
    ui : UI;

    constructor(state : State, ui : UI) {
        this.state = state;
        this.ui = ui;
    }

    // Call the API. Request some change to the state
    call(request : Request) {
        switch(request.type) {
        case "MOVE":
            this.state.move_info.player = request.player;
            this.state.move_info.source = [request.source.area, request.source.stack, request.source.position];
            this.state.move_info.dest = [request.destination.area, request.destination.stack, request.destination.position];
            this.state.move_info.card = this.state.get_card(this.state.move_info.source);
            for (let moveCatch of this.state.move_catches) {
                if (moveCatch.check(this.state)) {
                    const card : Card = this.state.get_card(this.state.move_info.source);
                    if (
                        !this.state.move_info.cancelled &&
                        new Comparator(this.state).equals(card, this.state.move_info.card
                        )) {
                        this.state.move_card(
                            this.state.move_info.source,
                            this.state.move_info.dest
                        );
                    }
                    break;
                }
            }
            this.state.reset_move_info();
            break;
        case "ACTION":
            const subTree : ParseTree | undefined = this.state.action_catches.get(request.id);
            if (subTree !== undefined) {
                new Interpreter(this.state).visit(subTree);
            }
            break;
        }
        this.notify();
    }

    // Notify the UI that there has been some change to the state
    notify() {
        this.ui.update(this.state);
    }

}