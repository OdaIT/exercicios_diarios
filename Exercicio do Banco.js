//Aula 13 Autonomo - Exercícios II — Objetos, Funções e Ciclos em JavaScript

//Exe 1

class Conta {
    constructor(saldo){
        this.saldo = saldo;
        this.historico = [];
        this.historico.push(saldo);
    };
    depositar(valor) {
        this.saldo += valor;
        this.historico.push(valor);
    };
    levantar(valor) {
        if(this.saldo > valor){
            this.saldo -= valor;
            this.historico.push(-valor);
        }else{
            console.log("Saldo insuficiente.")
        };
        
    };
    aplicarJuros(taxa, anos){
        let saldoInicial = this.saldo;
        for(let i = 1; i <= anos; i++)
        this.saldo *= (1+taxa)
        this.historico.push(this.saldo-saldoInicial);
        this.mostrarSaldo()
    };
    mostrarSaldo(){
        return `Saldo atual = ${this.saldo.toFixed(2)} €`;
    };

    mostrarHistorico(){
        console.log(`Movimentações:`)
        for(let valor of this.historico){
            if(valor > 0){
                console.log(`Crédito ${valor.toFixed(2)} €`);
            }else{
                console.log(`Débito ${valor.toFixed(2)} €`);
            }
        }
    }
};

class Cliente {
    constructor(primeiroNome, ultimoNome, conta){
        this.nomeCliente= primeiroNome + " " + ultimoNome;
        this.conta = conta;
    };
    tranferir(valor, outraConta){
        if(this.conta.saldo > valor){
            this.conta.levantar(valor);
            this.conta.historico.push(-valor)
            outraConta.conta.depositar(valor);
            outraConta.conta.historico.push(valor)
        }else{
            console.log(`Saldo insuficiente.${this.conta.mostrarSaldo()}`);                                            
        };
    };
    mostrarSaldo(){
        console.log(this.conta.mostrarSaldo());
    };
    aniversario(anos){
        let bonusAniversario = 10;
        for(let i = 1; i <= anos; i++){
            this.conta.saldo += bonusAniversario;
        };
        this.conta.historico.push(bonusAniversario*anos);
    };
    presentear(valor, outroCliente){
         if(this.conta.saldo > valor){
            this.conta.historico.push(-valor);
            outroCliente.conta.historico.push(valor);
            this.conta.levantar(valor);
            outroCliente.conta.depositar(valor);
            console.log(`${this.nomeCliente} enviou ${valor} € para ${outroCliente.nomeCliente}.`); 
        }else{
            console.log(`Saldo insuficiente.${this.conta.mostrarSaldo()}`);                                            
        };
    };
};

class Banco {
    constructor(){
        this.clientes = [];
    };
    simularDia(dias){
        for(let cliente of this.clientes){
            let valor = cliente.conta.saldo;
            for(let i = 0; i < dias; i++){
                cliente.conta.saldo *= 1.001;
            };
            cliente.conta.historico.push(cliente.conta.saldo-valor);
            console.log(`Conta de ${cliente.nomeCliente} após juros diários (${dias} dias) : ${cliente.conta.mostrarSaldo()}`)
        };
    };
    relatorio(){
        for(let cliente of this.clientes){
            console.log(`${cliente.nomeCliente} -> ${cliente.conta.mostrarSaldo()}`)
        }
    };
    aplicarTaxaDia(taxa){
        for(let cliente of this.clientes){
            let valor = cliente.conta.saldo;
            cliente.conta.saldo *= (1+taxa);
            cliente.conta.historico.push(cliente.conta.saldo-valor)
        }
    };
    resumoTotal(){
        let soma = 0;
        for(let cliente of this.clientes){
            soma += cliente.conta.saldo
        };
        console.log(`Saldo total dos clientes = ${soma} €`);
    };
    adicionarCliente(cliente){
        this.clientes.push(cliente);
    }
};

class Gerente {
    constructor(cargo){
        this.cargo = cargo;
    };
    
};

class CaixaEletronico {
    constructor(){}
};



const conta1 = new Conta(1000);
const conta2 = new Conta(500);
const cliente1 = new Cliente ("Danilo", "Quintal", conta1)
const cliente2 = new Cliente ("Francisco", "Quintal", conta2)
conta1.mostrarSaldo();
conta2.mostrarSaldo();
cliente1.presentear(10,cliente2);
cliente1.mostrarSaldo();
cliente2.mostrarSaldo();
const caixaGeral = new Banco()
caixaGeral.adicionarCliente(cliente1)
caixaGeral.adicionarCliente(cliente2)
caixaGeral.resumoTotal()
caixaGeral.simularDia(3)
caixaGeral.relatorio()
cliente1.tranferir(50,cliente2)
cliente1.conta.levantar(200)
cliente1.aniversario(5)
conta1.aplicarJuros(0.01, 6)
caixaGeral.simularDia(20)
caixaGeral.aplicarTaxaDia(0.01)
conta1.mostrarHistorico()


