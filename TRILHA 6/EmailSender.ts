// --- PARTE 1: IMPLEMENTAÇÃO INICIAL (Baixa Coesão) ---

class EmailSender_Initial {
    // 1. Responsabilidade: Envio de Email
    sendEmail(email: string, subject: string, body: string): boolean {
        // 2. Responsabilidade: Validação de Contato (dentro do método de envio)
        if (!this.isValidEmail(email)) {
            console.error(`[EmailSender_Initial] Erro: Email inválido: ${email}`);
            return false;
        }

        console.log(`[EmailSender_Initial] Email enviado para ${email}.`);
        // Lógica real de envio
        return true;
    }

    // Lógica de validação dentro da classe de envio
    private isValidEmail(email: string): boolean {
        // Regex de validação de email simples (simulado)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// ----------------------------------------------------------------

// --- PARTE 2: REFATORAÇÃO (Alta Coesão / Baixo Acoplamento) ---

// Classe de Responsabilidade Única 1: Validação de Contato
class ContactValidator {
    isValidEmail(email: string): boolean {
        // Lógica complexa de validação (Regex, checagem de domínio, etc.)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        
        if (!isValid) {
            console.error(`[ContactValidator] Email inválido detectado: ${email}`);
        }
        return isValid;
    }
}

// Classe de Responsabilidade Única 2: Envio de Email
class EmailSender_Refactored {
    private validator: ContactValidator;

    constructor(validator: ContactValidator) {
        // Injeção de Dependência
        this.validator = validator;
    }

    sendEmail(email: string, subject: string, body: string): boolean {
        // Delega a responsabilidade de Validação
        if (!this.validator.isValidEmail(email)) {
            return false;
        }

        // Lógica de envio (única responsabilidade restante)
        console.log(`\n[EmailSender_Refactored] Enviando email para ${email}.`);
        console.log(`Assunto: ${subject}. Conteúdo: ${body.substring(0, 15)}...`);
        return true;
    }
}

// Demonstração da Refatoração
const validatorService = new ContactValidator();
const sender = new EmailSender_Refactored(validatorService); // Injetando

// Caso de sucesso
sender.sendEmail("contato@exemplo.com", "Teste SRP", "Este é um email de teste.");

// Caso de falha (validação é executada pela classe injetada)
sender.sendEmail("invalido@", "Erro", "Este email deve falhar.");