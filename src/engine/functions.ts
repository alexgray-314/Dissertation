import {State} from "../state/state";
import {Card} from "../model/card";

export function shuffle(state : State) {

    const deck = state.areas.get("deck")?.stacks[0].cards;
    if (!deck) {
        return;
    }

    deck.sort(function (a : Card, b : Card) {
        return Math.random() - 0.5;
    });
}

export function deal(state : State, args: Record<string, number | string>) {
    const deck = state.areas.get("deck")?.stacks[0].cards;
    if (!deck) {
        return;
    }

    const defaultArgs = {
        jokers:"false",
        distribute:"all",
        shuffle:"true",
        hand_max:52
    };
    Object.assign(defaultArgs, args); // merge defaults with set parameters

    // ---- Shuffle the deck
    if (defaultArgs.shuffle === "true") {
        shuffle(state);
    }

    // TODO actually consider the args

    // Deal out the cards until done
    let player = 0;
    for (let i= 0; deck.length > 0; i++) {
        state.add_card(deck[0], [player.toString(), 0, 0]);
        state.remove_card(["deck", 0, 0]);
        player++;
        if (player >= state.num_players) {
            player = 0;
        }
    }

}