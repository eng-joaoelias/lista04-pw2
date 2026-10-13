let listaTarefas = window.document.querySelector("#lista-tarefas");
let campoTxtAddTarefa = window.document.querySelector("#tarefa");
let btnAddTarefa = window.document.querySelector("#btnAddTarefa");

function adicionaTarefa() {
    let tarefaASerAdd = campoTxtAddTarefa.value;

    if (tarefaASerAdd.trim() === "") {
        return;
    }

    let novoItem = document.createElement("li");
    novoItem.textContent = tarefaASerAdd;

    listaTarefas.appendChild(novoItem);

    campoTxtAddTarefa.value = "";
    campoTxtAddTarefa.focus();
}

btnAddTarefa.addEventListener("click", adicionaTarefa);