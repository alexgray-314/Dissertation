import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Area, Position } from "../model/area";
import { Card, SpecialCard } from "../model/card";
import { MoveCatch } from "./move_catch";
import { Stack } from "../model/stack";

export type MoveInfo = {
    source: undefined | Position,
    dest: undefined | Position,
    player: undefined | number,
    card: undefined | Card,
    cancelled: boolean
}

// This is not to be accessed directly from clients, they must go through the API to validate
export class State {

    areas : Map<string, Area>;
    variables : Map<string, [string, Card|number|undefined]>;
    num_players : number;
    turn : number;
    action_player : number;
    move_catches : MoveCatch[];
    action_catches : Map<string, ParseTree | undefined>;
    move_info : MoveInfo;

    constructor (num_players : number) {

        this.areas = new Map<string, Area>();
        this.variables = new Map<string, [string, Card|number]>();;
        this.num_players = num_players;
        this.turn = 0;
        this.action_player = NaN;
        this.move_catches = [];
        this.action_catches = new Map<string, ParseTree | undefined>();
        this.move_info = {
            source: undefined,
            dest: undefined,
            player: undefined,
            card: undefined,
            cancelled: false
        };

        // Set up the player hands
        for (let i = 0; i < num_players; i++) {

            this.areas.set(i.toString(), new Area(
                i.toString(),
                {
                    min:1,
                    hand:"true",
                    text:"Player " + i + "'s hand",
                }
            ));

        }

    }

    // ----------------- Specific players  ------------------
    get_action_player() {
        return this.action_player;
    }

    get_move_player() {
        return this.move_info.player;
    }

    get_turn_player() {
        return this.turn;
    }

    reset_move_info() {
        this.move_info.player = undefined;
        this.move_info.source = undefined;
        this.move_info.dest = undefined;
        this.move_info.card = undefined;
        this.move_info.cancelled = false;
    }

    next_turn() {
        this.turn++;
        if (this.turn >= this.num_players) {
            this.turn = 0;
        }
    }

    set_turn(turn : number) {
        if (turn >= this.num_players || turn < 0) {
            throw new Error("Player id [" + turn + "] is out of bounds");
        }
        this.turn = turn;
    }

    // ---------------- CARD MOVEMENT -----------------------
    
    move_card(source : Position | undefined, destination : Position | undefined) {

        if (source === undefined || destination === undefined) {
            return;
        }

        const card : Card = this.get_card(source);
        if (card !== SpecialCard.Empty) {
            this.remove_card(source);
            this.add_card(card, destination);
        }

    }

    add_card(card : Card, [a, s, p] : Position) {
        if (card === SpecialCard.Empty) {
            return;
        }
        if (!this.areas.has(a)) {
            console.error("Invalid area id ", a);
            return;
        }

        const area : Area = this.areas.get(a)!;
        const stacks : Stack[] = area.stacks;

        // Create the stack if it does not exists
        if (s >= stacks.length) {
            // add new stacks if necessary so that the index is reachable
            for (let i = stacks.length; i <= s; i++) {
                // define a new stack
                stacks.push(new Stack());
            }
        }

        // add the card to the deck
        stacks[s].cards.splice(p, 0, card);
    }

    remove_card([a, s, p] : Position) {

        if (!this.areas.has(a)) {
            console.error("invalid area id", a);
            return;
        }

        const area = this.areas.get(a)!;

        if (s >= area.stacks.length) {
            return;
        }

        const stack = area.stacks[s];

        stack.cards.splice(p, 1);

    }

    get_card([a, s, p] : Position) {

        if (!this.areas.has(a)) {
            return SpecialCard.Empty;
        }

        const area = this.areas.get(a)!;

        if (s >= area.stacks.length) {
            return SpecialCard.Empty;
        }

        const stack = area.stacks[s];

        if (p >= stack.cards.length) {
            return SpecialCard.Empty;
        }

        return stack.cards[p];

    }

    // ------------------ DEFINITIONS --------------------

    define_area(id : string, args: Record<string, string | number>) {

        // default parameters
        const defaultArgs = {
            "min": 1,
            "text": id,
        };
        Object.assign(defaultArgs, args);// merge defaults with set parameters

        this.areas.set(id, new Area(
            id,
            defaultArgs
        ));

    }

    define_variable(type : string, id : string) {
        this.variables.set(id, [type, undefined]);
    }

    define_action(id : string, args: Record<string, string | number>) {

        // default parameters
        const defaultArgs = {
            "text": id,
        };
        Object.assign(defaultArgs, args);// merge defaults with set parameters

        this.action_catches.set(id, undefined);

    }

}
