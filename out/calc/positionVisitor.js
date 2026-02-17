"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionVisitor = void 0;
const numberVisitor_1 = require("./numberVisitor");
const stringVisitor_1 = require("./stringVisitor");
class PositionVisitor {
    state;
    numberEvaluator;
    constructor(state) {
        this.state = state;
        this.numberEvaluator = new numberVisitor_1.NumberVisitor(this.state);
    }
    visitPosition(ctx) {
        if (ctx.MOVE_DEST() !== undefined) {
            return this.state.move_info.dest;
        }
        if (ctx.MOVE_SOURCE() !== undefined) {
            return this.state.move_info.source;
        }
        const areaID = new stringVisitor_1.StringVisitor(this.state).visit(ctx.arearef()) ?? "";
        const stack = this.numberEvaluator.visit(ctx.getChild(2));
        const pos = this.numberEvaluator.visit(ctx.getChild(4));
        if (!Number.isNaN(stack) && !Number.isNaN(pos)) {
            return [areaID, stack, pos];
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
        return undefined;
    }
    visitErrorNode(node) {
        return undefined;
    }
}
exports.PositionVisitor = PositionVisitor;
//# sourceMappingURL=positionVisitor.js.map