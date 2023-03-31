const precoCombustivel = 5.79;
const mediaConsumo = 10;
const distanciaViagem = 100;
let resultado = 0;

resultado = (distanciaViagem/mediaConsumo) * precoCombustivel;
console.log(resultado.toFixed(2));
/* 
A sufixo .toFixed() retorna uma string representando uma numero em uma notação de pontos fixos
Ou seja, é usado para converter e arredondar numeros decimais.
Nesse caso é fixado em 2 então o programa irá apresendar apenas duas casas decimais.
*/
