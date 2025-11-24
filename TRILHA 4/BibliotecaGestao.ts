// 1. Crie a interface LivroBiblioteca
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

// 2. Crie a classe BibliotecaGestao com um array de LivroBiblioteca
class BibliotecaGestao {
    private livros: LivroBiblioteca[];

    constructor(livrosIniciais: LivroBiblioteca[] = []) {
        this.livros = livrosIniciais;
    }

    // 3. Implemente filtrarPorGenero usando .filter()
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        const generoNormalizado = genero.toLowerCase();
        return this.livros.filter(livro => livro.genero.toLowerCase() === generoNormalizado);
    }

    // 3. Implemente buscarPorAutor usando .filter()
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        const autorNormalizado = autor.toLowerCase();
        return this.livros.filter(livro => livro.autor.toLowerCase().includes(autorNormalizado));
    }

    // 3. Implemente obterLivrosDisponiveisOrdenados usando .filter() e .sort()
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        // 1. Filtra apenas os livros disponíveis
        const disponiveis = this.livros.filter(livro => livro.disponivel);
        
        // 2. Cria uma cópia do array e o ordena pelo título (ordem alfabética)
        return disponiveis.sort((a, b) => {
            const tituloA = a.titulo.toUpperCase();
            const tituloB = b.titulo.toUpperCase();
            
            if (tituloA < tituloB) return -1; // 'a' vem antes de 'b'
            if (tituloA > tituloB) return 1;  // 'a' vem depois de 'b'
            return 0; // São iguais
        });
    }
}

// Demonstração de dados
const acervo: LivroBiblioteca[] = [
    { titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", disponivel: true },
    { titulo: "O Chamado de Cthulhu", autor: "H.P. Lovecraft", genero: "Terror", disponivel: false },
    { titulo: "Fundaçao", autor: "Isaac Asimov", genero: "Ficção Científica", disponivel: true },
    { titulo: "A Cor que Caiu do Espaço", autor: "H.P. Lovecraft", genero: "Terror", disponivel: true },
];

const gestao = new BibliotecaGestao(acervo);

console.log("\n--- Filtrar por Gênero (Terror) ---");
gestao.filtrarPorGenero("Terror").forEach(l => console.log(`- ${l.titulo}`));
// Saída: O Chamado de Cthulhu, A Cor que Caiu do Espaço

console.log("\n--- Buscar por Autor (Lovecraft) ---");
gestao.buscarPorAutor("Lovecraft").forEach(l => console.log(`- ${l.titulo}`));

console.log("\n--- Livros Disponíveis Ordenados por Título ---");
gestao.obterLivrosDisponiveisOrdenados().forEach(l => console.log(`- ${l.titulo}`));
/* Saída:
- A Cor que Caiu do Espaço
- Duna
- Fundaçao
*/