import {CardVisitor} from "../calc/cardVisitor";
import {NumberVisitor} from "../calc/numberVisitor";
import {
    ArgContext,
    ArgsContext,
    AssignContext,
    CancelContext, ConfigContext, Define_functionContext,
    DefinitionContext,
    ForContext,
    Function_callContext,
    IfContext,
    LogContext,
    ModifyContext,
    Move_catchContext,
    MoveContext,
    On_actionContext, On_interactContext,
    On_moveContext, ShowContext, TermContext,
    UpdateTurnContext,
} from "../language/dealParser";
import {Card, SpecialCard} from "../model/card";
import {State} from "../state/state";
import {PositionVisitor} from "../calc/positionVisitor";
import {dealVisitor} from "../language/dealVisitor";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {Comparator, Primitive} from "../state/comparator";
import {TermVisitor} from "../calc/termVisitor";
import {IntSetVisitor} from "../calc/intSetVisitor";
import {PositionSetVisitor} from "../calc/positionSetVisitor";
import {Position} from "../model/area";
import {MoveCatch} from "../state/move_catch";
import {deal, shuffle} from "./functions";
import {activePlayer} from "../app";
import {Catch} from "../state/catch";

export class Interpreter implements dealVisitor<void> {

    state : State;
    positionVisitor : PositionVisitor;
    cardVisitor : CardVisitor;
    numberVisitor : NumberVisitor;
    termVisitor : TermVisitor;
    comparator : Comparator;
    running : boolean;
    constructor(state : State) {
        this.state = state;
        this.positionVisitor = new PositionVisitor(state);
        this.cardVisitor = new CardVisitor(this.state);
        this.numberVisitor = new NumberVisitor(this.state);
        this.termVisitor = new TermVisitor(this.state);
        this.comparator = new Comparator(this.state);
        this.running = true;
    }

    visitDefinition(ctx: DefinitionContext) : void {

        const type = (ctx._type.text??"").toUpperCase();
        switch(type) {
            case "AREA": 
                this.state.define_area(ctx.ID().text, {});
                break;
            case "ACTION":
                this.state.define_action(ctx.ID().text, {});
                break;
            case "INT":
            case "CARD":
                this.state.define_variable(type, ctx.ID().text);
                break;

        }

    }

    visitMove(ctx: MoveContext) : void {

        const dest = ctx.destination().accept(this.positionVisitor);
        if (dest === undefined) {
            console.log("Destination is undefined: ", ctx.destination().text);
            return;
        }

        if (ctx.source().position() !== undefined) {
            const source = ctx.source().accept(this.positionVisitor);
            this.state.move_card(source, dest);
        } else if (ctx.source().positionset() !== undefined) {
            const removed : Position[] = [];
            // First of all, add all the cards to the destination
            new PositionSetVisitor(this.state, (source : Position) => {
                const card : Card = this.state.get_card(source);
                if (card !== SpecialCard.Empty) {
                    this.state.add_card(card, dest);
                    removed.push(source);
                }
                return true;
            }).visit(ctx.source().positionset()!);

            // Now go back and remove the cards in reverse order of position so that card shifting isn't an issue
            removed.sort(([, s0, p0] : Position, [, s1, p1] : Position) => {
                if (s0 === s1) {
                    return p1-p0;
                } else {
                    return s1-s0;
                }
            });
            for (let pos of removed) {
                this.state.remove_card(pos);
            }
            
        } else {
            const card = ctx.source().accept(this.cardVisitor);
            if (card === undefined) {
                console.log("Card is undefined ", ctx.source().text);
                return;
            }
            this.state.add_card(card, dest);
        }

    }

    visitAssign(ctx: AssignContext) : void {
        const id : string = ctx.variable().text;
        this.update_variable(id, ctx.term());
    }

    visitIf (ctx: IfContext) : void {

        const symbol : string = ctx.bexpr().getChild(1).text;
        const termA = ctx.bexpr().getChild(0);
        const termB = ctx.bexpr().getChild(2);

        switch(symbol) {
            case "==": 
                if (this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this); 
                    return;
                }
                break;
            case "!=":
                if (!this.comparator.equals(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this); 
                    return;
                }
                break;
            case "<<":
                if (this.comparator.less_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case ">>":
                if (this.comparator.greater_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this); 
                    return;
                }
                break;
            case ">=":
                if (!this.comparator.less_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "<=":
                if (!this.comparator.greater_than(termA.accept(this.termVisitor), termB.accept(this.termVisitor))) {
                    ctx._consequent.accept(this);
                    return;
                }
                break;
            case "=?":
                if (this.comparator.contains(termA.accept(this.termVisitor), termB)) {
                    ctx._consequent.accept(this); 
                    return;
                }
                break;
            case "!?":
                if (!this.comparator.contains(termA.accept(this.termVisitor), termB)) {
                    ctx._consequent.accept(this); 
                    return;
                }
                break;
        }

        // Accounts for else statement
        if (ctx.childCount > 5) { // this accounts for if statements with no else clause
            ctx._antecedent.accept(this);
        }

    }

