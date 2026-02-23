// Generated from deal.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { dealListener } from "./dealListener";
import { dealVisitor } from "./dealVisitor";


export class dealParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly COMMENT = 40;
	public static readonly MOVE_DEST = 41;
	public static readonly MOVE_SOURCE = 42;
	public static readonly INTERACT_CARD = 43;
	public static readonly EMPTY = 44;
	public static readonly PLUS = 45;
	public static readonly MINUS = 46;
	public static readonly TIMES = 47;
	public static readonly WILDCARD = 48;
	public static readonly NUMBER = 49;
	public static readonly ID = 50;
	public static readonly CARD = 51;
	public static readonly STRING = 52;
	public static readonly SPACES = 53;
	public static readonly NEWLINE = 54;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_player = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_source = 6;
	public static readonly RULE_destination = 7;
	public static readonly RULE_on_action = 8;
	public static readonly RULE_on_move = 9;
	public static readonly RULE_on_interact = 10;
	public static readonly RULE_for = 11;
	public static readonly RULE_if = 12;
	public static readonly RULE_cancel = 13;
	public static readonly RULE_assign = 14;
	public static readonly RULE_function_call = 15;
	public static readonly RULE_updateTurn = 16;
	public static readonly RULE_log = 17;
	public static readonly RULE_modify = 18;
	public static readonly RULE_show = 19;
	public static readonly RULE_config = 20;
	public static readonly RULE_attribute = 21;
	public static readonly RULE_atts = 22;
	public static readonly RULE_variable = 23;
	public static readonly RULE_args = 24;
	public static readonly RULE_arg = 25;
	public static readonly RULE_arearef = 26;
	public static readonly RULE_area = 27;
	public static readonly RULE_stack = 28;
	public static readonly RULE_position = 29;
	public static readonly RULE_term = 30;
	public static readonly RULE_property = 31;
	public static readonly RULE_bexpr = 32;
	public static readonly RULE_aexpr = 33;
	public static readonly RULE_set = 34;
	public static readonly RULE_intset = 35;
	public static readonly RULE_positionset = 36;
	public static readonly RULE_playerset = 37;
	public static readonly RULE_move_catch = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "block", "player", "definition", "move", "source", "destination", 
		"on_action", "on_move", "on_interact", "for", "if", "cancel", "assign", 
		"function_call", "updateTurn", "log", "modify", "show", "config", "attribute", 
		"atts", "variable", "args", "arg", "arearef", "area", "stack", "position", 
		"term", "property", "bexpr", "aexpr", "set", "intset", "positionset", 
		"playerset", "move_catch",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'<'", "'.'", "'>'", "'define'", "'area'", "'action'", 
		"'int'", "'card'", "'move'", "'on'", "'{'", "'}'", "'interact'", "'for'", 
		"'in'", "'if'", "'else'", "'cancel'", "'='", "'++'", "'log'", "'..'", 
		"'show'", "'$'", "','", "'('", "')'", "':'", "'['", "']'", "'=='", "'!='", 
		"'<<'", "'<='", "'>='", "'>>'", "'=?'", "'!?'", undefined, "'/'", "'\\'", 
		"'@'", "'empty'", "'+'", "'-'", "'*'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "COMMENT", "MOVE_DEST", 
		"MOVE_SOURCE", "INTERACT_CARD", "EMPTY", "PLUS", "MINUS", "TIMES", "WILDCARD", 
		"NUMBER", "ID", "CARD", "STRING", "SPACES", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(dealParser._LITERAL_NAMES, dealParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return dealParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "deal.g4"; }

	// @Override
	public get ruleNames(): string[] { return dealParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return dealParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(dealParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, dealParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__1) | (1 << dealParser.T__4) | (1 << dealParser.T__9) | (1 << dealParser.T__10) | (1 << dealParser.T__14) | (1 << dealParser.T__16) | (1 << dealParser.T__18) | (1 << dealParser.T__21) | (1 << dealParser.T__23) | (1 << dealParser.T__24))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (dealParser.MOVE_DEST - 41)) | (1 << (dealParser.MOVE_SOURCE - 41)) | (1 << (dealParser.INTERACT_CARD - 41)) | (1 << (dealParser.ID - 41)))) !== 0)) {
				{
				{
				this.state = 78;
				this.stmt();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(dealParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, dealParser.RULE_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 86;
				this.definition();
				}
				break;

			case 2:
				{
				this.state = 87;
				this.move();
				}
				break;

			case 3:
				{
				this.state = 88;
				this.on_action();
				}
				break;

			case 4:
				{
				this.state = 89;
				this.on_move();
				}
				break;

			case 5:
				{
				this.state = 90;
				this.on_interact();
				}
				break;

			case 6:
				{
				this.state = 91;
				this.for();
				}
				break;

			case 7:
				{
				this.state = 92;
				this.if();
				}
				break;

			case 8:
				{
				this.state = 93;
				this.cancel();
				}
				break;

			case 9:
				{
				this.state = 94;
				this.assign();
				}
				break;

			case 10:
				{
				this.state = 95;
				this.function_call();
				}
				break;

			case 11:
				{
				this.state = 96;
				this.updateTurn();
				}
				break;

			case 12:
				{
				this.state = 97;
				this.log();
				}
				break;

			case 13:
				{
				this.state = 98;
				this.modify();
				}
				break;

			case 14:
				{
				this.state = 99;
				this.show();
				}
				break;

			case 15:
				{
				this.state = 100;
				this.config();
				}
				break;
			}
			this.state = 103;
			this.match(dealParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, dealParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__1) | (1 << dealParser.T__4) | (1 << dealParser.T__9) | (1 << dealParser.T__10) | (1 << dealParser.T__14) | (1 << dealParser.T__16) | (1 << dealParser.T__18) | (1 << dealParser.T__21) | (1 << dealParser.T__23) | (1 << dealParser.T__24))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (dealParser.MOVE_DEST - 41)) | (1 << (dealParser.MOVE_SOURCE - 41)) | (1 << (dealParser.INTERACT_CARD - 41)) | (1 << (dealParser.ID - 41)))) !== 0)) {
				{
				{
				this.state = 105;
				this.stmt();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public player(): PlayerContext {
		let _localctx: PlayerContext = new PlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dealParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(dealParser.T__1);
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.MOVE_DEST:
				{
				this.state = 112;
				this.match(dealParser.MOVE_DEST);
				}
				break;
			case dealParser.T__2:
				{
				this.state = 113;
				this.match(dealParser.T__2);
				}
				break;
			case dealParser.INTERACT_CARD:
				{
				this.state = 114;
				this.match(dealParser.INTERACT_CARD);
				}
				break;
			case dealParser.NUMBER:
			case dealParser.ID:
				{
				this.state = 115;
				this.aexpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 118;
			this.match(dealParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dealParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(dealParser.T__4);
			this.state = 121;
			_localctx._type = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__5) | (1 << dealParser.T__6) | (1 << dealParser.T__7) | (1 << dealParser.T__8))) !== 0))) {
				_localctx._type = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 122;
			this.match(dealParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, dealParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(dealParser.T__9);
			this.state = 125;
			this.source();
			this.state = 126;
			this.destination();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, dealParser.RULE_source);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 128;
				this.match(dealParser.CARD);
				}
				break;

			case 2:
				{
				this.state = 129;
				this.position();
				}
				break;

			case 3:
				{
				this.state = 130;
				this.positionset();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destination(): DestinationContext {
		let _localctx: DestinationContext = new DestinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, dealParser.RULE_destination);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.position();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_action(): On_actionContext {
		let _localctx: On_actionContext = new On_actionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, dealParser.RULE_on_action);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(dealParser.T__10);
			this.state = 136;
			this.match(dealParser.ID);
			this.state = 137;
			this.match(dealParser.T__11);
			this.state = 138;
			this.block();
			this.state = 139;
			this.match(dealParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_move(): On_moveContext {
		let _localctx: On_moveContext = new On_moveContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, dealParser.RULE_on_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(dealParser.T__10);
			this.state = 142;
			this.match(dealParser.T__9);
			this.state = 143;
			this.move_catch();
			this.state = 144;
			this.move_catch();
			this.state = 145;
			this.match(dealParser.T__11);
			this.state = 146;
			this.block();
			this.state = 147;
			this.match(dealParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public on_interact(): On_interactContext {
		let _localctx: On_interactContext = new On_interactContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dealParser.RULE_on_interact);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(dealParser.T__10);
			this.state = 150;
			this.match(dealParser.T__13);
			this.state = 151;
			this.move_catch();
			this.state = 152;
			this.match(dealParser.T__11);
			this.state = 153;
			this.block();
			this.state = 154;
			this.match(dealParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for(): ForContext {
		let _localctx: ForContext = new ForContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dealParser.RULE_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(dealParser.T__14);
			this.state = 157;
			this.match(dealParser.ID);
			this.state = 158;
			this.match(dealParser.T__15);
			this.state = 159;
			this.set();
			this.state = 160;
			this.match(dealParser.T__11);
			this.state = 161;
			this.block();
			this.state = 162;
			this.match(dealParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if(): IfContext {
		let _localctx: IfContext = new IfContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dealParser.RULE_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(dealParser.T__16);
			this.state = 165;
			this.bexpr();
			this.state = 166;
			this.match(dealParser.T__11);
			this.state = 167;
			_localctx._consequent = this.block();
			this.state = 168;
			this.match(dealParser.T__12);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__17) {
				{
				this.state = 169;
				this.match(dealParser.T__17);
				this.state = 170;
				this.match(dealParser.T__11);
				this.state = 171;
				_localctx._antecedent = this.block();
				this.state = 172;
				this.match(dealParser.T__12);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cancel(): CancelContext {
		let _localctx: CancelContext = new CancelContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, dealParser.RULE_cancel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(dealParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, dealParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.variable();
			this.state = 179;
			this.match(dealParser.T__19);
			this.state = 180;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dealParser.RULE_function_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(dealParser.ID);
			this.state = 183;
			this.args();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateTurn(): UpdateTurnContext {
		let _localctx: UpdateTurnContext = new UpdateTurnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dealParser.RULE_updateTurn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(dealParser.T__1);
			this.state = 186;
			this.match(dealParser.T__2);
			this.state = 187;
			this.match(dealParser.T__3);
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__20:
				{
				this.state = 188;
				this.match(dealParser.T__20);
				}
				break;
			case dealParser.T__19:
				{
				this.state = 189;
				this.match(dealParser.T__19);
				this.state = 190;
				this.player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public log(): LogContext {
		let _localctx: LogContext = new LogContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, dealParser.RULE_log);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(dealParser.T__21);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 194;
				this.term();
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === dealParser.T__1 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (dealParser.MOVE_DEST - 41)) | (1 << (dealParser.MOVE_SOURCE - 41)) | (1 << (dealParser.INTERACT_CARD - 41)) | (1 << (dealParser.EMPTY - 41)) | (1 << (dealParser.NUMBER - 41)) | (1 << (dealParser.ID - 41)) | (1 << (dealParser.CARD - 41)) | (1 << (dealParser.STRING - 41)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modify(): ModifyContext {
		let _localctx: ModifyContext = new ModifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, dealParser.RULE_modify);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.position();
				this.state = 200;
				this.match(dealParser.T__22);
				this.state = 201;
				this.function_call();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.variable();
				this.state = 204;
				this.match(dealParser.T__22);
				this.state = 205;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public show(): ShowContext {
		let _localctx: ShowContext = new ShowContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, dealParser.RULE_show);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(dealParser.T__23);
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 210;
				this.position();
				}
				break;

			case 2:
				{
				this.state = 211;
				this.match(dealParser.CARD);
				}
				break;

			case 3:
				{
				this.state = 212;
				this.variable();
				}
				break;
			}
			this.state = 215;
			this.player();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let _localctx: ConfigContext = new ConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dealParser.RULE_config);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(dealParser.T__24);
			this.state = 218;
			this.match(dealParser.ID);
			this.state = 219;
			this.atts();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, dealParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 221;
				this.match(dealParser.ID);
				}
				break;

			case 2:
				{
				this.state = 222;
				this.match(dealParser.NUMBER);
				}
				break;

			case 3:
				{
				this.state = 223;
				this.intset();
				}
				break;
			}
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				{
				this.state = 226;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.STRING:
				{
				this.state = 227;
				this.match(dealParser.STRING);
				}
				break;
			case dealParser.NUMBER:
				{
				this.state = 228;
				this.match(dealParser.NUMBER);
				}
				break;
			case dealParser.T__11:
				{
				this.state = 229;
				this.atts();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atts(): AttsContext {
		let _localctx: AttsContext = new AttsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, dealParser.RULE_atts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(dealParser.T__11);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.NUMBER || _la === dealParser.ID) {
				{
				this.state = 233;
				this.attribute();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dealParser.T__25) {
					{
					{
					this.state = 234;
					this.match(dealParser.T__25);
					this.state = 235;
					this.attribute();
					}
					}
					this.state = 240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 243;
			this.match(dealParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, dealParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(dealParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, dealParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(dealParser.T__26);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.ID) {
				{
				this.state = 248;
				this.arg();
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dealParser.T__25) {
					{
					{
					this.state = 249;
					this.match(dealParser.T__25);
					this.state = 250;
					this.arg();
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 258;
			this.match(dealParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, dealParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(dealParser.ID);
			this.state = 261;
			this.match(dealParser.T__28);
			this.state = 262;
			_la = this._input.LA(1);
			if (!(_la === dealParser.NUMBER || _la === dealParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arearef(): ArearefContext {
		let _localctx: ArearefContext = new ArearefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, dealParser.RULE_arearef);
		try {
			this.state = 266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.match(dealParser.ID);
				}
				break;
			case dealParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.player();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public area(): AreaContext {
		let _localctx: AreaContext = new AreaContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, dealParser.RULE_area);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.arearef();
			this.state = 269;
			this.match(dealParser.T__29);
			this.state = 270;
			this.match(dealParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stack(): StackContext {
		let _localctx: StackContext = new StackContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, dealParser.RULE_stack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.arearef();
			this.state = 273;
			this.match(dealParser.T__29);
			this.state = 274;
			this.aexpr();
			this.state = 275;
			this.match(dealParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, dealParser.RULE_position);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__1:
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.arearef();
				this.state = 278;
				this.match(dealParser.T__29);
				this.state = 279;
				this.aexpr();
				this.state = 280;
				this.match(dealParser.T__25);
				this.state = 281;
				this.aexpr();
				this.state = 282;
				this.match(dealParser.T__30);
				}
				break;
			case dealParser.MOVE_SOURCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 284;
				this.match(dealParser.MOVE_SOURCE);
				}
				break;
			case dealParser.MOVE_DEST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.match(dealParser.MOVE_DEST);
				}
				break;
			case dealParser.INTERACT_CARD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 286;
				this.match(dealParser.INTERACT_CARD);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, dealParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 289;
				this.match(dealParser.EMPTY);
				}
				break;

			case 2:
				{
				this.state = 290;
				this.match(dealParser.CARD);
				}
				break;

			case 3:
				{
				this.state = 291;
				this.match(dealParser.STRING);
				}
				break;

			case 4:
				{
				this.state = 292;
				this.variable();
				}
				break;

			case 5:
				{
				this.state = 293;
				this.aexpr();
				}
				break;

			case 6:
				{
				this.state = 294;
				this.player();
				}
				break;

			case 7:
				{
				this.state = 295;
				this.area();
				}
				break;

			case 8:
				{
				this.state = 296;
				this.stack();
				}
				break;

			case 9:
				{
				this.state = 297;
				this.position();
				}
				break;
			}
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__2) {
				{
				this.state = 300;
				this.property();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, dealParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(dealParser.T__2);
			this.state = 304;
			this.match(dealParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bexpr(): BexprContext {
		let _localctx: BexprContext = new BexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, dealParser.RULE_bexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.term();
			this.state = 311;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.T__31:
			case dealParser.T__32:
			case dealParser.T__33:
			case dealParser.T__34:
			case dealParser.T__35:
			case dealParser.T__36:
				{
				{
				this.state = 307;
				_la = this._input.LA(1);
				if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (dealParser.T__31 - 32)) | (1 << (dealParser.T__32 - 32)) | (1 << (dealParser.T__33 - 32)) | (1 << (dealParser.T__34 - 32)) | (1 << (dealParser.T__35 - 32)) | (1 << (dealParser.T__36 - 32)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 308;
				this.term();
				}
				}
				break;
			case dealParser.T__37:
			case dealParser.T__38:
				{
				{
				this.state = 309;
				_la = this._input.LA(1);
				if (!(_la === dealParser.T__37 || _la === dealParser.T__38)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 310;
				this.set();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aexpr(): AexprContext {
		let _localctx: AexprContext = new AexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, dealParser.RULE_aexpr);
		let _la: number;
		try {
			let _alt: number;
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dealParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.match(dealParser.NUMBER);
				}
				break;
			case dealParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.variable();
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 315;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (dealParser.PLUS - 45)) | (1 << (dealParser.MINUS - 45)) | (1 << (dealParser.TIMES - 45)))) !== 0))) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 316;
						this.aexpr();
						}
						}
					}
					this.state = 321;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, dealParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 324;
				this.intset();
				}
				break;

			case 2:
				{
				this.state = 325;
				this.positionset();
				}
				break;

			case 3:
				{
				this.state = 326;
				this.playerset();
				}
				break;
			}
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dealParser.T__2) {
				{
				this.state = 329;
				this.property();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intset(): IntsetContext {
		let _localctx: IntsetContext = new IntsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, dealParser.RULE_intset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.aexpr();
			this.state = 333;
			this.match(dealParser.T__28);
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 334;
				this.aexpr();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public positionset(): PositionsetContext {
		let _localctx: PositionsetContext = new PositionsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, dealParser.RULE_positionset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.arearef();
			this.state = 338;
			this.match(dealParser.T__29);
			this.state = 339;
			this.intset();
			this.state = 340;
			this.match(dealParser.T__25);
			this.state = 341;
			this.intset();
			this.state = 342;
			this.match(dealParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public playerset(): PlayersetContext {
		let _localctx: PlayersetContext = new PlayersetContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, dealParser.RULE_playerset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(dealParser.T__1);
			this.state = 345;
			this.match(dealParser.TIMES);
			this.state = 346;
			this.match(dealParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move_catch(): Move_catchContext {
		let _localctx: Move_catchContext = new Move_catchContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, dealParser.RULE_move_catch);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				this.match(dealParser.WILDCARD);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 349;
				this.position();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 350;
				this.positionset();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u0164\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
		"\x02\x0E\x02U\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03h\n\x03\x03\x03\x03\x03\x03\x04\x07\x04m\n\x04\f\x04" +
		"\x0E\x04p\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05w\n\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x05\b\x86\n\b\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB1\n\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\xC2\n\x12\x03\x13\x03\x13\x06\x13\xC6\n\x13" +
		"\r\x13\x0E\x13\xC7\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\xD2\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
		"\xD8\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\xE3\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\xE9\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\xEF\n\x18\f\x18\x0E" +
		"\x18\xF2\v\x18\x05\x18\xF4\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xFE\n\x1A\f\x1A\x0E\x1A\u0101\v\x1A\x05" +
		"\x1A\u0103\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x05\x1C\u010D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0122\n\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u012D\n \x03 \x05 \u0130\n \x03!" +
		"\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u013A\n\"\x03#\x03#\x03" +
		"#\x03#\x07#\u0140\n#\f#\x0E#\u0143\v#\x05#\u0145\n#\x03$\x03$\x03$\x05" +
		"$\u014A\n$\x03$\x05$\u014D\n$\x03%\x03%\x03%\x05%\u0152\n%\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u0162" +
		"\n(\x03(\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x07\x03\x02\b\v\x04" +
		"\x023366\x03\x02\"\'\x03\x02()\x03\x02/1\x02\u0176\x02S\x03\x02\x02\x02" +
		"\x04g\x03\x02\x02\x02\x06n\x03\x02\x02\x02\bq\x03\x02\x02\x02\nz\x03\x02" +
		"\x02\x02\f~\x03\x02\x02\x02\x0E\x85\x03\x02\x02\x02\x10\x87\x03\x02\x02" +
		"\x02\x12\x89\x03\x02\x02\x02\x14\x8F\x03\x02\x02\x02\x16\x97\x03\x02\x02" +
		"\x02\x18\x9E\x03\x02\x02\x02\x1A\xA6\x03\x02\x02\x02\x1C\xB2\x03\x02\x02" +
		"\x02\x1E\xB4\x03\x02\x02\x02 \xB8\x03\x02\x02\x02\"\xBB\x03\x02\x02\x02" +
		"$\xC3\x03\x02\x02\x02&\xD1\x03\x02\x02\x02(\xD3\x03\x02\x02\x02*\xDB\x03" +
		"\x02\x02\x02,\xE2\x03\x02\x02\x02.\xEA\x03\x02\x02\x020\xF7\x03\x02\x02" +
		"\x022\xF9\x03\x02\x02\x024\u0106\x03\x02\x02\x026\u010C\x03\x02\x02\x02" +
		"8\u010E\x03\x02\x02\x02:\u0112\x03\x02\x02\x02<\u0121\x03\x02\x02\x02" +
		">\u012C\x03\x02\x02\x02@\u0131\x03\x02\x02\x02B\u0134\x03\x02\x02\x02" +
		"D\u0144\x03\x02\x02\x02F\u0149\x03\x02\x02\x02H\u014E\x03\x02\x02\x02" +
		"J\u0153\x03\x02\x02\x02L\u015A\x03\x02\x02\x02N\u0161\x03\x02\x02\x02" +
		"PR\x05\x04\x03\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07\x02\x02\x03" +
		"W\x03\x03\x02\x02\x02Xh\x05\n\x06\x02Yh\x05\f\x07\x02Zh\x05\x12\n\x02" +
		"[h\x05\x14\v\x02\\h\x05\x16\f\x02]h\x05\x18\r\x02^h\x05\x1A\x0E\x02_h" +
		"\x05\x1C\x0F\x02`h\x05\x1E\x10\x02ah\x05 \x11\x02bh\x05\"\x12\x02ch\x05" +
		"$\x13\x02dh\x05&\x14\x02eh\x05(\x15\x02fh\x05*\x16\x02gX\x03\x02\x02\x02" +
		"gY\x03\x02\x02\x02gZ\x03\x02\x02\x02g[\x03\x02\x02\x02g\\\x03\x02\x02" +
		"\x02g]\x03\x02\x02\x02g^\x03\x02\x02\x02g_\x03\x02\x02\x02g`\x03\x02\x02" +
		"\x02ga\x03\x02\x02\x02gb\x03\x02\x02\x02gc\x03\x02\x02\x02gd\x03\x02\x02" +
		"\x02ge\x03\x02\x02\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x07\x03\x02" +
		"\x02j\x05\x03\x02\x02\x02km\x05\x04\x03\x02lk\x03\x02\x02\x02mp\x03\x02" +
		"\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x07\x03\x02\x02\x02pn\x03" +
		"\x02\x02\x02qv\x07\x04\x02\x02rw\x07+\x02\x02sw\x07\x05\x02\x02tw\x07" +
		"-\x02\x02uw\x05D#\x02vr\x03\x02\x02\x02vs\x03\x02\x02\x02vt\x03\x02\x02" +
		"\x02vu\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07\x06\x02\x02y\t\x03\x02" +
		"\x02\x02z{\x07\x07\x02\x02{|\t\x02\x02\x02|}\x074\x02\x02}\v\x03\x02\x02" +
		"\x02~\x7F\x07\f\x02\x02\x7F\x80\x05\x0E\b\x02\x80\x81\x05\x10\t\x02\x81" +
		"\r\x03\x02\x02\x02\x82\x86\x075\x02\x02\x83\x86\x05<\x1F\x02\x84\x86\x05" +
		"J&\x02\x85\x82\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x84\x03\x02" +
		"\x02\x02\x86\x0F\x03\x02\x02\x02\x87\x88\x05<\x1F\x02\x88\x11\x03\x02" +
		"\x02\x02\x89\x8A\x07\r\x02\x02\x8A\x8B\x074\x02\x02\x8B\x8C\x07\x0E\x02" +
		"\x02\x8C\x8D\x05\x06\x04\x02\x8D\x8E\x07\x0F\x02\x02\x8E\x13\x03\x02\x02" +
		"\x02\x8F\x90\x07\r\x02\x02\x90\x91\x07\f\x02\x02\x91\x92\x05N(\x02\x92" +
		"\x93\x05N(\x02\x93\x94\x07\x0E\x02\x02\x94\x95\x05\x06\x04\x02\x95\x96" +
		"\x07\x0F\x02\x02\x96\x15\x03\x02\x02\x02\x97\x98\x07\r\x02\x02\x98\x99" +
		"\x07\x10\x02\x02\x99\x9A\x05N(\x02\x9A\x9B\x07\x0E\x02\x02\x9B\x9C\x05" +
		"\x06\x04\x02\x9C\x9D\x07\x0F\x02\x02\x9D\x17\x03\x02\x02\x02\x9E\x9F\x07" +
		"\x11\x02\x02\x9F\xA0\x074\x02\x02\xA0\xA1\x07\x12\x02\x02\xA1\xA2\x05" +
		"F$\x02\xA2\xA3\x07\x0E\x02\x02\xA3\xA4\x05\x06\x04\x02\xA4\xA5\x07\x0F" +
		"\x02\x02\xA5\x19\x03\x02\x02\x02\xA6\xA7\x07\x13\x02\x02\xA7\xA8\x05B" +
		"\"\x02\xA8\xA9\x07\x0E\x02\x02\xA9\xAA\x05\x06\x04\x02\xAA\xB0\x07\x0F" +
		"\x02\x02\xAB\xAC\x07\x14\x02\x02\xAC\xAD\x07\x0E\x02\x02\xAD\xAE\x05\x06" +
		"\x04\x02\xAE\xAF\x07\x0F\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAB\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x1B\x03\x02\x02\x02\xB2\xB3\x07\x15" +
		"\x02\x02\xB3\x1D\x03\x02\x02\x02\xB4\xB5\x050\x19\x02\xB5\xB6\x07\x16" +
		"\x02\x02\xB6\xB7\x05> \x02\xB7\x1F\x03\x02\x02\x02\xB8\xB9\x074\x02\x02" +
		"\xB9\xBA\x052\x1A\x02\xBA!\x03\x02\x02\x02\xBB\xBC\x07\x04\x02\x02\xBC" +
		"\xBD\x07\x05\x02\x02\xBD\xC1\x07\x06\x02\x02\xBE\xC2\x07\x17\x02\x02\xBF" +
		"\xC0\x07\x16\x02\x02\xC0\xC2\x05\b\x05\x02\xC1\xBE\x03\x02\x02\x02\xC1" +
		"\xBF\x03\x02\x02\x02\xC2#\x03\x02\x02\x02\xC3\xC5\x07\x18\x02\x02\xC4" +
		"\xC6\x05> \x02\xC5\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC5" +
		"\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8%\x03\x02\x02\x02\xC9\xCA" +
		"\x05<\x1F\x02\xCA\xCB\x07\x19\x02\x02\xCB\xCC\x05 \x11\x02\xCC\xD2\x03" +
		"\x02\x02\x02\xCD\xCE\x050\x19\x02\xCE\xCF\x07\x19\x02\x02\xCF\xD0\x05" +
		" \x11\x02\xD0\xD2\x03\x02\x02\x02\xD1\xC9\x03\x02\x02\x02\xD1\xCD\x03" +
		"\x02\x02\x02\xD2\'\x03\x02\x02\x02\xD3\xD7\x07\x1A\x02\x02\xD4\xD8\x05" +
		"<\x1F\x02\xD5\xD8\x075\x02\x02\xD6\xD8\x050\x19\x02\xD7\xD4\x03\x02\x02" +
		"\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
		"\x02\xD9\xDA\x05\b\x05\x02\xDA)\x03\x02\x02\x02\xDB\xDC\x07\x1B\x02\x02" +
		"\xDC\xDD\x074\x02\x02\xDD\xDE\x05.\x18\x02\xDE+\x03\x02\x02\x02\xDF\xE3" +
		"\x074\x02\x02\xE0\xE3\x073\x02\x02\xE1\xE3\x05H%\x02\xE2\xDF\x03\x02\x02" +
		"\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE8\x03\x02\x02" +
		"\x02\xE4\xE9\x074\x02\x02\xE5\xE9\x076\x02\x02\xE6\xE9\x073\x02\x02\xE7" +
		"\xE9\x05.\x18\x02\xE8\xE4\x03\x02\x02\x02\xE8\xE5\x03\x02\x02\x02\xE8" +
		"\xE6\x03\x02\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9-\x03\x02\x02\x02\xEA" +
		"\xF3\x07\x0E\x02\x02\xEB\xF0\x05,\x17\x02\xEC\xED\x07\x1C\x02\x02\xED" +
		"\xEF\x05,\x17\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0" +
		"\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2" +
		"\xF0\x03\x02\x02\x02\xF3\xEB\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4" +
		"\xF5\x03\x02\x02\x02\xF5\xF6\x07\x0F\x02\x02\xF6/\x03\x02\x02\x02\xF7" +
		"\xF8\x074\x02\x02\xF81\x03\x02\x02\x02\xF9\u0102\x07\x1D\x02\x02\xFA\xFF" +
		"\x054\x1B\x02\xFB\xFC\x07\x1C\x02\x02\xFC\xFE\x054\x1B\x02\xFD\xFB\x03" +
		"\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100" +
		"\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02" +
		"\u0102\xFA\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03" +
		"\x02\x02\x02\u0104\u0105\x07\x1E\x02\x02\u01053\x03\x02\x02\x02\u0106" +
		"\u0107\x074\x02\x02\u0107\u0108\x07\x1F\x02\x02\u0108\u0109\t\x03\x02" +
		"\x02\u01095\x03\x02\x02\x02\u010A\u010D\x074\x02\x02\u010B\u010D\x05\b" +
		"\x05\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B\x03\x02\x02\x02\u010D" +
		"7\x03\x02\x02\x02\u010E\u010F\x056\x1C\x02\u010F\u0110\x07 \x02\x02\u0110" +
		"\u0111\x07!\x02\x02\u01119\x03\x02\x02\x02\u0112\u0113\x056\x1C\x02\u0113" +
		"\u0114\x07 \x02\x02\u0114\u0115\x05D#\x02\u0115\u0116\x07!\x02\x02\u0116" +
		";\x03\x02\x02\x02\u0117\u0118\x056\x1C\x02\u0118\u0119\x07 \x02\x02\u0119" +
		"\u011A\x05D#\x02\u011A\u011B\x07\x1C\x02\x02\u011B\u011C\x05D#\x02\u011C" +
		"\u011D\x07!\x02\x02\u011D\u0122\x03\x02\x02\x02\u011E\u0122\x07,\x02\x02" +
		"\u011F\u0122\x07+\x02\x02\u0120\u0122\x07-\x02\x02\u0121\u0117\x03\x02" +
		"\x02\x02\u0121\u011E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121" +
		"\u0120\x03\x02\x02\x02\u0122=\x03\x02\x02\x02\u0123\u012D\x07.\x02\x02" +
		"\u0124\u012D\x075\x02\x02\u0125\u012D\x076\x02\x02\u0126\u012D\x050\x19" +
		"\x02\u0127\u012D\x05D#\x02\u0128\u012D\x05\b\x05\x02\u0129\u012D\x058" +
		"\x1D\x02\u012A\u012D\x05:\x1E\x02\u012B\u012D\x05<\x1F\x02\u012C\u0123" +
		"\x03\x02\x02\x02\u012C\u0124\x03\x02\x02\x02\u012C\u0125\x03\x02\x02\x02" +
		"\u012C\u0126\x03\x02\x02\x02\u012C\u0127\x03\x02\x02\x02\u012C\u0128\x03" +
		"\x02\x02\x02\u012C\u0129\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
		"\u012B\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0130\x05@!\x02" +
		"\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130?\x03\x02" +
		"\x02\x02\u0131\u0132\x07\x05\x02\x02\u0132\u0133\x074\x02\x02\u0133A\x03" +
		"\x02\x02\x02\u0134\u0139\x05> \x02\u0135\u0136\t\x04\x02\x02\u0136\u013A" +
		"\x05> \x02\u0137\u0138\t\x05\x02\x02\u0138\u013A\x05F$\x02\u0139\u0135" +
		"\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013AC\x03\x02\x02\x02\u013B" +
		"\u0145\x073\x02\x02\u013C\u0141\x050\x19\x02\u013D\u013E\t\x06\x02\x02" +
		"\u013E\u0140\x05D#\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0143\x03\x02" +
		"\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
		"\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u013B\x03\x02" +
		"\x02\x02\u0144\u013C\x03\x02\x02\x02\u0145E\x03\x02\x02\x02\u0146\u014A" +
		"\x05H%\x02\u0147\u014A\x05J&\x02\u0148\u014A\x05L\'\x02\u0149\u0146\x03" +
		"\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A" +
		"\u014C\x03\x02\x02\x02\u014B\u014D\x05@!\x02\u014C\u014B\x03\x02\x02\x02" +
		"\u014C\u014D\x03\x02\x02\x02\u014DG\x03\x02\x02\x02\u014E\u014F\x05D#" +
		"\x02\u014F\u0151\x07\x1F\x02\x02\u0150\u0152\x05D#\x02\u0151\u0150\x03" +
		"\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152I\x03\x02\x02\x02\u0153" +
		"\u0154\x056\x1C\x02\u0154\u0155\x07 \x02\x02\u0155\u0156\x05H%\x02\u0156" +
		"\u0157\x07\x1C\x02\x02\u0157\u0158\x05H%\x02\u0158\u0159\x07!\x02\x02" +
		"\u0159K\x03\x02\x02\x02\u015A\u015B\x07\x04\x02\x02\u015B\u015C\x071\x02" +
		"\x02\u015C\u015D\x07\x06\x02\x02\u015DM\x03\x02\x02\x02\u015E\u0162\x07" +
		"2\x02\x02\u015F\u0162\x05<\x1F\x02\u0160\u0162\x05J&\x02\u0161\u015E\x03" +
		"\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0161\u0160\x03\x02\x02\x02\u0162" +
		"O\x03\x02\x02\x02\x1DSgnv\x85\xB0\xC1\xC7\xD1\xD7\xE2\xE8\xF0\xF3\xFF" +
		"\u0102\u010C\u0121\u012C\u012F\u0139\u0141\u0144\u0149\u014C\u0151\u0161";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dealParser.__ATN) {
			dealParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dealParser._serializedATN));
		}

		return dealParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(dealParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_prog; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public definition(): DefinitionContext | undefined {
		return this.tryGetRuleContext(0, DefinitionContext);
	}
	public move(): MoveContext | undefined {
		return this.tryGetRuleContext(0, MoveContext);
	}
	public on_action(): On_actionContext | undefined {
		return this.tryGetRuleContext(0, On_actionContext);
	}
	public on_move(): On_moveContext | undefined {
		return this.tryGetRuleContext(0, On_moveContext);
	}
	public on_interact(): On_interactContext | undefined {
		return this.tryGetRuleContext(0, On_interactContext);
	}
	public for(): ForContext | undefined {
		return this.tryGetRuleContext(0, ForContext);
	}
	public if(): IfContext | undefined {
		return this.tryGetRuleContext(0, IfContext);
	}
	public cancel(): CancelContext | undefined {
		return this.tryGetRuleContext(0, CancelContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public updateTurn(): UpdateTurnContext | undefined {
		return this.tryGetRuleContext(0, UpdateTurnContext);
	}
	public log(): LogContext | undefined {
		return this.tryGetRuleContext(0, LogContext);
	}
	public modify(): ModifyContext | undefined {
		return this.tryGetRuleContext(0, ModifyContext);
	}
	public show(): ShowContext | undefined {
		return this.tryGetRuleContext(0, ShowContext);
	}
	public config(): ConfigContext | undefined {
		return this.tryGetRuleContext(0, ConfigContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_stmt; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_block; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayerContext extends ParserRuleContext {
	public MOVE_DEST(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
	public INTERACT_CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.INTERACT_CARD, 0); }
	public aexpr(): AexprContext | undefined {
		return this.tryGetRuleContext(0, AexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_player; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPlayer) {
			listener.enterPlayer(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPlayer) {
			listener.exitPlayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPlayer) {
			return visitor.visitPlayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public _type!: Token;
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_definition; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public source(): SourceContext {
		return this.getRuleContext(0, SourceContext);
	}
	public destination(): DestinationContext {
		return this.getRuleContext(0, DestinationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_move; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterMove) {
			listener.enterMove(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitMove) {
			listener.exitMove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceContext extends ParserRuleContext {
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_source; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestinationContext extends ParserRuleContext {
	public position(): PositionContext {
		return this.getRuleContext(0, PositionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_destination; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterDestination) {
			listener.enterDestination(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitDestination) {
			listener.exitDestination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitDestination) {
			return visitor.visitDestination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class On_actionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_on_action; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterOn_action) {
			listener.enterOn_action(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitOn_action) {
			listener.exitOn_action(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitOn_action) {
			return visitor.visitOn_action(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class On_moveContext extends ParserRuleContext {
	public move_catch(): Move_catchContext[];
	public move_catch(i: number): Move_catchContext;
	public move_catch(i?: number): Move_catchContext | Move_catchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Move_catchContext);
		} else {
			return this.getRuleContext(i, Move_catchContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_on_move; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterOn_move) {
			listener.enterOn_move(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitOn_move) {
			listener.exitOn_move(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitOn_move) {
			return visitor.visitOn_move(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class On_interactContext extends ParserRuleContext {
	public move_catch(): Move_catchContext {
		return this.getRuleContext(0, Move_catchContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_on_interact; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterOn_interact) {
			listener.enterOn_interact(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitOn_interact) {
			listener.exitOn_interact(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitOn_interact) {
			return visitor.visitOn_interact(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_for; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterFor) {
			listener.enterFor(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitFor) {
			listener.exitFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitFor) {
			return visitor.visitFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfContext extends ParserRuleContext {
	public _consequent!: BlockContext;
	public _antecedent!: BlockContext;
	public bexpr(): BexprContext {
		return this.getRuleContext(0, BexprContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_if; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterIf) {
			listener.enterIf(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitIf) {
			listener.exitIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CancelContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_cancel; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterCancel) {
			listener.enterCancel(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitCancel) {
			listener.exitCancel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitCancel) {
			return visitor.visitCancel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_assign; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_function_call; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateTurnContext extends ParserRuleContext {
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_updateTurn; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterUpdateTurn) {
			listener.enterUpdateTurn(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitUpdateTurn) {
			listener.exitUpdateTurn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitUpdateTurn) {
			return visitor.visitUpdateTurn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_log; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterLog) {
			listener.enterLog(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitLog) {
			listener.exitLog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitLog) {
			return visitor.visitLog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifyContext extends ParserRuleContext {
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_modify; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterModify) {
			listener.enterModify(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitModify) {
			listener.exitModify(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitModify) {
			return visitor.visitModify(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_show; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterShow) {
			listener.enterShow(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitShow) {
			listener.exitShow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitShow) {
			return visitor.visitShow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConfigContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public atts(): AttsContext {
		return this.getRuleContext(0, AttsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_config; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterConfig) {
			listener.enterConfig(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitConfig) {
			listener.exitConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitConfig) {
			return visitor.visitConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.ID);
		} else {
			return this.getToken(dealParser.ID, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.NUMBER);
		} else {
			return this.getToken(dealParser.NUMBER, i);
		}
	}
	public intset(): IntsetContext | undefined {
		return this.tryGetRuleContext(0, IntsetContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(dealParser.STRING, 0); }
	public atts(): AttsContext | undefined {
		return this.tryGetRuleContext(0, AttsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_attribute; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttsContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_atts; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAtts) {
			listener.enterAtts(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAtts) {
			listener.exitAtts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAtts) {
			return visitor.visitAtts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_variable; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_args; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(dealParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(dealParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_arg; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArearefContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(dealParser.ID, 0); }
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_arearef; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArearef) {
			listener.enterArearef(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArearef) {
			listener.exitArearef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArearef) {
			return visitor.visitArearef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AreaContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_area; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterArea) {
			listener.enterArea(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitArea) {
			listener.exitArea(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitArea) {
			return visitor.visitArea(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StackContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public aexpr(): AexprContext {
		return this.getRuleContext(0, AexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_stack; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterStack) {
			listener.enterStack(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitStack) {
			listener.exitStack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitStack) {
			return visitor.visitStack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public arearef(): ArearefContext | undefined {
		return this.tryGetRuleContext(0, ArearefContext);
	}
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	public MOVE_SOURCE(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_SOURCE, 0); }
	public MOVE_DEST(): TerminalNode | undefined { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
	public INTERACT_CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.INTERACT_CARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_position; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public EMPTY(): TerminalNode | undefined { return this.tryGetToken(dealParser.EMPTY, 0); }
	public CARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.CARD, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(dealParser.STRING, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public aexpr(): AexprContext | undefined {
		return this.tryGetRuleContext(0, AexprContext);
	}
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	public area(): AreaContext | undefined {
		return this.tryGetRuleContext(0, AreaContext);
	}
	public stack(): StackContext | undefined {
		return this.tryGetRuleContext(0, StackContext);
	}
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_term; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(dealParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_property; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BexprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_bexpr; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterBexpr) {
			listener.enterBexpr(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitBexpr) {
			listener.exitBexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitBexpr) {
			return visitor.visitBexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AexprContext extends ParserRuleContext {
	public _op!: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(dealParser.NUMBER, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.PLUS);
		} else {
			return this.getToken(dealParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.MINUS);
		} else {
			return this.getToken(dealParser.MINUS, i);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dealParser.TIMES);
		} else {
			return this.getToken(dealParser.TIMES, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_aexpr; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterAexpr) {
			listener.enterAexpr(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitAexpr) {
			listener.exitAexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitAexpr) {
			return visitor.visitAexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public intset(): IntsetContext | undefined {
		return this.tryGetRuleContext(0, IntsetContext);
	}
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
	}
	public playerset(): PlayersetContext | undefined {
		return this.tryGetRuleContext(0, PlayersetContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_set; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntsetContext extends ParserRuleContext {
	public aexpr(): AexprContext[];
	public aexpr(i: number): AexprContext;
	public aexpr(i?: number): AexprContext | AexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AexprContext);
		} else {
			return this.getRuleContext(i, AexprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_intset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterIntset) {
			listener.enterIntset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitIntset) {
			listener.exitIntset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitIntset) {
			return visitor.visitIntset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionsetContext extends ParserRuleContext {
	public arearef(): ArearefContext {
		return this.getRuleContext(0, ArearefContext);
	}
	public intset(): IntsetContext[];
	public intset(i: number): IntsetContext;
	public intset(i?: number): IntsetContext | IntsetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntsetContext);
		} else {
			return this.getRuleContext(i, IntsetContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_positionset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPositionset) {
			listener.enterPositionset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPositionset) {
			listener.exitPositionset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPositionset) {
			return visitor.visitPositionset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayersetContext extends ParserRuleContext {
	public TIMES(): TerminalNode { return this.getToken(dealParser.TIMES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_playerset; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterPlayerset) {
			listener.enterPlayerset(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitPlayerset) {
			listener.exitPlayerset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitPlayerset) {
			return visitor.visitPlayerset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_catchContext extends ParserRuleContext {
	public WILDCARD(): TerminalNode | undefined { return this.tryGetToken(dealParser.WILDCARD, 0); }
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public positionset(): PositionsetContext | undefined {
		return this.tryGetRuleContext(0, PositionsetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dealParser.RULE_move_catch; }
	// @Override
	public enterRule(listener: dealListener): void {
		if (listener.enterMove_catch) {
			listener.enterMove_catch(this);
		}
	}
	// @Override
	public exitRule(listener: dealListener): void {
		if (listener.exitMove_catch) {
			listener.exitMove_catch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dealVisitor<Result>): Result {
		if (visitor.visitMove_catch) {
			return visitor.visitMove_catch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


