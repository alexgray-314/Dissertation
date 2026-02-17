"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberVisitor = void 0;
var dealLexer_1 = require("../language/dealLexer");
var NumberVisitor = /** @class */ (function () {
    function NumberVisitor(state) {
        this.state = state;
    }
    NumberVisitor.prototype.visitPlayer = function (ctx) {
        var _a;
        var ID = ctx.getChild(1);
        switch (ID.text) {
            case '/':
                return (_a = this.state.get_move_player()) !== null && _a !== void 0 ? _a : NaN;
            case '.':
                return this.state.get_turn_player();
            case '@':
                return this.state.get_action_player();
            default:
                return ID.accept(this);
        }
    };
    NumberVisitor.prototype.visitVariable = function (ctx) {
        var _a;
        var _b = (_a = this.state.variables.get(ctx.ID().text)) !== null && _a !== void 0 ? _a : [undefined, undefined], _ = _b[0], value = _b[1];
        if (typeof value === typeof 0) {
            return Number(value);
        }
        return NaN;
    };
    NumberVisitor.prototype.visitTerm = function (ctx) {
        var _a;
        var property = (_a = ctx.property()) === null || _a === void 0 ? void 0 : _a.ID().text;
        // NOTE: this will only get primitive properties. TODO deal with complex objects
        var term = ctx.getChild(0).accept(this);
        if (property !== undefined && typeof term === 'object') {
            return Number(term[property]);
        }
        return term;
    };
    NumberVisitor.prototype.visitAexpr = function (ctx) {
        return ctx.getChild(0).accept(this);
    };
    NumberVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    NumberVisitor.prototype.visitChildren = function (node) {
        if (node.childCount < 1) {
            return NaN;
        }
        return node.getChild(0).accept(this);
    };
    NumberVisitor.prototype.visitTerminal = function (node) {
        if (node.symbol.type === dealLexer_1.dealLexer.NUMBER) {
            return Number(node.text);
        }
        return NaN;
    };
    NumberVisitor.prototype.visitErrorNode = function (node) {
        return NaN;
    };
    return NumberVisitor;
}());
exports.NumberVisitor = NumberVisitor;
