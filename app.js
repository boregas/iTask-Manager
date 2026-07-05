class Tarefa {
    titulo;
    descricao;
    data;
    concluido;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
        this.concluido = false;
    }
    renderizar() {
        const li = document.createElement('li');
        const dataFormatada = this.data.toLocaleDateString('pt-BR');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.concluido;
        checkbox.addEventListener('change', () => {
            this.concluido = checkbox.checked;
            console.log(this.concluido);
            li.classList.toggle('concluida');
        });
        li.innerHTML = `
            <strong>${this.titulo}</strong>

            ${this.descricao ? `<p>${this.descricao}</p> ` : ''}

            <small>Criado em: ${dataFormatada}</small>

            `;
        li.appendChild(checkbox);
        return li;
    }
}
class App {
    tarefas = [];
    adicionarTarefa(novaTarefa) {
        this.tarefas.push(novaTarefa);
        const lista = novaTarefa.renderizar();
        document.getElementById('lista')?.appendChild(lista);
    }
}
const btn = document.getElementById('addBtn');
const app = new App;
btn.addEventListener('click', () => {
    const inputT = document.getElementById('tituloInput');
    const inputD = document.getElementById('descInput');
    if (inputT.value === '') {
        alert('O título é obrigatório!');
        return;
    }
    const novaTarefa = new Tarefa(inputT.value, inputD.value);
    app.adicionarTarefa(novaTarefa);
    inputT.value = '';
    inputD.value = '';
});
export {};
//# sourceMappingURL=app.js.map