/* Menu Toggle */
const buttonToggle = document.querySelector("[data-toggle]");
const mobileMenu = document.querySelector("[data-sidebar]");

buttonToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("sidebar__active");
  mobileMenu.classList.toggle("sidebar--show");
});

document.documentElement.onclick = function (event) {
  if (event.target === document.documentElement) {
    document.documentElement.classList.remove("sidebar__active");
    mobileMenu.classList.remove("sidebar--show");
  }
};

/* Search */
const buttonSearch = document.querySelector("[data-magnifyGlass]");
buttonSearch.addEventListener("click", () => {
  document
    .querySelector("[data-search]")
    .classList.toggle("input__search--active");
  document.querySelector("[data-logo]").classList.toggle("logo--active");
});

/* Highlight.js */
const codeArea = document.querySelector("[data-codeWrapper]");
const language = document.querySelector("[data-codeLanguage]");
const buttonPreview = document.querySelector("[data-buttonPreview]");

function changeLanguage() {
  const code = codeArea.querySelector("[data-code]");
  codeArea.innerHTML = `<code class="card__code hljs language-${language.value}" data-code contenteditable="true"></code>`;
  codeArea.firstChild.innerText = code.innerText;
}

language.addEventListener("change", () => {
  changeLanguage();
});

buttonPreview.addEventListener("click", () => {
  const code = codeArea.querySelector("[data-code]");
  hljs.highlightBlock(code);
});

const selectColor = document.querySelector("[data-selectColor]");
const customContainer = document.querySelector("[data-customContainer]");

selectColor.addEventListener("input", () => {
  customContainer.style.background = selectColor.value;
});
