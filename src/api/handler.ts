import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Interpreter } from "../engine/interpreter";
import { State } from "../state/state";
import { UI } from "./ui";
import { Comparator } from "../state/comparator";
import {activePlayer} from "../app";

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
                if (moveCatch.caught(this.state)) {
                    // If movement has been canceled, stop future move catch clauses from being executed
                    break;
                }
            }
            // Only move the card if the state is as we expect and the programmer hasn't already moved the card
            // Don't move the card if cancel; has been called
            if (
                !this.state.move_info.cancelled &&
                new Comparator(this.state).equals(this.state.get_card(this.state.move_info.source), this.state.move_info.card)
            ) {
                this.state.move_card(
                    this.state.move_info.source,
                    this.state.move_info.dest
                );
            }
            this.state.reset_move_info();
            break;
        case "ACTION":
            this.state.action_player = request.player;
            const subTree : ParseTree | undefined = this.state.action_catches.get(request.id);
            if (subTree !== undefined) {
                new Interpreter(this.state).visit(subTree);
            }
            this.state.action_player = NaN;
            break;
        }
        this.notify();
    }

    // Notify the UI that there has been some change to the state
    notify() {
        this.ui.update(this.state, activePlayer);
        const turnDisplay = document.getElementById("turn-display");
        if (turnDisplay) {
            turnDisplay.innerHTML = this.state.turn.toString();
        }
    }

}