"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberVisitor = void 0;
const dealLexer_1 = require("../language/dealLexer");
class NumberVisitor {
    state;
    constructor(state) {
        this.state = state;
    }
    visitPlayer(ctx) {
        const ID = ctx.getChild(1);
        switch (ID.text) {
            case '/':
                return this.state.get_move_player() ?? NaN;
            case '.':
                return this.state.get_turn_player();
            case '@':
                return this.state.get_action_player();
            default:
                return ID.accept(this);
        }
    }
    visitAssign;
    visitFunction_call;
    visitUpdateTurn;
    visitVariable(ctx) {
        let [_, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (typeof value === typeof 0) {
            return Number(value);
        }
        return NaN;
    }
    visitArgs;
    visitArg;
    visitArearef;
    visitArea;
    visitStack;
    visitPosition;
    visitTerm(ctx) {
        const property = ctx.property()?.ID().text;
        // NOTE: this will only get primitive properties. TODO deal with complex objects
        const term = ctx.getChild(0).accept(this);
        if (property !== undefined && typeof term === 'object') {
            return Number(term[property]);
        }
        return term;
    }
    visitProperty;
    visitBexpr;
    visitAexpr(ctx) {
        return ctx.getChild(0).accept(this);
    }
    visitSet;
    visitIntset;
    visitPositionset;
    visitPlayerset;
    visitMove_catch;
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        if (node.childCount < 1) {
            return NaN;
        }
        return node.getChild(0).accept(this);
    }
    visitTerminal(node) {
        if (node.symbol.type === dealLexer_1.dealLexer.NUMBER) {
            return Number(node.text);
        }
        return NaN;
    }
    visitErrorNode(node) {
        return NaN;
    }
}
exports.NumberVisitor = NumberVisitor;
//# sourceMappingURL=numberVisitor.js.map