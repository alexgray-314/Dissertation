"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionVisitor = void 0;
var numberVisitor_1 = require("./numberVisitor");
var stringVisitor_1 = require("./stringVisitor");
var PositionVisitor = /** @class */ (function () {
    function PositionVisitor(state) {
        this.state = state;
        this.numberEvaluator = new numberVisitor_1.NumberVisitor(this.state);
    }
    PositionVisitor.prototype.visitPosition = function (ctx) {
        var _a;
        if (ctx.MOVE_DEST() !== undefined) {
            return this.state.move_info.dest;
        }
        if (ctx.MOVE_SOURCE() !== undefined) {
            return this.state.move_info.source;
        }
        var areaID = (_a = new stringVisitor_1.StringVisitor(this.state).visit(ctx.arearef())) !== null && _a !== void 0 ? _a : "";
        var stack = this.numberEvaluator.visit(ctx.getChild(2));
        var pos = this.numberEvaluator.visit(ctx.getChild(4));
        if (!Number.isNaN(stack) && !Number.isNaN(pos)) {
            return [areaID, stack, pos];
        }
        return undefined;
    };
    PositionVisitor.prototype.visit = function (tree) {
        return tree.accept(this);
    };
    PositionVisitor.prototype.visitChildren = function (node) {
        for (var i = 0; i < node.childCount; i++) {
            return node.getChild(i).accept(this);
        }
    };
    PositionVisitor.prototype.visitTerminal = function (node) {
        return undefined;
    };
    PositionVisitor.prototype.visitErrorNode = function (node) {
        return undefined;
    };
    return PositionVisitor;
}());
exports.PositionVisitor = PositionVisitor;
