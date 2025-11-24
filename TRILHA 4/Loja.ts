// 1. Crie a interface ProdutoLoja
interface ProdutoLoja {
    codigo: number;
    nome: string;
}

// Implementação simples para usar no array
class ProdutoItem implements ProdutoLoja {
    codigo: number;
    nome: string;
    
    constructor(codigo: number, nome: string) {
        this.codigo = codigo;
        this.nome = nome;
    }
}

// 2. Crie a classe Loja com um array de ProdutoLoja
class Loja {
    private produtos: ProdutoLoja[];

    constructor() {
        // Inicializa o array com alguns produtos de exemplo
        this.produtos = [
            new ProdutoItem(1, "Teclado Mecânico"),
            new ProdutoItem(2, "Monitor Ultrawide"),
            new ProdutoItem(3, "Webcam HD"),
        ];
    }

    // 3. Implemente buscarProdutoPorCodigo usando .find()
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

// Demonstração
const minhaLoja = new Loja();
const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(2);
const produtoInexistente = minhaLoja.buscarProdutoPorCodigo(99);

if (produtoEncontrado) {
    console.log(`\nProduto encontrado (código 2): ${produtoEncontrado.nome}`); // Saída: Monitor Ultrawide
}

if (!produtoInexistente) {
    console.log("Produto não encontrado (código 99).");
}