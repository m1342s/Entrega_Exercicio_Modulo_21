document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeAbas();
      aba.classList.add("media__list--is-active");
      removeBotao();
      botao.target.classList.add("media__tabs__button--is-active");
    });
  }
  function removeBotao() {
    const buttons = document.querySelectorAll("[data-tab-button]");
    for (let index = 0; index < buttons.length; index++) {
      buttons[index].classList.remove("media__tabs__button--is-active");
    }
  }

  function escondeAbas() {
    const listContainer = document.querySelectorAll("[data-tab-id]");
    for (let index = 0; index < listContainer.length; index++) {
      listContainer[index].classList.remove("media__list--is-active");
    }
  }
});
