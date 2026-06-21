/* Seletor Custom */
document.querySelector('[data-entradaSelecao]').addEventListener('click', function() {
    this.classList.toggle('entrada--ativa');
    this.querySelector('[data-entradaConteiner]').classList.toggle('entrada__conteiner--aberta');
})

for (const option of document.querySelectorAll("[data-opcao]")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('entrada__opcao--selecionada')) {
            this.parentNode.querySelector('[data-opcao].entrada__opcao--selecionada').classList.remove('entrada__opcao--selecionada');
            this.classList.add('entrada__opcao--selecionada');
            this.closest('[data-entradaConteiner]').querySelector('.entrada__gatilho span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const entradaConteiner = document.querySelector('[data-entradaConteiner]');
    const entradaSelecao = document.querySelector('[data-entradaSelecao]');
    if (!entradaConteiner.contains(e.target)) {
        entradaConteiner.classList.remove('entrada__conteiner--aberta');
        entradaSelecao.classList.remove('entrada--ativa')
    }
});