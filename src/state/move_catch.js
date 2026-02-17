"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveCatch = void 0;
var MoveCatch = /** @class */ (function () {
    function MoveCatch(source, dest, subTree) {
        this.source = source;
        this.dest = dest;
        this.subTree = subTree;
    }
    /**
        Checks the move source, dest and subtree to see if this move catch will block
        @return whether the movement is allowed
    */
    MoveCatch.prototype.check = function (state) {
        return false;
    };
    return MoveCatch;
}());
exports.MoveCatch = MoveCatch;
