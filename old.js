// ficheiro onde é adicionado os exercicios já realizados
// 12/11/2025 Aula 7
//Des 1

for (let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = `,7*i)
}

//Des 2

let somaIdades = 0;
const NUMPESSOAS = 5;
const idades = 20;

for (let i = 0; i <= NUMPESSOAS; i++){
    somaIdades += NUMPESSOAS;
}
console.log("Soma das idades = ", somaIdades,"\nMédia das idades = ", somaIdades/NUMPESSOAS);

//Des 3
let divisivel = null;
for (let i = 1; i <= 20; i++){
    divisivel = (i%3 == 0) ? console.log(`${i} ´é divisível por 3`): (i);
}

//Des 4

let somaPares = 0;
for (let i = 0; i <= 20; i = i +2){
    somaPares += i;
}
console.log("Soma dos pares = ", somaPares);

//Des 5

for (let i = 10; i >= 0; --i){
    if (i%3 == 0){
        console.log(`${i} é divisível por 3!`);
    }else{
        console.log (String(i));
    }
}

//13/11/2025 Aula 8
//Des 1

let saldo = 0;
const LIMITE = 50;
const VALOR_DEPOSITO = 10;

while(saldo < LIMITE){
    saldo+=VALOR_DEPOSITO;
}
console.log(`Saldo atingido ou ultrapassado. Saldo atual = ${saldo}`)

//Des 2

let cont = 10;
while(cont > 0){
    if(cont % 3 == 0){
        console.log(String(cont),"é divisível por 3!")
    }else{
        console.log(String(cont));        
    }
    cont--;
}

//Des 3

let somaNumerosPositivos = 0;
let valor = 0;
do{
    valor = Number(prompt("Insira um número positivo", 0))
    somaNumerosPositivos += valor;
}while(valor > 0);
console.log(`O último valor inserido não é positivo, o total da soma é ${somaNumerosPositivos-valor}`)

//Des 4

for(let i = 1; i <= 5; i++){
    for(let a = 1;a <= 10; a++){
        console.log(`${i} x ${a} = ${i*a}`)
    }
}

//14/11/2025 Aula 8
//Des 5

let estrela = "*";
let numeroEstrelas = 4;
while (numeroEstrelas > 0) {
  console.log(estrela);
  estrela += "*";
  numeroEstrelas--;
}

//Extra (Árvore de Natal)

let estrelas = "*";
let numEstrelas = 15;
let espacos = " ";
let base = numEstrelas / 2 + numEstrelas / 3;

while (numEstrelas > 0) {
  console.log(`${espacos.repeat(numEstrelas)}${estrelas}`);
  estrelas += "**";
  numEstrelas--;
  if (numEstrelas == 0) {
    console.log(`${espacos.repeat(base)}|   |`);
    console.log(`${espacos.repeat(base)}|   |`);
  }
}

//14/11/2025 Aula 9
//Des 1

let ciclo = 10;
somaPares = 0;
let listaPares = "";

while (ciclo > 0) {
  if (ciclo % 2 == 0) {
    somaPares += ciclo;
    listaPares += ciclo + "  ";
  }
  ciclo--;
}
console.log(`Os números pares são:  ${listaPares},e a sua soma é ${somaPares}`);

//Des 2

LIMITE = 10;
let cicloIdade = 10;
let idade = 15;
let verificaIdade = null;

while (cicloIdade > 0) {
  verificaIdade = idade > 20
      ? console.log(idade," Adulto Plus")
      : idade >= 18
      ? console.log(idade, " Adulto Jovem")
      : console.log(idade, " Menor");
  idade++;
  cicloIdade--;
}

//Des 3

let fatorial = 1;
const N = 5;
for(let i = 1; i <= N; i++){
  fatorial *= i
}
console.log(fatorial)

//Des 4

const senha = "abc";
let tentativaAtual = String(prompt("Insira a pw."))
while(true){
  if(senha === tentativaAtual){
    console.log("Pw correta, user logado.")
    break;
  }else{
    tentativaAtual = String(prompt("Senha incorreta, tente novamente."))
  }
}
console.log("While encerrado.")

//Des 5

for(let i = 1; i <= 20; i++){
  if(i%5 != 0){
    continue;
  }else{
    console.log("Múltiplo de 5 ->", String(i));
  }
}

//Aula 10 17/11/2026
//Slides

function saudacao(){ 
  console.log("Hello World"); //hello World <3
}

saudacao();

function somar(a,b){ // soma as duas variaveis
  return a + b;
}

function dobro(n){ //devolve o dobro
  return n*2;
}

function somar(a, b){
  return a + b;
}
function subtrair(a, b){
  return a - b;
}
function multiplicar(a, b){
  return a * b;
}
function dividir(a, b){
   return a / b;
}

function calculate(a, b, c){
  d = (a + b) * c;
  return d;
}

function print_param(a,b){
  print(a);
}

function print(a){
  console.log(a);
}

function executar(op,a,b){
  return op(a,b);
}
function somarDois(a,b){
  return a +b;
}

function contarAte(n){
  for (let i = 1; i <= n; i++){
    console.log(i);
  }  
}

//Exercicio 1

function saudar(name){
  print("Olá "+ name + "!");
}

//Exercício 2

function dobro(n){ //devolve o dobro
  return n*2;
}

//Exercicio 3

function media(a,b){
  return (a+b)/2;
}

//Exercicio 4

function maior(a,b){
  if (a > b){
    print("A é maior que B")
  }else if(a < b){
    print("A é menor que B")
  }else{
    print("A é igual a B")
  }
}

maior(1,3)
//print(executar(somarDois,11,3))

//saudar(prompt("Nome","Dan"));


function print(a){
    console.log(a);
}

//Exercicio 1

function saudar(name){
  print("Olá "+ name + "!");
}

//Exercício 2

function dobro(n){ //devolve o dobro
  return n*2;
}

//Exercicio 3

function media(a,b){
  return (a+b)/2;
}

//Exercicio 4

function maior(a,b){
  if (a > b){
    print("A é maior que B")
  }else if(a < b){
    print("A é menor que B")
  }else{
    print("A é igual a B")
  }
}

//Exercício 5

function contarCaracteres(texto){
    let length = texto.length;
    print(length);
}

//Aula 11 18/11/2025

//4Fun
function arvoreNatal(numEstrelas){
    let estrelas = "*";
    let espacos = " ";
    let base = numEstrelas / 2 + numEstrelas / 2.5;

    while (numEstrelas > 0) {
    console.log(`${espacos.repeat(numEstrelas)}${estrelas}`);
    estrelas += "**";
    numEstrelas--;
    if (numEstrelas == 0) {
        console.log(`${espacos.repeat(base)}|   |`);
        console.log(`${espacos.repeat(base)}|   |`);
        }
    }
}




// Exe 1

function nested_Three(n){
    let estrela = "";
    for(let i = 0; i < n; i++){
        estrela += "*"
        for(let e = 0; e <= i; e++){
            console.log(estrela)
        }
    }
}

//Exe 2

function tabuada(a){
    for(let i = 1; i <= a; i++){
        for(let a = 1;a <= 10; a++){
            console.log(`${i} x ${a} = ${i*a}`)
    }
}
}

//Exe 3/4

function tabuadaLimite(a,limite){
    for(let i = 1; i <= a; i++){
        for(let a = 1;a <= limite; a++){
            console.log(`${i} x ${a} = ${i*a}`)
        }
    }
}

//Exe 5

function processarNumero(a,b){
    return tabuadaLimite(a,b)
}

//Exe 6 Tudo variaveis dinamicas

function tabuadaCustom(donMin,donMax,multMin,multMax){
    for(let i = donMin; i <= donMax; i++){
        for(let a = multMin;a <= multMax; a++){
            console.log(`${i} x ${a} = ${i*a}`)
        }
    }
}

//Autonomo 10
//Exe 8

function minutosParaSegundos(minutos){
    return String(minutos * 60)+" segundos";
}

//console.log(minutosParaSegundos(10));

function aoQuadrado(n){
    return n*n;
}

function incrementar(n){
    return n+1
}

function decrementar(n){
    return n-1
}

function aplicarFuncao(n, func){
    return console.log(func(n));
}

//aplicarFuncao(8, decrementar)

//Aula 12 19/11/2025
//Slide 12

const alunos = {
    nome : "Ana",
    idade: 17,
    curso: "Informática",
    apresentar(){
        console.log(`Olá. eu sou a ${this.nome}`)
    }
};

//alunos.apresentar();
alunos.turma = "12ºA";

/*for (let chave in alunos){
    console.log(chave, alunos[chave]);
}*/

const cliente = {
    nome : "Maria",
    idade : 30,
    endereco: {
        rua : "Rua das Flores",
        cidade : "Lisboa",
        pais : "Portugal"
    }
};

// console.log(cliente.endereco.cidade); -> Lisboa

//Exercícios Guiados — Objetos em JavaScript

//Exe 1

const pessoa = {
    nome : "Nicolau",
    idade : 120,
    apresentacao(){
        console.log(`Nome : ${this.nome}\nIdade : ${this.idade}`);
    }
};

//pessoa.apresentacao();

//Exe 2=
function mostrarInfo(pessoa){
    for (let a in pessoa){
        if(typeof pessoa[a] === "function"){
          pessoa[a]();
        }else{
            console.log(a, pessoa[a])
        }
    }
}

mostrarInfo(pessoa);

//Exe 3

const carro = {
    marca : "Purrari",
    modelo : "Miaurossa 282 GT",
    descrever(){
        console.log(`Marca : ${this.marca}\nModelo : ${this.modelo}`);
    }
};

//Exe 4

function fazerAniversario(){
    pessoa.idade += 1;
    console.log(pessoa.idade);
}

//fazerAniversario()

//Exe 5

const retangulo = {
    largura : 10,
    altura : 5,
    area(){
        return console.log(this.altura*this.largura);
    }
};

// Exe 6

function processar(obj, callback){

}

//Exe 7

const aluno = {
    notaUm : Number(prompt("Nota 1: ")),
    notaDois : Number(prompt("Nota 2: ")),
    notaTres : Number(prompt("Nota 3: ")),
    calcularMedia(){
        console.log((this.notaUm+this.notaDois+this.notaTres)/3);
    }
}
//aluno.calcularMedia()

//Exe 8

function criarPessoa(nome,idade){
    
}

//Aula 14 21/11/2025

const frutas = ["maçã", "banana", "uva"];
frutas.forEach((fruta, i) => {
    console.log(`${i+1} - ${fruta}`);
});

/ Exercícios Guiados – Arrays em JavaScript 21/11/2025

//Exe 1

console.log(frutas);

//Exe 2
console.log(frutas[0]);
console.log(frutas[(frutas.length-1)]);
for(let i = 0; i < frutas.length; i++){
    console.log(`${i} -> ${frutas[i]}`);
}

// Exe 3

frutas.push("uva");
frutas.unshift("kiwi")
for(let i = 0; i < frutas.length; i++){
    console.log(`${i} -> ${frutas[i]}`);
}
console.log("Fruta com push de uva e unshift de kiwi.");

frutas.pop()
frutas.shift()
for(let i = 0; i < frutas.length; i++){
    console.log(`${i} -> ${frutas[i]}`);
}
console.log("Fruta com pop(último elemento removido) e shift(remove o primeiro elemento).");

//Exe 4

console.log(`banana no array fruta -> ${frutas.includes("banana")}`);
console.log(`posição de laranja no array fruta -> ${frutas.indexOf("laranja")}`);

//Exe 5

frutas.forEach((fruta,i) => {
    console.log(`Fruta: ${fruta}`)
});

//Exe 9

function processarArray(array, funcao){
    return funcao(array)
}

function callback(array){
    for(let i = 0; i < frutas.length; i++){
    console.log(`Olá ${frutas[i]}`);
    }
}

processarArray(frutas,callback);

//Exe 2 with extra steps (verificar que o array está realmente na posição correta)

console.log(frutas[0]);
console.log(frutas[(frutas.length-1)]);
for(let i = 0; i < frutas.length; i++){
    if (frutas.indexOf(frutas[i]) == 0 || frutas.indexOf(frutas[i]) == (frutas.length-1)){ // que pode ser substituido por (i == 0 || i == (frutas.length-1))
        console.log(`${i} -> ${frutas[i]}`)
    };
}




//Exe Extra

const numeros = [1,2,3];
for(let i = 0; i < numeros.length; i++){
    numeros[i] = numeros[i] * 2;
    console.log(`${numeros[i]}`)
}

//Exercícios Autônomos 14 – Arrays em JavaScript 23/11/2025

//Exe 1

const numeros = [2,3,5,7,11,13,17,19,23,31];

function imprimeArray(array){
    for( let i = 0; i < array.length; i++){
    console.log(array[i]);
    };
}

//Exe 2

function somaElementos(array){
    var elementosSomados = 0;
    for(let i = 0; i < array.length; i++){
        elementosSomados += array[i];
    }
    console.log(elementosSomados);
    return elementosSomados;
}

//somaElementos(numeros);

//Exe 3

function verificaPares(array){
    for(let i = 0; i < array.length; i++){
        if((array[i]%2) == 0){
            console.log(`${array[i]} é par. `);
        }
    }
}

//verificaPares(numeros);

//Exe 4

function duplica(array){
    for(let i = 0; i < array.length; i++){
        array[i] *= 2;
    }
    return array;
}

//imprimeArray(duplica(numeros));

//Exe 5

function exeCinco(array){
    array.forEach((elementos, i) => console.log(`Indice ${i} : ${elementos}`));
}

//exeCinco(numeros)

//Exe 6

function existe(array,num){
    console.log(numeros.includes(num));
}

//existe(numeros,5)

//Exe 7

function adiciona(array, primeiroNumero, ultimoNumero){
    numeros.unshift(primeiroNumero);
    console.log(`${numeros[0]} adicionado no início do array.`);
    numeros.push(ultimoNumero);
    console.log(`${numeros[(numeros.length-1)]} adicionado ao fim do array.`)
}

//adiciona(numeros,0,22)

function remove(array){
    console.log(`${numeros[0]} adicionado no início do array.`);
    numeros.shift();
    console.log(`${numeros[(numeros.length-1)]} adicionado ao fim do array.`)
    numeros.pop();
}

//imprimeArray(numeros) , remove(numeros), imprimeArray(numeros);

//Exe 8

function mediaArray(array){
    let media = 0;
    for( let i = 0; i < array.length; i++){
    media += array[i];
    };
    console.log(`A média do array é ${media/array.length}`)
}

//mediaArray(numeros);

//Exe 10
const listaProdutos = []; //"tomate", "alface", "cebola", "arroz"

function produtos(nome, preco, quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    listaProdutos.push(this);
}



const tomate = new produtos("tomate", 2.5, 10);
const alface = new produtos("alface", 1.5, 5);
const cebola = new produtos("cebola", 3, 15);
const arroz = new produtos("arroz", 2.5, 20);

//console.log(`Produto - ${tomate.nome}\nPreço - ${tomate.preco} €\nQuantidade - ${tomate.quantidade}`);

function mostraProdutos(){
    for( let i = 0; i < listaProdutos.length; i++){
        console.log(`Produto - ${(listaProdutos[i]).nome}\nPreço - ${listaProdutos[i].preco} €\nQuantidade - ${listaProdutos[i].quantidade}`);
        console.log(listaProdutos[i]);
    };
}

//mostraProdutos()