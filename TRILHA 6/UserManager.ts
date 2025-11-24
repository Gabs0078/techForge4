// --- PARTE 1: IMPLEMENTAÇÃO INICIAL (Baixa Coesão) ---

class UserManager_Initial {
    // 1. Responsabilidade: Criação/Gestão de Usuário
    createUser(name: string, email: string): void {
        console.log(`[UserMgr_Initial] Criando usuário: ${name}, ${email}`);
        
        // Lógica de salvar usuário (simulada)
        // ...

        // 2. Responsabilidade: Envio de Notificação (EmailNotification)
        this.sendEmail(email, "Bem-vindo!", "Seu cadastro foi concluído com sucesso.");
    }

    // Lógica de email dentro da classe de gestão de usuários
    private sendEmail(to: string, subject: string, body: string): void {
        console.log(`[UserMgr_Initial] Enviando email para ${to}. Assunto: ${subject}`);
        // Lógica real de envio de email (simulada)
        // ...
    }
}

// ----------------------------------------------------------------

// --- PARTE 2: REFATORAÇÃO (Alta Coesão / Baixo Acoplamento) ---

// Classe de Responsabilidade Única 1: Notificação por Email
class EmailNotification {
    send(to: string, subject: string, body: string): void {
        console.log(`[EmailNotification] Enviando email para ${to}. Assunto: ${subject}`);
        // A complexa lógica de conexão SMTP estaria aqui
    }
}

// Classe de Responsabilidade Única 2: Gestão de Usuários
class UserManager_Refactored {
    private notificationService: EmailNotification;

    constructor(notificationService: EmailNotification) {
        // Injeção de Dependência
        this.notificationService = notificationService;
    }

    createUser(name: string, email: string): void {
        console.log(`\n[UserManager_Refactored] Criando usuário: ${name}, ${email}`);
        
        // Lógica de salvar usuário (única responsabilidade)
        // ...

        // Delega responsabilidade de Notificação
        this.notificationService.send(email, "Bem-vindo!", "Seu cadastro foi concluído.");
    }
}

// Demonstração da Refatoração
const emailService = new EmailNotification();
const manager = new UserManager_Refactored(emailService); // Injetando

manager.createUser("Alice", "alice@email.com");