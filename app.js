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
let somaPares = 0;
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

const LIMITE = 10;
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

//Des 6

