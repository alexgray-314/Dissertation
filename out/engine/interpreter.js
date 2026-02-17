"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
const cardVisitor_1 = require("../calc/cardVisitor");
const numberVisitor_1 = require("../calc/numberVisitor");
const card_1 = require("../model/card");
const positionVisitor_1 = require("../calc/positionVisitor");
const comparator_1 = require("../state/comparator");
const termVisitor_1 = require("../calc/termVisitor");
const intSetVisitor_1 = require("../calc/intSetVisitor");
const positionSetVisitor_1 = require("../calc/positionSetVisitor");
const move_catch_1 = require("../state/move_catch");
class Interpreter {
    state;
    positionVisitor;
    cardVisitor;
    numberVisitor;
    termVisitor;
    comparator;
    running;
    constructor(state) {
        this.state = state;
        this.positionVisitor = new positionVisitor_1.PositionVisitor(state);
        this.cardVisitor = new cardVisitor_1.CardVisitor(this.state);
        this.numberVisitor = new numberVisitor_1.NumberVisitor(this.state);
        this.termVisitor = new termVisitor_1.TermVisitor(this.state);
        this.comparator = new comparator_1.Comparator(this.state);
        this.running = true;
    }
    visitDefinition(ctx) {
        const type = (ctx._type.text ?? "").toUpperCase();
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
    }
    visitMove(ctx) {
        const dest = ctx.destination().accept(this.positionVisitor);
        if (dest === undefined) {
            console.log("Destination is undefined: ", ctx.destination().text);
            return;
        }
        if (ctx.source().position() !== undefined) {
            const source = ctx.source().accept(this.positionVisitor);
            this.state.move_card(source, dest);
        }
        else if (ctx.source().positionset() !== undefined) {
            const removed = [];
            // First of all, add all the cards to the destination
            new positionSetVisitor_1.PositionSetVisitor(this.state, (source) => {
                const card = this.state.get_card(source);
                if (card !== card_1.SpecialCard.Empty) {
                    this.state.add_card(card, dest);
                    removed.push(source);
                }
                return true;
            }).visit(ctx.source().positionset());
            // Now go back and remove the cards in reverse order of position so that card shifting isn't an issue
            removed.sort(([, s0, p0], [, s1, p1]) => {
                if (s0 === s1) {
                    return p1 - p0;
                }
                else {
                    return s1 - s0;
                }
            });
            for (let pos of removed) {
                this.state.remove_card(pos);
            }
        }
        else {
            const card = ctx.source().accept(this.cardVisitor);
            if (card === undefined) {
                console.log("Card is undefined ", ctx.source().text);
                return;
            }
            this.state.add_card(card, dest);
        }
    }
    visitAssign(ctx) {
        const id = ctx.variable().text;
        const [type, _] = this.state.variables.get(id) ?? ["NULL", undefined];
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
    }
    visitIf(ctx) {
        const symbol = ctx.bexpr().getChild(1).text;
        const termA = ctx.bexpr().getChild(0);
        const termB = ctx.bexpr().getChild(2);
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
    }
    visitFor(ctx) {
        const loopVar = ctx.ID().text;
        if (ctx.set().intset() !== undefined || ctx.set().playerset() !== undefined) {
            new intSetVisitor_1.IntSetVisitor(this.state, (i) => {
                this.state.variables.set(loopVar, ["INT", i]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());
        }
        else if (ctx.set().positionset() !== undefined) {
            // TODO - this doesn't work as expected
            console.error("LOOP DOESN'T PERFORM EXPECTED BEHAVIOUR. NEED TO DO A HARD COPY OF ALL CARDS, REALLY");
            new positionSetVisitor_1.PositionSetVisitor(this.state, (pos) => {
                const c = this.state.get_card(pos);
                this.state.variables.set(loopVar, ["CARD", c]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());
        }
    }
    visitOn_move(ctx) {
        this.state.move_catches.push(new move_catch_1.MoveCatch(ctx.getChild(2), ctx.getChild(3), ctx.block()));
    }
    visitOn_action(ctx) {
        this.state.action_catches.set(ctx.ID().text, ctx.block());
    }
    visitUpdateTurn(ctx) {
        if (ctx.player() !== undefined) {
            this.state.turn = new numberVisitor_1.NumberVisitor(this.state).visit(ctx.player());
        }
        else {
            this.state.turn = this.state.turn + 1;
            if (this.state.turn >= this.state.num_players) {
                this.state.turn = 0;
            }
        }
    }
    visitCancel(ctx) {
        this.running = false;
        this.state.move_info.cancelled = true;
    }
    visit(tree) {
        tree.accept(this);
    }
    visitChildren(node) {
        for (let i = 0; i < node.childCount; i++) {
            if (this.running) {
                node.getChild(i).accept(this);
            }
        }
    }
    visitTerminal(node) { }
    visitErrorNode(node) { }
}
exports.Interpreter = Interpreter;
//# sourceMappingURL=interpreter.js.map