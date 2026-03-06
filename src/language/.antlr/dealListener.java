// Generated from c:/Users/alexj/WebstormProjects/plain-js/src/language/deal.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link dealParser}.
 */
public interface dealListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link dealParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(dealParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(dealParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterStmt(dealParser.StmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitStmt(dealParser.StmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(dealParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(dealParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#player}.
	 * @param ctx the parse tree
	 */
	void enterPlayer(dealParser.PlayerContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#player}.
	 * @param ctx the parse tree
	 */
	void exitPlayer(dealParser.PlayerContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#definition}.
	 * @param ctx the parse tree
	 */
	void enterDefinition(dealParser.DefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#definition}.
	 * @param ctx the parse tree
	 */
	void exitDefinition(dealParser.DefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#define_function}.
	 * @param ctx the parse tree
	 */
	void enterDefine_function(dealParser.Define_functionContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#define_function}.
	 * @param ctx the parse tree
	 */
	void exitDefine_function(dealParser.Define_functionContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#argdef}.
	 * @param ctx the parse tree
	 */
	void enterArgdef(dealParser.ArgdefContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#argdef}.
	 * @param ctx the parse tree
	 */
	void exitArgdef(dealParser.ArgdefContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#move}.
	 * @param ctx the parse tree
	 */
	void enterMove(dealParser.MoveContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#move}.
	 * @param ctx the parse tree
	 */
	void exitMove(dealParser.MoveContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#source}.
	 * @param ctx the parse tree
	 */
	void enterSource(dealParser.SourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#source}.
	 * @param ctx the parse tree
	 */
	void exitSource(dealParser.SourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#destination}.
	 * @param ctx the parse tree
	 */
	void enterDestination(dealParser.DestinationContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#destination}.
	 * @param ctx the parse tree
	 */
	void exitDestination(dealParser.DestinationContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#on_action}.
	 * @param ctx the parse tree
	 */
	void enterOn_action(dealParser.On_actionContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#on_action}.
	 * @param ctx the parse tree
	 */
	void exitOn_action(dealParser.On_actionContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#on_move}.
	 * @param ctx the parse tree
	 */
	void enterOn_move(dealParser.On_moveContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#on_move}.
	 * @param ctx the parse tree
	 */
	void exitOn_move(dealParser.On_moveContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#on_interact}.
	 * @param ctx the parse tree
	 */
	void enterOn_interact(dealParser.On_interactContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#on_interact}.
	 * @param ctx the parse tree
	 */
	void exitOn_interact(dealParser.On_interactContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#for}.
	 * @param ctx the parse tree
	 */
	void enterFor(dealParser.ForContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#for}.
	 * @param ctx the parse tree
	 */
	void exitFor(dealParser.ForContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#if}.
	 * @param ctx the parse tree
	 */
	void enterIf(dealParser.IfContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#if}.
	 * @param ctx the parse tree
	 */
	void exitIf(dealParser.IfContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#cancel}.
	 * @param ctx the parse tree
	 */
	void enterCancel(dealParser.CancelContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#cancel}.
	 * @param ctx the parse tree
	 */
	void exitCancel(dealParser.CancelContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(dealParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(dealParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(dealParser.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(dealParser.Function_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#updateTurn}.
	 * @param ctx the parse tree
	 */
	void enterUpdateTurn(dealParser.UpdateTurnContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#updateTurn}.
	 * @param ctx the parse tree
	 */
	void exitUpdateTurn(dealParser.UpdateTurnContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#log}.
	 * @param ctx the parse tree
	 */
	void enterLog(dealParser.LogContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#log}.
	 * @param ctx the parse tree
	 */
	void exitLog(dealParser.LogContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#modify}.
	 * @param ctx the parse tree
	 */
	void enterModify(dealParser.ModifyContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#modify}.
	 * @param ctx the parse tree
	 */
	void exitModify(dealParser.ModifyContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#show}.
	 * @param ctx the parse tree
	 */
	void enterShow(dealParser.ShowContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#show}.
	 * @param ctx the parse tree
	 */
	void exitShow(dealParser.ShowContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#config}.
	 * @param ctx the parse tree
	 */
	void enterConfig(dealParser.ConfigContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#config}.
	 * @param ctx the parse tree
	 */
	void exitConfig(dealParser.ConfigContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#attribute}.
	 * @param ctx the parse tree
	 */
	void enterAttribute(dealParser.AttributeContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#attribute}.
	 * @param ctx the parse tree
	 */
	void exitAttribute(dealParser.AttributeContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#atts}.
	 * @param ctx the parse tree
	 */
	void enterAtts(dealParser.AttsContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#atts}.
	 * @param ctx the parse tree
	 */
	void exitAtts(dealParser.AttsContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(dealParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(dealParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#args}.
	 * @param ctx the parse tree
	 */
	void enterArgs(dealParser.ArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#args}.
	 * @param ctx the parse tree
	 */
	void exitArgs(dealParser.ArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#arg}.
	 * @param ctx the parse tree
	 */
	void enterArg(dealParser.ArgContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#arg}.
	 * @param ctx the parse tree
	 */
	void exitArg(dealParser.ArgContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#arearef}.
	 * @param ctx the parse tree
	 */
	void enterArearef(dealParser.ArearefContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#arearef}.
	 * @param ctx the parse tree
	 */
	void exitArearef(dealParser.ArearefContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#area}.
	 * @param ctx the parse tree
	 */
	void enterArea(dealParser.AreaContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#area}.
	 * @param ctx the parse tree
	 */
	void exitArea(dealParser.AreaContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#stack}.
	 * @param ctx the parse tree
	 */
	void enterStack(dealParser.StackContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#stack}.
	 * @param ctx the parse tree
	 */
	void exitStack(dealParser.StackContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#position}.
	 * @param ctx the parse tree
	 */
	void enterPosition(dealParser.PositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#position}.
	 * @param ctx the parse tree
	 */
	void exitPosition(dealParser.PositionContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(dealParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(dealParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(dealParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(dealParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#primitives}.
	 * @param ctx the parse tree
	 */
	void enterPrimitives(dealParser.PrimitivesContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#primitives}.
	 * @param ctx the parse tree
	 */
	void exitPrimitives(dealParser.PrimitivesContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#bexpr}.
	 * @param ctx the parse tree
	 */
	void enterBexpr(dealParser.BexprContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#bexpr}.
	 * @param ctx the parse tree
	 */
	void exitBexpr(dealParser.BexprContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#set}.
	 * @param ctx the parse tree
	 */
	void enterSet(dealParser.SetContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#set}.
	 * @param ctx the parse tree
	 */
	void exitSet(dealParser.SetContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#intset}.
	 * @param ctx the parse tree
	 */
	void enterIntset(dealParser.IntsetContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#intset}.
	 * @param ctx the parse tree
	 */
	void exitIntset(dealParser.IntsetContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#positionset}.
	 * @param ctx the parse tree
	 */
	void enterPositionset(dealParser.PositionsetContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#positionset}.
	 * @param ctx the parse tree
	 */
	void exitPositionset(dealParser.PositionsetContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#playerset}.
	 * @param ctx the parse tree
	 */
	void enterPlayerset(dealParser.PlayersetContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#playerset}.
	 * @param ctx the parse tree
	 */
	void exitPlayerset(dealParser.PlayersetContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#object}.
	 * @param ctx the parse tree
	 */
	void enterObject(dealParser.ObjectContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#object}.
	 * @param ctx the parse tree
	 */
	void exitObject(dealParser.ObjectContext ctx);
	/**
	 * Enter a parse tree produced by {@link dealParser#move_catch}.
	 * @param ctx the parse tree
	 */
	void enterMove_catch(dealParser.Move_catchContext ctx);
	/**
	 * Exit a parse tree produced by {@link dealParser#move_catch}.
	 * @param ctx the parse tree
	 */
	void exitMove_catch(dealParser.Move_catchContext ctx);
}