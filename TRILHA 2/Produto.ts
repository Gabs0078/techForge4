class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEstoque(): number {
        return this.preco * this.quantidade;
    }

    exibirValorEstoque(): void {
        const total = this.calcularValorTotalEstoque();
        console.log(`Valor total em estoque de ${this.nome}: R$${total.toFixed(2)}`);
    }
}