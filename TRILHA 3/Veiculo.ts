class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo.");
    }
}

class Carro extends Veiculo {
    // Sobrescreve o método mover da classe pai
    mover(): void {
        console.log("O carro está dirigindo.");
    }
}

class Bicicleta extends Veiculo {
    // Sobrescreve o método mover da classe pai
    mover(): void {
        console.log("A bicicleta está pedalando.");
    }
}

// Instanciação e chamada
const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover();        // Saída: O carro está dirigindo.
minhaBicicleta.mover();  // Saída: A bicicleta está pedalando.