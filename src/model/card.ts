type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type Rank = string;

export type Card = StandardCard | SpecialCard.Empty | SpecialCard.Joker;

export enum SpecialCard {Empty, Joker}

export class StandardCard {
    rank : Rank; // TODO make rank and suit an enum so that it can be converted to a number
    suit : Suit; 

    // Value #<rank><suit>
    // E.g. #4S == the 4 of spades
    constructor(value : string) {
        this.rank = value.slice(1, -1).toLowerCase();
        const suit = value.slice(-1);

        // Convert the suit from a single digit to the full name
        if (/[hH]/.test(suit)) {
            this.suit = "hearts";
        } else if (/[dD]/.test(suit)) {
            this.suit = "diamonds";
        } else if (/[cC]/.test(suit)) {
            this.suit = "clubs";
        } else if (/[sS]/.test(suit)) {
            this.suit = "spades";
        } else {
            throw new Error("Invalid suit: " + value);
        }

    }

}