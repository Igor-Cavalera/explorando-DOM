import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

    //JAVASCRIPT IIFE - Função de Execução Imediata
    //(() => { escopo global }) e "()" <- no final para ser executada

    const handleNovoItem = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const calendario = document.querySelector('[data-form-date]');

        //Lembrete desfazer esse "moment"
        const data = moment(calendario.value);

        const dataFormatada = data.format('DD/MM/YY');

        const dados = {
            valor,
            dataFormatada
        }

        const criaTarefa = criarTarefa(dados);

        lista.appendChild(criaTarefa);
        input.value = " ";
    
    }

    const criarTarefa = ({valor, dataFormatada}) => {
    //preventDefault() - evita que "recarregue a pagina quando clicar"
    //ele anula o comportamento padrão de um evento
    //evento.preventDefault();

        const tarefa = document.createElement('li');
        //Classe de css não POO
        tarefa.classList.add('task');

        const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());

        return tarefa;
    
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

//COLOCAR () NO FINAL DA IIFE PARA MOSTRAR QUE ESTÁ SENDO EXECUTADA
