import {dealVisitor} from "../language/dealVisitor";
import {AttributeContext, AttsContext, ConfigContext} from "../language/dealParser";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

interface Config { [key: string]: string | Config }

export class Style implements dealVisitor<Config> {

    config : Config;

    constructor() {
        this.config = {};
    }

    get(...args : string[]) : string | undefined {
        let head : Config = this.config;
        for (let i : number = 0; i < args.length; i++) {
            if (head[args[i]] === undefined) {
                return undefined;
            }
            if (typeof head[args[i]] === 'string') {
                if (i === args.length - 1) {
                    return head[args[i]] as string;
                }
            } else {
                head = head[args[i]] as Config;
            }
        }
        return undefined;
    }

    visitAttribute(ctx: AttributeContext): Config {
        const key : string = ctx.getChild(0).text;
        const val : string | Config = ctx.atts()?.accept(this) ?? (ctx.STRING()?.text.slice(1,-1) ?? ctx.getChild(1).text);
        return {
            [key]:val,
        }
    }

    visitAtts(ctx: AttsContext): Config {
        const config : Config = {};
        for (let i = 1; i < ctx.childCount - 1; i = i + 2) {
            Object.assign(config, ctx.getChild(i).accept(this));
        }
        return config;
    }

    visitConfig(ctx: ConfigContext): Config {
        if (ctx.ID().text === "style") {
            this.config = ctx.atts().accept(this);
            console.log(this.get("player","0","label"));
        }
        return this.config;
    }

    visit(tree: ParseTree): Config {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): Config {
        return {};
    }

    visitErrorNode(node: ErrorNode): Config {
        return {};
    }

    visitTerminal(node: TerminalNode): Config {
        return {};
    }

}