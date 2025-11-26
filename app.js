//Aula do dia 26/11/2025 Exercícios Guiados – Arrays em JavaScript

const fruta = ["maçã", "banana", "laranja"];

//Exe 5

function imprimeArrayForEach(){
    fruta.forEach((valor,indice) => {
    console.log(`Fruta : ${valor}`)
});
}

//Exe 6
const numeros = [1, 2, 3, 4, 5];

function quadrado(array){
    const quadrados = array.map(n => n ** 2);
console.log(quadrados);
}

//quadrado(numeros);


// Exercícios Guiados – Arrays de Objetos com map(), filter() e reduce()

//Exe 1

const pessoas = [
    { nome : "Ana", idade : 20},
    { nome : "João", idade : 22},
    { nome : "Maria", idade : 19},
    { nome : "Jonas", idade : 28}
];

function extrairNome(array,dado){
    const listaNomes = array.map(pessoa => pessoa[dado]);
    console.log(listaNomes);
}

//extrairNome(pessoas,"idade");

//Exe 2

function adicionarPropriedade(){

}

//Exe 3

function maiorDeIdade(array,dado){
    const maiorIdade = array.filter(i => i[dado] >= 25)
    console.log(maiorIdade)
}

//maiorDeIdade(pessoas, "idade");

//Exe 4

function procurarNome(array, nomes){
    const procuraN = array.filter(i => i.nome.toLowerCase() === nomes.toLowerCase())
    console.log(procuraN)
}

//procurarNome(pessoas, "Jonas")

//Exe 5

function converteEmFrase(array){
    console.log(array.map(p => `${p.nome} tem ${p.idade} anos.`))
}

//converteEmFrase(pessoas);

//Exe 6

function MédiaIdades(){
   let somaIdades = pessoas.reduce((acc, p) => (acc + p.idade), 0);
}
