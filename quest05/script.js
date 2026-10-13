const btnMostrarMsg = window.document.querySelector("#btn-exibir");
let localImprimeMensagem = window.document.querySelector("#resposta");

function imprimeMensagem() {
    let campoNome = window.document.querySelector("#campo-nome");
    let nomePessoa = campoNome.value
    localImprimeMensagem.innerText = "Boas vindas, " + nomePessoa;
}

btnMostrarMsg.addEventListener("click", imprimeMensagem);