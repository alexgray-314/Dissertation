// Generated from C:\Users\alexj\WebstormProjects\plain-js/src/language/deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./dealParser";
import { StmtContext } from "./dealParser";
import { BlockContext } from "./dealParser";
import { PlayerContext } from "./dealParser";
import { DefinitionContext } from "./dealParser";
import { MoveContext } from "./dealParser";
import { SourceContext } from "./dealParser";
import { DestinationContext } from "./dealParser";
import { On_actionContext } from "./dealParser";
import { On_moveContext } from "./dealParser";
import { ForContext } from "./dealParser";
import { IfContext } from "./dealParser";
import { CancelContext } from "./dealParser";
import { AssignContext } from "./dealParser";
import { Function_callContext } from "./dealParser";
import { UpdateTurnContext } from "./dealParser";
import { VariableContext } from "./dealParser";
import { ArgsContext } from "./dealParser";
import { ArgContext } from "./dealParser";
import { ArearefContext } from "./dealParser";
import { AreaContext } from "./dealParser";
import { StackContext } from "./dealParser";
import { PositionContext } from "./dealParser";
import { TermContext } from "./dealParser";
import { PropertyContext } from "./dealParser";
import { BexprContext } from "./dealParser";
import { AexprContext } from "./dealParser";
import { SetContext } from "./dealParser";
import { IntsetContext } from "./dealParser";
import { PositionsetContext } from "./dealParser";
import { PlayersetContext } from "./dealParser";
import { Move_catchContext } from "./dealParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `dealParser`.
 */
export interface dealListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `dealParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.player`.
	 * @param ctx the parse tree
	 */
	enterPlayer?: (ctx: PlayerContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.player`.
	 * @param ctx the parse tree
	 */
	exitPlayer?: (ctx: PlayerContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.move`.
	 * @param ctx the parse tree
	 */
	enterMove?: (ctx: MoveContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.move`.
	 * @param ctx the parse tree
	 */
	exitMove?: (ctx: MoveContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.source`.
	 * @param ctx the parse tree
	 */
	enterSource?: (ctx: SourceContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.source`.
	 * @param ctx the parse tree
	 */
	exitSource?: (ctx: SourceContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.destination`.
	 * @param ctx the parse tree
	 */
	enterDestination?: (ctx: DestinationContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.destination`.
	 * @param ctx the parse tree
	 */
	exitDestination?: (ctx: DestinationContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.on_action`.
	 * @param ctx the parse tree
	 */
	enterOn_action?: (ctx: On_actionContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.on_action`.
	 * @param ctx the parse tree
	 */
	exitOn_action?: (ctx: On_actionContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.on_move`.
	 * @param ctx the parse tree
	 */
	enterOn_move?: (ctx: On_moveContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.on_move`.
	 * @param ctx the parse tree
	 */
	exitOn_move?: (ctx: On_moveContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.for`.
	 * @param ctx the parse tree
	 */
	enterFor?: (ctx: ForContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.for`.
	 * @param ctx the parse tree
	 */
	exitFor?: (ctx: ForContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.if`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.if`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.cancel`.
	 * @param ctx the parse tree
	 */
	enterCancel?: (ctx: CancelContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.cancel`.
	 * @param ctx the parse tree
	 */
	exitCancel?: (ctx: CancelContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.updateTurn`.
	 * @param ctx the parse tree
	 */
	enterUpdateTurn?: (ctx: UpdateTurnContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.updateTurn`.
	 * @param ctx the parse tree
	 */
	exitUpdateTurn?: (ctx: UpdateTurnContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.arearef`.
	 * @param ctx the parse tree
	 */
	enterArearef?: (ctx: ArearefContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.arearef`.
	 * @param ctx the parse tree
	 */
	exitArearef?: (ctx: ArearefContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.area`.
	 * @param ctx the parse tree
	 */
	enterArea?: (ctx: AreaContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.area`.
	 * @param ctx the parse tree
	 */
	exitArea?: (ctx: AreaContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.stack`.
	 * @param ctx the parse tree
	 */
	enterStack?: (ctx: StackContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.stack`.
	 * @param ctx the parse tree
	 */
	exitStack?: (ctx: StackContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.bexpr`.
	 * @param ctx the parse tree
	 */
	enterBexpr?: (ctx: BexprContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.bexpr`.
	 * @param ctx the parse tree
	 */
	exitBexpr?: (ctx: BexprContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.aexpr`.
	 * @param ctx the parse tree
	 */
	enterAexpr?: (ctx: AexprContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.aexpr`.
	 * @param ctx the parse tree
	 */
	exitAexpr?: (ctx: AexprContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.intset`.
	 * @param ctx the parse tree
	 */
	enterIntset?: (ctx: IntsetContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.intset`.
	 * @param ctx the parse tree
	 */
	exitIntset?: (ctx: IntsetContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.positionset`.
	 * @param ctx the parse tree
	 */
	enterPositionset?: (ctx: PositionsetContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.positionset`.
	 * @param ctx the parse tree
	 */
	exitPositionset?: (ctx: PositionsetContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.playerset`.
	 * @param ctx the parse tree
	 */
	enterPlayerset?: (ctx: PlayersetContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.playerset`.
	 * @param ctx the parse tree
	 */
	exitPlayerset?: (ctx: PlayersetContext) => void;

	/**
	 * Enter a parse tree produced by `dealParser.move_catch`.
	 * @param ctx the parse tree
	 */
	enterMove_catch?: (ctx: Move_catchContext) => void;
	/**
	 * Exit a parse tree produced by `dealParser.move_catch`.
	 * @param ctx the parse tree
	 */
	exitMove_catch?: (ctx: Move_catchContext) => void;
}

