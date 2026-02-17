"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionSetVisitor = void 0;
var intSetVisitor_1 = require("./intSetVisitor");
var stringVisitor_1 = require("./stringVisitor");
var PositionSetVisitor = /** @class */ (function () {
    function PositionSetVisitor(state, task) {
        this.state = state;
        this.task = task;
    }
    PositionSetVisitor.prototype.visitSet = function (ctx) {
        ctx.getChild(0).accept(this);
    };
    PositionSetVisitor.prototype.visitPositionset = function (ctx) {
        var _this = this;
        var _a;
        var areaID = (_a = new stringVisitor_1.StringVisitor(this.state).visit(ctx.arearef())) !== null && _a !== void 0 ? _a : "";
        new intSetVisitor_1.IntSetVisitor(this.state, function (stack) {
            var _a, _b;
            new intSetVisitor_1.IntSetVisitor(_this.state, function (pos) {
                var _a, _b, _c;
                if (!_this.task([areaID, stack, pos])) {
                    stack = Infinity; // this is a bit of a hack, to get out of the loop one nest up
                    return false;
                }
                return pos < ((_c = ((_b = (_a = _this.state.areas.get(areaID)) === null || _a === void 0 ? void 0 : _a.stacks[stack]) === null || _b === void 0 ? void 0 : _b.cards.length)) !== null && _c !== void 0 ? _c : -Infinity);
            }).visit(ctx.getChild(4));
            return stack < ((_b = ((_a = _this.state.areas.get(areaID)) === null || _a === void 0 ? void 0 : _a.stacks.length)) !== null && _b !== void 0 ? _b : -Infinity);
        }).visit(ctx.getChild(2));
    };
    PositionSetVisitor.prototype.visit = function (tree) {
        tree.accept(this);
    };
    PositionSetVisitor.prototype.visitChildren = function (node) { };
    PositionSetVisitor.prototype.visitTerminal = function (node) { };
    PositionSetVisitor.prototype.visitErrorNode = function (node) { };
    return PositionSetVisitor;
}());
exports.PositionSetVisitor = PositionSetVisitor;
