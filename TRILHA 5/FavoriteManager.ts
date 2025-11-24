abstract class FavoriteManager {
    // A lista de favoritos é protegida
    protected favorites: string[] = [];

    // Métodos abstratos
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];

    protected isDuplicate(item: string): boolean {
        return this.favorites.some(f => f.toLowerCase() === item.toLowerCase());
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super();
        console.log("Gerenciador de Filmes (Ordenado) inicializado.");
    }

    addFavorite(item: string): void {
        if (this.isDuplicate(item)) {
            console.warn(`[Filmes] Item duplicado não adicionado: ${item}`);
            return;
        }
        this.favorites.push(item);
        console.log(`[Filmes] Adicionado: ${item}`);
    }

    getFavorites(): string[] {
        // Retorna a lista em ordem alfabética (usando o método sort)
        return [...this.favorites].sort((a, b) => a.localeCompare(b));
    }
}

class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super();
        console.log("Gerenciador de Livros (LIFO) inicializado.");
    }

    addFavorite(item: string): void {
        if (this.isDuplicate(item)) {
            console.warn(`[Livros] Item duplicado não adicionado: ${item}`);
            return;
        }
        // Adiciona o novo item no início da lista (LIFO)
        this.favorites.unshift(item);
        console.log(`[Livros] Adicionado no início: ${item}`);
    }

    getFavorites(): string[] {
        // Retorna a lista como está (o mais novo está no início)
        return [...this.favorites];
    }
}

// Demonstração
const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Interstellar");
filmes.addFavorite("Avatar");
filmes.addFavorite("Interestellar"); // Duplicata

const livros = new BooksFavoriteManager();
livros.addFavorite("1984");
livros.addFavorite("O Pequeno Príncipe"); // Este será o primeiro na lista

console.log("\nFilmes Favoritos (Ordenado):", filmes.getFavorites());
// Saída: ["Avatar", "Interstellar"]

console.log("Livros Favoritos (Mais Novo Primeiro):", livros.getFavorites());
// Saída: ["O Pequeno Príncipe", "1984"]