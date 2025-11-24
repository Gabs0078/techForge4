class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false; // Inicializa como não lido
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    getStatus(): string {
        return this.lido ? "Lido" : "Não Lido";
    }
}