    visitFor (ctx: ForContext) {

        const loopVar = ctx.ID().text;

        if (ctx.set().intset() !== undefined || ctx.set().playerset() !== undefined) {

            new IntSetVisitor(this.state, (i : number) => {
                this.state.variables.set(loopVar, ["INT", i]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());

        } else if (ctx.set().positionset() !== undefined) {
            
            // TODO - this doesn't work as expected
            new PositionSetVisitor(this.state, (pos : Position) => {
                const c : Card = this.state.get_card(pos);
                this.state.variables.set(loopVar, ["CARD", c]);
                ctx.block().accept(this);
                return true;
            }).visit(ctx.set());

        }

        this.state.variables.delete(loopVar);

    }

    visitOn_move (ctx: On_moveContext) : void {

        this.state.move_catches.push(new MoveCatch(
            ctx.getChild(2) as Move_catchContext,
            ctx.getChild(3) as Move_catchContext,
            ctx.block()
        ));

    }

    visitOn_action (ctx: On_actionContext) {

        this.state.action_catches.set(
            ctx.ID().text,
            ctx.block()
        );

    }

    visitUpdateTurn (ctx: UpdateTurnContext) {

        if (ctx.player() !== undefined) {
            const newTurn : number = new NumberVisitor(this.state).visit(ctx.player()!);
            if (!Number.isNaN(newTurn)) {
                this.state.turn = newTurn;
            }
        } else {
            this.state.turn = this.state.turn + 1;
            if (this.state.turn >= this.state.num_players) {
                this.state.turn = 0;
            }
        }

    }

    visitDefine_function(ctx : Define_functionContext) {
        const funcID : string = ctx.ID().text;
        this.state.functions.set(funcID, (state : State, args : ArgsContext) => {

            const argTerms : TermContext[] = args.arg().map((argCtx : ArgContext) => {return argCtx.term()});
            const paramTypes : string[] = ctx.argdef()?.VARTYPE().map((node : TerminalNode) => {return node.text.toUpperCase()}) ?? [];
            const paramIds : string[] = ctx.argdef()?.ID().map((node : TerminalNode) => {return node.text}) ?? [];
            let run : boolean = true;

            for (let i = 0; i < paramIds.length; i++) {
                const arg = argTerms[i];
                const type = paramTypes[i];
                const id = paramIds[i];

                if (arg === undefined) {
                    console.error("Line", args.start.line + 1, ": Insufficient args in function ", funcID);
                    run = false;
                    break;
                }
                if (type === undefined || id === undefined) {
                    console.error("Function", funcID, "is incorrectly defined");
                    run = false;
                    break;
                }

                this.state.define_variable(paramTypes[i], paramIds[i]);
                this.update_variable(paramIds[i], argTerms[i]);
            }

            if (run) {
                new Interpreter(state).visit(ctx.block());
            }

            // Clean scope
            for (let p of paramIds) {
                this.state.variables.delete(p);
            }
        });
    }

    visitFunction_call (ctx: Function_callContext) {
        const id : string = ctx.ID().text;
        switch(id) {
            case "deal":
                deal(this.state, {});
                break;
            case "shuffle":
                shuffle(this.state);
                break;
            default:
                if (this.state.functions.has(id)) {
                    this.state.functions.get(id)!(this.state, ctx.args());
                }
        }
    }

    visitCancel (ctx: CancelContext) {
        this.running = false;
        this.state.move_info.cancelled = true;
    }

    visitLog (ctx: LogContext) {
        let output : string = "";
        for (let c:number = 1; c < ctx.childCount; c++) {
            output += ((ctx.getChild(c).accept(new TermVisitor(this.state))?.toString()) ?? "") + " ";
        }
        console.log(output);
    }

    visitModify (ctx: ModifyContext) : void {
        const card : Card = this.cardVisitor.visit(ctx.getChild(0)) ?? SpecialCard.Empty;
        if (card !== SpecialCard.Empty && card !== SpecialCard.Joker) {
            const method : string = ctx.function_call().ID().text;
            if (method === "up" || method === "down") {
                card[method]();
            }
        }
    }

    visitShow (ctx: ShowContext) : void {
        const player : number = ctx.player().accept(this.numberVisitor);
        const card : Card | undefined = ctx.getChild(1).accept(this.cardVisitor);
        if (activePlayer === player && card !== undefined) {
            window.alert("Card : " + card)
        }
    }

    visitConfig(ctx: ConfigContext) : void {}

    visitOn_interact (ctx: On_interactContext) : void {
        this.state.interaction_catches.push(new Catch(ctx.move_catch(), ctx.block()));
    }

    private update_variable(id: string, term: TermContext) {
        const [type, _] = this.state.variables.get(id) ?? ["NULL", undefined];
        switch(type.toUpperCase()) {
            case "NULL":
                break;
            // It is safe to use forced types (!) from this points on as undefined variables will have type NULL
            case "INT":
                this.state.variables.get(id)![1] = term.accept(this.numberVisitor);
                break;
            case "CARD":
                this.state.variables.get(id)![1] = term.accept(this.cardVisitor);
                break;
        }
    }

    visit(tree: ParseTree): void {
        tree.accept(this);
    }
    visitChildren(node: RuleNode): void {
        for (let i = 0; i < node.childCount ; i++) {
            if (this.running) {
                node.getChild(i).accept(this);
            }
        }
    }
    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}

}