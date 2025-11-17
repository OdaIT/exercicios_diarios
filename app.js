//Trabalho autónomo aula 10

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