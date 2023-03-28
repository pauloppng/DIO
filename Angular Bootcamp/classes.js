/*
Em class, existe um atributo chamado "constructor", ele funciona como uma parte que sempre que
for instanciado uma nova class, o que estiver dentro do "consturctor" irá ser executado, ou seja,
uma nova class só será instanciada caso atenda os atributos que o "cosntructor" exige.
*/
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade}`);
    }
}

const paulo = new Pessoa();
paulo.nome = 'Paulo'
paulo.idade = 22;

paulo.descrever();

class Pessoa2 {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade}, nasci em ${this.anoNascimento}`);
    }
}

const marta = new Pessoa2('Marta', 20)
marta.descrever();