'use strict'

let menuItem = document.querySelectorAll(".nav__menu-item");

for (let menu of menuItem) {
	menu.addEventListener("click", function (evt) {
		evt.preventDefault();
		menu.classList.toggle("nav__menu-item-open");
	});
}