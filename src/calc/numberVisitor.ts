import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { dealVisitor } from "../language/dealVisitor";
import { State } from "../state/state";
import {TermVisitor} from "./termVisitor";
import {PlayerContext} from "../language/dealParser";

export class NumberVisitor implements dealVisitor<number> {

    state : State;
    private readonly termVisitor : TermVisitor;

    constructor (state : State) {
        this.state = state;
        this.termVisitor = new TermVisitor(state);
    }

    visitPlayer(ctx: PlayerContext) : number {
        const ID = ctx.getChild(1);
        let val : number;
        switch(ID.text) {
            case '.':
                val = this.state.get_turn_player();
                break;
            case '@':
                val = this.state.get_action_player();
                break;
            default:
                val = Number(ID.accept(new TermVisitor(this.state)));
                break;
        }
        return val % this.state.num_players; // account for overflow
    }

    visit(tree: ParseTree): number {
        return Number(tree.accept(this.termVisitor));
    }

    visitChildren(node: RuleNode): number {
        return Number(this.termVisitor.visit(node));
    }

    visitTerminal(node: TerminalNode): number {
        return Number(this.termVisitor.visit(node));
    }

    visitErrorNode(node: ErrorNode): number {
        return NaN;
    }
    
}