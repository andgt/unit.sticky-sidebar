'use strict'

let menuItem = document.querySelectorAll(".nav__menu-item");

/*for (var i = menuItem.length - 1; i <= 9; i++) {
	menuItem[i].classList.toggle("nav__menu-item-open");
}*/


/*menuItem.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log(menuItem);
	menuItem.classList.toggle("nav__menu-item-open");
});*/

for (let menu of menuItem) {
	menu.addEventListener("click", function (evt) {
	evt.preventDefault();
	menu.classList.toggle("nav__menu-item-open");
});
}