"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardVisitor = void 0;
var card_1 = require("../model/card");
var dealLexer_1 = require("../language/dealLexer");
var positionVisitor_1 = require("./positionVisitor");
// Either get a position or a card from a tree
var CardVisitor = /** @class */ (function () {
    function CardVisitor(state) {
        this.state = state;
    }
    CardVisitor.prototype.visitPosition = function (ctx) {
        var pos = ctx.accept(new positionVisitor_1.PositionVisitor(this.state));
        if (pos !== undefined) {
            return this.state.get_card(pos);
        }
        return undefined;
    };
    CardVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    CardVisitor.prototype.visitChildren = function (node) {
        for (var i = 0; i < node.childCount; i++) {
            return node.getChild(i).accept(this);
        }
    };
    CardVisitor.prototype.visitTerminal = function (node) {
        if (node.symbol.type === dealLexer_1.dealLexer.CARD) {
            return new card_1.StandardCard(node.text);
        }
        return undefined;
    };
    CardVisitor.prototype.visitErrorNode = function (node) {
        return undefined;
    };
    return CardVisitor;
}());
exports.CardVisitor = CardVisitor;
