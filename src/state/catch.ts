import {MoveCatch} from "./move_catch";
import {PositionSetVisitor} from "../calc/positionSetVisitor";
import {Position} from "../model/area";
import {PositionVisitor} from "../calc/positionVisitor";
import {Move_catchContext} from "../language/dealParser";
import {State} from "./state";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {Interpreter} from "../engine/interpreter";

export class Catch {

    source: Move_catchContext;
    subTree: ParseTree;

    constructor(source: Move_catchContext, subTree: ParseTree) {
        this.source = source;
        this.subTree = subTree;
    }

    /**
     Checks if interaction is "caught", then runs the subtree
     @returns true if caught
     @returns false if not relevant to this statement
     */
    caught(state : State) : boolean {

        if ( this.compare_position(state, state.interaction_card, this.source) ) {
            this.subTree.accept(new Interpreter(state));
            return true;
        }
        return false;

    }

    /**
     * @param state game state
     * @param position the position you want to check
     * @param target the catch you are referring to
     * @returns whether or not the specified position is contained within this catch
     * @protected
     */
    protected compare_position (state : State, position : Position | undefined, target : Move_catchContext) : boolean {

        if (position === undefined) {
            return false;
        }

        if (target.WILDCARD() !== undefined) {
            return true;
        } else if (target.positionset() !== undefined) {
            let contains : boolean = false;
            target.positionset()!.accept(new PositionSetVisitor(state, (evaluated_target : Position) => {
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