// 1. Crie a interface Documento
interface Documento {
    titulo: string;
    conteudo: string;
}

// 2. Implemente a interface na classe Texto
class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    // 3. Crie o método exibir() formatado
    exibir(): string {
        return `Título: [${this.titulo}], Conteúdo: [${this.conteudo}]`;
    }
}

// Demonstração
const doc = new Texto("Relatório Trimestral", "Os resultados superaram as expectativas.");
console.log(doc.exibir());
// Saída: Título: [Relatório Trimestral], Conteúdo: [Os resultados superaram as expectativas.]