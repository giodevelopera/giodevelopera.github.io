



const burger_nav = document.getElementById("mobile-menu");
const burger_icon = document.getElementById("burger");
const menu_close = document.getElementById("menu-close");

burger_icon.addEventListener("click", () => {
  burger_nav.classList.add("close");
});

menu_close.addEventListener("click", () => {
  burger_nav.classList.remove("close");
});

function handleBtnPress() {
  alert("Welcome")
}


function handleBtnPress1() {
  alert("The reservation was made successfully")
}