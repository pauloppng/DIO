function test(){
    console.log('teste')
};

test();

function sayMyName(name){
    console.log('Your name is: ' + name)
}

sayMyName('Paulo');

function quadrado(valor){
    return valor*valor
}

console.log(quadrado(10) + quadrado(10));

function incrementoJuros (preco, juros){
    const acrecimento = (juros / 100 ) * preco
    return preco + acrecimento
}

console.log(incrementoJuros(100, 10));