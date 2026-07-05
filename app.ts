class Tarefa{
    titulo: string;
    descricao: string | undefined;
    data: Date;
    concluido: boolean;

    constructor(titulo: string, descricao?: string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
        this.concluido = false;
    }

    renderizar(){
  
        const li = document.createElement('li');
        const dataFormatada = this.data.toLocaleDateString('pt-BR');
        const checkbox = document.createElement('input')

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

class App{
    tarefas: Tarefa[] = [];
    adicionarTarefa(novaTarefa: Tarefa){
        this.tarefas.push(novaTarefa) 
        const lista = novaTarefa.renderizar()
        document.getElementById('lista')?.appendChild(lista);
    }
}

const btn = document.getElementById('addBtn') as HTMLButtonElement;
const app = new App;
btn.addEventListener('click', () => {
    const inputT = document.getElementById('tituloInput') as HTMLInputElement;
    const inputD = document.getElementById('descInput') as HTMLInputElement;
    if(inputT.value === ''){
        alert('O título é obrigatório!')
        return;
        
    }
    const novaTarefa = new Tarefa(inputT.value, inputD.value);
    app.adicionarTarefa(novaTarefa);
    inputT.value = '';
    inputD.value = '';
});
