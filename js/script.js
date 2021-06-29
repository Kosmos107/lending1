const burger = document.querySelector(".header-section-burger")
const menuBerger = document.querySelector(".burger-header__menu")
const lineBurger = document.querySelector(".header-section-burger__line")
burger.addEventListener("click", () => {
    burger.classList.toggle("burger-off")
    menuBerger.classList.toggle("activeBurg")
    lineBurger.classList.toggle("_activeLine")
})

console.log(burger)