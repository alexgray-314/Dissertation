import {dealVisitor} from "../language/dealVisitor";
import {AttributeContext, AttsContext, ConfigContext} from "../language/dealParser";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

interface Attributes { [key: string]: string | Attributes }

export class Config implements dealVisitor<Attributes> {

    config : Attributes;
    style: Attributes;

    constructor() {
        this.config = {};
        this.style = {};
    }

    get(group : string, ...args : string[]) : string | undefined {
        let head : Attributes = (group === "config") ? this.config : ((group === "style") ? this.style : {});
        for (let i : number = 0; i < args.length; i++) {
            if (head[args[i]] === undefined) {
                return undefined;
            }
            if (typeof head[args[i]] === 'string') {
                if (i === args.length - 1) {
                    return head[args[i]] as string;
                }
            } else {
                head = head[args[i]] as Attributes;
            }
        }
        return undefined;
    }

    visitAttribute(ctx: AttributeContext): Attributes {
        const key : string = ctx.getChild(0).text;
        const val : string | Attributes = ctx.atts()?.accept(this) ?? (ctx.STRING()?.text.slice(1,-1) ?? ctx.getChild(1).text);
        return {
            [key]:val,
        }
    }

    visitAtts(ctx: AttsContext): Attributes {
        const config : Attributes = {};
        for (let i = 1; i < ctx.childCount - 1; i = i + 2) {
            Object.assign(config, ctx.getChild(i).accept(this));
        }
        return config;
    }

    visitConfig(ctx: ConfigContext): Attributes {
        if (ctx.ID().text === "style") {
            this.style = ctx.atts().accept(this);
        } else if (ctx.ID().text === "config") {
            this.config = ctx.atts().accept(this);
        }
        return {};
    }

    visit(tree: ParseTree): Attributes {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): Attributes {
        for (let i = 0; i < node.childCount; i++) {
            node.getChild(i).accept(this);
        }
        return {};
    }

    visitErrorNode(node: ErrorNode): Attributes {
        return {};
    }

    visitTerminal(node: TerminalNode): Attributes {
        return {};
    }

}