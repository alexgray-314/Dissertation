import { ParseTree } from "antlr4ts/tree/ParseTree";
import { Card, StandardCard } from "../model/card";
import { SetVisitor } from "../calc/setVisitor";
import { State } from "./state";

export type Primitive = string | number | Card | undefined;

export class Comparator {

    state : State;

    constructor(state : State) {
        this.state = state;
    }

    equals(a : Primitive, b : Primitive) : boolean {
        if (a === undefined || b === undefined) {
            return false;
        }

        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b);
        }

        return a === b;
    }

    contains(left : Primitive, set : ParseTree) : boolean {

        let contains : boolean = false;
        new SetVisitor(this.state, (right : Primitive) => {
            if (this.equals(left, right)) {
                contains = true;
                return false;
            }
            return true;
        }).visit(set);

        return contains;

    }

}