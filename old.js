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