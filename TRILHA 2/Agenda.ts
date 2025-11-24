class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        if (compromisso && compromisso.trim() !== "") {
            this.compromissos.push(compromisso);
            console.log(`Compromisso "${compromisso}" adicionado.`);
        } else {
            console.log("O compromisso não pode ser vazio.");
        }
    }

    listarCompromissos(): void {
        console.log("\n--- LISTA DE COMPROMISSOS ---");
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
            return;
        }

        this.compromissos.forEach((c, index) => {
            console.log(`${index + 1}. ${c}`);
        });
        console.log("--------------------------");
    }
}