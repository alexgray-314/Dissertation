"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntSetVisitor = void 0;
var numberVisitor_1 = require("./numberVisitor");
var IntSetVisitor = /** @class */ (function () {
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    function IntSetVisitor(state, task) {
        this.state = state;
        this.numberVisitor = new numberVisitor_1.NumberVisitor(state);
        this.task = task;
    }
    IntSetVisitor.prototype.visitSet = function (ctx) {
        ctx.getChild(0).accept(this);
    };
    IntSetVisitor.prototype.visitIntset = function (ctx) {
        var start = ctx.getChild(0).accept(this.numberVisitor);
        var end = ctx.childCount > 2 ? ctx.getChild(2).accept(this.numberVisitor) : Infinity;
        for (var i = start; i <= end; i++) {
            if (!this.task(i)) {
                return;
            }
            ;
        }
    };
    IntSetVisitor.prototype.visitPlayerset = function (ctx) {
        for (var p = 0; p < this.state.num_players; p++) {
            if (!this.task(p)) {
                return;
            }
            ;
        }
    };
    IntSetVisitor.prototype.visit = function (tree) {
        tree.accept(this);
    };
    IntSetVisitor.prototype.visitChildren = function (node) { };
    IntSetVisitor.prototype.visitTerminal = function (node) { };
    IntSetVisitor.prototype.visitErrorNode = function (node) { };
    return IntSetVisitor;
}());
exports.IntSetVisitor = IntSetVisitor;
