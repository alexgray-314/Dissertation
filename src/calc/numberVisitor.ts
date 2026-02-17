import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { State } from "../state/state";
import { dealLexer } from "../language/dealLexer";
import { Card } from "../model/card";

export class NumberVisitor implements dealVisitor<number> {

    state : State;
    constructor (state : State) {
        this.state = state;
    }

    visitPlayer(ctx: PlayerContext) {
        const ID = ctx.getChild(1);
        switch(ID.text) {
            case '/':
                return this.state.get_move_player() ?? NaN;
            case '.':
                return this.state.get_turn_player();
            case '@':
                return this.state.get_action_player();
            default: 
                return ID.accept(this);
        }
    }

    visitAssign?: ((ctx: AssignContext) => number) | undefined;
    visitFunction_call?: ((ctx: Function_callContext) => number) | undefined;
    visitUpdateTurn?: ((ctx: UpdateTurnContext) => number) | undefined;

    visitVariable (ctx: VariableContext) {
        let [_, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (typeof value === typeof 0) {
            return Number(value);
        }
        return NaN;
    }
    
    visitArgs?: ((ctx: ArgsContext) => number) | undefined;
    visitArg?: ((ctx: ArgContext) => number) | undefined;
    visitArearef?: ((ctx: ArearefContext) => number) | undefined;
    visitArea?: ((ctx: AreaContext) => number) | undefined;
    visitStack?: ((ctx: StackContext) => number) | undefined;
    visitPosition?: ((ctx: PositionContext) => number) | undefined;
    visitTerm (ctx: TermContext) : number {
        const property : string | undefined = ctx.property()?.ID().text;
        // NOTE: this will only get primitive properties. TODO deal with complex objects
        const term = ctx.getChild(0).accept(this);
        if (property !== undefined && typeof term === 'object') {
            return Number((term as any)[property]);
        }
        return term;
    }
    visitProperty?: ((ctx: PropertyContext) => number) | undefined;
    visitBexpr?: ((ctx: BexprContext) => number) | undefined;
    visitAexpr (ctx: AexprContext) {
        return ctx.getChild(0).accept(this);
    }
    visitSet?: ((ctx: SetContext) => number) | undefined;
    visitIntset?: ((ctx: IntsetContext) => number) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => number) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => number) | undefined;
    visitMove_catch?: ((ctx: Move_catchContext) => number) | undefined;

    visit(tree: ParseTree): number {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): number {
        if (node.childCount < 1) {
            return NaN;
        }
        return node.getChild(0).accept(this);
    }

    visitTerminal(node: TerminalNode): number {
        if (node.symbol.type === dealLexer.NUMBER) {
            return Number(node.text);
        }
        return NaN;
    }

    visitErrorNode(node: ErrorNode): number {
        return NaN;
    }
    
}