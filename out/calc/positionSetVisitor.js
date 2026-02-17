"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionSetVisitor = void 0;
const intSetVisitor_1 = require("./intSetVisitor");
const stringVisitor_1 = require("./stringVisitor");
class PositionSetVisitor {
    state;
    task;
    constructor(state, task) {
        this.state = state;
        this.task = task;
    }
    visitSet(ctx) {
        ctx.getChild(0).accept(this);
    }
    visitPositionset(ctx) {
        const areaID = new stringVisitor_1.StringVisitor(this.state).visit(ctx.arearef()) ?? "";
        new intSetVisitor_1.IntSetVisitor(this.state, (stack) => {
            new intSetVisitor_1.IntSetVisitor(this.state, (pos) => {
                if (!this.task([areaID, stack, pos])) {
                    stack = Infinity; // this is a bit of a hack, to get out of the loop one nest up
                    return false;
                }
                return pos < ((this.state.areas.get(areaID)?.stacks[stack]?.cards.length) ?? -Infinity);
            }).visit(ctx.getChild(4));
            return stack < ((this.state.areas.get(areaID)?.stacks.length) ?? -Infinity);
        }).visit(ctx.getChild(2));
    }
    visit(tree) {
        tree.accept(this);
    }
    visitChildren(node) { }
    visitTerminal(node) { }
    visitErrorNode(node) { }
}
exports.PositionSetVisitor = PositionSetVisitor;
//# sourceMappingURL=positionSetVisitor.js.map