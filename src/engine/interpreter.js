"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
var cardVisitor_1 = require("../calc/cardVisitor");
var numberVisitor_1 = require("../calc/numberVisitor");
var card_1 = require("../model/card");
var positionVisitor_1 = require("../calc/positionVisitor");
var comparator_1 = require("../state/comparator");
var termVisitor_1 = require("../calc/termVisitor");
var intSetVisitor_1 = require("../calc/intSetVisitor");
var positionSetVisitor_1 = require("../calc/positionSetVisitor");
var move_catch_1 = require("../state/move_catch");
var Interpreter = /** @class */ (function () {
    function Interpreter(state) {
        this.state = state;
        this.positionVisitor = new positionVisitor_1.PositionVisitor(state);
        this.cardVisitor = new cardVisitor_1.CardVisitor(this.state);
        this.numberVisitor = new numberVisitor_1.NumberVisitor(this.state);
        this.termVisitor = new termVisitor_1.TermVisitor(this.state);
        this.comparator = new comparator_1.Comparator(this.state);
        this.running = true;
    }
    Interpreter.prototype.visitDefinition = function (ctx) {
        var _a;
        var type = ((_a = ctx._type.text) !== null && _a !== void 0 ? _a : "").toUpperCase();
        switch (type) {
            case "AREA":
                this.state.define_area(ctx.ID().text, {});
                break;
            case "ACTION":
                this.state.define_action(ctx.ID().text, {});
                break;
            case "INT":
            case "CARD":
                this.state.define_variable(type, ctx.ID().text);
                break;
        }
    };
    Interpreter.prototype.visitMove = function (ctx) {
        var _this = this;
        var dest = ctx.destination().accept(this.positionVisitor);
        if (dest === undefined) {
            console.log("Destination is undefined: ", ctx.destination().text);
            return;
        }
        if (ctx.source().position() !== undefined) {
            var source = ctx.source().accept(this.positionVisitor);
            this.state.move_card(source, dest);
        }
        else if (ctx.source().positionset() !== undefined) {
            var removed_2 = [];
            // First of all, add all the cards to the destination
            new positionSetVisitor_1.PositionSetVisitor(this.state, function (source) {
                var card = _this.state.get_card(source);
                if (card !== card_1.SpecialCard.Empty) {
                    _this.state.add_card(card, dest);
                    removed_2.push(source);
                }
                return true;
            }).visit(ctx.source().positionset());
            // Now go back and remove the cards in reverse order of position so that card shifting isn't an issue
            removed_2.sort(function (_a, _b) {
                var s0 = _a[1], p0 = _a[2];
                var s1 = _b[1], p1 = _b[2];
                if (s0 === s1) {
                    return p1 - p0;
                }
                else {
                    return s1 - s0;
                }
            });
            for (var _i = 0, removed_1 = removed_2; _i < removed_1.length; _i++) {
                var pos = removed_1[_i];
                this.state.remove_card(pos);
            }
        }
        else {
            var card = ctx.source().accept(this.cardVisitor);
            if (card === undefined) {
                console.log("Card is undefined ", ctx.source().text);
                return;
            }
            this.state.add_card(card, dest);
        }
    };
    Interpreter.prototype.visitAssign = function (ctx) {
        var _a;
        var id = ctx.variable().text;
        var _b = (_a = this.state.variables.get(id)) !== null && _a !== void 0 ? _a : ["NULL", undefined], type = _b[0], _ = _b[1];
        switch (type) {
            case "NULL":
                break;
            // It is safe to use forced types (!) from this points on as undefined variables will have type NULL
            case "INT":
                this.state.variables.get(id)[1] = ctx.term().accept(this.numberVisitor);
                break;
            case "CARD":
                this.state.variables.get(id)[1] = ctx.term().accept(this.cardVisitor);
                break;
        }
    };
    Interpreter.prototype.visitIf = function (ctx) {
        var symbol = ctx.bexpr().getChild(1).text;
        var termA = ctx.bexpr().getChild(0);
        var termB = ctx.bexpr().getChild(2);
        switch (symbol) {
            case "==":
                if (this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "!=":
                if (!this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "<<":
                if (termA.accept(this.numberVisitor) < termB.accept(this.numberVisitor)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case ">>":
                if (termA.accept(this.numberVisitor) > termB.accept(this.numberVisitor)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case ">=":
                if (termA.accept(this.numberVisitor) >= termB.accept(this.numberVisitor)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "<=":
                if (termA.accept(this.numberVisitor) <= termB.accept(this.numberVisitor)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "=?":
                if (this.comparator.contains(termA.accept(this.termVisitor), termB)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "!?":
                if (!this.comparator.contains(termA.accept(this.termVisitor), termB)) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
        }
        // Accounts for else statement
        if (ctx.childCount > 5) { // this accounts for if statements with no else clause
            ctx._antecedent.accept(this);
        }
    };
    Interpreter.prototype.visitFor = function (ctx) {
        var _this = this;
        var loopVar = ctx.ID().text;
        if (ctx.set().intset() !== undefined || ctx.set().playerset() !== undefined) {
            new intSetVisitor_1.IntSetVisitor(this.state, function (i) {
                _this.state.variables.set(loopVar, ["INT", i]);
                ctx.block().accept(_this);
                return true;
            }).visit(ctx.set());
        }
        else if (ctx.set().positionset() !== undefined) {
            // TODO - this doesn't work as expected
            console.error("LOOP DOESN'T PERFORM EXPECTED BEHAVIOUR. NEED TO DO A HARD COPY OF ALL CARDS, REALLY");
            new positionSetVisitor_1.PositionSetVisitor(this.state, function (pos) {
                var c = _this.state.get_card(pos);
                _this.state.variables.set(loopVar, ["CARD", c]);
                ctx.block().accept(_this);
                return true;
            }).visit(ctx.set());
        }
    };
    Interpreter.prototype.visitOn_move = function (ctx) {
        this.state.move_catches.push(new move_catch_1.MoveCatch(ctx.getChild(2), ctx.getChild(3), ctx.block()));
    };
    Interpreter.prototype.visitOn_action = function (ctx) {
        this.state.action_catches.set(ctx.ID().text, ctx.block());
    };
    Interpreter.prototype.visitUpdateTurn = function (ctx) {
        if (ctx.player() !== undefined) {
            this.state.turn = new numberVisitor_1.NumberVisitor(this.state).visit(ctx.player());
        }
        else {
            this.state.turn = this.state.turn + 1;
            if (this.state.turn >= this.state.num_players) {
                this.state.turn = 0;
            }
        }
    };
    Interpreter.prototype.visitCancel = function (ctx) {
        this.running = false;
        this.state.move_info.cancelled = true;
    };
    Interpreter.prototype.visit = function (tree) {
        tree.accept(this);
    };
    Interpreter.prototype.visitChildren = function (node) {
        for (var i = 0; i < node.childCount; i++) {
            if (this.running) {
                node.getChild(i).accept(this);
            }
        }
    };
    Interpreter.prototype.visitTerminal = function (node) { };
    Interpreter.prototype.visitErrorNode = function (node) { };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
