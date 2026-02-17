"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var area_1 = require("../model/area");
var card_1 = require("../model/card");
var stack_1 = require("../model/stack");
// This is not to be accessed directly from clients, they must go through the API to validate
var State = /** @class */ (function () {
    function State(num_players) {
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
        for (var i = 0; i < num_players; i++) {
            this.areas.set(i.toString(), new area_1.Area(i.toString(), {
                min: 1,
                hand: "true",
                text: "Player " + i + "'s hand",
            }));
        }
    }
    // ----------------- Specific players  ------------------
    State.prototype.get_action_player = function () {
        return this.action_player;
    };
    State.prototype.get_move_player = function () {
        return this.move_info.player;
    };
    State.prototype.get_turn_player = function () {
        return this.turn;
    };
    State.prototype.reset_move_info = function () {
        this.move_info.player = undefined;
        this.move_info.source = undefined;
        this.move_info.dest = undefined;
        this.move_info.card = undefined;
        this.move_info.cancelled = false;
    };
    State.prototype.next_turn = function () {
        this.turn++;
        if (this.turn >= this.num_players) {
            this.turn = 0;
        }
    };
    State.prototype.set_turn = function (turn) {
        if (turn >= this.num_players || turn < 0) {
            throw new Error("Player id [" + turn + "] is out of bounds");
        }
        this.turn = turn;
    };
    // ---------------- CARD MOVEMENT -----------------------
    State.prototype.move_card = function (source, destination) {
        if (source === undefined || destination === undefined) {
            return;
        }
        var card = this.get_card(source);
        if (card !== card_1.SpecialCard.Empty) {
            this.remove_card(source);
            this.add_card(card, destination);
        }
    };
    State.prototype.add_card = function (card, _a) {
        var a = _a[0], s = _a[1], p = _a[2];
        if (card === card_1.SpecialCard.Empty) {
            return;
        }
        if (!this.areas.has(a)) {
            console.error("Invalid area id ", a);
            return;
        }
        var area = this.areas.get(a);
        var stacks = area.stacks;
        // Create the stack if it does not exists
        if (s >= stacks.length) {
            // add new stacks if necessary so that the index is reachable
            for (var i = stacks.length; i <= s; i++) {
                // define a new stack
                stacks.push(new stack_1.Stack());
            }
        }
        // add the card to the deck
        stacks[s].cards.splice(p, 0, card);
    };
    State.prototype.remove_card = function (_a) {
        var a = _a[0], s = _a[1], p = _a[2];
        if (!this.areas.has(a)) {
            console.error("invalid area id", a);
            return;
        }
        var area = this.areas.get(a);
        if (s >= area.stacks.length) {
            return;
        }
        var stack = area.stacks[s];
        stack.cards.splice(p, 1);
    };
    State.prototype.get_card = function (_a) {
        var a = _a[0], s = _a[1], p = _a[2];
        if (!this.areas.has(a)) {
            return card_1.SpecialCard.Empty;
        }
        var area = this.areas.get(a);
        if (s >= area.stacks.length) {
            return card_1.SpecialCard.Empty;
        }
        var stack = area.stacks[s];
        if (p >= stack.cards.length) {
            return card_1.SpecialCard.Empty;
        }
        return stack.cards[p];
    };
    // ------------------ DEFINITIONS --------------------
    State.prototype.define_area = function (id, args) {
        // default parameters
        var defaultArgs = {
            "min": 1,
            "text": id,
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        this.areas.set(id, new area_1.Area(id, defaultArgs));
    };
    State.prototype.define_variable = function (type, id) {
        this.variables.set(id, [type, undefined]);
    };
    State.prototype.define_action = function (id, args) {
        // default parameters
        var defaultArgs = {
            "text": id,
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        this.action_catches.set(id, undefined);
    };
    State.prototype.assign_action_subtree = function () {
    };
    State.prototype.add_catch = function () {
    };
    State.prototype.deal = function (args) {
        var defaultArgs = {
            jokers: "false",
            distribute: "all",
            shuffle: "true",
            hand_max: 52
        };
        Object.assign(defaultArgs, args); // merge defaults with set parameters
        var deckArray = this.areas.get("deck").stacks[0].cards;
        // ---- Shuffle the deck
        if (defaultArgs.shuffle === "true") {
            deckArray.sort(function (a, b) {
                return Math.random() - 0.5;
            });
        }
        // TODO actually consider the args
        // Deal out the cards until done
        var player = 0;
        for (var i = 0; deckArray.length > 0; i++) {
            this.add_card(deckArray[0], [player.toString(), 0, 0]);
            this.remove_card(["deck", 0, 0]);
            player++;
            if (player >= this.num_players) {
                player = 0;
            }
        }
    };
    return State;
}());
exports.State = State;
