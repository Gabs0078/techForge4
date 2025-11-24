abstract class FiguraGeometrica {
    // Método abstrato: deve ser implementado nas subclasses
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    private raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// Função que usa o polimorfismo (aceita qualquer FiguraGeometrica)
function imprimirAreas(figuras: FiguraGeometrica[]): void {
    console.log("\n--- Cálculo de Áreas ---");
    figuras.forEach(figura => {
        // O método correto (Círculo, Quadrado ou Triângulo) é chamado
        console.log(`Área da ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)}`);
    });
}

// Demonstração
const formas = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 8)
];

imprimirAreas(formas);
/* Saída:
Área da Circulo: 78.54
Área da Quadrado: 16.00
Área da Triangulo: 24.00
*/