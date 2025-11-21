// Exercícios Guiados – Arrays em JavaScript 21/11/2025

//Exe 1

const frutas = ["maçã", "banana", "laranja"];
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
