"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVisitor = void 0;
var intSetVisitor_1 = require("./intSetVisitor");
var positionSetVisitor_1 = require("./positionSetVisitor");
var SetVisitor = /** @class */ (function () {
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    function SetVisitor(state, task) {
        this.state = state;
        this.task = task;
    }
    SetVisitor.prototype.visitSet = function (ctx) {
        var _this = this;
        var _a;
        var property = (_a = ctx.property()) === null || _a === void 0 ? void 0 : _a.ID().text;
        if (property !== undefined && ctx.positionset() !== undefined) {
            new positionSetVisitor_1.PositionSetVisitor(this.state, function (pos) {
                var card = _this.state.get_card(pos);
                if (typeof card === 'object') {
                    return _this.task(card[property]);
                }
                else {
                    return _this.task(undefined);
                }
            }).visit(ctx.positionset());
        }
        else {
            ctx.getChild(0).accept(this);
        }
    };
    SetVisitor.prototype.visitIntset = function (ctx) {
        new intSetVisitor_1.IntSetVisitor(this.state, this.task).visit(ctx);
    };
    SetVisitor.prototype.visitPositionset = function (ctx) {
        var _this = this;
        new positionSetVisitor_1.PositionSetVisitor(this.state, function (pos) {
            var card = _this.state.get_card(pos);
            return _this.task(card);
        }).visit(ctx);
    };
    SetVisitor.prototype.visitPlayerset = function (ctx) {
        new intSetVisitor_1.IntSetVisitor(this.state, this.task).visit(ctx);
    };
    SetVisitor.prototype.visit = function (tree) {
        tree.accept(this);
    };
    SetVisitor.prototype.visitChildren = function (node) { };
    SetVisitor.prototype.visitTerminal = function (node) { };
    SetVisitor.prototype.visitErrorNode = function (node) { };
    return SetVisitor;
}());
exports.SetVisitor = SetVisitor;
