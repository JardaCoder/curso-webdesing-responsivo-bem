var buttonMenu = document.querySelector(".js-menu-button");

buttonMenu.onclick = function () {
  let menu = document.querySelector(".js-menu");

  menu.classList.toggle("menu--active");
};
