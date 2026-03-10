import {dealVisitor} from "../language/dealVisitor";
import {BexprContext} from "../language/dealParser";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {State} from "../state/state";
import {TermVisitor} from "./termVisitor";
import {Comparator} from "../state/comparator";

export class BooleanVisitor implements dealVisitor<boolean> {

    state : State;
    termVisitor : TermVisitor;
    comparator : Comparator;
    constructor(state : State) {
        this.state = state;
        this.termVisitor = new TermVisitor(state);
        this.comparator = new Comparator(state);
    }

    visitBexpr(ctx: BexprContext): boolean {

        // Check for ANDs and ORs
        if (ctx.bexpr() !== undefined) {
            const booleanOperator : string = ctx.getChild(3).text;
            switch (booleanOperator) {
                case "||":
                    if (ctx.bexpr()?.accept(this)) {
                        return true;
                    }
                    break;
                case "&&":
                    if (!ctx.bexpr()?.accept(this)) {
                        return false;
                    }
                    break;
            }
        }

        const symbol : string = ctx.getChild(1).text;
        const termA = ctx.getChild(0);
        const termB = ctx.getChild(2);

        switch(symbol) {
            case "==":
                return (this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case "!=":
                return (!this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case "<":
                return (this.comparator.less_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case ">":
                return (this.comparator.greater_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case ">=":
                return (!this.comparator.less_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case "<=":
                return (!this.comparator.greater_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor)))
            case "=?":
                return (this.comparator.contains(termA.accept(this.termVisitor), termB))
            case "!?":
                return (!this.comparator.contains(termA.accept(this.termVisitor), termB))
            default:
                return false;
        }
    }

    visit(tree: ParseTree): boolean {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): boolean {
        return false;
    }

    visitErrorNode(node: ErrorNode): boolean {
        return false;
    }

    visitTerminal(node: TerminalNode): boolean {
        return false;
    }

}