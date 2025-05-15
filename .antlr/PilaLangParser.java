// Generated from c:/Users/Usuario/Downloads/pila-analizador/PilaLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PilaLangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, ID=14, NUMERO=15, TEXTO=16, WS=17;
	public static final int
		RULE_programa = 0, RULE_comando = 1, RULE_crear = 2, RULE_empujar = 3, 
		RULE_sacar = 4, RULE_mirar = 5, RULE_lista = 6, RULE_valor = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "comando", "crear", "empujar", "sacar", "mirar", "lista", 
			"valor"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'pila'", "'{'", "'}'", "'crear'", "'('", "')'", "'!'", "'empujar'", 
			"'sacar'", "'mirar'", "'['", "','", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "ID", "NUMERO", "TEXTO", "WS"
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
	public String getGrammarFileName() { return "PilaLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PilaLangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(PilaLangParser.ID, 0); }
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			match(T__0);
			setState(17);
			match(ID);
			setState(18);
			match(T__1);
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1808L) != 0)) {
				{
				{
				setState(19);
				comando();
				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(25);
			match(T__2);
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
	public static class ComandoContext extends ParserRuleContext {
		public CrearContext crear() {
			return getRuleContext(CrearContext.class,0);
		}
		public EmpujarContext empujar() {
			return getRuleContext(EmpujarContext.class,0);
		}
		public SacarContext sacar() {
			return getRuleContext(SacarContext.class,0);
		}
		public MirarContext mirar() {
			return getRuleContext(MirarContext.class,0);
		}
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterComando(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitComando(this);
		}
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_comando);
		try {
			setState(31);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				crear();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				empujar();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(29);
				sacar();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 4);
				{
				setState(30);
				mirar();
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
	public static class CrearContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public CrearContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_crear; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterCrear(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitCrear(this);
		}
	}

	public final CrearContext crear() throws RecognitionException {
		CrearContext _localctx = new CrearContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_crear);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(T__3);
			setState(34);
			match(T__4);
			setState(35);
			lista();
			setState(36);
			match(T__5);
			setState(37);
			match(T__6);
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
	public static class EmpujarContext extends ParserRuleContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public EmpujarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_empujar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterEmpujar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitEmpujar(this);
		}
	}

	public final EmpujarContext empujar() throws RecognitionException {
		EmpujarContext _localctx = new EmpujarContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_empujar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(T__7);
			setState(40);
			match(T__4);
			setState(41);
			valor();
			setState(42);
			match(T__5);
			setState(43);
			match(T__6);
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
	public static class SacarContext extends ParserRuleContext {
		public SacarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sacar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterSacar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitSacar(this);
		}
	}

	public final SacarContext sacar() throws RecognitionException {
		SacarContext _localctx = new SacarContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sacar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(T__8);
			setState(46);
			match(T__4);
			setState(47);
			match(T__5);
			setState(48);
			match(T__6);
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
	public static class MirarContext extends ParserRuleContext {
		public MirarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mirar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterMirar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitMirar(this);
		}
	}

	public final MirarContext mirar() throws RecognitionException {
		MirarContext _localctx = new MirarContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_mirar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(T__9);
			setState(51);
			match(T__4);
			setState(52);
			match(T__5);
			setState(53);
			match(T__6);
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
	public static class ListaContext extends ParserRuleContext {
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public ListaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterLista(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitLista(this);
		}
	}

	public final ListaContext lista() throws RecognitionException {
		ListaContext _localctx = new ListaContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_lista);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(T__10);
			setState(56);
			valor();
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__11) {
				{
				{
				setState(57);
				match(T__11);
				setState(58);
				valor();
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(64);
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
	public static class ValorContext extends ParserRuleContext {
		public TerminalNode NUMERO() { return getToken(PilaLangParser.NUMERO, 0); }
		public TerminalNode TEXTO() { return getToken(PilaLangParser.TEXTO, 0); }
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof PilaLangListener ) ((PilaLangListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_valor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			_la = _input.LA(1);
			if ( !(_la==NUMERO || _la==TEXTO) ) {
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

	public static final String _serializedATN =
		"\u0004\u0001\u0011E\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0015\b\u0000\n"+
		"\u0000\f\u0000\u0018\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001 \b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006<\b\u0006\n\u0006\f\u0006?\t\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0000\u0001\u0001\u0000\u000f\u0010A\u0000\u0010\u0001"+
		"\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u0004!\u0001\u0000"+
		"\u0000\u0000\u0006\'\u0001\u0000\u0000\u0000\b-\u0001\u0000\u0000\u0000"+
		"\n2\u0001\u0000\u0000\u0000\f7\u0001\u0000\u0000\u0000\u000eB\u0001\u0000"+
		"\u0000\u0000\u0010\u0011\u0005\u0001\u0000\u0000\u0011\u0012\u0005\u000e"+
		"\u0000\u0000\u0012\u0016\u0005\u0002\u0000\u0000\u0013\u0015\u0003\u0002"+
		"\u0001\u0000\u0014\u0013\u0001\u0000\u0000\u0000\u0015\u0018\u0001\u0000"+
		"\u0000\u0000\u0016\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000"+
		"\u0000\u0000\u0017\u0019\u0001\u0000\u0000\u0000\u0018\u0016\u0001\u0000"+
		"\u0000\u0000\u0019\u001a\u0005\u0003\u0000\u0000\u001a\u0001\u0001\u0000"+
		"\u0000\u0000\u001b \u0003\u0004\u0002\u0000\u001c \u0003\u0006\u0003\u0000"+
		"\u001d \u0003\b\u0004\u0000\u001e \u0003\n\u0005\u0000\u001f\u001b\u0001"+
		"\u0000\u0000\u0000\u001f\u001c\u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000 \u0003\u0001\u0000"+
		"\u0000\u0000!\"\u0005\u0004\u0000\u0000\"#\u0005\u0005\u0000\u0000#$\u0003"+
		"\f\u0006\u0000$%\u0005\u0006\u0000\u0000%&\u0005\u0007\u0000\u0000&\u0005"+
		"\u0001\u0000\u0000\u0000\'(\u0005\b\u0000\u0000()\u0005\u0005\u0000\u0000"+
		")*\u0003\u000e\u0007\u0000*+\u0005\u0006\u0000\u0000+,\u0005\u0007\u0000"+
		"\u0000,\u0007\u0001\u0000\u0000\u0000-.\u0005\t\u0000\u0000./\u0005\u0005"+
		"\u0000\u0000/0\u0005\u0006\u0000\u000001\u0005\u0007\u0000\u00001\t\u0001"+
		"\u0000\u0000\u000023\u0005\n\u0000\u000034\u0005\u0005\u0000\u000045\u0005"+
		"\u0006\u0000\u000056\u0005\u0007\u0000\u00006\u000b\u0001\u0000\u0000"+
		"\u000078\u0005\u000b\u0000\u00008=\u0003\u000e\u0007\u00009:\u0005\f\u0000"+
		"\u0000:<\u0003\u000e\u0007\u0000;9\u0001\u0000\u0000\u0000<?\u0001\u0000"+
		"\u0000\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>@\u0001"+
		"\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000@A\u0005\r\u0000\u0000A\r"+
		"\u0001\u0000\u0000\u0000BC\u0007\u0000\u0000\u0000C\u000f\u0001\u0000"+
		"\u0000\u0000\u0003\u0016\u001f=";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}