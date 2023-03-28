/*
Um objeto é uma estrutura de chave e valor
    Ex: 
        const pessoa = {    -chave 
            nome: Paulo,    -valor
            idade: 22,      -valor 
            altura: 1.73    -valor
        };                  -chave

Uma função dentro de um objeto é conhecido como metodo;

A palavra reservada "this" funciona como um contexto onde está sendo executada, ou seja,
caso ela esteja sendo usado em um objeto, o "this" assumirá o objeto;

Existe uma diferença entre o uso de ' e  ` em string, no caso do ' para concatenar strings é mais complexo
tendo que usar o sintax do +. Enquanto o ` é mais simples apenas concatenando direto sem ter que fazer diferenciação
ou separação.
*/

const pessoa = {
    nome: 'Paulo Vitor',
    idade: 22,
    altura: 1.73,

    descrever: function() {
        console.log('Meu nome é ' + this.nome + ', tenho ' + this.idade)
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade}`)
    }
}

pessoa.descrever();