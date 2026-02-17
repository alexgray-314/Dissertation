import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { IntSetVisitor } from "./intSetVisitor";
import { Position } from "../model/area";
import { State } from "../state/state";
import { StringVisitor } from "./stringVisitor";

export class PositionSetVisitor implements dealVisitor<void> {
    
    state : State;
    task : ((item: Position) => boolean);

    constructor(state : State, task : (item: Position) => boolean) {
        this.state = state;
        this.task = task;
    }

    visitSet (ctx: SetContext) {
        ctx.getChild(0).accept(this);
    }

    visitPositionset (ctx: PositionsetContext) : void {
        const areaID : string = new StringVisitor(this.state).visit(ctx.arearef()) ?? "";
        new IntSetVisitor(this.state, (stack : number) => {
            new IntSetVisitor(this.state, (pos : number) => {
                if (!this.task([areaID, stack, pos])) {
                    stack = Infinity; // this is a bit of a hack, to get out of the loop one nest up
                    return false;
                }
                return pos < ((this.state.areas.get(areaID)?.stacks[stack]?.cards.length) ?? -Infinity);
            }).visit(ctx.getChild(4));
            return stack < ((this.state.areas.get(areaID)?.stacks.length) ?? -Infinity);
        }).visit(ctx.getChild(2));
    }
    
    visit(tree: ParseTree): void {
        tree.accept(this);
    }
    visitChildren(node: RuleNode): void {}
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}

}