class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
}