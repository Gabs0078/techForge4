class Animal {
    // Atributo protegido (encapsulamento para herança)
    protected energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    // Método que pode ser sobrescrito
    comer(quantidade: number): void {
        this.energia += quantidade;
        console.log(`Energia base aumentada em ${quantidade}.`);
    }

    statusEnergia(): void {
        console.log(`${this.constructor.name} - Nível de Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    constructor() {
        super(100); // Leão começa com mais energia
    }

    // Sobrescrita com lógica adicional (caçar)
    comer(quantidade: number): void {
        console.log("🦁 Leão caçando... (gasto de energia)");
        this.energia -= 20; // Gasta energia para caçar

        // Chama o método comer() da classe pai para recuperação
        super.comer(quantidade + 20); // Recupera o gasto + o alimento
    }
}

class Passaro extends Animal {
    constructor() {
        super(30); // Pássaro começa com pouca energia
    }
    
    // Sobrescrita simples (só aumenta energia)
    comer(quantidade: number): void {
        console.log("🐦 Pássaro se alimentando...");
        super.comer(quantidade); // Apenas aumenta a energia
    }
}

// Demonstração
const leo = new Leao();
const piu = new Passaro();

console.log("\n--- Ações dos Animais ---");
leo.statusEnergia(); // Nível de Energia: 100
piu.statusEnergia(); // Nível de Energia: 30

leo.comer(50); // Leão caça e come
piu.comer(10); // Pássaro come
console.log("-------------------------");

leo.statusEnergia(); // Saída: Nível de Energia: 150 (100 - 20 + 70)
piu.statusEnergia(); // Saída: Nível de Energia: 40 (30 + 10)