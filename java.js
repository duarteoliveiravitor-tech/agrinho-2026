document.addEventListener("DOMContentLoaded", function() {
    // Adiciona data dinâmica no cabeçalho
    exibirDataAtual();

    // Habilita as funções dos botões de irrigação
    configurarBotoesIrrigacao();
});

function exibirDataAtual() {
    const elementoData = document.getElementById("data-atual");
    if (elementoData) {
        const hoje = new Date();
        const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
        elementoData.textContent = hoje.toLocaleDateString('pt-BR', opcoes);
    }
}

function configurarBotoesIrrigacao() {
    const botoes = document.querySelectorAll(".btn-irrigar");
    
    botoes.forEach(botao => {
        botao.addEventListener("click", function(evento) {
            const card = evento.target.closest(".talhao-card");
            const cultura = card.getAttribute("data-cultura");
            
            alert(`Confirmação: Irrigação registrada com sucesso para a cultura de ${cultura}!`);
            
            const botaoClicado = evento.target;
            botaoClicado.textContent = "✅ Irrigado Hoje";
            botaoClicado.style.backgroundColor = "#2d6a4f";
            botaoClicado.style.color = "#ffffff";
            botaoClicado.disabled = true;

            setTimeout(() => {
                botaoClicado.textContent = "💧 Registrar Irrigação";
                botaoClicado.style.backgroundColor = "";
                botaoClicado.style.color = "";
                botaoClicado.disabled = false;
            }, 4000);
        });
    });
}
