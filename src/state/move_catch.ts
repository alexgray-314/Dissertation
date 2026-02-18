import { ParseTree } from "antlr4ts/tree/ParseTree";
import {MoveInfo, State} from "./state";
import {Position} from "../model/area";
import { Move_catchContext } from "../language/dealParser";
import { PositionVisitor } from "../calc/positionVisitor";
import { PositionSetVisitor } from "../calc/positionSetVisitor";

export class MoveCatch {

    source: Move_catchContext;
    dest: Move_catchContext;
    subTree: ParseTree;

    constructor(source: Move_catchContext, dest: Move_catchContext, subTree: ParseTree) {
        this.source = source;
        this.dest = dest;
        this.subTree = subTree;
    }

    /**
        Checks the move source, dest and subtree to see if this move catch will block
        @return whether the movement is allowed
    */
    check(state : State) : boolean {
        const info : MoveInfo = state.move_info;

        return (
            this.compare_position(state, info.source, this.source) &&
            this.compare_position(state, info.dest, this.dest)
        )

    }

    private compare_position (state : State, position : Position | undefined, target : Move_catchContext) : boolean {

        if (position === undefined) {
            return false;
        }

        if (target.WILDCARD() !== undefined) {
            return true;
        } else if (target.positionset() !== undefined) {
            let contains : boolean = false;
            target.accept(new PositionSetVisitor(state, (evaluated_target : Position) => {
                if (
                    evaluated_target[0] === position[0] &&
                    evaluated_target[1] === position[1] &&
                    evaluated_target[2] === position[2]
                ) {
                    contains = true;
                    return false;
                }
                return true;
            }));
            return contains;
        } else if (target.position() !== undefined) {
            const evaluated_target : Position | undefined = target.accept(new PositionVisitor(state));
            if (evaluated_target === undefined) {
                return false;
            }
            return (
                evaluated_target[0] === position[0] &&
                evaluated_target[1] === position[1] &&
                evaluated_target[2] === position[2]
            );
        }
        return false;

    }

}