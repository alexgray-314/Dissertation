// Generated from c:/Users/alexj/WebstormProjects/plain-js/src/language/deal.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class dealParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, COMMENT=36, VARTYPE=37, MOVE_DEST=38, 
		MOVE_SOURCE=39, INTERACT_CARD=40, PLUS=41, MINUS=42, TIMES=43, WILDCARD=44, 
		EMPTY=45, SPADES=46, HEARTS=47, CLUBS=48, DIAMONDS=49, JACK=50, QUEEN=51, 
		KING=52, ACE=53, NUMBER=54, ID=55, CARD=56, JOKER=57, STRING=58, SPACES=59, 
		NEWLINE=60;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_block = 2, RULE_player = 3, RULE_definition = 4, 
		RULE_define_function = 5, RULE_argdef = 6, RULE_move = 7, RULE_source = 8, 
		RULE_destination = 9, RULE_on_action = 10, RULE_on_move = 11, RULE_on_interact = 12, 
		RULE_for = 13, RULE_if = 14, RULE_cancel = 15, RULE_assign = 16, RULE_function_call = 17, 
		RULE_updateTurn = 18, RULE_log = 19, RULE_modify = 20, RULE_show = 21, 
		RULE_config = 22, RULE_attribute = 23, RULE_atts = 24, RULE_variable = 25, 
		RULE_args = 26, RULE_arg = 27, RULE_arearef = 28, RULE_area = 29, RULE_stack = 30, 
		RULE_position = 31, RULE_term = 32, RULE_property = 33, RULE_primitives = 34, 
		RULE_bexpr = 35, RULE_set = 36, RULE_intset = 37, RULE_positionset = 38, 
		RULE_playerset = 39, RULE_object = 40, RULE_move_catch = 41;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "block", "player", "definition", "define_function", "argdef", 
			"move", "source", "destination", "on_action", "on_move", "on_interact", 
			"for", "if", "cancel", "assign", "function_call", "updateTurn", "log", 
			"modify", "show", "config", "attribute", "atts", "variable", "args", 
			"arg", "arearef", "area", "stack", "position", "term", "property", "primitives", 
			"bexpr", "set", "intset", "positionset", "playerset", "object", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'define'", "';'", "'on'", "'<'", "'.'", "'>'", "'area'", "'action'", 
			"'function'", "'('", "')'", "'{'", "'}'", "','", "'move'", "'interact'", 
			"'for'", "'in'", "'if'", "'else'", "'cancel'", "'='", "'++'", "'log'", 
			"'show'", "'$'", "'['", "']'", "'=='", "'!='", "'<='", "'>='", "'=?'", 
			"'!?'", "':'", null, null, "'/'", "'\\'", "'@'", "'+'", "'-'", "'*'", 
			"'?'", "'empty'", "'spades'", "'hearts'", "'clubs'", "'diamonds'", "'jack'", 
			"'queen'", "'king'", "'ace'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"COMMENT", "VARTYPE", "MOVE_DEST", "MOVE_SOURCE", "INTERACT_CARD", "PLUS", 
			"MINUS", "TIMES", "WILDCARD", "EMPTY", "SPADES", "HEARTS", "CLUBS", "DIAMONDS", 
			"JACK", "QUEEN", "KING", "ACE", "NUMBER", "ID", "CARD", "JOKER", "STRING", 
			"SPACES", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "deal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public dealParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(dealParser.EOF, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36030721284538394L) != 0)) {
				{
				{
				setState(84);
				stmt();
				}
				}
				setState(89);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(90);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StmtContext extends ParserRuleContext {
		public Define_functionContext define_function() {
			return getRuleContext(Define_functionContext.class,0);
		}
		public DefinitionContext definition() {
			return getRuleContext(DefinitionContext.class,0);
		}
		public MoveContext move() {
			return getRuleContext(MoveContext.class,0);
		}
		public On_actionContext on_action() {
			return getRuleContext(On_actionContext.class,0);
		}
		public On_moveContext on_move() {
			return getRuleContext(On_moveContext.class,0);
		}
		public On_interactContext on_interact() {
			return getRuleContext(On_interactContext.class,0);
		}
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
		}
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public CancelContext cancel() {
			return getRuleContext(CancelContext.class,0);
		}
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public UpdateTurnContext updateTurn() {
			return getRuleContext(UpdateTurnContext.class,0);
		}
		public LogContext log() {
			return getRuleContext(LogContext.class,0);
		}
		public ModifyContext modify() {
			return getRuleContext(ModifyContext.class,0);
		}
		public ShowContext show() {
			return getRuleContext(ShowContext.class,0);
		}
		public ConfigContext config() {
			return getRuleContext(ConfigContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitStmt(this);
		}
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(132);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				match(T__0);
				setState(97);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__6:
				case T__7:
				case VARTYPE:
					{
					{
					setState(93);
					definition();
					setState(94);
					match(T__1);
					}
					}
					break;
				case T__8:
					{
					setState(96);
					define_function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(99);
				move();
				setState(100);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(102);
				match(T__2);
				setState(106);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(103);
					on_action();
					}
					break;
				case T__14:
					{
					setState(104);
					on_move();
					}
					break;
				case T__15:
					{
					setState(105);
					on_interact();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(108);
				for_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(109);
				if_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(110);
				cancel();
				setState(111);
				match(T__1);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(113);
				assign();
				setState(114);
				match(T__1);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(116);
				function_call();
				setState(117);
				match(T__1);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(119);
				updateTurn();
				setState(120);
				match(T__1);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(122);
				log();
				setState(123);
				match(T__1);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(125);
				modify();
				setState(126);
				match(T__1);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(128);
				show();
				setState(129);
				match(T__1);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(131);
				config();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36030721284538394L) != 0)) {
				{
				{
				setState(134);
				stmt();
				}
				}
				setState(139);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlayerContext extends ParserRuleContext {
		public TerminalNode INTERACT_CARD() { return getToken(dealParser.INTERACT_CARD, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public PlayerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_player; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterPlayer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitPlayer(this);
		}
	}

	public final PlayerContext player() throws RecognitionException {
		PlayerContext _localctx = new PlayerContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(T__3);
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(141);
				match(T__4);
				}
				break;
			case 2:
				{
				setState(142);
				match(INTERACT_CARD);
				}
				break;
			case 3:
				{
				setState(143);
				term();
				}
				break;
			}
			setState(146);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefinitionContext extends ParserRuleContext {
		public Token type;
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public TerminalNode VARTYPE() { return getToken(dealParser.VARTYPE, 0); }
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitDefinition(this);
		}
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			((DefinitionContext)_localctx).type = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 137438953856L) != 0)) ) {
				((DefinitionContext)_localctx).type = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(149);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Define_functionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ArgdefContext argdef() {
			return getRuleContext(ArgdefContext.class,0);
		}
		public Define_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define_function; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterDefine_function(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitDefine_function(this);
		}
	}

	public final Define_functionContext define_function() throws RecognitionException {
		Define_functionContext _localctx = new Define_functionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_define_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(T__8);
			setState(152);
			match(ID);
			setState(153);
			match(T__9);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARTYPE) {
				{
				setState(154);
				argdef();
				}
			}

			setState(157);
			match(T__10);
			setState(158);
			match(T__11);
			setState(159);
			block();
			setState(160);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgdefContext extends ParserRuleContext {
		public List<TerminalNode> VARTYPE() { return getTokens(dealParser.VARTYPE); }
		public TerminalNode VARTYPE(int i) {
			return getToken(dealParser.VARTYPE, i);
		}
		public List<TerminalNode> ID() { return getTokens(dealParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(dealParser.ID, i);
		}
		public ArgdefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argdef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterArgdef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitArgdef(this);
		}
	}

	public final ArgdefContext argdef() throws RecognitionException {
		ArgdefContext _localctx = new ArgdefContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_argdef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(VARTYPE);
			setState(163);
			match(ID);
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__13) {
				{
				{
				setState(164);
				match(T__13);
				setState(165);
				match(VARTYPE);
				setState(166);
				match(ID);
				}
				}
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MoveContext extends ParserRuleContext {
		public SourceContext source() {
			return getRuleContext(SourceContext.class,0);
		}
		public DestinationContext destination() {
			return getRuleContext(DestinationContext.class,0);
		}
		public MoveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterMove(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitMove(this);
		}
	}

	public final MoveContext move() throws RecognitionException {
		MoveContext _localctx = new MoveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			match(T__14);
			setState(173);
			source();
			setState(174);
			destination();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SourceContext extends ParserRuleContext {
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public SourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_source; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterSource(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitSource(this);
		}
	}

	public final SourceContext source() throws RecognitionException {
		SourceContext _localctx = new SourceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_source);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(176);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(177);
				position();
				}
				break;
			case 3:
				{
				setState(178);
				positionset();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DestinationContext extends ParserRuleContext {
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public DestinationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_destination; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterDestination(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitDestination(this);
		}
	}

	public final DestinationContext destination() throws RecognitionException {
		DestinationContext _localctx = new DestinationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_destination);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			position();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_actionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_action; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterOn_action(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitOn_action(this);
		}
	}

	public final On_actionContext on_action() throws RecognitionException {
		On_actionContext _localctx = new On_actionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_on_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(ID);
			setState(184);
			match(T__11);
			setState(185);
			block();
			setState(186);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_moveContext extends ParserRuleContext {
		public List<Move_catchContext> move_catch() {
			return getRuleContexts(Move_catchContext.class);
		}
		public Move_catchContext move_catch(int i) {
			return getRuleContext(Move_catchContext.class,i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_moveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_move; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterOn_move(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitOn_move(this);
		}
	}

	public final On_moveContext on_move() throws RecognitionException {
		On_moveContext _localctx = new On_moveContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_on_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(T__14);
			setState(189);
			move_catch();
			setState(190);
			move_catch();
			setState(191);
			match(T__11);
			setState(192);
			block();
			setState(193);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class On_interactContext extends ParserRuleContext {
		public Move_catchContext move_catch() {
			return getRuleContext(Move_catchContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_interactContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_interact; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterOn_interact(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitOn_interact(this);
		}
	}

	public final On_interactContext on_interact() throws RecognitionException {
		On_interactContext _localctx = new On_interactContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_on_interact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(T__15);
			setState(196);
			move_catch();
			setState(197);
			match(T__11);
			setState(198);
			block();
			setState(199);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterFor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitFor(this);
		}
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__16);
			setState(202);
			match(ID);
			setState(203);
			match(T__17);
			setState(204);
			set();
			setState(205);
			match(T__11);
			setState(206);
			block();
			setState(207);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfContext extends ParserRuleContext {
		public BlockContext consequent;
		public BlockContext antecedent;
		public BexprContext bexpr() {
			return getRuleContext(BexprContext.class,0);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public IfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterIf(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitIf(this);
		}
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(T__18);
			setState(210);
			bexpr();
			setState(211);
			match(T__11);
			setState(212);
			((IfContext)_localctx).consequent = block();
			setState(213);
			match(T__12);
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(214);
				match(T__19);
				setState(215);
				match(T__11);
				setState(216);
				((IfContext)_localctx).antecedent = block();
				setState(217);
				match(T__12);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CancelContext extends ParserRuleContext {
		public CancelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cancel; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterCancel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitCancel(this);
		}
	}

	public final CancelContext cancel() throws RecognitionException {
		CancelContext _localctx = new CancelContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_cancel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(T__20);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterAssign(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitAssign(this);
		}
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			variable();
			setState(224);
			match(T__21);
			setState(225);
			term();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_callContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterFunction_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitFunction_call(this);
		}
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_function_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(ID);
			setState(228);
			args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UpdateTurnContext extends ParserRuleContext {
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public UpdateTurnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateTurn; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterUpdateTurn(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitUpdateTurn(this);
		}
	}

	public final UpdateTurnContext updateTurn() throws RecognitionException {
		UpdateTurnContext _localctx = new UpdateTurnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_updateTurn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			match(T__3);
			setState(231);
			match(T__4);
			setState(232);
			match(T__5);
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(233);
				match(T__22);
				}
				break;
			case T__21:
				{
				setState(234);
				match(T__21);
				setState(235);
				player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public LogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_log; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterLog(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitLog(this);
		}
	}

	public final LogContext log() throws RecognitionException {
		LogContext _localctx = new LogContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_log);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(T__23);
			setState(240); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(239);
				term();
				}
				}
				setState(242); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 432312304000827408L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModifyContext extends ParserRuleContext {
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ModifyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modify; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterModify(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitModify(this);
		}
	}

	public final ModifyContext modify() throws RecognitionException {
		ModifyContext _localctx = new ModifyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_modify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(244);
				position();
				}
				break;
			case 2:
				{
				setState(245);
				variable();
				}
				break;
			}
			setState(248);
			match(T__4);
			setState(249);
			function_call();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ShowContext extends ParserRuleContext {
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ShowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_show; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterShow(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitShow(this);
		}
	}

	public final ShowContext show() throws RecognitionException {
		ShowContext _localctx = new ShowContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_show);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			match(T__24);
			setState(255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(252);
				position();
				}
				break;
			case 2:
				{
				setState(253);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(254);
				variable();
				}
				break;
			}
			setState(257);
			player();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConfigContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public AttsContext atts() {
			return getRuleContext(AttsContext.class,0);
		}
		public ConfigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_config; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterConfig(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitConfig(this);
		}
	}

	public final ConfigContext config() throws RecognitionException {
		ConfigContext _localctx = new ConfigContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_config);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(T__25);
			setState(260);
			match(ID);
			setState(261);
			atts();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttributeContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(dealParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(dealParser.ID, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(dealParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(dealParser.NUMBER, i);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public AttsContext atts() {
			return getRuleContext(AttsContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterAttribute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitAttribute(this);
		}
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(263);
				match(ID);
				}
				break;
			case 2:
				{
				setState(264);
				match(NUMBER);
				}
				break;
			case 3:
				{
				setState(265);
				intset();
				}
				break;
			}
			setState(272);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(268);
				match(ID);
				}
				break;
			case STRING:
				{
				setState(269);
				match(STRING);
				}
				break;
			case NUMBER:
				{
				setState(270);
				match(NUMBER);
				}
				break;
			case T__11:
				{
				setState(271);
				atts();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AttsContext extends ParserRuleContext {
		public List<AttributeContext> attribute() {
			return getRuleContexts(AttributeContext.class);
		}
		public AttributeContext attribute(int i) {
			return getRuleContext(AttributeContext.class,i);
		}
		public AttsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atts; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterAtts(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitAtts(this);
		}
	}

	public final AttsContext atts() throws RecognitionException {
		AttsContext _localctx = new AttsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_atts);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(T__11);
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 432312304000827408L) != 0)) {
				{
				setState(275);
				attribute();
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(276);
					match(T__13);
					setState(277);
					attribute();
					}
					}
					setState(282);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(285);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterVariable(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitVariable(this);
		}
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgsContext extends ParserRuleContext {
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public ArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterArgs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitArgs(this);
		}
	}

	public final ArgsContext args() throws RecognitionException {
		ArgsContext _localctx = new ArgsContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(T__9);
			setState(298);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 432312304000827408L) != 0)) {
				{
				setState(290);
				arg();
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(291);
					match(T__13);
					setState(292);
					arg();
					}
					}
					setState(297);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(300);
			match(T__10);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterArg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitArg(this);
		}
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			term();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArearefContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public ArearefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arearef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterArearef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitArearef(this);
		}
	}

	public final ArearefContext arearef() throws RecognitionException {
		ArearefContext _localctx = new ArearefContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_arearef);
		try {
			setState(306);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(304);
				match(ID);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(305);
				player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AreaContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public AreaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_area; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterArea(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitArea(this);
		}
	}

	public final AreaContext area() throws RecognitionException {
		AreaContext _localctx = new AreaContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_area);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			arearef();
			setState(309);
			match(T__26);
			setState(310);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StackContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public StackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stack; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterStack(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitStack(this);
		}
	}

	public final StackContext stack() throws RecognitionException {
		StackContext _localctx = new StackContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_stack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			arearef();
			setState(313);
			match(T__26);
			setState(314);
			term();
			setState(315);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PositionContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public TerminalNode MOVE_SOURCE() { return getToken(dealParser.MOVE_SOURCE, 0); }
		public TerminalNode MOVE_DEST() { return getToken(dealParser.MOVE_DEST, 0); }
		public TerminalNode INTERACT_CARD() { return getToken(dealParser.INTERACT_CARD, 0); }
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterPosition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitPosition(this);
		}
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_position);
		try {
			setState(327);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(317);
				arearef();
				setState(318);
				match(T__26);
				setState(319);
				term();
				setState(320);
				match(T__13);
				setState(321);
				term();
				setState(322);
				match(T__27);
				}
				break;
			case MOVE_SOURCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(324);
				match(MOVE_SOURCE);
				}
				break;
			case MOVE_DEST:
				enterOuterAlt(_localctx, 3);
				{
				setState(325);
				match(MOVE_DEST);
				}
				break;
			case INTERACT_CARD:
				enterOuterAlt(_localctx, 4);
				{
				setState(326);
				match(INTERACT_CARD);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public Token op;
		public PrimitivesContext primitives() {
			return getRuleContext(PrimitivesContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public AreaContext area() {
			return getRuleContext(AreaContext.class,0);
		}
		public StackContext stack() {
			return getRuleContext(StackContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(dealParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(dealParser.MINUS, 0); }
		public TerminalNode TIMES() { return getToken(dealParser.TIMES, 0); }
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterTerm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitTerm(this);
		}
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(329);
				primitives();
				}
				break;
			case 2:
				{
				setState(330);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(331);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(332);
				variable();
				}
				break;
			case 5:
				{
				setState(333);
				match(NUMBER);
				}
				break;
			case 6:
				{
				setState(334);
				player();
				}
				break;
			case 7:
				{
				setState(335);
				area();
				}
				break;
			case 8:
				{
				setState(336);
				stack();
				}
				break;
			case 9:
				{
				setState(337);
				position();
				}
				break;
			}
			setState(341);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(340);
				property();
				}
				break;
			}
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 15393162788864L) != 0)) {
				{
				setState(343);
				((TermContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15393162788864L) != 0)) ) {
					((TermContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(344);
				term();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterProperty(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitProperty(this);
		}
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			match(T__4);
			setState(348);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitivesContext extends ParserRuleContext {
		public TerminalNode EMPTY() { return getToken(dealParser.EMPTY, 0); }
		public TerminalNode SPADES() { return getToken(dealParser.SPADES, 0); }
		public TerminalNode HEARTS() { return getToken(dealParser.HEARTS, 0); }
		public TerminalNode CLUBS() { return getToken(dealParser.CLUBS, 0); }
		public TerminalNode DIAMONDS() { return getToken(dealParser.DIAMONDS, 0); }
		public TerminalNode JACK() { return getToken(dealParser.JACK, 0); }
		public TerminalNode QUEEN() { return getToken(dealParser.QUEEN, 0); }
		public TerminalNode KING() { return getToken(dealParser.KING, 0); }
		public TerminalNode ACE() { return getToken(dealParser.ACE, 0); }
		public PrimitivesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitives; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterPrimitives(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitPrimitives(this);
		}
	}

	public final PrimitivesContext primitives() throws RecognitionException {
		PrimitivesContext _localctx = new PrimitivesContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_primitives);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 17979214137393152L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BexprContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public BexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterBexpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitBexpr(this);
		}
	}

	public final BexprContext bexpr() throws RecognitionException {
		BexprContext _localctx = new BexprContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			term();
			setState(357);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case T__5:
			case T__28:
			case T__29:
			case T__30:
			case T__31:
				{
				{
				setState(353);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8053063760L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(354);
				term();
				}
				}
				break;
			case T__32:
			case T__33:
				{
				{
				setState(355);
				_la = _input.LA(1);
				if ( !(_la==T__32 || _la==T__33) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(356);
				set();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SetContext extends ParserRuleContext {
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterSet(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitSet(this);
		}
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(359);
				intset();
				}
				break;
			case 2:
				{
				setState(360);
				positionset();
				}
				break;
			case 3:
				{
				setState(361);
				playerset();
				}
				break;
			}
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(364);
				property();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntsetContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public IntsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intset; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterIntset(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitIntset(this);
		}
	}

	public final IntsetContext intset() throws RecognitionException {
		IntsetContext _localctx = new IntsetContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_intset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			term();
			setState(368);
			match(T__34);
			setState(370);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(369);
				term();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PositionsetContext extends ParserRuleContext {
		public ArearefContext arearef() {
			return getRuleContext(ArearefContext.class,0);
		}
		public List<IntsetContext> intset() {
			return getRuleContexts(IntsetContext.class);
		}
		public IntsetContext intset(int i) {
			return getRuleContext(IntsetContext.class,i);
		}
		public PositionsetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_positionset; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterPositionset(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitPositionset(this);
		}
	}

	public final PositionsetContext positionset() throws RecognitionException {
		PositionsetContext _localctx = new PositionsetContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			arearef();
			setState(373);
			match(T__26);
			setState(374);
			intset();
			setState(375);
			match(T__13);
			setState(376);
			intset();
			setState(377);
			match(T__27);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlayersetContext extends ParserRuleContext {
		public TerminalNode TIMES() { return getToken(dealParser.TIMES, 0); }
		public PlayersetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_playerset; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterPlayerset(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitPlayerset(this);
		}
	}

	public final PlayersetContext playerset() throws RecognitionException {
		PlayersetContext _localctx = new PlayersetContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(T__3);
			setState(380);
			match(TIMES);
			setState(381);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObjectContext extends ParserRuleContext {
		public PrimitivesContext primitives() {
			return getRuleContext(PrimitivesContext.class,0);
		}
		public TerminalNode CARD() { return getToken(dealParser.CARD, 0); }
		public TerminalNode STRING() { return getToken(dealParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(dealParser.NUMBER, 0); }
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public AreaContext area() {
			return getRuleContext(AreaContext.class,0);
		}
		public StackContext stack() {
			return getRuleContext(StackContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterObject(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitObject(this);
		}
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_object);
		try {
			setState(395);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(383);
				primitives();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(384);
				match(CARD);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(385);
				match(STRING);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(386);
				variable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(387);
				match(NUMBER);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(388);
				player();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(389);
				area();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(390);
				stack();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(391);
				position();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(392);
				intset();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(393);
				positionset();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(394);
				playerset();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Move_catchContext extends ParserRuleContext {
		public TerminalNode WILDCARD() { return getToken(dealParser.WILDCARD, 0); }
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public Move_catchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_move_catch; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).enterMove_catch(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof dealListener ) ((dealListener)listener).exitMove_catch(this);
		}
	}

	public final Move_catchContext move_catch() throws RecognitionException {
		Move_catchContext _localctx = new Move_catchContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_move_catch);
		try {
			setState(400);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(397);
				match(WILDCARD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(398);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(399);
				positionset();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001<\u0193\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0001\u0000\u0005\u0000V\b\u0000\n\u0000\f\u0000"+
		"Y\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001b\b\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"k\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001\u0085\b\u0001\u0001\u0002\u0005\u0002\u0088\b"+
		"\u0002\n\u0002\f\u0002\u008b\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003\u0091\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0003\u0005\u009c\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0005\u0006\u00a8\b\u0006\n\u0006\f\u0006\u00ab\t\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0003\b\u00b4\b"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u00dc\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0003\u0012\u00ed\b\u0012\u0001\u0013\u0001\u0013\u0004\u0013\u00f1"+
		"\b\u0013\u000b\u0013\f\u0013\u00f2\u0001\u0014\u0001\u0014\u0003\u0014"+
		"\u00f7\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0003\u0015\u0100\b\u0015\u0001\u0015\u0001\u0015"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u010b\b\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0003\u0017\u0111\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0005\u0018\u0117\b\u0018\n\u0018\f\u0018\u011a\t\u0018\u0003"+
		"\u0018\u011c\b\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a\u0126\b\u001a\n"+
		"\u001a\f\u001a\u0129\t\u001a\u0003\u001a\u012b\b\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0003\u001c\u0133"+
		"\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0003\u001f\u0148\b\u001f\u0001 \u0001 \u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0153\b \u0001 \u0003 \u0156"+
		"\b \u0001 \u0001 \u0003 \u015a\b \u0001!\u0001!\u0001!\u0001\"\u0001\""+
		"\u0001#\u0001#\u0001#\u0001#\u0001#\u0003#\u0166\b#\u0001$\u0001$\u0001"+
		"$\u0003$\u016b\b$\u0001$\u0003$\u016e\b$\u0001%\u0001%\u0001%\u0003%\u0173"+
		"\b%\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0001"+
		"\'\u0001\'\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001"+
		"(\u0001(\u0001(\u0001(\u0003(\u018c\b(\u0001)\u0001)\u0001)\u0003)\u0191"+
		"\b)\u0001)\u0000\u0000*\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0000"+
		"\u0005\u0002\u0000\u0007\b%%\u0001\u0000)+\u0001\u0000-5\u0003\u0000\u0004"+
		"\u0004\u0006\u0006\u001d \u0001\u0000!\"\u01ae\u0000W\u0001\u0000\u0000"+
		"\u0000\u0002\u0084\u0001\u0000\u0000\u0000\u0004\u0089\u0001\u0000\u0000"+
		"\u0000\u0006\u008c\u0001\u0000\u0000\u0000\b\u0094\u0001\u0000\u0000\u0000"+
		"\n\u0097\u0001\u0000\u0000\u0000\f\u00a2\u0001\u0000\u0000\u0000\u000e"+
		"\u00ac\u0001\u0000\u0000\u0000\u0010\u00b3\u0001\u0000\u0000\u0000\u0012"+
		"\u00b5\u0001\u0000\u0000\u0000\u0014\u00b7\u0001\u0000\u0000\u0000\u0016"+
		"\u00bc\u0001\u0000\u0000\u0000\u0018\u00c3\u0001\u0000\u0000\u0000\u001a"+
		"\u00c9\u0001\u0000\u0000\u0000\u001c\u00d1\u0001\u0000\u0000\u0000\u001e"+
		"\u00dd\u0001\u0000\u0000\u0000 \u00df\u0001\u0000\u0000\u0000\"\u00e3"+
		"\u0001\u0000\u0000\u0000$\u00e6\u0001\u0000\u0000\u0000&\u00ee\u0001\u0000"+
		"\u0000\u0000(\u00f6\u0001\u0000\u0000\u0000*\u00fb\u0001\u0000\u0000\u0000"+
		",\u0103\u0001\u0000\u0000\u0000.\u010a\u0001\u0000\u0000\u00000\u0112"+
		"\u0001\u0000\u0000\u00002\u011f\u0001\u0000\u0000\u00004\u0121\u0001\u0000"+
		"\u0000\u00006\u012e\u0001\u0000\u0000\u00008\u0132\u0001\u0000\u0000\u0000"+
		":\u0134\u0001\u0000\u0000\u0000<\u0138\u0001\u0000\u0000\u0000>\u0147"+
		"\u0001\u0000\u0000\u0000@\u0152\u0001\u0000\u0000\u0000B\u015b\u0001\u0000"+
		"\u0000\u0000D\u015e\u0001\u0000\u0000\u0000F\u0160\u0001\u0000\u0000\u0000"+
		"H\u016a\u0001\u0000\u0000\u0000J\u016f\u0001\u0000\u0000\u0000L\u0174"+
		"\u0001\u0000\u0000\u0000N\u017b\u0001\u0000\u0000\u0000P\u018b\u0001\u0000"+
		"\u0000\u0000R\u0190\u0001\u0000\u0000\u0000TV\u0003\u0002\u0001\u0000"+
		"UT\u0001\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000"+
		"\u0000WX\u0001\u0000\u0000\u0000XZ\u0001\u0000\u0000\u0000YW\u0001\u0000"+
		"\u0000\u0000Z[\u0005\u0000\u0000\u0001[\u0001\u0001\u0000\u0000\u0000"+
		"\\a\u0005\u0001\u0000\u0000]^\u0003\b\u0004\u0000^_\u0005\u0002\u0000"+
		"\u0000_b\u0001\u0000\u0000\u0000`b\u0003\n\u0005\u0000a]\u0001\u0000\u0000"+
		"\u0000a`\u0001\u0000\u0000\u0000b\u0085\u0001\u0000\u0000\u0000cd\u0003"+
		"\u000e\u0007\u0000de\u0005\u0002\u0000\u0000e\u0085\u0001\u0000\u0000"+
		"\u0000fj\u0005\u0003\u0000\u0000gk\u0003\u0014\n\u0000hk\u0003\u0016\u000b"+
		"\u0000ik\u0003\u0018\f\u0000jg\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000"+
		"\u0000ji\u0001\u0000\u0000\u0000k\u0085\u0001\u0000\u0000\u0000l\u0085"+
		"\u0003\u001a\r\u0000m\u0085\u0003\u001c\u000e\u0000no\u0003\u001e\u000f"+
		"\u0000op\u0005\u0002\u0000\u0000p\u0085\u0001\u0000\u0000\u0000qr\u0003"+
		" \u0010\u0000rs\u0005\u0002\u0000\u0000s\u0085\u0001\u0000\u0000\u0000"+
		"tu\u0003\"\u0011\u0000uv\u0005\u0002\u0000\u0000v\u0085\u0001\u0000\u0000"+
		"\u0000wx\u0003$\u0012\u0000xy\u0005\u0002\u0000\u0000y\u0085\u0001\u0000"+
		"\u0000\u0000z{\u0003&\u0013\u0000{|\u0005\u0002\u0000\u0000|\u0085\u0001"+
		"\u0000\u0000\u0000}~\u0003(\u0014\u0000~\u007f\u0005\u0002\u0000\u0000"+
		"\u007f\u0085\u0001\u0000\u0000\u0000\u0080\u0081\u0003*\u0015\u0000\u0081"+
		"\u0082\u0005\u0002\u0000\u0000\u0082\u0085\u0001\u0000\u0000\u0000\u0083"+
		"\u0085\u0003,\u0016\u0000\u0084\\\u0001\u0000\u0000\u0000\u0084c\u0001"+
		"\u0000\u0000\u0000\u0084f\u0001\u0000\u0000\u0000\u0084l\u0001\u0000\u0000"+
		"\u0000\u0084m\u0001\u0000\u0000\u0000\u0084n\u0001\u0000\u0000\u0000\u0084"+
		"q\u0001\u0000\u0000\u0000\u0084t\u0001\u0000\u0000\u0000\u0084w\u0001"+
		"\u0000\u0000\u0000\u0084z\u0001\u0000\u0000\u0000\u0084}\u0001\u0000\u0000"+
		"\u0000\u0084\u0080\u0001\u0000\u0000\u0000\u0084\u0083\u0001\u0000\u0000"+
		"\u0000\u0085\u0003\u0001\u0000\u0000\u0000\u0086\u0088\u0003\u0002\u0001"+
		"\u0000\u0087\u0086\u0001\u0000\u0000\u0000\u0088\u008b\u0001\u0000\u0000"+
		"\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000\u0000"+
		"\u0000\u008a\u0005\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000\u0000"+
		"\u0000\u008c\u0090\u0005\u0004\u0000\u0000\u008d\u0091\u0005\u0005\u0000"+
		"\u0000\u008e\u0091\u0005(\u0000\u0000\u008f\u0091\u0003@ \u0000\u0090"+
		"\u008d\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090"+
		"\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092"+
		"\u0093\u0005\u0006\u0000\u0000\u0093\u0007\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0007\u0000\u0000\u0000\u0095\u0096\u00057\u0000\u0000\u0096\t"+
		"\u0001\u0000\u0000\u0000\u0097\u0098\u0005\t\u0000\u0000\u0098\u0099\u0005"+
		"7\u0000\u0000\u0099\u009b\u0005\n\u0000\u0000\u009a\u009c\u0003\f\u0006"+
		"\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009e\u0005\u000b\u0000"+
		"\u0000\u009e\u009f\u0005\f\u0000\u0000\u009f\u00a0\u0003\u0004\u0002\u0000"+
		"\u00a0\u00a1\u0005\r\u0000\u0000\u00a1\u000b\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a3\u0005%\u0000\u0000\u00a3\u00a9\u00057\u0000\u0000\u00a4\u00a5\u0005"+
		"\u000e\u0000\u0000\u00a5\u00a6\u0005%\u0000\u0000\u00a6\u00a8\u00057\u0000"+
		"\u0000\u00a7\u00a4\u0001\u0000\u0000\u0000\u00a8\u00ab\u0001\u0000\u0000"+
		"\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000"+
		"\u0000\u00aa\r\u0001\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000"+
		"\u00ac\u00ad\u0005\u000f\u0000\u0000\u00ad\u00ae\u0003\u0010\b\u0000\u00ae"+
		"\u00af\u0003\u0012\t\u0000\u00af\u000f\u0001\u0000\u0000\u0000\u00b0\u00b4"+
		"\u00058\u0000\u0000\u00b1\u00b4\u0003>\u001f\u0000\u00b2\u00b4\u0003L"+
		"&\u0000\u00b3\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b2\u0001\u0000\u0000\u0000\u00b4\u0011\u0001\u0000\u0000"+
		"\u0000\u00b5\u00b6\u0003>\u001f\u0000\u00b6\u0013\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b8\u00057\u0000\u0000\u00b8\u00b9\u0005\f\u0000\u0000\u00b9"+
		"\u00ba\u0003\u0004\u0002\u0000\u00ba\u00bb\u0005\r\u0000\u0000\u00bb\u0015"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005\u000f\u0000\u0000\u00bd\u00be"+
		"\u0003R)\u0000\u00be\u00bf\u0003R)\u0000\u00bf\u00c0\u0005\f\u0000\u0000"+
		"\u00c0\u00c1\u0003\u0004\u0002\u0000\u00c1\u00c2\u0005\r\u0000\u0000\u00c2"+
		"\u0017\u0001\u0000\u0000\u0000\u00c3\u00c4\u0005\u0010\u0000\u0000\u00c4"+
		"\u00c5\u0003R)\u0000\u00c5\u00c6\u0005\f\u0000\u0000\u00c6\u00c7\u0003"+
		"\u0004\u0002\u0000\u00c7\u00c8\u0005\r\u0000\u0000\u00c8\u0019\u0001\u0000"+
		"\u0000\u0000\u00c9\u00ca\u0005\u0011\u0000\u0000\u00ca\u00cb\u00057\u0000"+
		"\u0000\u00cb\u00cc\u0005\u0012\u0000\u0000\u00cc\u00cd\u0003H$\u0000\u00cd"+
		"\u00ce\u0005\f\u0000\u0000\u00ce\u00cf\u0003\u0004\u0002\u0000\u00cf\u00d0"+
		"\u0005\r\u0000\u0000\u00d0\u001b\u0001\u0000\u0000\u0000\u00d1\u00d2\u0005"+
		"\u0013\u0000\u0000\u00d2\u00d3\u0003F#\u0000\u00d3\u00d4\u0005\f\u0000"+
		"\u0000\u00d4\u00d5\u0003\u0004\u0002\u0000\u00d5\u00db\u0005\r\u0000\u0000"+
		"\u00d6\u00d7\u0005\u0014\u0000\u0000\u00d7\u00d8\u0005\f\u0000\u0000\u00d8"+
		"\u00d9\u0003\u0004\u0002\u0000\u00d9\u00da\u0005\r\u0000\u0000\u00da\u00dc"+
		"\u0001\u0000\u0000\u0000\u00db\u00d6\u0001\u0000\u0000\u0000\u00db\u00dc"+
		"\u0001\u0000\u0000\u0000\u00dc\u001d\u0001\u0000\u0000\u0000\u00dd\u00de"+
		"\u0005\u0015\u0000\u0000\u00de\u001f\u0001\u0000\u0000\u0000\u00df\u00e0"+
		"\u00032\u0019\u0000\u00e0\u00e1\u0005\u0016\u0000\u0000\u00e1\u00e2\u0003"+
		"@ \u0000\u00e2!\u0001\u0000\u0000\u0000\u00e3\u00e4\u00057\u0000\u0000"+
		"\u00e4\u00e5\u00034\u001a\u0000\u00e5#\u0001\u0000\u0000\u0000\u00e6\u00e7"+
		"\u0005\u0004\u0000\u0000\u00e7\u00e8\u0005\u0005\u0000\u0000\u00e8\u00ec"+
		"\u0005\u0006\u0000\u0000\u00e9\u00ed\u0005\u0017\u0000\u0000\u00ea\u00eb"+
		"\u0005\u0016\u0000\u0000\u00eb\u00ed\u0003\u0006\u0003\u0000\u00ec\u00e9"+
		"\u0001\u0000\u0000\u0000\u00ec\u00ea\u0001\u0000\u0000\u0000\u00ed%\u0001"+
		"\u0000\u0000\u0000\u00ee\u00f0\u0005\u0018\u0000\u0000\u00ef\u00f1\u0003"+
		"@ \u0000\u00f0\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000\u0000"+
		"\u0000\u00f2\u00f0\u0001\u0000\u0000\u0000\u00f2\u00f3\u0001\u0000\u0000"+
		"\u0000\u00f3\'\u0001\u0000\u0000\u0000\u00f4\u00f7\u0003>\u001f\u0000"+
		"\u00f5\u00f7\u00032\u0019\u0000\u00f6\u00f4\u0001\u0000\u0000\u0000\u00f6"+
		"\u00f5\u0001\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000\u00f8"+
		"\u00f9\u0005\u0005\u0000\u0000\u00f9\u00fa\u0003\"\u0011\u0000\u00fa)"+
		"\u0001\u0000\u0000\u0000\u00fb\u00ff\u0005\u0019\u0000\u0000\u00fc\u0100"+
		"\u0003>\u001f\u0000\u00fd\u0100\u00058\u0000\u0000\u00fe\u0100\u00032"+
		"\u0019\u0000\u00ff\u00fc\u0001\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000"+
		"\u0000\u0000\u00ff\u00fe\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000"+
		"\u0000\u0000\u0101\u0102\u0003\u0006\u0003\u0000\u0102+\u0001\u0000\u0000"+
		"\u0000\u0103\u0104\u0005\u001a\u0000\u0000\u0104\u0105\u00057\u0000\u0000"+
		"\u0105\u0106\u00030\u0018\u0000\u0106-\u0001\u0000\u0000\u0000\u0107\u010b"+
		"\u00057\u0000\u0000\u0108\u010b\u00056\u0000\u0000\u0109\u010b\u0003J"+
		"%\u0000\u010a\u0107\u0001\u0000\u0000\u0000\u010a\u0108\u0001\u0000\u0000"+
		"\u0000\u010a\u0109\u0001\u0000\u0000\u0000\u010b\u0110\u0001\u0000\u0000"+
		"\u0000\u010c\u0111\u00057\u0000\u0000\u010d\u0111\u0005:\u0000\u0000\u010e"+
		"\u0111\u00056\u0000\u0000\u010f\u0111\u00030\u0018\u0000\u0110\u010c\u0001"+
		"\u0000\u0000\u0000\u0110\u010d\u0001\u0000\u0000\u0000\u0110\u010e\u0001"+
		"\u0000\u0000\u0000\u0110\u010f\u0001\u0000\u0000\u0000\u0111/\u0001\u0000"+
		"\u0000\u0000\u0112\u011b\u0005\f\u0000\u0000\u0113\u0118\u0003.\u0017"+
		"\u0000\u0114\u0115\u0005\u000e\u0000\u0000\u0115\u0117\u0003.\u0017\u0000"+
		"\u0116\u0114\u0001\u0000\u0000\u0000\u0117\u011a\u0001\u0000\u0000\u0000"+
		"\u0118\u0116\u0001\u0000\u0000\u0000\u0118\u0119\u0001\u0000\u0000\u0000"+
		"\u0119\u011c\u0001\u0000\u0000\u0000\u011a\u0118\u0001\u0000\u0000\u0000"+
		"\u011b\u0113\u0001\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000\u0000"+
		"\u011c\u011d\u0001\u0000\u0000\u0000\u011d\u011e\u0005\r\u0000\u0000\u011e"+
		"1\u0001\u0000\u0000\u0000\u011f\u0120\u00057\u0000\u0000\u01203\u0001"+
		"\u0000\u0000\u0000\u0121\u012a\u0005\n\u0000\u0000\u0122\u0127\u00036"+
		"\u001b\u0000\u0123\u0124\u0005\u000e\u0000\u0000\u0124\u0126\u00036\u001b"+
		"\u0000\u0125\u0123\u0001\u0000\u0000\u0000\u0126\u0129\u0001\u0000\u0000"+
		"\u0000\u0127\u0125\u0001\u0000\u0000\u0000\u0127\u0128\u0001\u0000\u0000"+
		"\u0000\u0128\u012b\u0001\u0000\u0000\u0000\u0129\u0127\u0001\u0000\u0000"+
		"\u0000\u012a\u0122\u0001\u0000\u0000\u0000\u012a\u012b\u0001\u0000\u0000"+
		"\u0000\u012b\u012c\u0001\u0000\u0000\u0000\u012c\u012d\u0005\u000b\u0000"+
		"\u0000\u012d5\u0001\u0000\u0000\u0000\u012e\u012f\u0003@ \u0000\u012f"+
		"7\u0001\u0000\u0000\u0000\u0130\u0133\u00057\u0000\u0000\u0131\u0133\u0003"+
		"\u0006\u0003\u0000\u0132\u0130\u0001\u0000\u0000\u0000\u0132\u0131\u0001"+
		"\u0000\u0000\u0000\u01339\u0001\u0000\u0000\u0000\u0134\u0135\u00038\u001c"+
		"\u0000\u0135\u0136\u0005\u001b\u0000\u0000\u0136\u0137\u0005\u001c\u0000"+
		"\u0000\u0137;\u0001\u0000\u0000\u0000\u0138\u0139\u00038\u001c\u0000\u0139"+
		"\u013a\u0005\u001b\u0000\u0000\u013a\u013b\u0003@ \u0000\u013b\u013c\u0005"+
		"\u001c\u0000\u0000\u013c=\u0001\u0000\u0000\u0000\u013d\u013e\u00038\u001c"+
		"\u0000\u013e\u013f\u0005\u001b\u0000\u0000\u013f\u0140\u0003@ \u0000\u0140"+
		"\u0141\u0005\u000e\u0000\u0000\u0141\u0142\u0003@ \u0000\u0142\u0143\u0005"+
		"\u001c\u0000\u0000\u0143\u0148\u0001\u0000\u0000\u0000\u0144\u0148\u0005"+
		"\'\u0000\u0000\u0145\u0148\u0005&\u0000\u0000\u0146\u0148\u0005(\u0000"+
		"\u0000\u0147\u013d\u0001\u0000\u0000\u0000\u0147\u0144\u0001\u0000\u0000"+
		"\u0000\u0147\u0145\u0001\u0000\u0000\u0000\u0147\u0146\u0001\u0000\u0000"+
		"\u0000\u0148?\u0001\u0000\u0000\u0000\u0149\u0153\u0003D\"\u0000\u014a"+
		"\u0153\u00058\u0000\u0000\u014b\u0153\u0005:\u0000\u0000\u014c\u0153\u0003"+
		"2\u0019\u0000\u014d\u0153\u00056\u0000\u0000\u014e\u0153\u0003\u0006\u0003"+
		"\u0000\u014f\u0153\u0003:\u001d\u0000\u0150\u0153\u0003<\u001e\u0000\u0151"+
		"\u0153\u0003>\u001f\u0000\u0152\u0149\u0001\u0000\u0000\u0000\u0152\u014a"+
		"\u0001\u0000\u0000\u0000\u0152\u014b\u0001\u0000\u0000\u0000\u0152\u014c"+
		"\u0001\u0000\u0000\u0000\u0152\u014d\u0001\u0000\u0000\u0000\u0152\u014e"+
		"\u0001\u0000\u0000\u0000\u0152\u014f\u0001\u0000\u0000\u0000\u0152\u0150"+
		"\u0001\u0000\u0000\u0000\u0152\u0151\u0001\u0000\u0000\u0000\u0153\u0155"+
		"\u0001\u0000\u0000\u0000\u0154\u0156\u0003B!\u0000\u0155\u0154\u0001\u0000"+
		"\u0000\u0000\u0155\u0156\u0001\u0000\u0000\u0000\u0156\u0159\u0001\u0000"+
		"\u0000\u0000\u0157\u0158\u0007\u0001\u0000\u0000\u0158\u015a\u0003@ \u0000"+
		"\u0159\u0157\u0001\u0000\u0000\u0000\u0159\u015a\u0001\u0000\u0000\u0000"+
		"\u015aA\u0001\u0000\u0000\u0000\u015b\u015c\u0005\u0005\u0000\u0000\u015c"+
		"\u015d\u00057\u0000\u0000\u015dC\u0001\u0000\u0000\u0000\u015e\u015f\u0007"+
		"\u0002\u0000\u0000\u015fE\u0001\u0000\u0000\u0000\u0160\u0165\u0003@ "+
		"\u0000\u0161\u0162\u0007\u0003\u0000\u0000\u0162\u0166\u0003@ \u0000\u0163"+
		"\u0164\u0007\u0004\u0000\u0000\u0164\u0166\u0003H$\u0000\u0165\u0161\u0001"+
		"\u0000\u0000\u0000\u0165\u0163\u0001\u0000\u0000\u0000\u0166G\u0001\u0000"+
		"\u0000\u0000\u0167\u016b\u0003J%\u0000\u0168\u016b\u0003L&\u0000\u0169"+
		"\u016b\u0003N\'\u0000\u016a\u0167\u0001\u0000\u0000\u0000\u016a\u0168"+
		"\u0001\u0000\u0000\u0000\u016a\u0169\u0001\u0000\u0000\u0000\u016b\u016d"+
		"\u0001\u0000\u0000\u0000\u016c\u016e\u0003B!\u0000\u016d\u016c\u0001\u0000"+
		"\u0000\u0000\u016d\u016e\u0001\u0000\u0000\u0000\u016eI\u0001\u0000\u0000"+
		"\u0000\u016f\u0170\u0003@ \u0000\u0170\u0172\u0005#\u0000\u0000\u0171"+
		"\u0173\u0003@ \u0000\u0172\u0171\u0001\u0000\u0000\u0000\u0172\u0173\u0001"+
		"\u0000\u0000\u0000\u0173K\u0001\u0000\u0000\u0000\u0174\u0175\u00038\u001c"+
		"\u0000\u0175\u0176\u0005\u001b\u0000\u0000\u0176\u0177\u0003J%\u0000\u0177"+
		"\u0178\u0005\u000e\u0000\u0000\u0178\u0179\u0003J%\u0000\u0179\u017a\u0005"+
		"\u001c\u0000\u0000\u017aM\u0001\u0000\u0000\u0000\u017b\u017c\u0005\u0004"+
		"\u0000\u0000\u017c\u017d\u0005+\u0000\u0000\u017d\u017e\u0005\u0006\u0000"+
		"\u0000\u017eO\u0001\u0000\u0000\u0000\u017f\u018c\u0003D\"\u0000\u0180"+
		"\u018c\u00058\u0000\u0000\u0181\u018c\u0005:\u0000\u0000\u0182\u018c\u0003"+
		"2\u0019\u0000\u0183\u018c\u00056\u0000\u0000\u0184\u018c\u0003\u0006\u0003"+
		"\u0000\u0185\u018c\u0003:\u001d\u0000\u0186\u018c\u0003<\u001e\u0000\u0187"+
		"\u018c\u0003>\u001f\u0000\u0188\u018c\u0003J%\u0000\u0189\u018c\u0003"+
		"L&\u0000\u018a\u018c\u0003N\'\u0000\u018b\u017f\u0001\u0000\u0000\u0000"+
		"\u018b\u0180\u0001\u0000\u0000\u0000\u018b\u0181\u0001\u0000\u0000\u0000"+
		"\u018b\u0182\u0001\u0000\u0000\u0000\u018b\u0183\u0001\u0000\u0000\u0000"+
		"\u018b\u0184\u0001\u0000\u0000\u0000\u018b\u0185\u0001\u0000\u0000\u0000"+
		"\u018b\u0186\u0001\u0000\u0000\u0000\u018b\u0187\u0001\u0000\u0000\u0000"+
		"\u018b\u0188\u0001\u0000\u0000\u0000\u018b\u0189\u0001\u0000\u0000\u0000"+
		"\u018b\u018a\u0001\u0000\u0000\u0000\u018cQ\u0001\u0000\u0000\u0000\u018d"+
		"\u0191\u0005,\u0000\u0000\u018e\u0191\u0003>\u001f\u0000\u018f\u0191\u0003"+
		"L&\u0000\u0190\u018d\u0001\u0000\u0000\u0000\u0190\u018e\u0001\u0000\u0000"+
		"\u0000\u0190\u018f\u0001\u0000\u0000\u0000\u0191S\u0001\u0000\u0000\u0000"+
		"\u001fWaj\u0084\u0089\u0090\u009b\u00a9\u00b3\u00db\u00ec\u00f2\u00f6"+
		"\u00ff\u010a\u0110\u0118\u011b\u0127\u012a\u0132\u0147\u0152\u0155\u0159"+
		"\u0165\u016a\u016d\u0172\u018b\u0190";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}