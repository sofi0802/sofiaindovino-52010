// Generated from PilaLang.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaLangListener from './PilaLangListener.js';
import PilaLangVisitor from './PilaLangVisitor.js';

const serializedATN = [4,1,17,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,5,0,21,8,0,10,0,12,0,24,9,0,1,0,
1,0,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,60,8,6,
10,6,12,6,63,9,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,15,
16,65,0,16,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,39,1,0,0,0,8,45,1,0,0,0,10,
50,1,0,0,0,12,55,1,0,0,0,14,66,1,0,0,0,16,17,5,1,0,0,17,18,5,14,0,0,18,22,
5,2,0,0,19,21,3,2,1,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,
0,0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,26,5,3,0,0,26,1,1,0,0,0,27,32,3,4,2,
0,28,32,3,6,3,0,29,32,3,8,4,0,30,32,3,10,5,0,31,27,1,0,0,0,31,28,1,0,0,0,
31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,4,0,0,34,35,5,5,0,0,35,
36,3,12,6,0,36,37,5,6,0,0,37,38,5,7,0,0,38,5,1,0,0,0,39,40,5,8,0,0,40,41,
5,5,0,0,41,42,3,14,7,0,42,43,5,6,0,0,43,44,5,7,0,0,44,7,1,0,0,0,45,46,5,
9,0,0,46,47,5,5,0,0,47,48,5,6,0,0,48,49,5,7,0,0,49,9,1,0,0,0,50,51,5,10,
0,0,51,52,5,5,0,0,52,53,5,6,0,0,53,54,5,7,0,0,54,11,1,0,0,0,55,56,5,11,0,
0,56,61,3,14,7,0,57,58,5,12,0,0,58,60,3,14,7,0,59,57,1,0,0,0,60,63,1,0,0,
0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,5,13,0,0,
65,13,1,0,0,0,66,67,7,0,0,0,67,15,1,0,0,0,3,22,31,61];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaLangParser extends antlr4.Parser {

    static grammarFileName = "PilaLang.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'empujar'", "'sacar'", "'mirar'", 
                            "'['", "','", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "ID", "NUMERO", 
                             "TEXTO", "WS" ];
    static ruleNames = [ "programa", "comando", "crear", "empujar", "sacar", 
                         "mirar", "lista", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaLangParser.ruleNames;
        this.literalNames = PilaLangParser.literalNames;
        this.symbolicNames = PilaLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaLangParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(PilaLangParser.T__0);
	        this.state = 17;
	        this.match(PilaLangParser.ID);
	        this.state = 18;
	        this.match(PilaLangParser.T__1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1808) !== 0)) {
	            this.state = 19;
	            this.comando();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(PilaLangParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaLangParser.RULE_comando);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.crear();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.empujar();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.sacar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.mirar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaLangParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(PilaLangParser.T__3);
	        this.state = 34;
	        this.match(PilaLangParser.T__4);
	        this.state = 35;
	        this.lista();
	        this.state = 36;
	        this.match(PilaLangParser.T__5);
	        this.state = 37;
	        this.match(PilaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	empujar() {
	    let localctx = new EmpujarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PilaLangParser.RULE_empujar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(PilaLangParser.T__7);
	        this.state = 40;
	        this.match(PilaLangParser.T__4);
	        this.state = 41;
	        this.valor();
	        this.state = 42;
	        this.match(PilaLangParser.T__5);
	        this.state = 43;
	        this.match(PilaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sacar() {
	    let localctx = new SacarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaLangParser.RULE_sacar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(PilaLangParser.T__8);
	        this.state = 46;
	        this.match(PilaLangParser.T__4);
	        this.state = 47;
	        this.match(PilaLangParser.T__5);
	        this.state = 48;
	        this.match(PilaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mirar() {
	    let localctx = new MirarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaLangParser.RULE_mirar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(PilaLangParser.T__9);
	        this.state = 51;
	        this.match(PilaLangParser.T__4);
	        this.state = 52;
	        this.match(PilaLangParser.T__5);
	        this.state = 53;
	        this.match(PilaLangParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaLangParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(PilaLangParser.T__10);
	        this.state = 56;
	        this.valor();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 57;
	            this.match(PilaLangParser.T__11);
	            this.state = 58;
	            this.valor();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(PilaLangParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaLangParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PilaLangParser.EOF = antlr4.Token.EOF;
PilaLangParser.T__0 = 1;
PilaLangParser.T__1 = 2;
PilaLangParser.T__2 = 3;
PilaLangParser.T__3 = 4;
PilaLangParser.T__4 = 5;
PilaLangParser.T__5 = 6;
PilaLangParser.T__6 = 7;
PilaLangParser.T__7 = 8;
PilaLangParser.T__8 = 9;
PilaLangParser.T__9 = 10;
PilaLangParser.T__10 = 11;
PilaLangParser.T__11 = 12;
PilaLangParser.T__12 = 13;
PilaLangParser.ID = 14;
PilaLangParser.NUMERO = 15;
PilaLangParser.TEXTO = 16;
PilaLangParser.WS = 17;

PilaLangParser.RULE_programa = 0;
PilaLangParser.RULE_comando = 1;
PilaLangParser.RULE_crear = 2;
PilaLangParser.RULE_empujar = 3;
PilaLangParser.RULE_sacar = 4;
PilaLangParser.RULE_mirar = 5;
PilaLangParser.RULE_lista = 6;
PilaLangParser.RULE_valor = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_programa;
    }

	ID() {
	    return this.getToken(PilaLangParser.ID, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_comando;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	empujar() {
	    return this.getTypedRuleContext(EmpujarContext,0);
	};

	sacar() {
	    return this.getTypedRuleContext(SacarContext,0);
	};

	mirar() {
	    return this.getTypedRuleContext(MirarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmpujarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_empujar;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterEmpujar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitEmpujar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitEmpujar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SacarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_sacar;
    }


	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterSacar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitSacar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitSacar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MirarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_mirar;
    }


	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterMirar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitMirar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitMirar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaLangParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(PilaLangParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(PilaLangParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaLangListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaLangVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PilaLangParser.ProgramaContext = ProgramaContext; 
PilaLangParser.ComandoContext = ComandoContext; 
PilaLangParser.CrearContext = CrearContext; 
PilaLangParser.EmpujarContext = EmpujarContext; 
PilaLangParser.SacarContext = SacarContext; 
PilaLangParser.MirarContext = MirarContext; 
PilaLangParser.ListaContext = ListaContext; 
PilaLangParser.ValorContext = ValorContext; 
