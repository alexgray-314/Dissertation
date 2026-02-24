import { ParseTree } from "antlr4ts/tree/ParseTree";
import {MoveInfo, State} from "./state";
import {Position} from "../model/area";
import { Move_catchContext } from "../language/dealParser";
import { PositionVisitor } from "../calc/positionVisitor";
import { PositionSetVisitor } from "../calc/positionSetVisitor";
import {Interpreter} from "../engine/interpreter";
import {Catch} from "./catch";

export class MoveCatch extends Catch {

    dest: Move_catchContext;

    constructor(source: Move_catchContext, dest: Move_catchContext, subTree: ParseTree) {
        super(source, subTree);
        this.dest = dest;
    }

    /**
        Checks if this movement clause is "caught" by the current movement request, then runs the subtree
        @returns true if the movement is allowed
        @returns true if movement blocked
        @returns false if movement is not relevant to this statement
    */
    caught(state : State) : boolean {
        const info : MoveInfo = state.move_info;

        if ( // check if the move catches refer to this specific movement
            this.compare_position(state, info.source, this.source) &&
            this.compare_position(state, info.dest, this.dest)
        ) {
            this.subTree.accept(new Interpreter(state));
            return true;
        }
        return false;

    }

}