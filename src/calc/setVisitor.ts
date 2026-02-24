import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Primitive } from "../state/comparator";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { State } from "../state/state";
import { IntSetVisitor } from "./intSetVisitor";
import { PositionSetVisitor } from "./positionSetVisitor";
import { Position } from "../model/area";
import { Card, StandardCard } from "../model/card";

export class SetVisitor implements dealVisitor<void> {

    state : State;
    task : (item: Primitive) => boolean;
    
    /**
    @param task Executed for each item in the set. If it returns [task] returns false, it will completely stop iterating through the set
    */
    constructor(state : State, task: ((item: Primitive) => boolean)) {
        this.state = state;
        this.task = task;
    }

    visitSet (ctx: SetContext) {

        const property : string | undefined = ctx.property()?.ID().text;

        if (property !== undefined && ctx.positionset() !== undefined) {

            new PositionSetVisitor(this.state, (pos : Position) => {
                const card : Card = this.state.get_card(pos);
                if (typeof card === 'object') {
                    return this.task((card as any)[property]);
                } else {
                    return this.task(undefined);
                }
                
            }).visit(ctx.positionset()!);
            
            
        } else {
            ctx.getChild(0).accept(this);
        }
        
    }
    visitIntset (ctx: IntsetContext) {
        new IntSetVisitor(this.state, this.task).visit(ctx);
    }
    visitPositionset (ctx: PositionsetContext) {
        new PositionSetVisitor(this.state, (pos : Position) => {
            const card : Card = this.state.get_card(pos);
            return this.task(card);
        }).visit(ctx);
    }
    visitPlayerset (ctx: PlayersetContext) {
        new IntSetVisitor(this.state, this.task).visit(ctx);
    }

    visit(tree: ParseTree): void {
        tree.accept(this);
    }
    visitChildren(node: RuleNode): void {}
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}

}