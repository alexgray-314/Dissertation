import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { Position } from "../model/area";
import { State } from "../state/state";
import { NumberVisitor } from "./numberVisitor";
import { StringVisitor } from "./stringVisitor";

export class PositionVisitor implements dealVisitor<Position | undefined> {
    
    state : State;
    numberEvaluator : NumberVisitor;
    constructor(state : State) {
        this.state = state;
        this.numberEvaluator = new NumberVisitor(this.state);
    }

    visitPosition (ctx: PositionContext) : Position | undefined {
        if (ctx.MOVE_DEST() !== undefined) {
            return this.state.move_info.dest;
        }
        if (ctx.MOVE_SOURCE() !== undefined) {
            return this.state.move_info.source;
        }
        if (ctx.INTERACT_CARD() !== undefined) {
            return this.state.interaction_card;
        }
        const areaID = new StringVisitor(this.state).visit(ctx.arearef()!) ?? "";
        const stack = this.numberEvaluator.visit(ctx.getChild(2));
        const pos = this.numberEvaluator.visit(ctx.getChild(4));
        if (!Number.isNaN(stack) && !Number.isNaN(pos)) {
            return [areaID, stack, pos];
        }
        return undefined;
    }

    visit(tree: ParseTree): Position | undefined {
        return tree.accept(this);
    }
    visitChildren(node: RuleNode): Position | undefined {
        for (let i = 0; i < node.childCount ; i++) {
            return node.getChild(i).accept(this);
        }
    }
    visitTerminal(node: TerminalNode): Position | undefined {
        return undefined;
    }
    visitErrorNode(node: ErrorNode): Position | undefined {
        return undefined;
    }

}