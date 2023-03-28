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

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
}


(function () {
    const jose = new Pessoa('José', 70, 1.75);

    const imc = calcularImc(jose.peso, jose.altura);
    console.log(classificarImc(imc))
})();