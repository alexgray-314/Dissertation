"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardCard = exports.SpecialCard = void 0;
var SpecialCard;
(function (SpecialCard) {
    SpecialCard[SpecialCard["Empty"] = 0] = "Empty";
    SpecialCard[SpecialCard["Joker"] = 1] = "Joker";
})(SpecialCard || (exports.SpecialCard = SpecialCard = {}));
var StandardCard = /** @class */ (function () {
    // Value #<rank><suit>
    // E.g. #4S == the 4 of spades
    function StandardCard(value) {
        this.rank = value.slice(1, -1).toLowerCase();
        var suit = value.slice(-1);
        // Convert the suit from a single digit to the full name
        if (/[hH]/.test(suit)) {
            this.suit = "hearts";
        }
        else if (/[dD]/.test(suit)) {
            this.suit = "diamonds";
        }
        else if (/[cC]/.test(suit)) {
            this.suit = "clubs";
        }
        else if (/[sS]/.test(suit)) {
            this.suit = "spades";
        }
        else {
            throw new Error("Invalid suit: " + value);
        }
    }
    return StandardCard;
}());
exports.StandardCard = StandardCard;
