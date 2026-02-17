"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparator = void 0;
var setVisitor_1 = require("../calc/setVisitor");
var Comparator = /** @class */ (function () {
    function Comparator(state) {
        this.state = state;
    }
    Comparator.prototype.equals = function (a, b) {
        if (a === undefined || b === undefined) {
            return false;
        }
        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        return a === b;
    };
    Comparator.prototype.contains = function (left, set) {
        var _this = this;
        var contains = false;
        new setVisitor_1.SetVisitor(this.state, function (right) {
            if (_this.equals(left, right)) {
                contains = true;
                return false;
            }
            return true;
        }).visit(set);
        return contains;
    };
    return Comparator;
}());
exports.Comparator = Comparator;
