"use strict";
// Generated from C:\Users\alexj\University\dealer/src/language/deal.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move_catchContext = exports.PlayersetContext = exports.PositionsetContext = exports.IntsetContext = exports.SetContext = exports.AexprContext = exports.BexprContext = exports.PropertyContext = exports.TermContext = exports.PositionContext = exports.StackContext = exports.AreaContext = exports.ArearefContext = exports.ArgContext = exports.ArgsContext = exports.VariableContext = exports.UpdateTurnContext = exports.Function_callContext = exports.AssignContext = exports.CancelContext = exports.IfContext = exports.ForContext = exports.On_moveContext = exports.On_actionContext = exports.DestinationContext = exports.SourceContext = exports.MoveContext = exports.DefinitionContext = exports.PlayerContext = exports.BlockContext = exports.StmtContext = exports.ProgContext = exports.dealParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class dealParser extends Parser_1.Parser {
    static T__0 = 1;
    static T__1 = 2;
    static T__2 = 3;
    static T__3 = 4;
    static T__4 = 5;
    static T__5 = 6;
    static T__6 = 7;
    static T__7 = 8;
    static T__8 = 9;
    static T__9 = 10;
    static T__10 = 11;
    static T__11 = 12;
    static T__12 = 13;
    static T__13 = 14;
    static T__14 = 15;
    static T__15 = 16;
    static T__16 = 17;
    static T__17 = 18;
    static T__18 = 19;
    static T__19 = 20;
    static T__20 = 21;
    static T__21 = 22;
    static T__22 = 23;
    static T__23 = 24;
    static T__24 = 25;
    static T__25 = 26;
    static T__26 = 27;
    static T__27 = 28;
    static T__28 = 29;
    static T__29 = 30;
    static T__30 = 31;
    static T__31 = 32;
    static T__32 = 33;
    static T__33 = 34;
    static T__34 = 35;
    static T__35 = 36;
    static T__36 = 37;
    static COMMENT = 38;
    static MOVE_DEST = 39;
    static MOVE_SOURCE = 40;
    static NUMBER = 41;
    static ID = 42;
    static CARD = 43;
    static STRING = 44;
    static SPACES = 45;
    static NEWLINE = 46;
    static RULE_prog = 0;
    static RULE_stmt = 1;
    static RULE_block = 2;
    static RULE_player = 3;
    static RULE_definition = 4;
    static RULE_move = 5;
    static RULE_source = 6;
    static RULE_destination = 7;
    static RULE_on_action = 8;
    static RULE_on_move = 9;
    static RULE_for = 10;
    static RULE_if = 11;
    static RULE_cancel = 12;
    static RULE_assign = 13;
    static RULE_function_call = 14;
    static RULE_updateTurn = 15;
    static RULE_variable = 16;
    static RULE_args = 17;
    static RULE_arg = 18;
    static RULE_arearef = 19;
    static RULE_area = 20;
    static RULE_stack = 21;
    static RULE_position = 22;
    static RULE_term = 23;
    static RULE_property = 24;
    static RULE_bexpr = 25;
    static RULE_aexpr = 26;
    static RULE_set = 27;
    static RULE_intset = 28;
    static RULE_positionset = 29;
    static RULE_playerset = 30;
    static RULE_move_catch = 31;
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "prog", "stmt", "block", "player", "definition", "move", "source", "destination",
        "on_action", "on_move", "for", "if", "cancel", "assign", "function_call",
        "updateTurn", "variable", "args", "arg", "arearef", "area", "stack", "position",
        "term", "property", "bexpr", "aexpr", "set", "intset", "positionset",
        "playerset", "move_catch",
    ];
    static _LITERAL_NAMES = [
        undefined, "';'", "'<'", "'.'", "'@'", "'>'", "'define'", "'area'", "'action'",
        "'int'", "'card'", "'move'", "'on'", "'{'", "'}'", "'for'", "'in'", "'if'",
        "'else'", "'cancel'", "'='", "'++'", "'('", "','", "')'", "':'", "'['",
        "']'", "'=='", "'!='", "'<<'", "'<='", "'>='", "'>>'", "'=?'", "'!?'",
        "'*'", "'?'", undefined, "'/'", "'\\'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "COMMENT", "MOVE_DEST", "MOVE_SOURCE",
        "NUMBER", "ID", "CARD", "STRING", "SPACES", "NEWLINE",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(dealParser._LITERAL_NAMES, dealParser._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return dealParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "deal.g4"; }
    // @Override
    get ruleNames() { return dealParser.ruleNames; }
    // @Override
    get serializedATN() { return dealParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(dealParser._ATN, this);
    }
    // @RuleVersion(0)
    prog() {
        let _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, dealParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__1) | (1 << dealParser.T__5) | (1 << dealParser.T__10) | (1 << dealParser.T__11) | (1 << dealParser.T__14) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
                    {
                        {
                            this.state = 64;
                            this.stmt();
                        }
                    }
                    this.state = 69;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 70;
                this.match(dealParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stmt() {
        let _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, dealParser.RULE_stmt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 72;
                            this.definition();
                        }
                        break;
                    case 2:
                        {
                            this.state = 73;
                            this.move();
                        }
                        break;
                    case 3:
                        {
                            this.state = 74;
                            this.on_action();
                        }
                        break;
                    case 4:
                        {
                            this.state = 75;
                            this.on_move();
                        }
                        break;
                    case 5:
                        {
                            this.state = 76;
                            this.for();
                        }
                        break;
                    case 6:
                        {
                            this.state = 77;
                            this.if();
                        }
                        break;
                    case 7:
                        {
                            this.state = 78;
                            this.cancel();
                        }
                        break;
                    case 8:
                        {
                            this.state = 79;
                            this.assign();
                        }
                        break;
                    case 9:
                        {
                            this.state = 80;
                            this.function_call();
                        }
                        break;
                    case 10:
                        {
                            this.state = 81;
                            this.updateTurn();
                        }
                        break;
                }
                this.state = 84;
                this.match(dealParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, dealParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__1) | (1 << dealParser.T__5) | (1 << dealParser.T__10) | (1 << dealParser.T__11) | (1 << dealParser.T__14) | (1 << dealParser.T__16) | (1 << dealParser.T__18))) !== 0) || _la === dealParser.ID) {
                    {
                        {
                            this.state = 86;
                            this.stmt();
                        }
                    }
                    this.state = 91;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    player() {
        let _localctx = new PlayerContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, dealParser.RULE_player);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                this.match(dealParser.T__1);
                this.state = 97;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case dealParser.MOVE_DEST:
                        {
                            this.state = 93;
                            this.match(dealParser.MOVE_DEST);
                        }
                        break;
                    case dealParser.T__2:
                        {
                            this.state = 94;
                            this.match(dealParser.T__2);
                        }
                        break;
                    case dealParser.T__3:
                        {
                            this.state = 95;
                            this.match(dealParser.T__3);
                        }
                        break;
                    case dealParser.NUMBER:
                    case dealParser.ID:
                        {
                            this.state = 96;
                            this.aexpr();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 99;
                this.match(dealParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definition() {
        let _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, dealParser.RULE_definition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(dealParser.T__5);
                this.state = 102;
                _localctx._type = this._input.LT(1);
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dealParser.T__6) | (1 << dealParser.T__7) | (1 << dealParser.T__8) | (1 << dealParser.T__9))) !== 0))) {
                    _localctx._type = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 103;
                this.match(dealParser.ID);
                this.state = 105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.T__21) {
                    {
                        this.state = 104;
                        this.args();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    move() {
        let _localctx = new MoveContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, dealParser.RULE_move);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 107;
                this.match(dealParser.T__10);
                this.state = 108;
                this.source();
                this.state = 109;
                this.destination();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    source() {
        let _localctx = new SourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, dealParser.RULE_source);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 111;
                            this.match(dealParser.CARD);
                        }
                        break;
                    case 2:
                        {
                            this.state = 112;
                            this.position();
                        }
                        break;
                    case 3:
                        {
                            this.state = 113;
                            this.positionset();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    destination() {
        let _localctx = new DestinationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, dealParser.RULE_destination);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 116;
                this.position();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    on_action() {
        let _localctx = new On_actionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, dealParser.RULE_on_action);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(dealParser.T__11);
                this.state = 119;
                this.match(dealParser.ID);
                this.state = 120;
                this.match(dealParser.T__12);
                this.state = 121;
                this.block();
                this.state = 122;
                this.match(dealParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    on_move() {
        let _localctx = new On_moveContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, dealParser.RULE_on_move);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(dealParser.T__11);
                this.state = 125;
                this.match(dealParser.T__10);
                this.state = 126;
                this.move_catch();
                this.state = 127;
                this.move_catch();
                this.state = 128;
                this.match(dealParser.T__12);
                this.state = 129;
                this.block();
                this.state = 130;
                this.match(dealParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    for() {
        let _localctx = new ForContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, dealParser.RULE_for);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.match(dealParser.T__14);
                this.state = 133;
                this.match(dealParser.ID);
                this.state = 134;
                this.match(dealParser.T__15);
                this.state = 135;
                this.set();
                this.state = 136;
                this.match(dealParser.T__12);
                this.state = 137;
                this.block();
                this.state = 138;
                this.match(dealParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    if() {
        let _localctx = new IfContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, dealParser.RULE_if);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(dealParser.T__16);
                this.state = 141;
                this.bexpr();
                this.state = 142;
                this.match(dealParser.T__12);
                this.state = 143;
                _localctx._consequent = this.block();
                this.state = 144;
                this.match(dealParser.T__13);
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.T__17) {
                    {
                        this.state = 145;
                        this.match(dealParser.T__17);
                        this.state = 146;
                        this.match(dealParser.T__12);
                        this.state = 147;
                        _localctx._antecedent = this.block();
                        this.state = 148;
                        this.match(dealParser.T__13);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cancel() {
        let _localctx = new CancelContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, dealParser.RULE_cancel);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 152;
                this.match(dealParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assign() {
        let _localctx = new AssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, dealParser.RULE_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.variable();
                this.state = 155;
                this.match(dealParser.T__19);
                this.state = 156;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_call() {
        let _localctx = new Function_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, dealParser.RULE_function_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(dealParser.ID);
                this.state = 159;
                this.args();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    updateTurn() {
        let _localctx = new UpdateTurnContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, dealParser.RULE_updateTurn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(dealParser.T__1);
                this.state = 162;
                this.match(dealParser.T__2);
                this.state = 163;
                this.match(dealParser.T__4);
                this.state = 167;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case dealParser.T__20:
                        {
                            this.state = 164;
                            this.match(dealParser.T__20);
                        }
                        break;
                    case dealParser.T__19:
                        {
                            this.state = 165;
                            this.match(dealParser.T__19);
                            this.state = 166;
                            this.player();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable() {
        let _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, dealParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 169;
                this.match(dealParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    args() {
        let _localctx = new ArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, dealParser.RULE_args);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(dealParser.T__21);
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.ID) {
                    {
                        this.state = 172;
                        this.arg();
                        this.state = 177;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === dealParser.T__22) {
                            {
                                {
                                    this.state = 173;
                                    this.match(dealParser.T__22);
                                    this.state = 174;
                                    this.arg();
                                }
                            }
                            this.state = 179;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 182;
                this.match(dealParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arg() {
        let _localctx = new ArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, dealParser.RULE_arg);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(dealParser.ID);
                this.state = 185;
                this.match(dealParser.T__24);
                this.state = 186;
                _la = this._input.LA(1);
                if (!(_la === dealParser.NUMBER || _la === dealParser.STRING)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arearef() {
        let _localctx = new ArearefContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, dealParser.RULE_arearef);
        try {
            this.state = 190;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case dealParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 188;
                        this.match(dealParser.ID);
                    }
                    break;
                case dealParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 189;
                        this.player();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    area() {
        let _localctx = new AreaContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, dealParser.RULE_area);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.arearef();
                this.state = 193;
                this.match(dealParser.T__25);
                this.state = 194;
                this.match(dealParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stack() {
        let _localctx = new StackContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, dealParser.RULE_stack);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.arearef();
                this.state = 197;
                this.match(dealParser.T__25);
                this.state = 198;
                this.aexpr();
                this.state = 199;
                this.match(dealParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    position() {
        let _localctx = new PositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, dealParser.RULE_position);
        try {
            this.state = 210;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case dealParser.T__1:
                case dealParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.arearef();
                        this.state = 202;
                        this.match(dealParser.T__25);
                        this.state = 203;
                        this.aexpr();
                        this.state = 204;
                        this.match(dealParser.T__22);
                        this.state = 205;
                        this.aexpr();
                        this.state = 206;
                        this.match(dealParser.T__26);
                    }
                    break;
                case dealParser.MOVE_SOURCE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 208;
                        this.match(dealParser.MOVE_SOURCE);
                    }
                    break;
                case dealParser.MOVE_DEST:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 209;
                        this.match(dealParser.MOVE_DEST);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, dealParser.RULE_term);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 212;
                            this.match(dealParser.CARD);
                        }
                        break;
                    case 2:
                        {
                            this.state = 213;
                            this.match(dealParser.STRING);
                        }
                        break;
                    case 3:
                        {
                            this.state = 214;
                            this.aexpr();
                        }
                        break;
                    case 4:
                        {
                            this.state = 215;
                            this.player();
                        }
                        break;
                    case 5:
                        {
                            this.state = 216;
                            this.area();
                        }
                        break;
                    case 6:
                        {
                            this.state = 217;
                            this.stack();
                        }
                        break;
                    case 7:
                        {
                            this.state = 218;
                            this.position();
                        }
                        break;
                }
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.T__2) {
                    {
                        this.state = 221;
                        this.property();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    property() {
        let _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, dealParser.RULE_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(dealParser.T__2);
                this.state = 225;
                this.match(dealParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bexpr() {
        let _localctx = new BexprContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, dealParser.RULE_bexpr);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.term();
                this.state = 232;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case dealParser.T__27:
                    case dealParser.T__28:
                    case dealParser.T__29:
                    case dealParser.T__30:
                    case dealParser.T__31:
                    case dealParser.T__32:
                        {
                            {
                                this.state = 228;
                                _la = this._input.LA(1);
                                if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (dealParser.T__27 - 28)) | (1 << (dealParser.T__28 - 28)) | (1 << (dealParser.T__29 - 28)) | (1 << (dealParser.T__30 - 28)) | (1 << (dealParser.T__31 - 28)) | (1 << (dealParser.T__32 - 28)))) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 229;
                                this.term();
                            }
                        }
                        break;
                    case dealParser.T__33:
                    case dealParser.T__34:
                        {
                            {
                                this.state = 230;
                                _la = this._input.LA(1);
                                if (!(_la === dealParser.T__33 || _la === dealParser.T__34)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 231;
                                this.set();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aexpr() {
        let _localctx = new AexprContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, dealParser.RULE_aexpr);
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case dealParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 234;
                        this.match(dealParser.NUMBER);
                    }
                    break;
                case dealParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 235;
                        this.variable();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    set() {
        let _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, dealParser.RULE_set);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 238;
                            this.intset();
                        }
                        break;
                    case 2:
                        {
                            this.state = 239;
                            this.positionset();
                        }
                        break;
                    case 3:
                        {
                            this.state = 240;
                            this.playerset();
                        }
                        break;
                }
                this.state = 244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.T__2) {
                    {
                        this.state = 243;
                        this.property();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intset() {
        let _localctx = new IntsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, dealParser.RULE_intset);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.aexpr();
                this.state = 247;
                this.match(dealParser.T__24);
                this.state = 249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === dealParser.NUMBER || _la === dealParser.ID) {
                    {
                        this.state = 248;
                        this.aexpr();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    positionset() {
        let _localctx = new PositionsetContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, dealParser.RULE_positionset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.arearef();
                this.state = 252;
                this.match(dealParser.T__25);
                this.state = 253;
                this.intset();
                this.state = 254;
                this.match(dealParser.T__22);
                this.state = 255;
                this.intset();
                this.state = 256;
                this.match(dealParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    playerset() {
        let _localctx = new PlayersetContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, dealParser.RULE_playerset);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(dealParser.T__1);
                this.state = 259;
                this.match(dealParser.T__35);
                this.state = 260;
                this.match(dealParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    move_catch() {
        let _localctx = new Move_catchContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, dealParser.RULE_move_catch);
        try {
            this.state = 265;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 262;
                        this.match(dealParser.T__36);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 263;
                        this.position();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 264;
                        this.positionset();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static _serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\u010E\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x07\x02" +
        "D\n\x02\f\x02\x0E\x02G\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03U\n\x03\x03" +
        "\x03\x03\x03\x03\x04\x07\x04Z\n\x04\f\x04\x0E\x04]\v\x04\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x05\x05d\n\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x05\x06l\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
        "\x03\b\x03\b\x05\bu\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x05\r\x99\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x05\x11\xAA\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
        "\x07\x13\xB2\n\x13\f\x13\x0E\x13\xB5\v\x13\x05\x13\xB7\n\x13\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xC1\n\x15" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x05\x18\xD5\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
        "\x19\x05\x19\xDE\n\x19\x03\x19\x05\x19\xE1\n\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xEB\n\x1B\x03\x1C\x03" +
        "\x1C\x05\x1C\xEF\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xF4\n\x1D\x03\x1D" +
        "\x05\x1D\xF7\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xFC\n\x1E\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!" +
        "\x03!\x03!\x05!\u010C\n!\x03!\x02\x02\x02\"\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
        "6\x028\x02:\x02<\x02>\x02@\x02\x02\x06\x03\x02\t\f\x04\x02++..\x03\x02" +
        "\x1E#\x03\x02$%\x02\u0114\x02E\x03\x02\x02\x02\x04T\x03\x02\x02\x02\x06" +
        "[\x03\x02\x02\x02\b^\x03\x02\x02\x02\ng\x03\x02\x02\x02\fm\x03\x02\x02" +
        "\x02\x0Et\x03\x02\x02\x02\x10v\x03\x02\x02\x02\x12x\x03\x02\x02\x02\x14" +
        "~\x03\x02\x02\x02\x16\x86\x03\x02\x02\x02\x18\x8E\x03\x02\x02\x02\x1A" +
        "\x9A\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\xA0\x03\x02\x02\x02 " +
        "\xA3\x03\x02\x02\x02\"\xAB\x03\x02\x02\x02$\xAD\x03\x02\x02\x02&\xBA\x03" +
        "\x02\x02\x02(\xC0\x03\x02\x02\x02*\xC2\x03\x02\x02\x02,\xC6\x03\x02\x02" +
        "\x02.\xD4\x03\x02\x02\x020\xDD\x03\x02\x02\x022\xE2\x03\x02\x02\x024\xE5" +
        "\x03\x02\x02\x026\xEE\x03\x02\x02\x028\xF3\x03\x02\x02\x02:\xF8\x03\x02" +
        "\x02\x02<\xFD\x03\x02\x02\x02>\u0104\x03\x02\x02\x02@\u010B\x03\x02\x02" +
        "\x02BD\x05\x04\x03\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02" +
        "\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07\x02\x02" +
        "\x03I\x03\x03\x02\x02\x02JU\x05\n\x06\x02KU\x05\f\x07\x02LU\x05\x12\n" +
        "\x02MU\x05\x14\v\x02NU\x05\x16\f\x02OU\x05\x18\r\x02PU\x05\x1A\x0E\x02" +
        "QU\x05\x1C\x0F\x02RU\x05\x1E\x10\x02SU\x05 \x11\x02TJ\x03\x02\x02\x02" +
        "TK\x03\x02\x02\x02TL\x03\x02\x02\x02TM\x03\x02\x02\x02TN\x03\x02\x02\x02" +
        "TO\x03\x02\x02\x02TP\x03\x02\x02\x02TQ\x03\x02\x02\x02TR\x03\x02\x02\x02" +
        "TS\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x07\x03\x02\x02W\x05\x03\x02\x02" +
        "\x02XZ\x05\x04\x03\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02" +
        "\x02[\\\x03\x02\x02\x02\\\x07\x03\x02\x02\x02][\x03\x02\x02\x02^c\x07" +
        "\x04\x02\x02_d\x07)\x02\x02`d\x07\x05\x02\x02ad\x07\x06\x02\x02bd\x05" +
        "6\x1C\x02c_\x03\x02\x02\x02c`\x03\x02\x02\x02ca\x03\x02\x02\x02cb\x03" +
        "\x02\x02\x02de\x03\x02\x02\x02ef\x07\x07\x02\x02f\t\x03\x02\x02\x02gh" +
        "\x07\b\x02\x02hi\t\x02\x02\x02ik\x07,\x02\x02jl\x05$\x13\x02kj\x03\x02" +
        "\x02\x02kl\x03\x02\x02\x02l\v\x03\x02\x02\x02mn\x07\r\x02\x02no\x05\x0E" +
        "\b\x02op\x05\x10\t\x02p\r\x03\x02\x02\x02qu\x07-\x02\x02ru\x05.\x18\x02" +
        "su\x05<\x1F\x02tq\x03\x02\x02\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02" +
        "u\x0F\x03\x02\x02\x02vw\x05.\x18\x02w\x11\x03\x02\x02\x02xy\x07\x0E\x02" +
        "\x02yz\x07,\x02\x02z{\x07\x0F\x02\x02{|\x05\x06\x04\x02|}\x07\x10\x02" +
        "\x02}\x13\x03\x02\x02\x02~\x7F\x07\x0E\x02\x02\x7F\x80\x07\r\x02\x02\x80" +
        "\x81\x05@!\x02\x81\x82\x05@!\x02\x82\x83\x07\x0F\x02\x02\x83\x84\x05\x06" +
        "\x04\x02\x84\x85\x07\x10\x02\x02\x85\x15\x03\x02\x02\x02\x86\x87\x07\x11" +
        "\x02\x02\x87\x88\x07,\x02\x02\x88\x89\x07\x12\x02\x02\x89\x8A\x058\x1D" +
        "\x02\x8A\x8B\x07\x0F\x02\x02\x8B\x8C\x05\x06\x04\x02\x8C\x8D\x07\x10\x02" +
        "\x02\x8D\x17\x03\x02\x02\x02\x8E\x8F\x07\x13\x02\x02\x8F\x90\x054\x1B" +
        "\x02\x90\x91\x07\x0F\x02\x02\x91\x92\x05\x06\x04\x02\x92\x98\x07\x10\x02" +
        "\x02\x93\x94\x07\x14\x02\x02\x94\x95\x07\x0F\x02\x02\x95\x96\x05\x06\x04" +
        "\x02\x96\x97\x07\x10\x02\x02\x97\x99\x03\x02\x02\x02\x98\x93\x03\x02\x02" +
        "\x02\x98\x99\x03\x02\x02\x02\x99\x19\x03\x02\x02\x02\x9A\x9B\x07\x15\x02" +
        "\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\x05\"\x12\x02\x9D\x9E\x07\x16\x02" +
        "\x02\x9E\x9F\x050\x19\x02\x9F\x1D\x03\x02\x02\x02\xA0\xA1\x07,\x02\x02" +
        "\xA1\xA2\x05$\x13\x02\xA2\x1F\x03\x02\x02\x02\xA3\xA4\x07\x04\x02\x02" +
        "\xA4\xA5\x07\x05\x02\x02\xA5\xA9\x07\x07\x02\x02\xA6\xAA\x07\x17\x02\x02" +
        "\xA7\xA8\x07\x16\x02\x02\xA8\xAA\x05\b\x05\x02\xA9\xA6\x03\x02\x02\x02" +
        "\xA9\xA7\x03\x02\x02\x02\xAA!\x03\x02\x02\x02\xAB\xAC\x07,\x02\x02\xAC" +
        "#\x03\x02\x02\x02\xAD\xB6\x07\x18\x02\x02\xAE\xB3\x05&\x14\x02\xAF\xB0" +
        "\x07\x19\x02\x02\xB0\xB2\x05&\x14\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5" +
        "\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7" +
        "\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xAE\x03\x02\x02\x02\xB6\xB7" +
        "\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\x1A\x02\x02\xB9%" +
        "\x03\x02\x02\x02\xBA\xBB\x07,\x02\x02\xBB\xBC\x07\x1B\x02\x02\xBC\xBD" +
        "\t\x03\x02\x02\xBD\'\x03\x02\x02\x02\xBE\xC1\x07,\x02\x02\xBF\xC1\x05" +
        "\b\x05\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1)\x03\x02" +
        "\x02\x02\xC2\xC3\x05(\x15\x02\xC3\xC4\x07\x1C\x02\x02\xC4\xC5\x07\x1D" +
        "\x02\x02\xC5+\x03\x02\x02\x02\xC6\xC7\x05(\x15\x02\xC7\xC8\x07\x1C\x02" +
        "\x02\xC8\xC9\x056\x1C\x02\xC9\xCA\x07\x1D\x02\x02\xCA-\x03\x02\x02\x02" +
        "\xCB\xCC\x05(\x15\x02\xCC\xCD\x07\x1C\x02\x02\xCD\xCE\x056\x1C\x02\xCE" +
        "\xCF\x07\x19\x02\x02\xCF\xD0\x056\x1C\x02\xD0\xD1\x07\x1D\x02\x02\xD1" +
        "\xD5\x03\x02\x02\x02\xD2\xD5\x07*\x02\x02\xD3\xD5\x07)\x02\x02\xD4\xCB" +
        "\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5/" +
        "\x03\x02\x02\x02\xD6\xDE\x07-\x02\x02\xD7\xDE\x07.\x02\x02\xD8\xDE\x05" +
        "6\x1C\x02\xD9\xDE\x05\b\x05\x02\xDA\xDE\x05*\x16\x02\xDB\xDE\x05,\x17" +
        "\x02\xDC\xDE\x05.\x18\x02\xDD\xD6\x03\x02\x02\x02\xDD\xD7\x03\x02\x02" +
        "\x02\xDD\xD8\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDD\xDA\x03\x02\x02" +
        "\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE0\x03\x02\x02" +
        "\x02\xDF\xE1\x052\x1A\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
        "\x02\xE11\x03\x02\x02\x02\xE2\xE3\x07\x05\x02\x02\xE3\xE4\x07,\x02\x02" +
        "\xE43\x03\x02\x02\x02\xE5\xEA\x050\x19\x02\xE6\xE7\t\x04\x02\x02\xE7\xEB" +
        "\x050\x19\x02\xE8\xE9\t\x05\x02\x02\xE9\xEB\x058\x1D\x02\xEA\xE6\x03\x02" +
        "\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB5\x03\x02\x02\x02\xEC\xEF\x07+\x02" +
        "\x02\xED\xEF\x05\"\x12\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02\x02" +
        "\x02\xEF7\x03\x02\x02\x02\xF0\xF4\x05:\x1E\x02\xF1\xF4\x05<\x1F\x02\xF2" +
        "\xF4\x05> \x02\xF3\xF0\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF2" +
        "\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF7\x052\x1A\x02\xF6\xF5" +
        "\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF79\x03\x02\x02\x02\xF8\xF9" +
        "\x056\x1C\x02\xF9\xFB\x07\x1B\x02\x02\xFA\xFC\x056\x1C\x02\xFB\xFA\x03" +
        "\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC;\x03\x02\x02\x02\xFD\xFE\x05" +
        "(\x15\x02\xFE\xFF\x07\x1C\x02\x02\xFF\u0100\x05:\x1E\x02\u0100\u0101\x07" +
        "\x19\x02\x02\u0101\u0102\x05:\x1E\x02\u0102\u0103\x07\x1D\x02\x02\u0103" +
        "=\x03\x02\x02\x02\u0104\u0105\x07\x04\x02\x02\u0105\u0106\x07&\x02\x02" +
        "\u0106\u0107\x07\x07\x02\x02\u0107?\x03\x02\x02\x02\u0108\u010C\x07\'" +
        "\x02\x02\u0109\u010C\x05.\x18\x02\u010A\u010C\x05<\x1F\x02\u010B\u0108" +
        "\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02" +
        "\u010CA\x03\x02\x02\x02\x16ET[ckt\x98\xA9\xB3\xB6\xC0\xD4\xDD\xE0\xEA" +
        "\xEE\xF3\xF6\xFB\u010B";
    static __ATN;
    static get _ATN() {
        if (!dealParser.__ATN) {
            dealParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(dealParser._serializedATN));
        }
        return dealParser.__ATN;
    }
}
exports.dealParser = dealParser;
class ProgContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(dealParser.EOF, 0); }
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_prog; }
    // @Override
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class StmtContext extends ParserRuleContext_1.ParserRuleContext {
    definition() {
        return this.tryGetRuleContext(0, DefinitionContext);
    }
    move() {
        return this.tryGetRuleContext(0, MoveContext);
    }
    on_action() {
        return this.tryGetRuleContext(0, On_actionContext);
    }
    on_move() {
        return this.tryGetRuleContext(0, On_moveContext);
    }
    for() {
        return this.tryGetRuleContext(0, ForContext);
    }
    if() {
        return this.tryGetRuleContext(0, IfContext);
    }
    cancel() {
        return this.tryGetRuleContext(0, CancelContext);
    }
    assign() {
        return this.tryGetRuleContext(0, AssignContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    updateTurn() {
        return this.tryGetRuleContext(0, UpdateTurnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_stmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StmtContext = StmtContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class PlayerContext extends ParserRuleContext_1.ParserRuleContext {
    MOVE_DEST() { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
    aexpr() {
        return this.tryGetRuleContext(0, AexprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_player; }
    // @Override
    enterRule(listener) {
        if (listener.enterPlayer) {
            listener.enterPlayer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPlayer) {
            listener.exitPlayer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPlayer) {
            return visitor.visitPlayer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PlayerContext = PlayerContext;
class DefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    _type;
    ID() { return this.getToken(dealParser.ID, 0); }
    args() {
        return this.tryGetRuleContext(0, ArgsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_definition; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefinition) {
            listener.enterDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefinition) {
            listener.exitDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinitionContext = DefinitionContext;
class MoveContext extends ParserRuleContext_1.ParserRuleContext {
    source() {
        return this.getRuleContext(0, SourceContext);
    }
    destination() {
        return this.getRuleContext(0, DestinationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_move; }
    // @Override
    enterRule(listener) {
        if (listener.enterMove) {
            listener.enterMove(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMove) {
            listener.exitMove(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMove) {
            return visitor.visitMove(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MoveContext = MoveContext;
class SourceContext extends ParserRuleContext_1.ParserRuleContext {
    CARD() { return this.tryGetToken(dealParser.CARD, 0); }
    position() {
        return this.tryGetRuleContext(0, PositionContext);
    }
    positionset() {
        return this.tryGetRuleContext(0, PositionsetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_source; }
    // @Override
    enterRule(listener) {
        if (listener.enterSource) {
            listener.enterSource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSource) {
            listener.exitSource(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSource) {
            return visitor.visitSource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceContext = SourceContext;
class DestinationContext extends ParserRuleContext_1.ParserRuleContext {
    position() {
        return this.getRuleContext(0, PositionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_destination; }
    // @Override
    enterRule(listener) {
        if (listener.enterDestination) {
            listener.enterDestination(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDestination) {
            listener.exitDestination(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDestination) {
            return visitor.visitDestination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DestinationContext = DestinationContext;
class On_actionContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_on_action; }
    // @Override
    enterRule(listener) {
        if (listener.enterOn_action) {
            listener.enterOn_action(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOn_action) {
            listener.exitOn_action(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOn_action) {
            return visitor.visitOn_action(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.On_actionContext = On_actionContext;
class On_moveContext extends ParserRuleContext_1.ParserRuleContext {
    move_catch(i) {
        if (i === undefined) {
            return this.getRuleContexts(Move_catchContext);
        }
        else {
            return this.getRuleContext(i, Move_catchContext);
        }
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_on_move; }
    // @Override
    enterRule(listener) {
        if (listener.enterOn_move) {
            listener.enterOn_move(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOn_move) {
            listener.exitOn_move(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOn_move) {
            return visitor.visitOn_move(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.On_moveContext = On_moveContext;
class ForContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    set() {
        return this.getRuleContext(0, SetContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_for; }
    // @Override
    enterRule(listener) {
        if (listener.enterFor) {
            listener.enterFor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFor) {
            listener.exitFor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFor) {
            return visitor.visitFor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForContext = ForContext;
class IfContext extends ParserRuleContext_1.ParserRuleContext {
    _consequent;
    _antecedent;
    bexpr() {
        return this.getRuleContext(0, BexprContext);
    }
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_if; }
    // @Override
    enterRule(listener) {
        if (listener.enterIf) {
            listener.enterIf(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIf) {
            listener.exitIf(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfContext = IfContext;
class CancelContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_cancel; }
    // @Override
    enterRule(listener) {
        if (listener.enterCancel) {
            listener.enterCancel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCancel) {
            listener.exitCancel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCancel) {
            return visitor.visitCancel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CancelContext = CancelContext;
class AssignContext extends ParserRuleContext_1.ParserRuleContext {
    variable() {
        return this.getRuleContext(0, VariableContext);
    }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_assign; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignContext = AssignContext;
class Function_callContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    args() {
        return this.getRuleContext(0, ArgsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_function_call; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_call) {
            listener.enterFunction_call(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_call) {
            listener.exitFunction_call(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction_call) {
            return visitor.visitFunction_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Function_callContext = Function_callContext;
class UpdateTurnContext extends ParserRuleContext_1.ParserRuleContext {
    player() {
        return this.tryGetRuleContext(0, PlayerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_updateTurn; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpdateTurn) {
            listener.enterUpdateTurn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpdateTurn) {
            listener.exitUpdateTurn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpdateTurn) {
            return visitor.visitUpdateTurn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UpdateTurnContext = UpdateTurnContext;
class VariableContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableContext = VariableContext;
class ArgsContext extends ParserRuleContext_1.ParserRuleContext {
    arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }
        else {
            return this.getRuleContext(i, ArgContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_args; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgs) {
            listener.enterArgs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgs) {
            listener.exitArgs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgs) {
            return visitor.visitArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgsContext = ArgsContext;
class ArgContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    STRING() { return this.tryGetToken(dealParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(dealParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_arg; }
    // @Override
    enterRule(listener) {
        if (listener.enterArg) {
            listener.enterArg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArg) {
            listener.exitArg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArg) {
            return visitor.visitArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgContext = ArgContext;
class ArearefContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.tryGetToken(dealParser.ID, 0); }
    player() {
        return this.tryGetRuleContext(0, PlayerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_arearef; }
    // @Override
    enterRule(listener) {
        if (listener.enterArearef) {
            listener.enterArearef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArearef) {
            listener.exitArearef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArearef) {
            return visitor.visitArearef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArearefContext = ArearefContext;
class AreaContext extends ParserRuleContext_1.ParserRuleContext {
    arearef() {
        return this.getRuleContext(0, ArearefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_area; }
    // @Override
    enterRule(listener) {
        if (listener.enterArea) {
            listener.enterArea(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArea) {
            listener.exitArea(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArea) {
            return visitor.visitArea(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AreaContext = AreaContext;
class StackContext extends ParserRuleContext_1.ParserRuleContext {
    arearef() {
        return this.getRuleContext(0, ArearefContext);
    }
    aexpr() {
        return this.getRuleContext(0, AexprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_stack; }
    // @Override
    enterRule(listener) {
        if (listener.enterStack) {
            listener.enterStack(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStack) {
            listener.exitStack(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStack) {
            return visitor.visitStack(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StackContext = StackContext;
class PositionContext extends ParserRuleContext_1.ParserRuleContext {
    arearef() {
        return this.tryGetRuleContext(0, ArearefContext);
    }
    aexpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AexprContext);
        }
        else {
            return this.getRuleContext(i, AexprContext);
        }
    }
    MOVE_SOURCE() { return this.tryGetToken(dealParser.MOVE_SOURCE, 0); }
    MOVE_DEST() { return this.tryGetToken(dealParser.MOVE_DEST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_position; }
    // @Override
    enterRule(listener) {
        if (listener.enterPosition) {
            listener.enterPosition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPosition) {
            listener.exitPosition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PositionContext = PositionContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    CARD() { return this.tryGetToken(dealParser.CARD, 0); }
    STRING() { return this.tryGetToken(dealParser.STRING, 0); }
    aexpr() {
        return this.tryGetRuleContext(0, AexprContext);
    }
    player() {
        return this.tryGetRuleContext(0, PlayerContext);
    }
    area() {
        return this.tryGetRuleContext(0, AreaContext);
    }
    stack() {
        return this.tryGetRuleContext(0, StackContext);
    }
    position() {
        return this.tryGetRuleContext(0, PositionContext);
    }
    property() {
        return this.tryGetRuleContext(0, PropertyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermContext = TermContext;
class PropertyContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(dealParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyContext = PropertyContext;
class BexprContext extends ParserRuleContext_1.ParserRuleContext {
    term(i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    }
    set() {
        return this.tryGetRuleContext(0, SetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_bexpr; }
    // @Override
    enterRule(listener) {
        if (listener.enterBexpr) {
            listener.enterBexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBexpr) {
            listener.exitBexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBexpr) {
            return visitor.visitBexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BexprContext = BexprContext;
class AexprContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.tryGetToken(dealParser.NUMBER, 0); }
    variable() {
        return this.tryGetRuleContext(0, VariableContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_aexpr; }
    // @Override
    enterRule(listener) {
        if (listener.enterAexpr) {
            listener.enterAexpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAexpr) {
            listener.exitAexpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAexpr) {
            return visitor.visitAexpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AexprContext = AexprContext;
class SetContext extends ParserRuleContext_1.ParserRuleContext {
    intset() {
        return this.tryGetRuleContext(0, IntsetContext);
    }
    positionset() {
        return this.tryGetRuleContext(0, PositionsetContext);
    }
    playerset() {
        return this.tryGetRuleContext(0, PlayersetContext);
    }
    property() {
        return this.tryGetRuleContext(0, PropertyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_set; }
    // @Override
    enterRule(listener) {
        if (listener.enterSet) {
            listener.enterSet(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSet) {
            listener.exitSet(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetContext = SetContext;
class IntsetContext extends ParserRuleContext_1.ParserRuleContext {
    aexpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AexprContext);
        }
        else {
            return this.getRuleContext(i, AexprContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_intset; }
    // @Override
    enterRule(listener) {
        if (listener.enterIntset) {
            listener.enterIntset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntset) {
            listener.exitIntset(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntset) {
            return visitor.visitIntset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntsetContext = IntsetContext;
class PositionsetContext extends ParserRuleContext_1.ParserRuleContext {
    arearef() {
        return this.getRuleContext(0, ArearefContext);
    }
    intset(i) {
        if (i === undefined) {
            return this.getRuleContexts(IntsetContext);
        }
        else {
            return this.getRuleContext(i, IntsetContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_positionset; }
    // @Override
    enterRule(listener) {
        if (listener.enterPositionset) {
            listener.enterPositionset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPositionset) {
            listener.exitPositionset(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPositionset) {
            return visitor.visitPositionset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PositionsetContext = PositionsetContext;
class PlayersetContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_playerset; }
    // @Override
    enterRule(listener) {
        if (listener.enterPlayerset) {
            listener.enterPlayerset(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPlayerset) {
            listener.exitPlayerset(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPlayerset) {
            return visitor.visitPlayerset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PlayersetContext = PlayersetContext;
class Move_catchContext extends ParserRuleContext_1.ParserRuleContext {
    position() {
        return this.tryGetRuleContext(0, PositionContext);
    }
    positionset() {
        return this.tryGetRuleContext(0, PositionsetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return dealParser.RULE_move_catch; }
    // @Override
    enterRule(listener) {
        if (listener.enterMove_catch) {
            listener.enterMove_catch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMove_catch) {
            listener.exitMove_catch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMove_catch) {
            return visitor.visitMove_catch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Move_catchContext = Move_catchContext;
//# sourceMappingURL=dealParser.js.map