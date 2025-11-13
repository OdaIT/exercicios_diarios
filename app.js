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