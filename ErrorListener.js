import antlr4 from 'antlr4';

export class CustomErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.error(`\n🛑 Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
  }
}