const botaoAbrir = document.getElementById('abrir-caixa');
const botaoFechar = document.getElementById('fechar-caixa');
const botaoHistorico = document.getElementById('historico-de-caixa');
const painelCaixa = document.getElementById('painel-caixa');

// Inicia com o caixa fechado
let caixaAberto = false;

botaoAbrir.addEventListener('click', () => {
    caixaAberto = true;
    botaoAbrir.classList.add('d-none');
    botaoFechar.classList.remove('d-none');
    botaoFechar.classList.add('d-block');
    botaoHistorico.classList.add('d-none');
    botaoHistorico.classList.remove('d-block');
    painelCaixa.classList.remove('d-none');
    painelCaixa.classList.add('d-block');
});

botaoFechar.addEventListener('click', () => {
    caixaAberto = false;
    botaoAbrir.classList.remove('d-none');
    botaoAbrir.classList.add('d-block');
    botaoFechar.classList.remove('d-block');
    botaoFechar.classList.add('d-none');
    botaoHistorico.classList.remove('d-none');
    botaoHistorico.classList.add('d-block');
    painelCaixa.classList.remove('d-block');
    painelCaixa.classList.add('d-none');
});

// Controle de exibição inicial
if (!caixaAberto) {
    botaoFechar.classList.add('d-none');
    painelCaixa.classList.add('d-none');
}
