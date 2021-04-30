import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

//JAVASCRIPT IIFE - Função de Execução Imediata
//(() => { escopo global }) e "()" <- no final para ser executada

export const handleNovoItem = (evento) => {
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    //const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');

    //Lembrete desfazer esse "moment"
    const data = moment(calendario.value);
    const horario = data.format('HH:mm');
    const dataFormatada = data.format('DD/MM/YY');
    const concluida = false;
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados];

    //const criaTarefa = Tarefa(dados);

    //tarefas.push(dados);

    //lista.appendChild(criaTarefa);

    //setItem = 2 valores chave e valor
    //JSON.stringify() = serve como tradutor de objeto para string
    /* SessionStorage - armazena os dados enquanto a aplicação estiver sendo
    utilizada, porém quando se fecha o navegador ou apenas a aba os dados serão
    perdidos. */
    //sessionStorage.setItem("tarefas", JSON.stringify(dados));
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = " ";

    carregaTarefa();

}

export const Tarefa = ({valor, horario, concluida}, id) => {
//preventDefault() - evita que "recarregue a pagina quando clicar"
//ele anula o comportamento padrão de um evento
//evento.preventDefault();

    const tarefa = document.createElement('li');
    
    const conteudo = `<p class="content">${horario} * ${valor}</p>`;

    if (concluida) {
        //Classe de css não POO
        tarefa.classList.add('done');
    }

    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;

}

//COLOCAR () NO FINAL DA IIFE PARA MOSTRAR QUE ESTÁ SENDO EXECUTADA