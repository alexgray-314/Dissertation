import { Card, StandardCard } from "../model/card";
import { SetVisitor } from "../calc/setVisitor";
import { State } from "./state";
import {ParseTree} from "antlr4ts/tree/ParseTree";

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

    less_than(a : Primitive, b : Primitive) : boolean {
        if (a === undefined || b === undefined) {
            return false;
        }

        if (typeof a === 'object' || typeof b === 'object') {
            return false
            // TODO maybe implement this for cards???
        }

        return a < b;
    }

    greater_than(a : Primitive, b : Primitive) : boolean {
        if (a === undefined || b === undefined) {
            return false;
        }

        if (typeof a === 'object' || typeof b === 'object') {
            return false
            // TODO maybe implement this for cards???
        }

        return a > b;
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