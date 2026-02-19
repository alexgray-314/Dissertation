import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Primitive } from "../state/comparator";
import { ProgContext, StmtContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, AexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { dealLexer } from "../language/dealLexer";
import { State } from "../state/state";
import { NumberVisitor } from "./numberVisitor";
import { CardVisitor } from "./cardVisitor";
import { StandardCard } from "../model/card";

export class TermVisitor implements dealVisitor<Primitive> {

    state : State;

    constructor(state : State) {
        this.state = state;
    }

    visitPlayer(ctx: PlayerContext) {
        return new NumberVisitor(this.state).visit(ctx);
    }

    visitFunction_call?: ((ctx: Function_callContext) => Primitive) | undefined;

    visitVariable (ctx: VariableContext) : Primitive {
        let [type, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (typeof value === typeof 0 && type === "INT") {
            return Number(value);
        } else if (type === "CARD") {
            return value;
        }
        return undefined;
    }
    
    visitArgs?: ((ctx: ArgsContext) => Primitive) | undefined;
    visitArg?: ((ctx: ArgContext) => Primitive) | undefined;
    visitArearef?: ((ctx: ArearefContext) => Primitive) | undefined;
    visitArea?: ((ctx: AreaContext) => Primitive) | undefined;
    visitStack (ctx: StackContext) {
        const stack : number = new NumberVisitor(this.state).visit(ctx.aexpr());
        return ((this.state.areas.get(ctx.arearef().text)?.stacks[stack])?.cards?.length) ?? 0;
    }
    visitPosition (ctx: PositionContext) {
        return new CardVisitor(this.state).visit(ctx);
    }
    visitTerm (ctx: TermContext) : Primitive {

        const property : string | undefined = ctx.property()?.ID().text;

        // Special Cases - Consider stacks
        // For example: x[0].length
        if (ctx.stack() !== undefined) {
            if (property === "length") {
                return this.visitStack(ctx.stack()!);
            } else {
                return undefined;
            }
        }

        // NOTE: this will only get primitive properties. TODO deal with complex objects
        const term = ctx.getChild(0).accept(this);
        if (property !== undefined && typeof term === 'object') {
            return (term as any)[property];
        }
        return term;

    }
    visitAexpr?: ((ctx: AexprContext) => Primitive) | undefined;

    visitSet?: ((ctx: SetContext) => Primitive) | undefined;
    visitIntset?: ((ctx: IntsetContext) => Primitive) | undefined;
    visitPositionset?: ((ctx: PositionsetContext) => Primitive) | undefined;
    visitPlayerset?: ((ctx: PlayersetContext) => Primitive) | undefined;
    
    visit(tree: ParseTree): Primitive {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): Primitive {
        return node.getChild(0).accept(this);
    }

    visitTerminal(node: TerminalNode): Primitive {
        if (node.symbol.type === dealLexer.NUMBER) {
            return Number(node.text);
        } else if (node.symbol.type === dealLexer.STRING) {
            return node.text.slice(1,-1); // remove double quotes from either end
        } else if (node.symbol.type === dealLexer.CARD) {
            return new StandardCard(node.text);
        }
        return undefined;
    }

    visitErrorNode(node: ErrorNode): Primitive {
        return undefined;
    }
    
}