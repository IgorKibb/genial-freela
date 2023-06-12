const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const linkMenu = document.querySelector(".nav-menu");

const easterEgg = document.querySelector(".easter-egg");
const queEs = document.querySelector(".ques");

easterEgg.addEventListener("click", () => {
   queEs.classList.remove("ques");
});

hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle("active");
   navMenu.classList.toggle("active");
});

linkMenu.addEventListener("click", () => {
   hamburguer.classList.remove("active");
   navMenu.classList.remove("active");
});

