"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
var interpreter_1 = require("../engine/interpreter");
var comparator_1 = require("../state/comparator");
var Handler = /** @class */ (function () {
    function Handler(state, ui) {
        this.state = state;
        this.ui = ui;
    }
    // Call the API. Request some change to the state
    Handler.prototype.call = function (request) {
        switch (request.type) {
            case "MOVE":
                this.state.move_info.player = request.player;
                this.state.move_info.source = [request.source.area, request.source.stack, request.source.position];
                this.state.move_info.dest = [request.destination.area, request.destination.stack, request.destination.position];
                this.state.move_info.card = this.state.get_card(this.state.move_info.source);
                for (var _i = 0, _a = this.state.move_catches; _i < _a.length; _i++) {
                    var moveCatch = _a[_i];
                    if (moveCatch.check(this.state)) {
                        var card = this.state.get_card(this.state.move_info.source);
                        if (!this.state.move_info.cancelled &&
                            new comparator_1.Comparator(this.state).equals(card, this.state.move_info.card)) {
                            this.state.move_card(this.state.move_info.source, this.state.move_info.dest);
                        }
                        break;
                    }
                }
                this.state.reset_move_info();
                break;
            case "ACTION":
                var subTree = this.state.action_catches.get(request.id);
                if (subTree !== undefined) {
                    new interpreter_1.Interpreter(this.state).visit(subTree);
                }
                break;
        }
        this.notify();
    };
    // Notify the UI that there has been some change to the state
    Handler.prototype.notify = function () {
        this.ui.update(this.state);
    };
    return Handler;
}());
exports.Handler = Handler;
