# Analizador Sintáctico para PilaLang

Este proyecto es un analizador sintáctico para un lenguaje de pilas llamado **PilaLang**, implementado con ANTLR4 y JavaScript (Node.js). 

---

## Descripción

El lenguaje PilaLang permite definir y manipular pilas con operaciones básicas como:

- Crear una pila con valores iniciales
- Empujar elementos
- Sacar elementos
- Mirar el elemento tope

El analizador realiza:

- Análisis léxico y sintáctico del código fuente
- Detección y reporte de errores léxicos y sintácticos
- Generación de una tabla de tokens
- Construcción y visualización del árbol sintáctico
- Traducción del código fuente PilaLang a JavaScript para su interpretación

---

## Estructura del proyecto

- `index.js` : Script principal para ejecutar el analizador
- `PilaLang.g4` : Gramática ANTLR4 para PilaLang
- `PilaLangLexer.js` y `PilaLangParser.js` : Archivos generados por ANTLR4
- `PilaLangVisitorImpl.js` : Visitor personalizado para traducir e interpretar el lenguaje
- Archivos de entrada (ejemplos):
  - `inputvalidouno.txt` y `inputvalidodos.txt` (códigos válidos)
  - `inputinvalidouno.txt` y `inputinvalidodos.txt` (códigos con errores)

---

## Requisitos

- Node.js (versión 14 o superior recomendada)
- ANTLR4 (para regenerar lexer y parser si fuera necesario)

---

## Uso

1. Instalar dependencias (si usás alguna, como antlr4 npm package):

```bash
npm install antlr4
