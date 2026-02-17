"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparator = void 0;
const setVisitor_1 = require("../calc/setVisitor");
class Comparator {
    state;
    constructor(state) {
        this.state = state;
    }
    equals(a, b) {
        if (a === undefined || b === undefined) {
            return false;
        }
        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        return a === b;
    }
    contains(left, set) {
        let contains = false;
        new setVisitor_1.SetVisitor(this.state, (right) => {
            if (this.equals(left, right)) {
                contains = true;
                return false;
            }
            return true;
        }).visit(set);
        return contains;
    }
}
exports.Comparator = Comparator;
//# sourceMappingURL=comparator.js.map