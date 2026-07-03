class Tarefa{
    titulo: string;
    descricao: string;
    data: Date;

    constructor(titulo: string, descricao: string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
    }

    apresentar(){
        return `Tarefa: ${this.titulo}.\n${this.descricao}.\nData: ${this.data.toLocaleDateString()}`;
    }

    renderizar(){
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${this.titulo}</strong>
            `;
        return li;
    }
}

//const minhaTarefa = new Tarefa("Estudar DOM", "Começar os estudos de DOM pelo trainee da iJunior");
//console.log(minhaTarefa.apresentar())

const btn = document.getElementById('addBtn') as HTMLButtonElement;
btn.addEventListener('click', () => {
    const input = document.getElementById('membroInput') as HTMLInputElement;
    const novaTarefa = new Tarefa(input.value, "");
    document.getElementById('lista')?.appendChild(novaTarefa.renderizar());
});