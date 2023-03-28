class Carro{
    marca;
    cor;
    gastoMedioDeCombustivel;
    
    constructor(marca, cor, gastoMedioDeCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;
    }

    gastoMedioDeCombustivelPorKm (kmPercorido, precoCombustivel){
        return ((kmPercorido/this.gastoMedioDeCombustivel) * precoCombustivel);
    }
}

(function () {
const celta = new Carro('chev', 'preto', 10);

console.log(celta.gastoMedioDeCombustivelPorKm(100 , 5.75))
})();