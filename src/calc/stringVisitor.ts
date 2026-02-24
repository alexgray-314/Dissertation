import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgContext, StmtContext, BlockContext, PlayerContext, DefinitionContext, MoveContext, SourceContext, DestinationContext, On_actionContext, On_moveContext, ForContext, IfContext, AssignContext, Function_callContext, UpdateTurnContext, VariableContext, ArgsContext, ArgContext, ArearefContext, AreaContext, StackContext, PositionContext, TermContext, PropertyContext, BexprContext, SetContext, IntsetContext, PositionsetContext, PlayersetContext, Move_catchContext } from "../language/dealParser";
import { dealVisitor } from "../language/dealVisitor";
import { dealLexer } from "../language/dealLexer";
import { NumberVisitor } from "./numberVisitor";
import { State } from "../state/state";

export class StringVisitor implements dealVisitor<string | undefined> {

    state : State;
    constructor(state : State) {
        this.state = state;
    }

    visitVariable (ctx: VariableContext) {
        // TODO string variables
        return "VARIABLE";
    }
    visitArgs?: ((ctx: ArgsContext) => string | undefined) | undefined;
    visitArg?: ((ctx: ArgContext) => string | undefined) | undefined;
    visitArearef (ctx: ArearefContext) {
        if (ctx.player() !== undefined) {
            return new NumberVisitor(this.state).visit(ctx.player()!).toString();
        } else {
            return (ctx.ID()??"").toString();
        }
    }

    visit(tree: ParseTree): string | undefined {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): string | undefined {
        if (node.childCount < 1) {
            return undefined;
        }
        return node.getChild(0).accept(this);
    }
    visitTerminal(node: TerminalNode): string | undefined {
        if (node.symbol.type === dealLexer.NUMBER) {
            return node.text;
        } else if (node.symbol.type === dealLexer.STRING) {
            return node.text.slice(1,-1); // remove double quotes from either end
        }
        return undefined;
    }
    visitErrorNode(node: ErrorNode): string | undefined {
        return undefined;
    }
    
}