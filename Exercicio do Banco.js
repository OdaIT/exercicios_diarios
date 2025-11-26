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
class Cliente {
    constructor(primeiroNome, ultimoNome, conta){
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.conta = conta;
    }
    tranferir(valor, outraConta){
        if(this.conta.saldo > valor){
            conta.levantar(valor);
            outraConta.depositar(valor);
        }else{
            console.log(`Saldo insuficiente.${this.mostrarSaldo}`);                                            
        }
    }
    mostrarSaldo(){
        this.conta.mostrarSaldo();
    }
    aniversario(anos){
        let bonusAniversario = 10;
        for(let i = 1; i <= anos; i++){
            this.conta.saldo += bonusAniversario;
        }
    }
    presentear(valor, outroCliente){
         if(this.conta.saldo > valor){
            this.conta.levantar(valor);
            outroCliente.conta.depositar(valor);
            console.log(`Enviado ${valor} €, para ${outroCliente.primeiroNome}`); 
        }else{
            console.log(`Saldo insuficiente.${this.conta.mostrarSaldo()}`);                                            
        }
    }
}

const c1 = new Cliente ("Danilo", "Quintal", conta1)
const c2 = new Cliente ("Francisco", "Quintal", conta2)
conta1.mostrarSaldo();
conta2.mostrarSaldo();
c1.presentear(10,c2);
c1.mostrarSaldo();
c2.mostrarSaldo();


class Banco {
    constructor(){
        this.clt = [];
    }
    simularDia(){

    }
    relatorio(){

    }
    aplicarTaxaDia(taxa){
        for(let clientes of this.clt){
            clientes.conta.saldo *= (1+taxa);
        }
        console.log(``);
    }
    resumoTotal(){
        let soma = 0;
        for(let clientes of this.clt){
            soma += clientes.conta.saldo
        }
        console.log(`Saldo total dos clientes = ${soma} €`);
    }
}


let c = new Banco()
c.clt.push(c1)
c.clt.push(c2)
c.resumoTotal()



class Gerente {
    constructor(){}
}

class CaixaEletronico {
    constructor(){}
}