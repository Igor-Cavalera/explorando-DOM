//(()=>{
    
    //IIFE
    const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    //adiciona uma classe para css via js
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    //elemento parentElement está linkando com a li 
    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}
//})()

export default BotaoConclui;