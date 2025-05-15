// Generated from c:/Users/Usuario/Downloads/pila-analizador/PilaLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PilaLangParser}.
 */
public interface PilaLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(PilaLangParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(PilaLangParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(PilaLangParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(PilaLangParser.ComandoContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#crear}.
	 * @param ctx the parse tree
	 */
	void enterCrear(PilaLangParser.CrearContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#crear}.
	 * @param ctx the parse tree
	 */
	void exitCrear(PilaLangParser.CrearContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#empujar}.
	 * @param ctx the parse tree
	 */
	void enterEmpujar(PilaLangParser.EmpujarContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#empujar}.
	 * @param ctx the parse tree
	 */
	void exitEmpujar(PilaLangParser.EmpujarContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#sacar}.
	 * @param ctx the parse tree
	 */
	void enterSacar(PilaLangParser.SacarContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#sacar}.
	 * @param ctx the parse tree
	 */
	void exitSacar(PilaLangParser.SacarContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#mirar}.
	 * @param ctx the parse tree
	 */
	void enterMirar(PilaLangParser.MirarContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#mirar}.
	 * @param ctx the parse tree
	 */
	void exitMirar(PilaLangParser.MirarContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(PilaLangParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(PilaLangParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(PilaLangParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(PilaLangParser.ValorContext ctx);
}