"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tarefa {
    titulo;
    descricao;
    data;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
    }
    apresentar() {
        return `Tarefa: ${this.titulo}.\n${this.descricao}.\nData: ${this.data.toLocaleDateString()}`;
    }
    
}
const minhaTarefa = new Tarefa("Estudar DOM", "Começar os estudos de DOM pelo trainee da iJunior");
console.log(minhaTarefa.apresentar());
//# sourceMappingURL=app.js.map