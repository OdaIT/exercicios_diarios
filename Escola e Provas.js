//Aula 13 Exe Autonomo

//Exercício 2 — Escola e Provas

//Math.random();

function rand(x){
    let e = Math.floor(Math.random() * (x+1));
    return e;
};

class Aluno {
    constructor(primeiroNome, ultimoNome){
        this.estudante = primeiroNome + " " + ultimoNome;
        this.notaFinal = 0;
        this.provas = [];
    };
    realizarProva(questoes){
        let sum = 0;
        for(let i = 0; i < questoes; i++){
            sum += (rand(20))
        }
        let nota = sum/questoes
        this.provas.push(nota);
    };
    calcularMedia(){
        let sum = 0;
        for(let elem of this.provas){
            sum += elem;
        }
        this.notaFinal = Number((sum/this.provas.length).toFixed(2));
        console.log(this.notaFinal);
    };
    estudar(horas){
        let notaAntes = this.notaFinal;
        let bonusNota = horas*0.1
        this.notaFinal += Number(bonusNota);
        console.log(`A nota final de ${this.estudante} era ${notaAntes}, ${horas} horas de estudo aumentaram a nota para ${this.notaFinal}`)
    };
    receberBonus(bonus){
        if( this.notaFinal >= 0 && this.notaFinal+bonus < 20){
            this.notaFinal += bonus;
        console.log(`Parabéns, recebeu um bónus de ${bonus} pontos na sua nota final! A sua nota final agora é de ${this.notaFinal.toFixed(2)}`);
        }else{
        this.notaFinal = 20;
        console.log(`Parabéns, recebeu um bónus de ${bonus} pontos na sua nota final é 20!`);
        };       
    };
};

class Prova {
    constructor(){};
}




const estudante1 = new Aluno ("Danilo", "Quintal");
estudante1.realizarProva(10);
estudante1.realizarProva(10);
estudante1.realizarProva(10);
estudante1.calcularMedia()
estudante1.estudar(10)
estudante1.receberBonus(0.2)
estudante1.receberBonus(0.2)
estudante1.receberBonus(12)