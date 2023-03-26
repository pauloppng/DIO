const nota1 = 6;
const nota2 = 6;
const nota3 = 6;


let resultado = (nota1 + nota2 + nota3)/3
console.log(resultado)

if (resultado < 5) {
    console.log('Reprovado')
} else if (resultado >= 5 && resultado < 7) {
    console.log('Recuperação')
} else if (resultado >= 7 ) {
    console.log('Aprovado')
} else{
    console.log('invalido')
}