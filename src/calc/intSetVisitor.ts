import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { NumberVisitor } from "./numberVisitor";
import { State } from "../state/state";

export class IntSetVisitor implements dealVisitor<void> {

    state : State;
    numberVisitor : NumberVisitor;
    task : (item: number) => boolean;
    
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    constructor(state : State, task: ((item: number) => boolean)) {
        this.state = state;
        this.numberVisitor = new NumberVisitor(state);
        this.task = task;
    }

    visitSet (ctx: SetContext) {
        ctx.getChild(0).accept(this);
    }
    visitIntset (ctx: IntsetContext) {
        const start : number = ctx.getChild(0).accept(this.numberVisitor);
        const end : number = ctx.childCount > 2 ? ctx.getChild(2).accept(this.numberVisitor) : Infinity;

        for (let i = start; i <= end; i++) {
            if (!this.task(i)) {
                return;
            };
        }
    }

    visitPlayerset (ctx: PlayersetContext) {
        for (let p = 0; p < this.state.num_players; p++) {
            if (!this.task(p)) {
                return;
            };
        }
    }

    visit(tree: ParseTree): void {
        tree.accept(this);
    }
    visitChildren(node: RuleNode): void {}
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    
}