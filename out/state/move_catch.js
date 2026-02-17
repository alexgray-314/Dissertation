"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveCatch = void 0;
class MoveCatch {
    source;
    dest;
    subTree;
    constructor(source, dest, subTree) {
        this.source = source;
        this.dest = dest;
        this.subTree = subTree;
    }
    /**
        Checks the move source, dest and subtree to see if this move catch will block
        @return whether the movement is allowed
    */
    check(state) {
        return false;
    }
}
exports.MoveCatch = MoveCatch;
//# sourceMappingURL=move_catch.js.map