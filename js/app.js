const menu = document.querySelector(".icon-menu");
const btncloseMenuMobile = document.querySelector(".icon-cancel");
const menuMobile = document.querySelector("#mobile-menu");
const mobileLink = document.querySelectorAll(".mobileLink");

menu.addEventListener("click", () => {
	menuMobile.classList.remove("hidden");
});
btncloseMenuMobile.addEventListener("click", closeMenuMobile);
mobileLink.forEach((el) => {
	el.addEventListener("click", closeMenuMobile);
});

function closeMenuMobile() {
	menuMobile.classList.add("hidden");
}
