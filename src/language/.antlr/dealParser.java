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
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		COMMENT=39, VARTYPE=40, MOVE_DEST=41, MOVE_SOURCE=42, INTERACT_CARD=43, 
		PLUS=44, MINUS=45, TIMES=46, WILDCARD=47, EMPTY=48, SPADES=49, HEARTS=50, 
		CLUBS=51, DIAMONDS=52, JACK=53, QUEEN=54, KING=55, ACE=56, NUMBER=57, 
		ID=58, CARD=59, JOKER=60, STRING=61, SPACES=62, NEWLINE=63;
	public static final int
		RULE_prog = 0, RULE_stmt = 1, RULE_block = 2, RULE_player = 3, RULE_definition = 4, 
		RULE_define_function = 5, RULE_argdef = 6, RULE_move = 7, RULE_source = 8, 
		RULE_destination = 9, RULE_on_action = 10, RULE_on_move = 11, RULE_on_interact = 12, 
		RULE_for = 13, RULE_if = 14, RULE_cancel = 15, RULE_assign = 16, RULE_function_call = 17, 
		RULE_updateTurn = 18, RULE_log = 19, RULE_modify = 20, RULE_show = 21, 
		RULE_win = 22, RULE_config = 23, RULE_attribute = 24, RULE_atts = 25, 
		RULE_variable = 26, RULE_action_ref = 27, RULE_args = 28, RULE_arg = 29, 
		RULE_arearef = 30, RULE_area = 31, RULE_stack = 32, RULE_position = 33, 
		RULE_term = 34, RULE_property = 35, RULE_primitives = 36, RULE_suits = 37, 
		RULE_picture_cards = 38, RULE_bexpr = 39, RULE_set = 40, RULE_intset = 41, 
		RULE_positionset = 42, RULE_playerset = 43, RULE_object = 44, RULE_move_catch = 45;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stmt", "block", "player", "definition", "define_function", "argdef", 
			"move", "source", "destination", "on_action", "on_move", "on_interact", 
			"for", "if", "cancel", "assign", "function_call", "updateTurn", "log", 
			"modify", "show", "win", "config", "attribute", "atts", "variable", "action_ref", 
			"args", "arg", "arearef", "area", "stack", "position", "term", "property", 
			"primitives", "suits", "picture_cards", "bexpr", "set", "intset", "positionset", 
			"playerset", "object", "move_catch"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'define'", "';'", "'on'", "'<'", "'.'", "'>'", "'area'", "'action'", 
			"'function'", "'('", "')'", "'{'", "'}'", "','", "'move'", "'interact'", 
			"'for'", "'in'", "'if'", "'else'", "'cancel'", "'='", "'++'", "'log'", 
			"'show'", "'win'", "'$'", "'['", "']'", "'=='", "'!='", "'<='", "'>='", 
			"'=?'", "'!?'", "'||'", "'&&'", "':'", null, null, "'dest'", "'source'", 
			"'@'", "'+'", "'-'", "'*'", "'?'", "'empty'", "'spades'", "'hearts'", 
			"'clubs'", "'diamonds'", "'jack'", "'queen'", "'king'", "'ace'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "COMMENT", "VARTYPE", "MOVE_DEST", "MOVE_SOURCE", "INTERACT_CARD", 
			"PLUS", "MINUS", "TIMES", "WILDCARD", "EMPTY", "SPADES", "HEARTS", "CLUBS", 
			"DIAMONDS", "JACK", "QUEEN", "KING", "ACE", "NUMBER", "ID", "CARD", "JOKER", 
			"STRING", "SPACES", "NEWLINE"
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
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 288245769568944154L) != 0)) {
				{
				{
				setState(92);
				stmt();
				}
				}
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(98);
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
		public WinContext win() {
			return getRuleContext(WinContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(100);
				match(T__0);
				setState(105);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__6:
				case T__7:
				case VARTYPE:
					{
					{
					setState(101);
					definition();
					setState(102);
					match(T__1);
					}
					}
					break;
				case T__8:
					{
					setState(104);
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
				setState(107);
				move();
				setState(108);
				match(T__1);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(110);
				match(T__2);
				setState(114);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(111);
					on_action();
					}
					break;
				case T__14:
					{
					setState(112);
					on_move();
					}
					break;
				case T__15:
					{
					setState(113);
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
				setState(116);
				for_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(117);
				if_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(118);
				cancel();
				setState(119);
				match(T__1);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(121);
				assign();
				setState(122);
				match(T__1);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(124);
				function_call();
				setState(125);
				match(T__1);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(127);
				updateTurn();
				setState(128);
				match(T__1);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(130);
				log();
				setState(131);
				match(T__1);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(133);
				modify();
				setState(134);
				match(T__1);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(136);
				show();
				setState(137);
				match(T__1);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(139);
				config();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(140);
				win();
				setState(141);
				match(T__1);
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
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 288245769568944154L) != 0)) {
				{
				{
				setState(145);
				stmt();
				}
				}
				setState(150);
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
	}

	public final PlayerContext player() throws RecognitionException {
		PlayerContext _localctx = new PlayerContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(T__3);
			setState(155);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(152);
				match(T__4);
				}
				break;
			case 2:
				{
				setState(153);
				match(INTERACT_CARD);
				}
				break;
			case 3:
				{
				setState(154);
				term();
				}
				break;
			}
			setState(157);
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
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			((DefinitionContext)_localctx).type = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1099511628160L) != 0)) ) {
				((DefinitionContext)_localctx).type = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(160);
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
	}

	public final Define_functionContext define_function() throws RecognitionException {
		Define_functionContext _localctx = new Define_functionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_define_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(T__8);
			setState(163);
			match(ID);
			setState(164);
			match(T__9);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARTYPE) {
				{
				setState(165);
				argdef();
				}
			}

			setState(168);
			match(T__10);
			setState(169);
			match(T__11);
			setState(170);
			block();
			setState(171);
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
	}

	public final ArgdefContext argdef() throws RecognitionException {
		ArgdefContext _localctx = new ArgdefContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_argdef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(VARTYPE);
			setState(174);
			match(ID);
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__13) {
				{
				{
				setState(175);
				match(T__13);
				setState(176);
				match(VARTYPE);
				setState(177);
				match(ID);
				}
				}
				setState(182);
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
	}

	public final MoveContext move() throws RecognitionException {
		MoveContext _localctx = new MoveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(T__14);
			setState(184);
			source();
			setState(185);
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
	}

	public final SourceContext source() throws RecognitionException {
		SourceContext _localctx = new SourceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_source);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(187);
				match(CARD);
				}
				break;
			case 2:
				{
				setState(188);
				position();
				}
				break;
			case 3:
				{
				setState(189);
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
	}

	public final DestinationContext destination() throws RecognitionException {
		DestinationContext _localctx = new DestinationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_destination);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
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
		public Action_refContext action_ref() {
			return getRuleContext(Action_refContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public On_actionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_on_action; }
	}

	public final On_actionContext on_action() throws RecognitionException {
		On_actionContext _localctx = new On_actionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_on_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			action_ref();
			setState(195);
			match(T__11);
			setState(196);
			block();
			setState(197);
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
	}

	public final On_moveContext on_move() throws RecognitionException {
		On_moveContext _localctx = new On_moveContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_on_move);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(T__14);
			setState(200);
			move_catch();
			setState(201);
			move_catch();
			setState(202);
			match(T__11);
			setState(203);
			block();
			setState(204);
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
	}

	public final On_interactContext on_interact() throws RecognitionException {
		On_interactContext _localctx = new On_interactContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_on_interact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(T__15);
			setState(207);
			move_catch();
			setState(208);
			match(T__11);
			setState(209);
			block();
			setState(210);
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
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(T__16);
			setState(213);
			match(ID);
			setState(214);
			match(T__17);
			setState(215);
			set();
			setState(216);
			match(T__11);
			setState(217);
			block();
			setState(218);
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
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			match(T__18);
			setState(221);
			bexpr();
			setState(222);
			match(T__11);
			setState(223);
			((IfContext)_localctx).consequent = block();
			setState(224);
			match(T__12);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__19) {
				{
				setState(225);
				match(T__19);
				setState(226);
				match(T__11);
				setState(227);
				((IfContext)_localctx).antecedent = block();
				setState(228);
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
	}

	public final CancelContext cancel() throws RecognitionException {
		CancelContext _localctx = new CancelContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_cancel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
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
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			variable();
			setState(235);
			match(T__21);
			setState(236);
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
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_function_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(ID);
			setState(239);
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
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public UpdateTurnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateTurn; }
	}

	public final UpdateTurnContext updateTurn() throws RecognitionException {
		UpdateTurnContext _localctx = new UpdateTurnContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_updateTurn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(T__3);
			setState(242);
			match(T__4);
			setState(243);
			match(T__5);
			setState(247);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(244);
				match(T__22);
				}
				break;
			case T__21:
				{
				setState(245);
				match(T__21);
				setState(246);
				term();
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
	}

	public final LogContext log() throws RecognitionException {
		LogContext _localctx = new LogContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_log);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(T__23);
			setState(251); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(250);
				term();
				}
				}
				setState(253); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 3458498432006619152L) != 0) );
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
	}

	public final ModifyContext modify() throws RecognitionException {
		ModifyContext _localctx = new ModifyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_modify);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(255);
				position();
				}
				break;
			case 2:
				{
				setState(256);
				variable();
				}
				break;
			}
			setState(259);
			match(T__4);
			setState(260);
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
	}

	public final ShowContext show() throws RecognitionException {
		ShowContext _localctx = new ShowContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_show);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(T__24);
			setState(266);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(263);
				position();
				}
				break;
			case 2:
				{
				setState(264);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(265);
				variable();
				}
				break;
			}
			setState(268);
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
	public static class WinContext extends ParserRuleContext {
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public WinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_win; }
	}

	public final WinContext win() throws RecognitionException {
		WinContext _localctx = new WinContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_win);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			match(T__25);
			setState(271);
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
	}

	public final ConfigContext config() throws RecognitionException {
		ConfigContext _localctx = new ConfigContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_config);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(T__26);
			setState(274);
			match(ID);
			setState(275);
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
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(277);
				match(ID);
				}
				break;
			case 2:
				{
				setState(278);
				match(NUMBER);
				}
				break;
			case 3:
				{
				setState(279);
				intset();
				}
				break;
			}
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(282);
				match(ID);
				}
				break;
			case STRING:
				{
				setState(283);
				match(STRING);
				}
				break;
			case NUMBER:
				{
				setState(284);
				match(NUMBER);
				}
				break;
			case T__11:
				{
				setState(285);
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
	}

	public final AttsContext atts() throws RecognitionException {
		AttsContext _localctx = new AttsContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_atts);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(T__11);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3458498432006619152L) != 0)) {
				{
				setState(289);
				attribute();
				setState(294);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(290);
					match(T__13);
					setState(291);
					attribute();
					}
					}
					setState(296);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(299);
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
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
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
	public static class Action_refContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(dealParser.ID, 0); }
		public Action_refContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action_ref; }
	}

	public final Action_refContext action_ref() throws RecognitionException {
		Action_refContext _localctx = new Action_refContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_action_ref);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
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
	}

	public final ArgsContext args() throws RecognitionException {
		ArgsContext _localctx = new ArgsContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_args);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(T__9);
			setState(314);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3458498432006619152L) != 0)) {
				{
				setState(306);
				arg();
				setState(311);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__13) {
					{
					{
					setState(307);
					match(T__13);
					setState(308);
					arg();
					}
					}
					setState(313);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(316);
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
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_arg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
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
	}

	public final ArearefContext arearef() throws RecognitionException {
		ArearefContext _localctx = new ArearefContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_arearef);
		try {
			setState(322);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(320);
				match(ID);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(321);
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
	}

	public final AreaContext area() throws RecognitionException {
		AreaContext _localctx = new AreaContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_area);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			arearef();
			setState(325);
			match(T__27);
			setState(326);
			match(T__28);
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
	}

	public final StackContext stack() throws RecognitionException {
		StackContext _localctx = new StackContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_stack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			arearef();
			setState(329);
			match(T__27);
			setState(330);
			term();
			setState(331);
			match(T__28);
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
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_position);
		try {
			setState(343);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(333);
				arearef();
				setState(334);
				match(T__27);
				setState(335);
				term();
				setState(336);
				match(T__13);
				setState(337);
				term();
				setState(338);
				match(T__28);
				}
				break;
			case MOVE_SOURCE:
				enterOuterAlt(_localctx, 2);
				{
				setState(340);
				match(MOVE_SOURCE);
				}
				break;
			case MOVE_DEST:
				enterOuterAlt(_localctx, 3);
				{
				setState(341);
				match(MOVE_DEST);
				}
				break;
			case INTERACT_CARD:
				enterOuterAlt(_localctx, 4);
				{
				setState(342);
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
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(354);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(345);
				primitives();
				}
				break;
			case 2:
				{
				setState(346);
				match(CARD);
				}
				break;
			case 3:
				{
				setState(347);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(348);
				variable();
				}
				break;
			case 5:
				{
				setState(349);
				match(NUMBER);
				}
				break;
			case 6:
				{
				setState(350);
				player();
				}
				break;
			case 7:
				{
				setState(351);
				area();
				}
				break;
			case 8:
				{
				setState(352);
				stack();
				}
				break;
			case 9:
				{
				setState(353);
				position();
				}
				break;
			}
			setState(357);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(356);
				property();
				}
				break;
			}
			setState(361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 123145302310912L) != 0)) {
				{
				setState(359);
				((TermContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 123145302310912L) != 0)) ) {
					((TermContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(360);
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
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(T__4);
			setState(364);
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
		public SuitsContext suits() {
			return getRuleContext(SuitsContext.class,0);
		}
		public Picture_cardsContext picture_cards() {
			return getRuleContext(Picture_cardsContext.class,0);
		}
		public PrimitivesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitives; }
	}

	public final PrimitivesContext primitives() throws RecognitionException {
		PrimitivesContext _localctx = new PrimitivesContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_primitives);
		try {
			setState(369);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY:
				enterOuterAlt(_localctx, 1);
				{
				setState(366);
				match(EMPTY);
				}
				break;
			case SPADES:
			case HEARTS:
			case CLUBS:
			case DIAMONDS:
				enterOuterAlt(_localctx, 2);
				{
				setState(367);
				suits();
				}
				break;
			case JACK:
			case QUEEN:
			case KING:
			case ACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(368);
				picture_cards();
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
	public static class SuitsContext extends ParserRuleContext {
		public TerminalNode SPADES() { return getToken(dealParser.SPADES, 0); }
		public TerminalNode HEARTS() { return getToken(dealParser.HEARTS, 0); }
		public TerminalNode CLUBS() { return getToken(dealParser.CLUBS, 0); }
		public TerminalNode DIAMONDS() { return getToken(dealParser.DIAMONDS, 0); }
		public SuitsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_suits; }
	}

	public final SuitsContext suits() throws RecognitionException {
		SuitsContext _localctx = new SuitsContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_suits);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8444249301319680L) != 0)) ) {
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
	public static class Picture_cardsContext extends ParserRuleContext {
		public TerminalNode JACK() { return getToken(dealParser.JACK, 0); }
		public TerminalNode QUEEN() { return getToken(dealParser.QUEEN, 0); }
		public TerminalNode KING() { return getToken(dealParser.KING, 0); }
		public TerminalNode ACE() { return getToken(dealParser.ACE, 0); }
		public Picture_cardsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_picture_cards; }
	}

	public final Picture_cardsContext picture_cards() throws RecognitionException {
		Picture_cardsContext _localctx = new Picture_cardsContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_picture_cards);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 135107988821114880L) != 0)) ) {
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
		public BexprContext bexpr() {
			return getRuleContext(BexprContext.class,0);
		}
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public BexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bexpr; }
	}

	public final BexprContext bexpr() throws RecognitionException {
		BexprContext _localctx = new BexprContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_bexpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375);
			term();
			setState(380);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case T__5:
			case T__29:
			case T__30:
			case T__31:
			case T__32:
				{
				{
				setState(376);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16106127440L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(377);
				term();
				}
				}
				break;
			case T__33:
			case T__34:
				{
				{
				setState(378);
				_la = _input.LA(1);
				if ( !(_la==T__33 || _la==T__34) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(379);
				set();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(384);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35 || _la==T__36) {
				{
				setState(382);
				_la = _input.LA(1);
				if ( !(_la==T__35 || _la==T__36) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(383);
				bexpr();
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
	public static class SetContext extends ParserRuleContext {
		public PositionsetContext positionset() {
			return getRuleContext(PositionsetContext.class,0);
		}
		public PlayersetContext playerset() {
			return getRuleContext(PlayersetContext.class,0);
		}
		public IntsetContext intset() {
			return getRuleContext(IntsetContext.class,0);
		}
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(386);
				positionset();
				}
				break;
			case 2:
				{
				setState(387);
				playerset();
				}
				break;
			case 3:
				{
				setState(388);
				intset();
				}
				break;
			}
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(391);
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
	}

	public final IntsetContext intset() throws RecognitionException {
		IntsetContext _localctx = new IntsetContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_intset);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
			term();
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__37) {
				{
				setState(395);
				match(T__37);
				setState(397);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(396);
					term();
					}
					break;
				}
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
	}

	public final PositionsetContext positionset() throws RecognitionException {
		PositionsetContext _localctx = new PositionsetContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_positionset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(401);
			arearef();
			setState(402);
			match(T__27);
			setState(403);
			intset();
			setState(404);
			match(T__13);
			setState(405);
			intset();
			setState(406);
			match(T__28);
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
	}

	public final PlayersetContext playerset() throws RecognitionException {
		PlayersetContext _localctx = new PlayersetContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_playerset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			match(T__3);
			setState(409);
			match(TIMES);
			setState(410);
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
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_object);
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(412);
				primitives();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(413);
				match(CARD);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(414);
				match(STRING);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(415);
				variable();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(416);
				match(NUMBER);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(417);
				player();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(418);
				area();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(419);
				stack();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(420);
				position();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(421);
				intset();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(422);
				positionset();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(423);
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
	}

	public final Move_catchContext move_catch() throws RecognitionException {
		Move_catchContext _localctx = new Move_catchContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_move_catch);
		try {
			setState(429);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				match(WILDCARD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(427);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(428);
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
		"\u0004\u0001?\u01b0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0001\u0000\u0005\u0000^\b\u0000\n\u0000\f\u0000a\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0003\u0001j\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001s\b\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u0090\b\u0001\u0001\u0002\u0005"+
		"\u0002\u0093\b\u0002\n\u0002\f\u0002\u0096\t\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003\u009c\b\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005\u00a7\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0005\u0006\u00b3\b\u0006\n\u0006\f\u0006\u00b6\t\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0003"+
		"\b\u00bf\b\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0003\u000e\u00e7\b\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0003\u0012\u00f8\b\u0012\u0001\u0013\u0001\u0013\u0004\u0013"+
		"\u00fc\b\u0013\u000b\u0013\f\u0013\u00fd\u0001\u0014\u0001\u0014\u0003"+
		"\u0014\u0102\b\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0003\u0015\u010b\b\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0119"+
		"\b\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u011f"+
		"\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0005\u0019\u0125"+
		"\b\u0019\n\u0019\f\u0019\u0128\t\u0019\u0003\u0019\u012a\b\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0005\u001c\u0136\b\u001c\n"+
		"\u001c\f\u001c\u0139\t\u001c\u0003\u001c\u013b\b\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0003\u001e\u0143"+
		"\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001"+
		"!\u0001!\u0001!\u0001!\u0003!\u0158\b!\u0001\"\u0001\"\u0001\"\u0001\""+
		"\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u0163\b\"\u0001\"\u0003"+
		"\"\u0166\b\"\u0001\"\u0001\"\u0003\"\u016a\b\"\u0001#\u0001#\u0001#\u0001"+
		"$\u0001$\u0001$\u0003$\u0172\b$\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001"+
		"\'\u0001\'\u0001\'\u0001\'\u0003\'\u017d\b\'\u0001\'\u0001\'\u0003\'\u0181"+
		"\b\'\u0001(\u0001(\u0001(\u0003(\u0186\b(\u0001(\u0003(\u0189\b(\u0001"+
		")\u0001)\u0001)\u0003)\u018e\b)\u0003)\u0190\b)\u0001*\u0001*\u0001*\u0001"+
		"*\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001+\u0001,\u0001,\u0001"+
		",\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0003"+
		",\u01a9\b,\u0001-\u0001-\u0001-\u0003-\u01ae\b-\u0001-\u0000\u0000.\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\u0000\u0007\u0002\u0000\u0007\b"+
		"((\u0001\u0000,.\u0001\u000014\u0001\u000058\u0003\u0000\u0004\u0004\u0006"+
		"\u0006\u001e!\u0001\u0000\"#\u0001\u0000$%\u01cc\u0000_\u0001\u0000\u0000"+
		"\u0000\u0002\u008f\u0001\u0000\u0000\u0000\u0004\u0094\u0001\u0000\u0000"+
		"\u0000\u0006\u0097\u0001\u0000\u0000\u0000\b\u009f\u0001\u0000\u0000\u0000"+
		"\n\u00a2\u0001\u0000\u0000\u0000\f\u00ad\u0001\u0000\u0000\u0000\u000e"+
		"\u00b7\u0001\u0000\u0000\u0000\u0010\u00be\u0001\u0000\u0000\u0000\u0012"+
		"\u00c0\u0001\u0000\u0000\u0000\u0014\u00c2\u0001\u0000\u0000\u0000\u0016"+
		"\u00c7\u0001\u0000\u0000\u0000\u0018\u00ce\u0001\u0000\u0000\u0000\u001a"+
		"\u00d4\u0001\u0000\u0000\u0000\u001c\u00dc\u0001\u0000\u0000\u0000\u001e"+
		"\u00e8\u0001\u0000\u0000\u0000 \u00ea\u0001\u0000\u0000\u0000\"\u00ee"+
		"\u0001\u0000\u0000\u0000$\u00f1\u0001\u0000\u0000\u0000&\u00f9\u0001\u0000"+
		"\u0000\u0000(\u0101\u0001\u0000\u0000\u0000*\u0106\u0001\u0000\u0000\u0000"+
		",\u010e\u0001\u0000\u0000\u0000.\u0111\u0001\u0000\u0000\u00000\u0118"+
		"\u0001\u0000\u0000\u00002\u0120\u0001\u0000\u0000\u00004\u012d\u0001\u0000"+
		"\u0000\u00006\u012f\u0001\u0000\u0000\u00008\u0131\u0001\u0000\u0000\u0000"+
		":\u013e\u0001\u0000\u0000\u0000<\u0142\u0001\u0000\u0000\u0000>\u0144"+
		"\u0001\u0000\u0000\u0000@\u0148\u0001\u0000\u0000\u0000B\u0157\u0001\u0000"+
		"\u0000\u0000D\u0162\u0001\u0000\u0000\u0000F\u016b\u0001\u0000\u0000\u0000"+
		"H\u0171\u0001\u0000\u0000\u0000J\u0173\u0001\u0000\u0000\u0000L\u0175"+
		"\u0001\u0000\u0000\u0000N\u0177\u0001\u0000\u0000\u0000P\u0185\u0001\u0000"+
		"\u0000\u0000R\u018a\u0001\u0000\u0000\u0000T\u0191\u0001\u0000\u0000\u0000"+
		"V\u0198\u0001\u0000\u0000\u0000X\u01a8\u0001\u0000\u0000\u0000Z\u01ad"+
		"\u0001\u0000\u0000\u0000\\^\u0003\u0002\u0001\u0000]\\\u0001\u0000\u0000"+
		"\u0000^a\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000"+
		"\u0000\u0000`b\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000bc\u0005"+
		"\u0000\u0000\u0001c\u0001\u0001\u0000\u0000\u0000di\u0005\u0001\u0000"+
		"\u0000ef\u0003\b\u0004\u0000fg\u0005\u0002\u0000\u0000gj\u0001\u0000\u0000"+
		"\u0000hj\u0003\n\u0005\u0000ie\u0001\u0000\u0000\u0000ih\u0001\u0000\u0000"+
		"\u0000j\u0090\u0001\u0000\u0000\u0000kl\u0003\u000e\u0007\u0000lm\u0005"+
		"\u0002\u0000\u0000m\u0090\u0001\u0000\u0000\u0000nr\u0005\u0003\u0000"+
		"\u0000os\u0003\u0014\n\u0000ps\u0003\u0016\u000b\u0000qs\u0003\u0018\f"+
		"\u0000ro\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000rq\u0001\u0000"+
		"\u0000\u0000s\u0090\u0001\u0000\u0000\u0000t\u0090\u0003\u001a\r\u0000"+
		"u\u0090\u0003\u001c\u000e\u0000vw\u0003\u001e\u000f\u0000wx\u0005\u0002"+
		"\u0000\u0000x\u0090\u0001\u0000\u0000\u0000yz\u0003 \u0010\u0000z{\u0005"+
		"\u0002\u0000\u0000{\u0090\u0001\u0000\u0000\u0000|}\u0003\"\u0011\u0000"+
		"}~\u0005\u0002\u0000\u0000~\u0090\u0001\u0000\u0000\u0000\u007f\u0080"+
		"\u0003$\u0012\u0000\u0080\u0081\u0005\u0002\u0000\u0000\u0081\u0090\u0001"+
		"\u0000\u0000\u0000\u0082\u0083\u0003&\u0013\u0000\u0083\u0084\u0005\u0002"+
		"\u0000\u0000\u0084\u0090\u0001\u0000\u0000\u0000\u0085\u0086\u0003(\u0014"+
		"\u0000\u0086\u0087\u0005\u0002\u0000\u0000\u0087\u0090\u0001\u0000\u0000"+
		"\u0000\u0088\u0089\u0003*\u0015\u0000\u0089\u008a\u0005\u0002\u0000\u0000"+
		"\u008a\u0090\u0001\u0000\u0000\u0000\u008b\u0090\u0003.\u0017\u0000\u008c"+
		"\u008d\u0003,\u0016\u0000\u008d\u008e\u0005\u0002\u0000\u0000\u008e\u0090"+
		"\u0001\u0000\u0000\u0000\u008fd\u0001\u0000\u0000\u0000\u008fk\u0001\u0000"+
		"\u0000\u0000\u008fn\u0001\u0000\u0000\u0000\u008ft\u0001\u0000\u0000\u0000"+
		"\u008fu\u0001\u0000\u0000\u0000\u008fv\u0001\u0000\u0000\u0000\u008fy"+
		"\u0001\u0000\u0000\u0000\u008f|\u0001\u0000\u0000\u0000\u008f\u007f\u0001"+
		"\u0000\u0000\u0000\u008f\u0082\u0001\u0000\u0000\u0000\u008f\u0085\u0001"+
		"\u0000\u0000\u0000\u008f\u0088\u0001\u0000\u0000\u0000\u008f\u008b\u0001"+
		"\u0000\u0000\u0000\u008f\u008c\u0001\u0000\u0000\u0000\u0090\u0003\u0001"+
		"\u0000\u0000\u0000\u0091\u0093\u0003\u0002\u0001\u0000\u0092\u0091\u0001"+
		"\u0000\u0000\u0000\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0092\u0001"+
		"\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0005\u0001"+
		"\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000\u0000\u0097\u009b\u0005"+
		"\u0004\u0000\u0000\u0098\u009c\u0005\u0005\u0000\u0000\u0099\u009c\u0005"+
		"+\u0000\u0000\u009a\u009c\u0003D\"\u0000\u009b\u0098\u0001\u0000\u0000"+
		"\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009b\u009a\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009e\u0005\u0006\u0000"+
		"\u0000\u009e\u0007\u0001\u0000\u0000\u0000\u009f\u00a0\u0007\u0000\u0000"+
		"\u0000\u00a0\u00a1\u0005:\u0000\u0000\u00a1\t\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a3\u0005\t\u0000\u0000\u00a3\u00a4\u0005:\u0000\u0000\u00a4"+
		"\u00a6\u0005\n\u0000\u0000\u00a5\u00a7\u0003\f\u0006\u0000\u00a6\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a8"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005\u000b\u0000\u0000\u00a9\u00aa"+
		"\u0005\f\u0000\u0000\u00aa\u00ab\u0003\u0004\u0002\u0000\u00ab\u00ac\u0005"+
		"\r\u0000\u0000\u00ac\u000b\u0001\u0000\u0000\u0000\u00ad\u00ae\u0005("+
		"\u0000\u0000\u00ae\u00b4\u0005:\u0000\u0000\u00af\u00b0\u0005\u000e\u0000"+
		"\u0000\u00b0\u00b1\u0005(\u0000\u0000\u00b1\u00b3\u0005:\u0000\u0000\u00b2"+
		"\u00af\u0001\u0000\u0000\u0000\u00b3\u00b6\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5"+
		"\r\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b7\u00b8"+
		"\u0005\u000f\u0000\u0000\u00b8\u00b9\u0003\u0010\b\u0000\u00b9\u00ba\u0003"+
		"\u0012\t\u0000\u00ba\u000f\u0001\u0000\u0000\u0000\u00bb\u00bf\u0005;"+
		"\u0000\u0000\u00bc\u00bf\u0003B!\u0000\u00bd\u00bf\u0003T*\u0000\u00be"+
		"\u00bb\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00be"+
		"\u00bd\u0001\u0000\u0000\u0000\u00bf\u0011\u0001\u0000\u0000\u0000\u00c0"+
		"\u00c1\u0003B!\u0000\u00c1\u0013\u0001\u0000\u0000\u0000\u00c2\u00c3\u0003"+
		"6\u001b\u0000\u00c3\u00c4\u0005\f\u0000\u0000\u00c4\u00c5\u0003\u0004"+
		"\u0002\u0000\u00c5\u00c6\u0005\r\u0000\u0000\u00c6\u0015\u0001\u0000\u0000"+
		"\u0000\u00c7\u00c8\u0005\u000f\u0000\u0000\u00c8\u00c9\u0003Z-\u0000\u00c9"+
		"\u00ca\u0003Z-\u0000\u00ca\u00cb\u0005\f\u0000\u0000\u00cb\u00cc\u0003"+
		"\u0004\u0002\u0000\u00cc\u00cd\u0005\r\u0000\u0000\u00cd\u0017\u0001\u0000"+
		"\u0000\u0000\u00ce\u00cf\u0005\u0010\u0000\u0000\u00cf\u00d0\u0003Z-\u0000"+
		"\u00d0\u00d1\u0005\f\u0000\u0000\u00d1\u00d2\u0003\u0004\u0002\u0000\u00d2"+
		"\u00d3\u0005\r\u0000\u0000\u00d3\u0019\u0001\u0000\u0000\u0000\u00d4\u00d5"+
		"\u0005\u0011\u0000\u0000\u00d5\u00d6\u0005:\u0000\u0000\u00d6\u00d7\u0005"+
		"\u0012\u0000\u0000\u00d7\u00d8\u0003P(\u0000\u00d8\u00d9\u0005\f\u0000"+
		"\u0000\u00d9\u00da\u0003\u0004\u0002\u0000\u00da\u00db\u0005\r\u0000\u0000"+
		"\u00db\u001b\u0001\u0000\u0000\u0000\u00dc\u00dd\u0005\u0013\u0000\u0000"+
		"\u00dd\u00de\u0003N\'\u0000\u00de\u00df\u0005\f\u0000\u0000\u00df\u00e0"+
		"\u0003\u0004\u0002\u0000\u00e0\u00e6\u0005\r\u0000\u0000\u00e1\u00e2\u0005"+
		"\u0014\u0000\u0000\u00e2\u00e3\u0005\f\u0000\u0000\u00e3\u00e4\u0003\u0004"+
		"\u0002\u0000\u00e4\u00e5\u0005\r\u0000\u0000\u00e5\u00e7\u0001\u0000\u0000"+
		"\u0000\u00e6\u00e1\u0001\u0000\u0000\u0000\u00e6\u00e7\u0001\u0000\u0000"+
		"\u0000\u00e7\u001d\u0001\u0000\u0000\u0000\u00e8\u00e9\u0005\u0015\u0000"+
		"\u0000\u00e9\u001f\u0001\u0000\u0000\u0000\u00ea\u00eb\u00034\u001a\u0000"+
		"\u00eb\u00ec\u0005\u0016\u0000\u0000\u00ec\u00ed\u0003D\"\u0000\u00ed"+
		"!\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005:\u0000\u0000\u00ef\u00f0\u0003"+
		"8\u001c\u0000\u00f0#\u0001\u0000\u0000\u0000\u00f1\u00f2\u0005\u0004\u0000"+
		"\u0000\u00f2\u00f3\u0005\u0005\u0000\u0000\u00f3\u00f7\u0005\u0006\u0000"+
		"\u0000\u00f4\u00f8\u0005\u0017\u0000\u0000\u00f5\u00f6\u0005\u0016\u0000"+
		"\u0000\u00f6\u00f8\u0003D\"\u0000\u00f7\u00f4\u0001\u0000\u0000\u0000"+
		"\u00f7\u00f5\u0001\u0000\u0000\u0000\u00f8%\u0001\u0000\u0000\u0000\u00f9"+
		"\u00fb\u0005\u0018\u0000\u0000\u00fa\u00fc\u0003D\"\u0000\u00fb\u00fa"+
		"\u0001\u0000\u0000\u0000\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u00fb"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe\'\u0001"+
		"\u0000\u0000\u0000\u00ff\u0102\u0003B!\u0000\u0100\u0102\u00034\u001a"+
		"\u0000\u0101\u00ff\u0001\u0000\u0000\u0000\u0101\u0100\u0001\u0000\u0000"+
		"\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0104\u0005\u0005\u0000"+
		"\u0000\u0104\u0105\u0003\"\u0011\u0000\u0105)\u0001\u0000\u0000\u0000"+
		"\u0106\u010a\u0005\u0019\u0000\u0000\u0107\u010b\u0003B!\u0000\u0108\u010b"+
		"\u0005;\u0000\u0000\u0109\u010b\u00034\u001a\u0000\u010a\u0107\u0001\u0000"+
		"\u0000\u0000\u010a\u0108\u0001\u0000\u0000\u0000\u010a\u0109\u0001\u0000"+
		"\u0000\u0000\u010b\u010c\u0001\u0000\u0000\u0000\u010c\u010d\u0003\u0006"+
		"\u0003\u0000\u010d+\u0001\u0000\u0000\u0000\u010e\u010f\u0005\u001a\u0000"+
		"\u0000\u010f\u0110\u0003\u0006\u0003\u0000\u0110-\u0001\u0000\u0000\u0000"+
		"\u0111\u0112\u0005\u001b\u0000\u0000\u0112\u0113\u0005:\u0000\u0000\u0113"+
		"\u0114\u00032\u0019\u0000\u0114/\u0001\u0000\u0000\u0000\u0115\u0119\u0005"+
		":\u0000\u0000\u0116\u0119\u00059\u0000\u0000\u0117\u0119\u0003R)\u0000"+
		"\u0118\u0115\u0001\u0000\u0000\u0000\u0118\u0116\u0001\u0000\u0000\u0000"+
		"\u0118\u0117\u0001\u0000\u0000\u0000\u0119\u011e\u0001\u0000\u0000\u0000"+
		"\u011a\u011f\u0005:\u0000\u0000\u011b\u011f\u0005=\u0000\u0000\u011c\u011f"+
		"\u00059\u0000\u0000\u011d\u011f\u00032\u0019\u0000\u011e\u011a\u0001\u0000"+
		"\u0000\u0000\u011e\u011b\u0001\u0000\u0000\u0000\u011e\u011c\u0001\u0000"+
		"\u0000\u0000\u011e\u011d\u0001\u0000\u0000\u0000\u011f1\u0001\u0000\u0000"+
		"\u0000\u0120\u0129\u0005\f\u0000\u0000\u0121\u0126\u00030\u0018\u0000"+
		"\u0122\u0123\u0005\u000e\u0000\u0000\u0123\u0125\u00030\u0018\u0000\u0124"+
		"\u0122\u0001\u0000\u0000\u0000\u0125\u0128\u0001\u0000\u0000\u0000\u0126"+
		"\u0124\u0001\u0000\u0000\u0000\u0126\u0127\u0001\u0000\u0000\u0000\u0127"+
		"\u012a\u0001\u0000\u0000\u0000\u0128\u0126\u0001\u0000\u0000\u0000\u0129"+
		"\u0121\u0001\u0000\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a"+
		"\u012b\u0001\u0000\u0000\u0000\u012b\u012c\u0005\r\u0000\u0000\u012c3"+
		"\u0001\u0000\u0000\u0000\u012d\u012e\u0005:\u0000\u0000\u012e5\u0001\u0000"+
		"\u0000\u0000\u012f\u0130\u0005:\u0000\u0000\u01307\u0001\u0000\u0000\u0000"+
		"\u0131\u013a\u0005\n\u0000\u0000\u0132\u0137\u0003:\u001d\u0000\u0133"+
		"\u0134\u0005\u000e\u0000\u0000\u0134\u0136\u0003:\u001d\u0000\u0135\u0133"+
		"\u0001\u0000\u0000\u0000\u0136\u0139\u0001\u0000\u0000\u0000\u0137\u0135"+
		"\u0001\u0000\u0000\u0000\u0137\u0138\u0001\u0000\u0000\u0000\u0138\u013b"+
		"\u0001\u0000\u0000\u0000\u0139\u0137\u0001\u0000\u0000\u0000\u013a\u0132"+
		"\u0001\u0000\u0000\u0000\u013a\u013b\u0001\u0000\u0000\u0000\u013b\u013c"+
		"\u0001\u0000\u0000\u0000\u013c\u013d\u0005\u000b\u0000\u0000\u013d9\u0001"+
		"\u0000\u0000\u0000\u013e\u013f\u0003D\"\u0000\u013f;\u0001\u0000\u0000"+
		"\u0000\u0140\u0143\u0005:\u0000\u0000\u0141\u0143\u0003\u0006\u0003\u0000"+
		"\u0142\u0140\u0001\u0000\u0000\u0000\u0142\u0141\u0001\u0000\u0000\u0000"+
		"\u0143=\u0001\u0000\u0000\u0000\u0144\u0145\u0003<\u001e\u0000\u0145\u0146"+
		"\u0005\u001c\u0000\u0000\u0146\u0147\u0005\u001d\u0000\u0000\u0147?\u0001"+
		"\u0000\u0000\u0000\u0148\u0149\u0003<\u001e\u0000\u0149\u014a\u0005\u001c"+
		"\u0000\u0000\u014a\u014b\u0003D\"\u0000\u014b\u014c\u0005\u001d\u0000"+
		"\u0000\u014cA\u0001\u0000\u0000\u0000\u014d\u014e\u0003<\u001e\u0000\u014e"+
		"\u014f\u0005\u001c\u0000\u0000\u014f\u0150\u0003D\"\u0000\u0150\u0151"+
		"\u0005\u000e\u0000\u0000\u0151\u0152\u0003D\"\u0000\u0152\u0153\u0005"+
		"\u001d\u0000\u0000\u0153\u0158\u0001\u0000\u0000\u0000\u0154\u0158\u0005"+
		"*\u0000\u0000\u0155\u0158\u0005)\u0000\u0000\u0156\u0158\u0005+\u0000"+
		"\u0000\u0157\u014d\u0001\u0000\u0000\u0000\u0157\u0154\u0001\u0000\u0000"+
		"\u0000\u0157\u0155\u0001\u0000\u0000\u0000\u0157\u0156\u0001\u0000\u0000"+
		"\u0000\u0158C\u0001\u0000\u0000\u0000\u0159\u0163\u0003H$\u0000\u015a"+
		"\u0163\u0005;\u0000\u0000\u015b\u0163\u0005=\u0000\u0000\u015c\u0163\u0003"+
		"4\u001a\u0000\u015d\u0163\u00059\u0000\u0000\u015e\u0163\u0003\u0006\u0003"+
		"\u0000\u015f\u0163\u0003>\u001f\u0000\u0160\u0163\u0003@ \u0000\u0161"+
		"\u0163\u0003B!\u0000\u0162\u0159\u0001\u0000\u0000\u0000\u0162\u015a\u0001"+
		"\u0000\u0000\u0000\u0162\u015b\u0001\u0000\u0000\u0000\u0162\u015c\u0001"+
		"\u0000\u0000\u0000\u0162\u015d\u0001\u0000\u0000\u0000\u0162\u015e\u0001"+
		"\u0000\u0000\u0000\u0162\u015f\u0001\u0000\u0000\u0000\u0162\u0160\u0001"+
		"\u0000\u0000\u0000\u0162\u0161\u0001\u0000\u0000\u0000\u0163\u0165\u0001"+
		"\u0000\u0000\u0000\u0164\u0166\u0003F#\u0000\u0165\u0164\u0001\u0000\u0000"+
		"\u0000\u0165\u0166\u0001\u0000\u0000\u0000\u0166\u0169\u0001\u0000\u0000"+
		"\u0000\u0167\u0168\u0007\u0001\u0000\u0000\u0168\u016a\u0003D\"\u0000"+
		"\u0169\u0167\u0001\u0000\u0000\u0000\u0169\u016a\u0001\u0000\u0000\u0000"+
		"\u016aE\u0001\u0000\u0000\u0000\u016b\u016c\u0005\u0005\u0000\u0000\u016c"+
		"\u016d\u0005:\u0000\u0000\u016dG\u0001\u0000\u0000\u0000\u016e\u0172\u0005"+
		"0\u0000\u0000\u016f\u0172\u0003J%\u0000\u0170\u0172\u0003L&\u0000\u0171"+
		"\u016e\u0001\u0000\u0000\u0000\u0171\u016f\u0001\u0000\u0000\u0000\u0171"+
		"\u0170\u0001\u0000\u0000\u0000\u0172I\u0001\u0000\u0000\u0000\u0173\u0174"+
		"\u0007\u0002\u0000\u0000\u0174K\u0001\u0000\u0000\u0000\u0175\u0176\u0007"+
		"\u0003\u0000\u0000\u0176M\u0001\u0000\u0000\u0000\u0177\u017c\u0003D\""+
		"\u0000\u0178\u0179\u0007\u0004\u0000\u0000\u0179\u017d\u0003D\"\u0000"+
		"\u017a\u017b\u0007\u0005\u0000\u0000\u017b\u017d\u0003P(\u0000\u017c\u0178"+
		"\u0001\u0000\u0000\u0000\u017c\u017a\u0001\u0000\u0000\u0000\u017d\u0180"+
		"\u0001\u0000\u0000\u0000\u017e\u017f\u0007\u0006\u0000\u0000\u017f\u0181"+
		"\u0003N\'\u0000\u0180\u017e\u0001\u0000\u0000\u0000\u0180\u0181\u0001"+
		"\u0000\u0000\u0000\u0181O\u0001\u0000\u0000\u0000\u0182\u0186\u0003T*"+
		"\u0000\u0183\u0186\u0003V+\u0000\u0184\u0186\u0003R)\u0000\u0185\u0182"+
		"\u0001\u0000\u0000\u0000\u0185\u0183\u0001\u0000\u0000\u0000\u0185\u0184"+
		"\u0001\u0000\u0000\u0000\u0186\u0188\u0001\u0000\u0000\u0000\u0187\u0189"+
		"\u0003F#\u0000\u0188\u0187\u0001\u0000\u0000\u0000\u0188\u0189\u0001\u0000"+
		"\u0000\u0000\u0189Q\u0001\u0000\u0000\u0000\u018a\u018f\u0003D\"\u0000"+
		"\u018b\u018d\u0005&\u0000\u0000\u018c\u018e\u0003D\"\u0000\u018d\u018c"+
		"\u0001\u0000\u0000\u0000\u018d\u018e\u0001\u0000\u0000\u0000\u018e\u0190"+
		"\u0001\u0000\u0000\u0000\u018f\u018b\u0001\u0000\u0000\u0000\u018f\u0190"+
		"\u0001\u0000\u0000\u0000\u0190S\u0001\u0000\u0000\u0000\u0191\u0192\u0003"+
		"<\u001e\u0000\u0192\u0193\u0005\u001c\u0000\u0000\u0193\u0194\u0003R)"+
		"\u0000\u0194\u0195\u0005\u000e\u0000\u0000\u0195\u0196\u0003R)\u0000\u0196"+
		"\u0197\u0005\u001d\u0000\u0000\u0197U\u0001\u0000\u0000\u0000\u0198\u0199"+
		"\u0005\u0004\u0000\u0000\u0199\u019a\u0005.\u0000\u0000\u019a\u019b\u0005"+
		"\u0006\u0000\u0000\u019bW\u0001\u0000\u0000\u0000\u019c\u01a9\u0003H$"+
		"\u0000\u019d\u01a9\u0005;\u0000\u0000\u019e\u01a9\u0005=\u0000\u0000\u019f"+
		"\u01a9\u00034\u001a\u0000\u01a0\u01a9\u00059\u0000\u0000\u01a1\u01a9\u0003"+
		"\u0006\u0003\u0000\u01a2\u01a9\u0003>\u001f\u0000\u01a3\u01a9\u0003@ "+
		"\u0000\u01a4\u01a9\u0003B!\u0000\u01a5\u01a9\u0003R)\u0000\u01a6\u01a9"+
		"\u0003T*\u0000\u01a7\u01a9\u0003V+\u0000\u01a8\u019c\u0001\u0000\u0000"+
		"\u0000\u01a8\u019d\u0001\u0000\u0000\u0000\u01a8\u019e\u0001\u0000\u0000"+
		"\u0000\u01a8\u019f\u0001\u0000\u0000\u0000\u01a8\u01a0\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a1\u0001\u0000\u0000\u0000\u01a8\u01a2\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a3\u0001\u0000\u0000\u0000\u01a8\u01a4\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a5\u0001\u0000\u0000\u0000\u01a8\u01a6\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a7\u0001\u0000\u0000\u0000\u01a9Y\u0001\u0000\u0000\u0000"+
		"\u01aa\u01ae\u0005/\u0000\u0000\u01ab\u01ae\u0003B!\u0000\u01ac\u01ae"+
		"\u0003T*\u0000\u01ad\u01aa\u0001\u0000\u0000\u0000\u01ad\u01ab\u0001\u0000"+
		"\u0000\u0000\u01ad\u01ac\u0001\u0000\u0000\u0000\u01ae[\u0001\u0000\u0000"+
		"\u0000\"_ir\u008f\u0094\u009b\u00a6\u00b4\u00be\u00e6\u00f7\u00fd\u0101"+
		"\u010a\u0118\u011e\u0126\u0129\u0137\u013a\u0142\u0157\u0162\u0165\u0169"+
		"\u0171\u017c\u0180\u0185\u0188\u018d\u018f\u01a8\u01ad";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}