// Define o tipo para a tarefa (usando um objeto simples como sugerido)
type TaskObject = {
    id: number;
    description: string;
    type: 'project' | 'daily';
};

abstract class TaskManager {
    // Lista de tarefas deve ser acessível às subclasses
    protected tasks: TaskObject[] = [];
    protected nextId: number = 1;

    // Métodos abstratos que as subclasses devem implementar
    abstract addTask(task: string): void;
    abstract listTasks(): string[];

    // Método protegido para verificar duplicatas (compartilhado)
    protected isDuplicate(task: string): boolean {
        return this.tasks.some(t => t.description.toLowerCase() === task.toLowerCase());
    }
}

class Project extends TaskManager {
    constructor() {
        super();
        console.log("Sistema de Tarefas de Projeto inicializado.");
    }

    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.warn(`[Projeto] Tarefa duplicada não adicionada: ${task}`);
            return;
        }

        const newTask: TaskObject = {
            id: this.nextId++,
            description: task,
            type: 'project'
        };
        this.tasks.push(newTask);
        console.log(`[Projeto] Tarefa adicionada: ${task}`);
    }

    listTasks(): string[] {
        return this.tasks.map(t => `[${t.id}] Projeto: ${t.description}`);
    }
}

class DailyTasks extends TaskManager {
    constructor() {
        super();
        console.log("Sistema de Tarefas Diárias inicializado.");
    }

    addTask(task: string): void {
        if (this.isDuplicate(task)) {
            console.warn(`[Diário] Tarefa duplicada não adicionada: ${task}`);
            return;
        }

        const newTask: TaskObject = {
            id: this.nextId++,
            description: task,
            type: 'daily'
        };
        this.tasks.push(newTask);
        console.log(`[Diário] Tarefa adicionada: ${task}`);
    }

    listTasks(): string[] {
        return this.tasks.map(t => `[${t.id}] Diária: ${t.description}`);
    }
}

// Demonstração
const meuProjeto = new Project();
meuProjeto.addTask("Definir arquitetura");
meuProjeto.addTask("Definir arquitetura"); // Duplicata

const minhasTarefas = new DailyTasks();
minhasTarefas.addTask("Pagar contas");
minhasTarefas.addTask("Fazer exercícios");

console.log("\nLista do Projeto:", meuProjeto.listTasks());
console.log("Lista de Tarefas Diárias:", minhasTarefas.listTasks());