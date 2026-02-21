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

    /**
     * This is used to get global style properties (e.g. table colour, card type, etc)
    */
    get_style(attribute : string) : string | undefined {
        return this.check_attribute(attribute, this.config);
    }

    /**
     * This is used to get the formatting for a specific stack before rendering
     */
    get_format(attribute : string, area : string, stack: number): string | undefined {

        // Area is a player area
        if (!Number.isNaN(Number(area))) {
            area = "player";
        }

        // return this.config[area]?.[attribute] ?? undefined;

        if (this.config.hasOwnProperty(area)) {
            // If the area has that attribute defined for all stacks, return that
            if (this.check_attribute(attribute, this.config[area]) !== undefined) {
                return this.check_attribute(attribute, this.config[area]);
            }

            if (typeof this.config[area] !== 'string') {
                return this.interpolate_stack_attribute(attribute, this.config[area] as Config, stack);
            }

        }
        return undefined;
    }

    /**
     * Given a root within the config, check if an attribute is present
     */
    private check_attribute(attribute : string, root : string | Config | undefined) : string | undefined {
        if (root === undefined || typeof root === "string") {
            return undefined;
        }
        if (root.hasOwnProperty(attribute)) {
            if (typeof root[attribute] === "string") {
                return root[attribute];
            }
        }
        return undefined;
    }

    private interpolate_stack_attribute(attribute : string, area_config : Config, stack: number) : string | undefined {
        if (area_config.hasOwnProperty(stack.toString())) {
            if (typeof area_config[stack.toString()] === "string"){
                return area_config[stack.toString()] as string;
            } else {
                let target;
                for (let key in this.config) {
                    const lower_bound : number = Number(key.split(":")[0]);
                    if (stack >= lower_bound) {

                    }
                }
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