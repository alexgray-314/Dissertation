"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermVisitor = void 0;
const dealLexer_1 = require("../language/dealLexer");
const numberVisitor_1 = require("./numberVisitor");
const cardVisitor_1 = require("./cardVisitor");
const card_1 = require("../model/card");
class TermVisitor {
    state;
    constructor(state) {
        this.state = state;
    }
    visitPlayer(ctx) {
        return new numberVisitor_1.NumberVisitor(this.state).visit(ctx);
    }
    visitFunction_call;
    visitVariable(ctx) {
        let [type, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (typeof value === typeof 0 && type === "INT") {
            return Number(value);
        }
        else if (type === "CARD") {
            return value;
        }
        return undefined;
    }
    visitArgs;
    visitArg;
    visitArearef;
    visitArea;
    visitStack;
    visitPosition(ctx) {
        return new cardVisitor_1.CardVisitor(this.state).visit(ctx);
    }
    visitTerm(ctx) {
        const property = ctx.property()?.ID().text;
        // NOTE: this will only get primitive properties. TODO deal with complex objects
        const term = ctx.getChild(0).accept(this);
        console.log("TERM IS", term);
        if (property !== undefined && typeof term === 'object') {
            console.log("trying to get property", property);
            return term[property];
        }
        return term;
    }
    visitAexpr;
    visitSet;
    visitIntset;
    visitPositionset;
    visitPlayerset;
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        return node.getChild(0).accept(this);
    }
    visitTerminal(node) {
        if (node.symbol.type === dealLexer_1.dealLexer.NUMBER) {
            return Number(node.text);
        }
        else if (node.symbol.type === dealLexer_1.dealLexer.STRING) {
            return node.text.slice(1, -1); // remove double quotes from either end
        }
        else if (node.symbol.type === dealLexer_1.dealLexer.CARD) {
            return new card_1.StandardCard(node.text);
        }
        return undefined;
    }
    visitErrorNode(node) {
        return undefined;
    }
}
exports.TermVisitor = TermVisitor;
//# sourceMappingURL=termVisitor.js.map