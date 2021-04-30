//(()=>{
    
    //IIFE
    const concluirTarefa = (atualiza ,id) => {
        const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
        tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    
        localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    
        atualiza();
    }
    
    
    const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button');

    //adiciona uma classe para css via js
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id));

    return botaoConclui;

}

    //const botaoConclui = evento.target;

    //elemento parentElement está linkando com a li 
    //const tarefaCompleta = botaoConclui.parentElement;

    //tarefaCompleta.classList.toggle('done');
//})()

export default BotaoConclui;