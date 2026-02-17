"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardVisitor = void 0;
const card_1 = require("../model/card");
const dealLexer_1 = require("../language/dealLexer");
const positionVisitor_1 = require("./positionVisitor");
// Either get a position or a card from a tree
class CardVisitor {
    state;
    constructor(state) {
        this.state = state;
    }
    visitPosition(ctx) {
        const pos = ctx.accept(new positionVisitor_1.PositionVisitor(this.state));
        if (pos !== undefined) {
            return this.state.get_card(pos);
        }
        return undefined;
    }
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        for (let i = 0; i < node.childCount; i++) {
            return node.getChild(i).accept(this);
        }
    }
    visitTerminal(node) {
        if (node.symbol.type === dealLexer_1.dealLexer.CARD) {
            return new card_1.StandardCard(node.text);
        }
        return undefined;
    }
    visitErrorNode(node) {
        return undefined;
    }
}
exports.CardVisitor = CardVisitor;
//# sourceMappingURL=cardVisitor.js.map