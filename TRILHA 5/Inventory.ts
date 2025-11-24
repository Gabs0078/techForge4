// Define o tipo Record para o inventário: Chave (string) e Valor (number)
type InventoryMap = Record<string, number>;

abstract class Inventory {
    // O inventário é protegido para ser acessível às subclasses
    protected items: InventoryMap = {};

    // Métodos abstratos que as subclasses devem implementar
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): InventoryMap;
}

class WarehouseInventory extends Inventory {
    constructor() {
        super();
        console.log("Inventário do Armazém inicializado.");
    }

    addItem(item: string, quantity: number): void {
        if (quantity <= 0) {
            console.warn(`[Armazém] Quantidade inválida para ${item}.`);
            return;
        }
        // Adiciona a quantidade sem limite
        this.items[item] = (this.items[item] || 0) + quantity;
        console.log(`[Armazém] Adicionado ${quantity}x ${item}. Total: ${this.items[item]}`);
    }

    removeItem(item: string): void {
        if (this.items[item] && this.items[item] > 0) {
            this.items[item]--;
            console.log(`[Armazém] Removido 1x ${item}. Restante: ${this.items[item]}`);
            if (this.items[item] === 0) {
                 delete this.items[item]; // Remove se zerar
            }
        } else {
            console.warn(`[Armazém] Item ${item} não encontrado ou sem estoque.`);
        }
    }

    getInventory(): InventoryMap {
        return { ...this.items }; // Retorna uma cópia para proteger o estado interno
    }
}

class StoreInventory extends Inventory {
    private MAX_QUANTITY = 10;

    constructor() {
        super();
        console.log("Inventário da Loja (Limite de 10) inicializado.");
    }

    addItem(item: string, quantity: number): void {
        if (quantity <= 0) {
            console.warn(`[Loja] Quantidade inválida para ${item}.`);
            return;
        }

        const currentQuantity = this.items[item] || 0;
        const newQuantity = currentQuantity + quantity;

        if (newQuantity > this.MAX_QUANTITY) {
            console.error(`[Loja] Limite excedido para ${item}. Máximo: ${this.MAX_QUANTITY}`);
            return;
        }

        this.items[item] = newQuantity;
        console.log(`[Loja] Adicionado ${quantity}x ${item}. Total: ${this.items[item]}`);
    }

    removeItem(item: string): void {
        if (this.items[item] && this.items[item] > 0) {
            this.items[item]--;
            console.log(`[Loja] Removido 1x ${item}. Restante: ${this.items[item]}`);
            if (this.items[item] === 0) {
                 delete this.items[item];
            }
        } else {
            console.warn(`[Loja] Item ${item} não encontrado ou sem estoque.`);
        }
    }

    getInventory(): InventoryMap {
        return { ...this.items };
    }
}

// Demonstração
const armazem = new WarehouseInventory();
armazem.addItem("Cimento", 500);

const loja = new StoreInventory();
loja.addItem("Lâmpada", 8);
loja.addItem("Lâmpada", 2);  // Chega a 10 (ok)
loja.addItem("Lâmpada", 1);  // Excede o limite (erro)

console.log("\nInventário Armazém:", armazem.getInventory());
console.log("Inventário Loja:", loja.getInventory());