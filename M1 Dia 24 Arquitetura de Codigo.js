//Parte 1: Fundamentos de Classes

class Livro {
    constructor(titulo, autor){
        this.titulo = titulo,
        this.autor = autor
    }
    descrever(){
        console.log(`${this.titulo}, escrito por ${this.autor}`)
    }
}

class Ebook extends Livro{
    constructor(titulo, livro, tamanhoMB){
        super(titulo, livro),
        this.tamanhoMB = tamanhoMB
    }
    descricao(){
        console.log(`${this.titulo}, escrito por ${this.autor}, o Ebook ocupa ${this.tamanhoMB} MB de espaço.`)
    }
}

//const livro1 = new Livro("Harry Potter","J.K. Rowling")
//livro1.descrever()

/*const livro2 = new Ebook("Harry Potter","J.K. Rowling", 52)
livro2.descricao()/*

//Os objectos são uteis para armazenar dados sobre uma unica coisa, por exemplo datas, dias da semana, enquanto as classes são moldes para armazenar dados iguais de multiplas coisas, por
//exemplo, carros, jogos, pessoas etc

//Parte 2: Encapsulamento (Privados)

class Cofre{
    #segredo = 1234;
    abrir(senha){
        console.log(senha === this.#segredo)
    }
}

/*const meuCofre = new Cofre()
meuCofre.abrir(1234)*/


class Termostato{
    #temperatura = 10;
    aumentar(temp){
        this.#temperatura += temp;
    }
    diminuir(temp){
        if(this.#temperatura > temp){
            this.#temperatura -= temp;
        }else{
            console.log(`Não é possível baixar a temperatura o desejado, tente um valor inferior.`)
        }
    }
    lerTemperatura(){
        return (`Temperatura = ${this.#temperatura} graus`);
    }
}

/*const termos = new Termostato()
termos.diminuir(9.9)
termos.aumentar(10)
console.log(termos.lerTemperatura())*/

//Parte 3: Standard Library (Nativas)

function converteMoeda(valor){
    let moeda = new Intl.NumberFormat('pt-PT', {style : 'currency', currency : 'EUR'});
    return moeda.format(valor);
}

//console.log(converteMoeda(2500.5))

function urlLink(url){
    let link = new URL(url);
    console.log(link.searchParams.get("page"));
}
urlLink("https://loja.pt?page=2&sort=price")