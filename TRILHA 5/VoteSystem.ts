type VoteResults = Record<string, number>;

abstract class VoteSystem {
    // Armazena os votos de forma simples (candidato: contagem)
    protected votes: VoteResults = {};

    // Métodos abstratos
    abstract voteFor(candidate: string): void;
    abstract getResults(): any; // Usamos 'any' pois o tipo de retorno muda (object vs array)
}

class Election extends VoteSystem {
    constructor() {
        super();
        console.log("Sistema de Eleição (Contagem Simples) inicializado.");
    }

    voteFor(candidate: string): void {
        // Incrementa o voto para o candidato
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Eleição] Voto computado para ${candidate}.`);
    }

    // Retorna o total de votos por candidato em um objeto (object)
    getResults(): VoteResults {
        return { ...this.votes };
    }
}

class Poll extends VoteSystem {
    constructor() {
        super();
        console.log("Sistema de Enquete (Ranking) inicializado.");
    }

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`[Enquete] Voto computado para ${candidate}.`);
    }

    // Retorna a lista dos candidatos em ordem de votos (array ordenado)
    getResults(): { candidate: string, votes: number }[] {
        // 1. Converte o objeto de votos em um array de objetos [ {candidate, votes} ]
        const resultsArray = Object.keys(this.votes).map(candidate => ({
            candidate,
            votes: this.votes[candidate]
        }));

        // 2. Ordena o array pelo número de votos (do maior para o menor)
        return resultsArray.sort((a, b) => b.votes - a.votes);
    }
}

// Demonstração
const eleicao = new Election();
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A"); // A tem 2 votos

const enquete = new Poll();
enquete.voteFor("Opção X");
enquete.voteFor("Opção Y");
enquete.voteFor("Opção X");
enquete.voteFor("Opção X"); // X tem 3 votos

console.log("\nResultados da Eleição (Objeto):", eleicao.getResults());
// Saída: { 'Candidato A': 2, 'Candidato B': 1 }

console.log("\nResultados da Enquete (Ranking):", enquete.getResults());
/* Saída (ordenado):
[
  { candidate: 'Opção X', votes: 3 },
  { candidate: 'Opção Y', votes: 1 }
]
*/