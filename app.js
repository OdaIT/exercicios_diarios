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

//Exe 9
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

mostraProdutos()
