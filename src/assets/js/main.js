/* Menu Hamburguer */
const botaoHamburguer = document.querySelector("[data-hamburguer]");
const mobileMenu = document.querySelector("[data-mobileMenu]");

botaoHamburguer.addEventListener("click", () => {
    document.documentElement.classList.toggle('menuLateral__ativo');
    mobileMenu.classList.toggle("mobileMenu--show");
});

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menuLateral__ativo');
        mobileMenu.classList.remove('mobileMenu--show');
    };
};

/* Pesquisa */
const botaoLupa = document.querySelector("[data-lupa]");
botaoLupa.addEventListener("click", () => {
    document.querySelector('[data-pesquisa]').classList.toggle('entrada__pesquisa--ativa');
    document.querySelector('[data-logo]').classList.toggle('logo--ativo');
});


/* Highlight.js */
const areaDoCodigo = document.querySelector('[data-codeWrapper]');
const linguagem = document.querySelector('[data-codeLinguagem]');
const botao = document.querySelector('[data-botaoPreview]');

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('[data-code]');
    areaDoCodigo.innerHTML = `<code class="card__codigo hljs language-${linguagem.value}" data-code contenteditable="true"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
});

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('[data-code]')
    hljs.highlightBlock(codigo);
});

const seletorCor = document.querySelector('[data-seletorCor]');
const customConteiner = document.querySelector('[data-customConteiner]');

seletorCor.addEventListener('input', () => {
    customConteiner.style.background = seletorCor.value;

});