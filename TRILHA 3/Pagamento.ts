class Pagamento {
    processar(): void {
        console.log("Processamento de pagamento padrão.");
    }
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    processar(): void {
        if (this.numeroCartao.length === 16 && !isNaN(Number(this.numeroCartao))) {
            console.log(`💳 Cartão ${this.numeroCartao.substring(0, 4)}... validado.`);
            console.log("Processando pagamento via cartão de crédito.");
        } else {
            console.log("Falha na validação: Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = Math.floor(Math.random() * 900000000000) + 100000000000;
        console.log(`🧾 Boleto gerado com sucesso. Código: ${codigoBoleto}`);
        console.log("Aguardando confirmação de pagamento via boleto.");
    }
}

// Função que usa o polimorfismo
function processarPagamentos(pagamentos: Pagamento[]): void {
    console.log("\n--- Processamento de Transações ---");
    pagamentos.forEach(p => {
        // O método processar() correto é chamado para cada tipo de pagamento
        p.processar();
        console.log("---------------------------------");
    });
}

// Demonstração
const transacoes = [
    new PagamentoCartao("1234567890123456"),
    new PagamentoBoleto(),
    new PagamentoCartao("123") // Cartão inválido
];

processarPagamentos(transacoes);