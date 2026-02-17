"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermVisitor = void 0;
var dealLexer_1 = require("../language/dealLexer");
var numberVisitor_1 = require("./numberVisitor");
var cardVisitor_1 = require("./cardVisitor");
var card_1 = require("../model/card");
var TermVisitor = /** @class */ (function () {
    function TermVisitor(state) {
        this.state = state;
    }
    TermVisitor.prototype.visitPlayer = function (ctx) {
        return new numberVisitor_1.NumberVisitor(this.state).visit(ctx);
    };
    TermVisitor.prototype.visitVariable = function (ctx) {
        var _a;
        var _b = (_a = this.state.variables.get(ctx.ID().text)) !== null && _a !== void 0 ? _a : [undefined, undefined], type = _b[0], value = _b[1];
        if (typeof value === typeof 0 && type === "INT") {
            return Number(value);
        }
        else if (type === "CARD") {
            return value;
        }
        return undefined;
    };
    TermVisitor.prototype.visitPosition = function (ctx) {
        return new cardVisitor_1.CardVisitor(this.state).visit(ctx);
    };
    TermVisitor.prototype.visitTerm = function (ctx) {
        var _a;
        var property = (_a = ctx.property()) === null || _a === void 0 ? void 0 : _a.ID().text;
        // NOTE: this will only get primitive properties. TODO deal with complex objects
        var term = ctx.getChild(0).accept(this);
        console.log("TERM IS", term);
        if (property !== undefined && typeof term === 'object') {
            console.log("trying to get property", property);
            return term[property];
        }
        return term;
    };
    TermVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    TermVisitor.prototype.visitChildren = function (node) {
        return node.getChild(0).accept(this);
    };
    TermVisitor.prototype.visitTerminal = function (node) {
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
    };
    TermVisitor.prototype.visitErrorNode = function (node) {
        return undefined;
    };
    return TermVisitor;
}());
exports.TermVisitor = TermVisitor;
