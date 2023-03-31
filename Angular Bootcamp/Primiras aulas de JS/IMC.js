function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso ' + imc.toFixed(2);
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal ' + imc.toFixed(2);
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso ' + imc.toFixed(2);
    } else if (imc >= 30 && imc < 40) {
        return 'Obesidade ' + imc.toFixed(2);
    } else if (imc > 40) {
        return 'Obesidade grave ' + imc.toFixed(2);
    } else {
        return 'Valor invalido' + imc.toFixed(2);
    }
}

function main(){
    const imc = calcularImc(110, 1.73);
    console.log(classificarImc(imc));
}

main();

/*
Em JS as funções também funcionam de forma similar a um objeto qualquer;

Em JS é possivel criar uma função diretamente executavel, isso é conhecido como função não nomeada exemplo abaixo.
Nesse caso não é preciso nomear a função e também não é preciso chama-lá, essa técnica é usado para atribuição de função main;
*/

(function (){
    const imc = calculoImc(110, 1.73);
    console.log(classificacaoImc(imc));
})();