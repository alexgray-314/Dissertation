"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVisitor = void 0;
const intSetVisitor_1 = require("./intSetVisitor");
const positionSetVisitor_1 = require("./positionSetVisitor");
class SetVisitor {
    state;
    task;
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    constructor(state, task) {
        this.state = state;
        this.task = task;
    }
    visitSet(ctx) {
        const property = ctx.property()?.ID().text;
        if (property !== undefined && ctx.positionset() !== undefined) {
            new positionSetVisitor_1.PositionSetVisitor(this.state, (pos) => {
                const card = this.state.get_card(pos);
                if (typeof card === 'object') {
                    return this.task(card[property]);
                }
                else {
                    return this.task(undefined);
                }
            }).visit(ctx.positionset());
        }
        else {
            ctx.getChild(0).accept(this);
        }
    }
    visitIntset(ctx) {
        new intSetVisitor_1.IntSetVisitor(this.state, this.task).visit(ctx);
    }
    visitPositionset(ctx) {
        new positionSetVisitor_1.PositionSetVisitor(this.state, (pos) => {
            const card = this.state.get_card(pos);
            return this.task(card);
        }).visit(ctx);
    }
    visitPlayerset(ctx) {
        new intSetVisitor_1.IntSetVisitor(this.state, this.task).visit(ctx);
    }
    visit(tree) {
        tree.accept(this);
    }
    visitChildren(node) { }
    visitTerminal(node) { }
    visitErrorNode(node) { }
}
exports.SetVisitor = SetVisitor;
//# sourceMappingURL=setVisitor.js.map