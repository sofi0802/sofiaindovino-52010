import antlr4 from 'antlr4';
import fs from 'fs';
import PilaLangLexer from './PilaLangLexer.js';
import PilaLangParser from './PilaLangParser.js';
import PilaLangVisitorImpl from './PilaLangVisitorImpl.js';

// Leer el nombre del archivo desde la línea de comandos
const inputFile = process.argv[2] || 'inputvalidouno.txt'; // usa este por defecto si no se pasa otro

// Verificar que el archivo existe
if (!fs.existsSync(inputFile)) {
    console.error(`❌ Archivo no encontrado: ${inputFile}`);
    process.exit(1);
}

const input = fs.readFileSync(inputFile, 'utf-8');

// Crear lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new PilaLangLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PilaLangParser(tokens);

// Listener para capturar errores sintácticos
const errorListener = {
  syntaxErrors: [],
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    this.syntaxErrors.push({ line, column, msg });
  }
};

parser.removeErrorListeners(); // quitar listeners por defecto
parser.addErrorListener(errorListener);

tokens.fill(); // llena los tokens antes de imprimir

// --- Tabla de tokens ---
console.log('--- Tabla de Tokens ---');
tokens.tokens.forEach(token => {
  const typeIndex = token.type;
  let typeName = 'UNKNOWN';

  if (lexer.symbolicNames && lexer.symbolicNames[typeIndex]) {
    typeName = lexer.symbolicNames[typeIndex];
  } else if (typeIndex === -1) {
    typeName = 'EOF';
  }

  if (typeIndex !== -1) {  // Ignorar EOF
    console.log(`Token: '${token.text}' - Tipo: ${typeName} - Línea: ${token.line}`);
  }
});

// Parsear solo una vez
const tree = parser.programa();

console.log('\n--- Árbol de Análisis Sintáctico ---');
console.log(tree.toStringTree(parser.ruleNames));

// Manejar errores
if (errorListener.syntaxErrors.length > 0) {
  console.error("\n❌ Errores de sintaxis detectados:");
  errorListener.syntaxErrors.forEach(e => {
    console.error(`  Línea ${e.line}, Columna ${e.column}: ${e.msg}`);
  });
} else {
  // No hay errores, visitar y traducir
  console.log('\n--- Traducción a JavaScript ---');
  try {
      const visitor = new PilaLangVisitorImpl();
      visitor.visit(tree);
  } catch (error) {
      console.error(`\n❌ Error durante la interpretación:\n${error.message}`);
  }
}
