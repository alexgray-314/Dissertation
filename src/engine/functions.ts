import {State} from "../state/state";
import {Card} from "../model/card";
import {TermContext} from "../language/dealParser";
import {NumberVisitor} from "../calc/numberVisitor";
import {StringVisitor} from "../calc/stringVisitor";

export function shuffle(state : State) {

    const deck = state.areas.get("deck")?.stacks[0].cards;
    if (!deck) {
        return;
    }

    deck.sort(function (a : Card, b : Card) {
        return Math.random() - 0.5;
    });
}

export function deal(state : State, args : TermContext[]) {
    const deck = state.areas.get("deck")?.stacks[0]?.cards;
    if (!deck) {
        return;
    }

    const distribute : string = args[0]?.accept(new StringVisitor(state)) ?? "all";
    const hand_max : number = args[1]?.accept(new NumberVisitor(state)) ?? Infinity;

    // Deal out the cards until done
    let player = 0;
    for (let i= 0; deck.length > 0; i++) {
        
        // Check for hand_max
        const hand : Card[] = state.areas.get(player.toString())?.stacks[0]?.cards ?? [];
        if (hand.length >= hand_max) {
            return;
        }
        state.add_card(deck[0], [player.toString(), 0, 0]);
        state.remove_card(["deck", 0, 0]);

        player++;
        if (player >= state.num_players) {
            player = 0;
            // check for distribute
            if (distribute === "even") {
                if (deck.length < state.num_players) {
                    return; // don't deal out any more cards if there's not enough to give everyone 1 more
                }
            }
        }

    }

}