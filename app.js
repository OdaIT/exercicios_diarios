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