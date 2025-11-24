interface IProdutoSimples {
    id: number;
    nome: string;
    preco: number;
}

// Implemente a interface renomeada
class ItemLoja implements IProdutoSimples {
    // Propriedades da interface devem ser declaradas
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(): void {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
    }
}