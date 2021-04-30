//(()=>{
    const deletarTarefa = (atualiza, id) => {
        const index = id;
        const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
        //splice recebe o valor e até onde ele vai ser deletado
        tarefasCadastradas.splice(index, 1)
        localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
        atualiza();
        //const botaoDeleta = evento.target;
        
        //const tarefaCompleta = botaoDeleta.parentElement;
        //tarefaCompleta.remove();
    
        //return botaoDeleta;
    }

    const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('classe');
    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id));

    return botaoDeleta;

}


//})()

export default BotaoDeleta;