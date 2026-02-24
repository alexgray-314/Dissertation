import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {Primitive} from "../state/comparator";
import {
    AreaContext,
    PlayerContext,
    PositionContext, PrimitivesContext,
    StackContext,
    TermContext,
    VariableContext
} from "../language/dealParser";
import {dealVisitor} from "../language/dealVisitor";
import {dealLexer} from "../language/dealLexer";
import {State} from "../state/state";
import {NumberVisitor} from "./numberVisitor";
import {CardVisitor} from "./cardVisitor";
import {Card, Ranks, SpecialCard, StandardCard} from "../model/card";

export class TermVisitor implements dealVisitor<Primitive> {

    state : State;

    constructor(state : State) {
        this.state = state;
    }

    visitPlayer(ctx: PlayerContext) : number {
        // TODO update this, so that it just accepts child 1. Terminal symbols will account for @ and /??
        // TODO this has to be done alongside changing the syntax for source and dest
        const ID = ctx.getChild(1);
        let val : number;
        switch(ID.text) {
            case '/':
                val = this.state.get_move_player() ?? NaN;
                break;
            case '.':
                val = this.state.get_turn_player();
                break;
            case '@':
                val = this.state.get_action_player();
                break;
            default:
                val = Number(ID.accept(this));
                break;
        }
        return val % this.state.num_players; // account for overflow
    }

    visitVariable (ctx: VariableContext) : Primitive {
        let [type, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (typeof value === typeof 0 && type === "INT") {
            return Number(value);
        } else if (type === "CARD") {
            return value;
        }
        return undefined;
    }

    visitArea (ctx: AreaContext): undefined {
        return undefined;
    }

    /**
     * This should only be called by visit term if the property is .length
     */
    visitStack (ctx: StackContext) : number {
        const stack : number = new NumberVisitor(this.state).visit(ctx.term());
        return ((this.state.areas.get(ctx.arearef().text)?.stacks[stack])?.cards?.length) ?? 0;
    }

    visitPosition (ctx: PositionContext) : Card | undefined {
        return new CardVisitor(this.state).visit(ctx);
    }

    visitPrimitives(ctx: PrimitivesContext) : Primitive {
        switch(ctx.start.type) {
            case dealLexer.EMPTY:
                return SpecialCard.Empty;
            case dealLexer.ACE:
                return Ranks.ACE; // TODO add option to $config to set ace as high or low
            case dealLexer.KING:
                return Ranks.KING;
            case dealLexer.QUEEN:
                return Ranks.QUEEN;
            case dealLexer.JACK:
                return Ranks.JACK;
            case dealLexer.SPADES:
                return "spades";
            case dealLexer.CLUBS:
                return "clubs";
            case dealLexer.HEARTS:
                return "hearts";
            case dealLexer.DIAMONDS:
                return "diamonds";
        }
    }

    visitTerm (ctx: TermContext) : Primitive {

        const property : string | undefined = ctx.property()?.ID().text;
        let val: Primitive = undefined;

        // Special Cases - Consider stacks
        // For example: x[0].length
        if (ctx.stack() !== undefined) {
            if (property === "length") {
                val = this.visitStack(ctx.stack()!);
            } else {
                val = undefined;
            }
        } else {

            // Normal term evaluation to get first child
            // NOTE: this will only get primitive properties. TODO deal with complex objects
            val = ctx.getChild(0).accept(this);
            if (property !== undefined) {
                if (typeof val === 'object') {
                    val = (val as any)[property];
                } else {
                    // Tried to call property on something without a property
                    val = undefined;
                }
            }

        }

        // Algebraic expressions
        if (ctx.term() !== undefined) {
            const expression : Primitive = ctx.term()?.accept(this);
            if (typeof val === "number" && typeof expression === "number") {
                switch (ctx._op.type) {
                    case dealLexer.PLUS:
                        return val + expression;
                    case dealLexer.MINUS:
                        return val - expression;
                    case dealLexer.TIMES:
                        return val * expression;
                    default:
                        return undefined;
                }
            }
        }

        return val;

    }
    
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