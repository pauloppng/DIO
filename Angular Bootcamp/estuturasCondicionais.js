const numero = 10;

const isnumeroPar = numero % 2 === 0;

console.log(isnumeroPar)

/*
Uma condição sempre retorna um boolian, por essa razão o console.log está retornando "True".

A diferença entre =, == e === é:
= Diz respeito a atribuição de valor;
== Compara apenas o valor e não o tipo do valor;
=== Conhecido como igualdade estrita, compara não apenas o valor mas o tipo do valor também.

O uso do === é o mais indicado para evitar erros relacionados a conversão indevida de tipo.

Boas praticas: Uso do préfixo "is" em variaveis boobleanas, por se tratarem de estados de ser ou não ser o préfixo "is"
si aplica perfeitamente nessas práticas.
*/