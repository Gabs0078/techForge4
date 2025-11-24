// 1. Crie a interface ILivroDisponibilidade
interface ILivroDisponibilidade {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

// 2. Crie a classe Biblioteca usando a interface renomeada
class Biblioteca {
    // O array agora usa a nova interface
    private livros: ILivroDisponibilidade[];

    constructor(livrosIniciais: ILivroDisponibilidade[] = []) {
        this.livros = livrosIniciais;
    }

    // Método auxiliar para adicionar livros
    adicionarLivro(livro: ILivroDisponibilidade): void {
        this.livros.push(livro);
    }

    // 3. Implemente buscarLivrosDisponiveis usando .filter()
    buscarLivrosDisponiveis(): ILivroDisponibilidade[] {
        return this.livros.filter(livro => livro.disponivel === true);
    }
}

// Demonstração
// Os objetos literais agora estão corretos, pois correspondem à nova interface
const livrosIniciais: ILivroDisponibilidade[] = [
    { titulo: "O Senhor dos Anéis", autor: "Tolkien", disponivel: true },
    { titulo: "1984", autor: "Orwell", disponivel: false },
    { titulo: "A Metamorfose", autor: "Kafka", disponivel: true },
];

const nossaBiblioteca = new Biblioteca(livrosIniciais);
const disponiveis = nossaBiblioteca.buscarLivrosDisponiveis();

console.log("\n--- Livros Disponíveis ---");
disponiveis.forEach(livro => console.log(`Título: ${livro.titulo}`));