type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type Rank = Ranks | -1;

enum Ranks {
    TWO=2,
    THREE=3,
    FOUR=4,
    FIVE=5,
    SIX=6,
    SEVEN=7,
    EIGHT=8,
    NINE=9,
    TEN=10,
    JACK=11,
    QUEEN=12,
    KING=13,
    ACE=14,
}

const SUIT_MAP = {
    "spades": "♠",
    "hearts": "♥",
    "clubs": "♣",
    "diamonds": "♦"
}

export type Card = StandardCard | SpecialCard.Empty | SpecialCard.Joker;

export enum SpecialCard {Empty, Joker}

export class StandardCard {
    rank : Rank; // TODO make rank and suit an enum so that it can be converted to a number
    suit : Suit;
    display : string;

    // Value #<rank><suit>
    // E.g. #4S == the 4 of spades
    constructor(value : string) {
        const rank : string = value.slice(1, -1).toUpperCase();
        const suit : string = value.slice(-1);

        if (!Number.isNaN(Number(rank))) {
            this.rank = Number(rank);
        } else {
            switch (rank) {
                case "J":
                    this.rank = Ranks.JACK;
                    break;
                case "Q":
                    this.rank= Ranks.QUEEN;
                    break;
                case "K":
                    this.rank= Ranks.KING;
                    break;
                case "A":
                    this.rank= Ranks.ACE;
                    break;
                default:
                    console.error("Invalid rank: " + rank);
                    this.rank = -1;
                    break;
            }
        }

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

        this.display = rank + SUIT_MAP[this.suit];

    }

    toString() : string {
        return this.display;
    }

}