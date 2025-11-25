
//Exercício 1: Sistema Bancário Complexo
//Conta

class Conta {
    constructor () {
        this.saldo = 100;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor
        console.log("O saldo após depósito é:", this.saldo);
    }
    levantar(valor) {
    if (this.saldo >0) {
        this.saldo = this.saldo - valor
    }
    console.log("Após levantamento, saldo é:", this.saldo); 
    }
    aplicarJuros(taxa,anos) {
        for (let i = 1; i<=anos; i++) {
            this.saldo = (taxa*this.saldo) + this.saldo
            console.log("No ano", 2025 + anos, "o saldo após aplicação de juros é:", this.saldo.toFixed(2));
        }
        return this.saldo.toFixed(2); 
    }
    mostrarSaldo() {
        console.log("O saldo actual é:", this.saldo.toFixed(2));
    }
}

const contaPrimeira = new Conta(); 

contaPrimeira.depositar(100);
contaPrimeira.levantar(75);
contaPrimeira.depositar(200);
contaPrimeira.aplicarJuros(0.05, 5); 
contaPrimeira.mostrarSaldo(); 




class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.conta = new Conta();
        this.bonus = 10;
    }
    transferir(valor, outraConta) { 
       this.conta.levantar(valor)
       outraConta.depositar(valor)
    }
     mostrarSaldo() {
        console.log("O saldo desta conta é", this.conta.saldo);
    }
     aniversario() {
        this.conta.depositar(this.bonus)
        for (let i = 1; i<=5; i++) {
            if (this.conta.saldo > 0) {
               this.conta.saldo = (this.conta.saldo - this.bonus)  
            } else {
                this.conta.saldo = 0; 
            }     
        }
     }
     presentear(valor,outroCliente) {
        this.conta.levantar(valor);
        outroCliente.conta.depositar(valor); 
     } 
}

const belchior = new Cliente("Belchior");
const gaspar = new Cliente("Gaspar"); 


belchior.transferir(10, contaPrimeira);
belchior.mostrarSaldo();
belchior.presentear(10, gaspar);
belchior.aniversario(); 


class Banco {
    constructor() {
        this.jurosDiarios = 0.01,
        this.cliente1 = gaspar
        this.cliente2 = belchior
    }
    simularDia() {
        for (let i =1; i<=365; i++) {
           this.cliente1.conta.saldo= (this.cliente1.conta.saldo*this.jurosDiarios) + this.cliente1.conta.saldo
        }
        for (let j =1; j<=365; j++) {
           this.cliente2.conta.saldo = (this.cliente2.conta.saldo*this.jurosDiarios) + this.cliente2.conta.saldo
        }
    }
    relatorio() {
        console.log("O saldo da conta do gaspar é", this.cliente1.conta.saldo.toFixed(2));
        console.log("O saldo da conta do belchior é:", this.cliente2.conta.saldo.toFixed(2));
    }
    aplicarTaxaDia(taxa) {
        for (let i =1; i<=365; i++) {
           this.cliente1.conta.saldo= (this.cliente1.conta.saldo*this.jurosDiarios) + this.cliente1.conta.saldo
        }
        for (let j =1; j<=365; j++) {
           this.cliente2.conta.saldo = (this.cliente2.conta.saldo*this.jurosDiarios) + this.cliente2.conta.saldo
        }
    }
    resumototal() {
        let saldoTotal = this.cliente1.conta.saldo + this.cliente2.conta.saldo;
        console.log("O saldo total do banco é:", saldoTotal.toFixed(2)); 
    }
}

const montepio = new Banco(); 



montepio.relatorio();
montepio.simularDia();
montepio.relatorio();
montepio.aplicarTaxaDia(0.01);
montepio.relatorio();
montepio.resumototal(); 



class Gerente {
    constructor() {
    }
    auditar(conta) {
        console.log("O saldo da conta é:", conta.saldo.toFixed(2));
    }
    bonificar(conta,valor) {
        conta.depositar(valor);
    }
    reduzirSaldo(conta, valor) {
        conta - valor
    }
    mostrarResumo() {
        console.log("O saldo da conta é:", gaspar.conta.saldo.toFixed(2));
        console.log("O saldo da conta é:", belchior.conta.saldo.toFixed(2));
        console.log("Dinheiro total banco", montepio.resumototal()); 
    }
}

const joaoCarvalho = new Gerente();

joaoCarvalho.auditar(belchior.conta);
joaoCarvalho.bonificar(belchior.conta, 10)
joaoCarvalho.reduzirSaldo(gaspar.conta, 5)
joaoCarvalho.mostrarResumo(); 


class CaixaEletronico {
    constructor () {
    }
    sacar(cliente,valor) {
        cliente.conta.levantar(valor); 
    }
    depositar(cliente,valor) {
        cliente.conta.depositar(valor)
    }
    mostrarSaldo(cliente) {
        cliente.conta.mostrarSaldo()
    }
    simularTransacoes(dias) {    
        for (let i =1; i<=dias; i++)   {
            if (gaspar.conta.saldo>0) {
                gaspar.conta.saldo - 1 
            } else {
                gaspar.conta.saldo = 0; 
            } 
        }
    }
}

const emailJoao = new CaixaEletronico()

emailJoao.sacar(gaspar, 5)
emailJoao.depositar(belchior,5)
emailJoao.mostrarSaldo(belchior)
emailJoao.mostrarSaldo(gaspar)
emailJoao.simularTransacoes(5)







