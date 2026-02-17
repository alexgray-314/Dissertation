"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const area_1 = require("../model/area");
const card_1 = require("../model/card");
const stack_1 = require("../model/stack");
// This is not to be accessed directly from clients, they must go through the API to validate
class State {
    areas;
    variables;
    num_players;
    turn;
    action_player;
    move_catches;
    action_catches;
    move_info;
    constructor(num_players) {
        this.areas = new Map();
        this.variables = new Map();
        ;
        this.num_players = num_players;
        this.turn = 0;
        this.action_player = NaN;
        this.move_catches = [];
        this.action_catches = new Map();
        this.move_info = {
            source: undefined,
            dest: undefined,
            player: undefined,
            card: undefined,
            cancelled: false
        };
        // Set up the player hands
        for (let i = 0; i < num_players; i++) {
            this.areas.set(i.toString(), new area_1.Area(i.toString(), {
                min: 1,
                hand: "true",
                text: "Player " + i + "'s hand",
            }));
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
    set_turn(turn) {
        if (turn >= this.num_players || turn < 0) {
            throw new Error("Player id [" + turn + "] is out of bounds");
        }
        this.turn = turn;
    }
    // ---------------- CARD MOVEMENT -----------------------
    move_card(source, destination) {
        if (source === undefined || destination === undefined) {
            return;
        }
        const card = this.get_card(source);
        if (card !== card_1.SpecialCard.Empty) {
            this.remove_card(source);
            this.add_card(card, destination);
        }
    }
    add_card(card, [a, s, p]) {
        if (card === card_1.SpecialCard.Empty) {
            return;
        }
        if (!this.areas.has(a)) {
            console.error("Invalid area id ", a);
            return;
        }
        const area = this.areas.get(a);
        const stacks = area.stacks;
        // Create the stack if it does not exists
        if (s >= stacks.length) {
            // add new stacks if necessary so that the index is reachable
            for (let i = stacks.length; i <= s; i++) {
                // define a new stack
                stacks.push(new stack_1.Stack());
            }
        }
        // add the card to the deck
        stacks[s].cards.splice(p, 0, card);
    }
    remove_card([a, s, p]) {
        if (!this.areas.has(a)) {
            console.error("invalid area id", a);
            return;
        }
        const area = this.areas.get(a);
        if (s >= area.stacks.length) {
            return;
        }
        const stack = area.stacks[s];
        stack.cards.splice(p, 1);
    }
    get_card([a, s, p]) {
        if (!this.areas.has(a)) {
            return card_1.SpecialCard.Empty;
        }
        const area = this.areas.get(a);
        if (s >= area.stacks.length) {
            return card_1.SpecialCard.Empty;
        }
        const stack = area.stacks[s];
        if (p >= stack.cards.length) {
            return card_1.SpecialCard.Empty;
        }
        return stack.cards[p];
    }
    // ------------------ DEFINITIONS --------------------
    define_area(id, args) {
        // default parameters
        const defaultArgs = {
            "min": 1,
            "text": id,
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        this.areas.set(id, new area_1.Area(id, defaultArgs));
    }
    define_variable(type, id) {
        this.variables.set(id, [type, undefined]);
    }
    define_action(id, args) {
        // default parameters
        const defaultArgs = {
            "text": id,
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        this.action_catches.set(id, undefined);
    }
    assign_action_subtree() {
    }
    add_catch() {
    }
    deal(args) {
        const defaultArgs = {
            jokers: "false",
            distribute: "all",
            shuffle: "true",
            hand_max: 52
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        const deckArray = this.areas.get("deck").stacks[0].cards;
        // ---- Shuffle the deck
        if (defaultArgs.shuffle === "true") {
            deckArray.sort(function (a, b) {
                return Math.random() - 0.5;
            });
        }
        // TODO actually consider the args
        // Deal out the cards until done
        let player = 0;
        for (let i = 0; deckArray.length > 0; i++) {
            this.add_card(deckArray[0], [player.toString(), 0, 0]);
            this.remove_card(["deck", 0, 0]);
            player++;
            if (player >= this.num_players) {
                player = 0;
            }
        }
    }
}
exports.State = State;
//# sourceMappingURL=state.js.map