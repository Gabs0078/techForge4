abstract class Funcionario {
    // Atributos encapsulados (usando private e getters/setters implícitos)
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    // Método abstrato: cada subclasse deve definir seu próprio cálculo
    abstract calcularBonus(): number;

    // Getters para acessar atributos privados/protegidos (encapsulamento)
    public getSalario(): number {
        return this.salario;
    }
    public getNome(): string {
        return this.nome;
    }
}

class Gerente extends Funcionario {
    // Gerente tem bônus de 10%
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    // Operário tem bônus de 5%
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

// Função que usa o polimorfismo
function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("\n--- Salário Final com Bônus ---");
    funcionarios.forEach(func => {
        // Chama o cálculo de bônus específico (polimórfico)
        const bonus = func.calcularBonus();
        const salarioFinal = func.getSalario() + bonus;
        
        console.log(`${func.getNome()} (${func.constructor.name}):`);
        console.log(`  Salário Base: R$${func.getSalario().toFixed(2)}`);
        console.log(`  Bônus: R$${bonus.toFixed(2)}`);
        console.log(`  Salário Total: R$${salarioFinal.toFixed(2)}`);
    });
}

// Demonstração
const equipe = [
    new Gerente("Ana Souza", 8000.00),
    new Operario("Beto Lima", 3000.00),
    new Gerente("Carlos Diniz", 12000.00)
];

calcularSalarioComBonus(equipe);