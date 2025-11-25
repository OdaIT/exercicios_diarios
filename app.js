//Aula 13 Autonomo - Exercícios II — Objetos, Funções e Ciclos em JavaScript

//Exe 1

class Conta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    };
    depositar(valor) {
        this.saldo += valor;
        };
    levantar(valor) {
        if(this.saldo > valor){
            this.saldo -= valor;
        }else{
            console.log("Saldo insuficiente.")
        };
        
    };
    aplicarJuros(taxa, anos){
        for(let i = 1; i <= anos; i++)
        this.saldo *= (1+taxa)
        this.mostrarSaldo()
    };
    mostrarSaldo(){
        console.log(`${this.titular}: Saldo atual = ${this.saldo.toFixed(2)}`);
    };
}

const conta1 = new Conta("Danilo", 1000);
const conta2 = new Conta("Francisco", 500);
const c1 = new Cliente ("Danilo", "Quintal", conta1)
const c2 = new Cliente ("Francisco", "Quintal", conta2)
class Cliente {
    constructor(primeiroNome, ultimoNome, conta){
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.conta = conta;
    }
    tranferir(valor, outraConta){
        if(this.Conta.saldo > valor){
            
        }

    }
    mostrarSaldo(){
        Conta.mostrarSaldo()
    }
    aniversario(anos){
        for(let i = 1; i <= anos; i++){
            this.Conta.saldo += bonusAniversario;
        }
    }
    presentear(valor, outroCliente){

    }
}

class Banco {
    constructor(){}
}

class Gerente {
    constructor(){}
}

class CaixaEletronico {
    constructor(){}
}