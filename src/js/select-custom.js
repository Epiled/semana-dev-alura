/* Selector Custom */
document
  .querySelector("[data-inputSelect]")
  .addEventListener("click", function () {
    this.classList.toggle("input--active");
    this.querySelector("[data-inputContainer]").classList.toggle(
      "input__container--open",
    );
  });

for (const option of document.querySelectorAll("[data-option]")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("input__option--select")) {
      this.parentNode
        .querySelector("[data-option].input__option--select")
        .classList.remove("input__option--select");
      this.classList.add("input__option--select");
      this.closest("[data-inputContainer]").querySelector(
        ".input__trigger span",
      ).textContent = this.textContent;
    }
  });
}

window.addEventListener("click", function (e) {
  const inputContainer = document.querySelector("[data-inputContainer]");
  const inputSelect = document.querySelector("[data-inputSelect]");
  if (!inputContainer.contains(e.target)) {
    inputContainer.classList.remove("input__container--open");
    inputSelect.classList.remove("input--active");
  }
});
