import menu from "./menu.json";
import dishCardTemplates from "./templates/menu-cards.hbs";
const menuGalleryEl = document.querySelector(".js-menu");
const colorTheme = document.querySelector(".theme-switch__toggle");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

colorTheme.addEventListener("change", changeColorTheme);
document.body.classList.add(localStorage.getItem("colorTheme"));

function makeMenuCards(menu) {
  return menu.map(dishCardTemplates).join("");
}

const menuGallery = makeMenuCards(menu);

menuGalleryEl.insertAdjacentHTML("beforeend", menuGallery);

function changeColorTheme() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("colorTheme", Theme.DARK);
    return;
  }
  if (document.body.classList.contains(Theme.DARK)) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem("colorTheme", Theme.LIGHT);
    return;
  }
  document.body.classList.add(Theme.DARK);
  localStorage.setItem("colorTheme", Theme.DARK);
}
