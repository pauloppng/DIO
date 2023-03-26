const precoGasolina = 5.79;
const precoEtanol = 3.75;
const mediaConsumo = 10;
const distanciaViagem = 100;
const tipoCombustivel = 'Etanol';
let resultado = 0;

if (tipoCombustivel === 'Gasolina') {
  resultado = (distanciaViagem / mediaConsumo) * precoGasolina;
  console.log(resultado.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
  resultado = (distanciaViagem / mediaConsumo) * precoEtanol;
  console.log(resultado.toFixed(2));
} else {
  console.log('Combustivel invalido');
}
/*
Dica de boas praticas: Para escrever String é possivel usar ' " ` entretando o mais usado é ' ou `.
*/