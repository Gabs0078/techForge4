class Temperatura {
    valorCelsius: number;

    constructor(valorCelsius: number) {
        this.valorCelsius = valorCelsius;
    }

    paraFahrenheit(): number {
        // Fórmula: (C * 9/5) + 32
        return (this.valorCelsius * 9 / 5) + 32;
    }

    paraKelvin(): number {
        // Fórmula: C + 273.15
        return this.valorCelsius + 273.15;
    }

    exibirConversoes(): void {
        console.log(`Temperatura em Celsius: ${this.valorCelsius}°C`);
        console.log(`Temperatura em Fahrenheit: ${this.paraFahrenheit().toFixed(2)}°F`);
        console.log(`Temperatura em Kelvin: ${this.paraKelvin().toFixed(2)}K`);
    }
}