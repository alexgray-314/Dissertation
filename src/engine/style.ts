import {dealVisitor} from "../language/dealVisitor";
import {AttributeContext, AttsContext, ConfigContext} from "../language/dealParser";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

interface Config { [key: string]: string | Config }

export class Style implements dealVisitor<Config> {
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
            return ctx.atts().accept(this);
        }
        return {};
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