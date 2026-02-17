"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntSetVisitor = void 0;
const numberVisitor_1 = require("./numberVisitor");
class IntSetVisitor {
    state;
    numberVisitor;
    task;
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    constructor(state, task) {
        this.state = state;
        this.numberVisitor = new numberVisitor_1.NumberVisitor(state);
        this.task = task;
    }
    visitSet(ctx) {
        ctx.getChild(0).accept(this);
    }
    visitIntset(ctx) {
        const start = ctx.getChild(0).accept(this.numberVisitor);
        const end = ctx.childCount > 2 ? ctx.getChild(2).accept(this.numberVisitor) : Infinity;
        for (let i = start; i <= end; i++) {
            if (!this.task(i)) {
                return;
            }
            ;
        }
    }
    visitPlayerset(ctx) {
        for (let p = 0; p < this.state.num_players; p++) {
            if (!this.task(p)) {
                return;
            }
            ;
        }
    }
    visit(tree) {
        tree.accept(this);
    }
    visitChildren(node) { }
    visitTerminal(node) { }
    visitErrorNode(node) { }
}
exports.IntSetVisitor = IntSetVisitor;
//# sourceMappingURL=intSetVisitor.js.map