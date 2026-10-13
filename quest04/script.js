let listaNotificacao = window.document.querySelector("#notificacoes");
const btnRemoveNotifica = window.document.querySelector("#remove");

function removerPrimeiraNotificacao() {
    let primeiraNotificacao = listaNotificacao.children[0];
    if (primeiraNotificacao) {
        listaNotificacao.removeChild(primeiraNotificacao);
    }
}

btnRemoveNotifica.addEventListener("click", removerPrimeiraNotificacao);