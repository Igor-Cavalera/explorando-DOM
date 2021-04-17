import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

    //JAVASCRIPT IIFE - Função de Execução Imediata
    //(() => { escopo global }) e "()" <- no final para ser executada

    const criarTarefa = (evento) => {
    //preventDefault() - evita que "recarregue a pagina quando clicar"
    //ele anula o comportamento padrão de um evento
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li');
    //Classe de css não POO
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

//COLOCAR () NO FINAL DA IIFE PARA MOSTRAR QUE ESTÁ SENDO EXECUTADA
