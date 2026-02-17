import { ParseTree } from "antlr4ts/tree/ParseTree";
import { State } from "./state";

export class MoveCatch {

    source : ParseTree;
    dest : ParseTree;
    subTree : ParseTree;

    constructor(source : ParseTree, dest : ParseTree, subTree : ParseTree) {
        this.source = source;
        this.dest = dest;
        this.subTree = subTree;
    }

    /**
        Checks the move source, dest and subtree to see if this move catch will block
        @return whether the movement is allowed
    */
    check(state : State) : boolean {
        return false;
    }

}