// --- PARTE 1: IMPLEMENTAÇÃO INICIAL (Baixa Coesão) ---

type Item = { name: string, price: number, quantity: number };

class Order_Initial {
    items: Item[] = [];
    totalPrice: number = 0;
    paymentStatus: string = "Pending";
    shippingStatus: string = "Pending";

    // 1. Responsabilidade: Adicionar itens (Cart)
    addItem(item: Item): void {
        this.items.push(item);
        this.calculateTotal(); // Responsabilidade: Calcular Total
    }

    // 2. Responsabilidade: Calcular Total
    calculateTotal(): void {
        this.totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        console.log(`[Order_Initial] Preço total calculado: R$${this.totalPrice.toFixed(2)}`);
    }

    // 3. Responsabilidade: Processar Pagamento (Payment)
    processPayment(amount: number): boolean {
        if (amount >= this.totalPrice && this.paymentStatus === "Pending") {
            this.paymentStatus = "Paid";
            console.log("[Order_Initial] Pagamento processado com sucesso.");
            return true;
        }
        console.error("[Order_Initial] Falha no processamento do pagamento.");
        return false;
    }

    // 4. Responsabilidade: Atualizar Status de Envio (Shipping)
    updateShipping(newStatus: string): void {
        this.shippingStatus = newStatus;
        console.log(`[Order_Initial] Status de envio atualizado para: ${newStatus}`);
    }
}

// ----------------------------------------------------------------

// --- PARTE 2: REFATORAÇÃO (Alta Coesão / Baixo Acoplamento) ---

// Classe de Responsabilidade 1: Carrinho
class Cart {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
        console.log(`[Cart] Item adicionado: ${item.name}`);
    }

    calculateTotal(): number {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItems(): Item[] {
        return this.items;
    }
}

// Classe de Responsabilidade 2: Pagamento
class PaymentProcessor {
    process(totalAmount: number, paidAmount: number): string {
        if (paidAmount >= totalAmount) {
            console.log(`[PaymentProcessor] Pagamento de R$${paidAmount.toFixed(2)} processado.`);
            return "Paid";
        }
        console.error("[PaymentProcessor] Pagamento falhou. Valor insuficiente.");
        return "Failed";
    }
}

// Classe de Responsabilidade 3: Envio
class ShippingService {
    updateStatus(orderId: number, newStatus: string): string {
        console.log(`[ShippingService] Envio do pedido #${orderId} atualizado para: ${newStatus}`);
        return newStatus;
    }
}

// Classe ORDENADORA (Orchestrator) - Agora só gerencia o fluxo de trabalho
class Order_Refactored {
    private orderId: number;
    private cart: Cart;
    private paymentProcessor: PaymentProcessor;
    private shippingService: ShippingService;

    public totalPrice: number = 0;
    public paymentStatus: string = "Pending";
    public shippingStatus: string = "Pending";

    constructor(orderId: number, cart: Cart, paymentProcessor: PaymentProcessor, shippingService: ShippingService) {
        this.orderId = orderId;
        // Injeção de Dependências no construtor
        this.cart = cart;
        this.paymentProcessor = paymentProcessor;
        this.shippingService = shippingService;
    }

    // Método principal para finalizar o pedido
    checkout(paidAmount: number): void {
        this.totalPrice = this.cart.calculateTotal();
        console.log(`\n--- Pedido #${this.orderId} Iniciado ---`);
        console.log(`Total a pagar: R$${this.totalPrice.toFixed(2)}`);

        // Delega responsabilidade de Pagamento
        this.paymentStatus = this.paymentProcessor.process(this.totalPrice, paidAmount);

        if (this.paymentStatus === "Paid") {
            // Delega responsabilidade de Envio
            this.shippingStatus = this.shippingService.updateStatus(this.orderId, "Dispatched");
        }
    }
}

// Demonstração da Refatoração
const myCart = new Cart();
myCart.addItem({ name: "Monitor", price: 500, quantity: 1 });
myCart.addItem({ name: "Teclado", price: 100, quantity: 2 });

const payment = new PaymentProcessor();
const shipping = new ShippingService();

const finalOrder = new Order_Refactored(1001, myCart, payment, shipping);
finalOrder.checkout(700); // Paga o total (500 + 2*100 = 700)