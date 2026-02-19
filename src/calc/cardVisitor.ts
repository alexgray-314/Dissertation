import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {dealVisitor} from "../language/dealVisitor";
import {Card, SpecialCard, StandardCard} from "../model/card";
import {dealLexer} from "../language/dealLexer";
import {State} from "../state/state";
import {PositionContext, VariableContext} from "../language/dealParser";
import {PositionVisitor} from "./positionVisitor";

// Either get a position or a card from a tree
export class CardVisitor implements dealVisitor<Card | undefined> {

    state : State;
    constructor(state : State) {
        this.state = state;
    }

    visitPosition (ctx: PositionContext) {
        const pos = ctx.accept(new PositionVisitor(this.state));
        if (pos !== undefined) {
            return this.state.get_card(pos);
        }
        return undefined;
    }

    visitVariable (ctx: VariableContext) : Card | undefined {
        let [type, value] = this.state.variables.get(ctx.ID().text) ?? [undefined, undefined];
        if (type === "CARD") {
            return value;
        }
        return undefined;
    }

    visit(tree: ParseTree): Card | undefined {
        return tree.accept(this);
    }
    visitChildren(node: RuleNode): Card | undefined {
        for (let i = 0; i < node.childCount ; i++){
            return node.getChild(i).accept(this);
        }
    }
    visitTerminal(node: TerminalNode): Card | undefined {
        if (node.symbol.type === dealLexer.CARD) {
            return new StandardCard(node.text);
        }
        return undefined;
    }
    visitErrorNode(node: ErrorNode): Card | undefined {
        return undefined;
    }


}