const alunos = ['Paulo', 'Vitor', 'Paula']; // Criando uma lista 
const notas = []; // Criando lista

alunos.push('Vitoria'); // Forma de adicionar na lista 

alunos[4] = 'João'; // Outra forma de adicionar na lista

console.log(alunos);

alunos.pop(); // Retirando a ultima informação da lista

alunos.shift(); // Retira do primeira informação da lista

console.log(notas.length); // Mostrar quantos elementos existem

for (let i = 0; i < 100; i = (i+2)) {
    console.log(i);
}

const nome = 'Paulo Pereira'
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

