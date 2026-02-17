"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringVisitor = void 0;
const dealLexer_1 = require("../language/dealLexer");
const numberVisitor_1 = require("./numberVisitor");
class StringVisitor {
    state;
    constructor(state) {
        this.state = state;
    }
    visitVariable(ctx) {
        // TODO string variables
        return "VARIABLE";
    }
    visitArgs;
    visitArg;
    visitArearef(ctx) {
        if (ctx.player() !== undefined) {
            return new numberVisitor_1.NumberVisitor(this.state).visit(ctx.player()).toString();
        }
        else {
            return (ctx.ID() ?? "").toString();
        }
    }
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        if (node.childCount < 1) {
            return undefined;
        }
        return node.getChild(0).accept(this);
    }
    visitTerminal(node) {
        if (node.symbol.type === dealLexer_1.dealLexer.NUMBER) {
            return node.text;
        }
        else if (node.symbol.type === dealLexer_1.dealLexer.STRING) {
            return node.text.slice(1, -1); // remove double quotes from either end
        }
        return undefined;
    }
    visitErrorNode(node) {
        return undefined;
    }
}
exports.StringVisitor = StringVisitor;
//# sourceMappingURL=stringVisitor.js.map