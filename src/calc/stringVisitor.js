"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringVisitor = void 0;
var dealLexer_1 = require("../language/dealLexer");
var numberVisitor_1 = require("./numberVisitor");
var StringVisitor = /** @class */ (function () {
    function StringVisitor(state) {
        this.state = state;
    }
    StringVisitor.prototype.visitVariable = function (ctx) {
        // TODO string variables
        return "VARIABLE";
    };
    StringVisitor.prototype.visitArearef = function (ctx) {
        var _a;
        if (ctx.player() !== undefined) {
            return new numberVisitor_1.NumberVisitor(this.state).visit(ctx.player()).toString();
        }
        else {
            return ((_a = ctx.ID()) !== null && _a !== void 0 ? _a : "").toString();
        }
    };
    StringVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    StringVisitor.prototype.visitChildren = function (node) {
        if (node.childCount < 1) {
            return undefined;
        }
        return node.getChild(0).accept(this);
    };
    StringVisitor.prototype.visitTerminal = function (node) {
        if (node.symbol.type === dealLexer_1.dealLexer.NUMBER) {
            return node.text;
        }
        else if (node.symbol.type === dealLexer_1.dealLexer.STRING) {
            return node.text.slice(1, -1); // remove double quotes from either end
        }
        return undefined;
    };
    StringVisitor.prototype.visitErrorNode = function (node) {
        return undefined;
    };
    return StringVisitor;
}());
exports.StringVisitor = StringVisitor;
