grammar PilaLang;

programa: 'pila' ID '{' comando* '}';

comando: crear | empujar | sacar | mirar;

crear: 'crear' '(' lista ')' '!';

empujar: 'empujar' '(' valor ')' '!';

sacar: 'sacar' '(' ')' '!';

mirar: 'mirar' '(' ')' '!';

lista: '[' valor (',' valor)* ']';

valor: NUMERO | TEXTO;

ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUMERO: [0-9]+;
TEXTO : '"' (~["\r\n])* '"' ;

WS: [ \t\r\n]+ -> skip;
