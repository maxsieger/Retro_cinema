const stulya = document.getElementById("Stulya");
const briliant = document.getElementById("Briliant");
const gentalmen = document.getElementById("Gentalmen");
const shurik = document.getElementById("shurik");

const film1 = document.querySelector(".film-1");
const film2 = document.querySelector(".film-2");
const film3 = document.querySelector(".film-3");
const film4 = document.querySelector(".film-4");

stulya.addEventListener("click", () => {
    stulya.classList.add("left-block__link--open");
    briliant.classList.remove("left-block__link--open");
    gentalmen.classList.remove("left-block__link--open");
    shurik.classList.remove("left-block__link--open");
    film1.style.display = "block";
    film2.style.display = "none";
    film3.style.display = "none";
    film4.style.display = "none";
});

briliant.addEventListener("click", () => {
    stulya.classList.remove("left-block__link--open");
    briliant.classList.add("left-block__link--open");
    gentalmen.classList.remove("left-block__link--open");
    shurik.classList.remove("left-block__link--open");
    film1.style.display = "none";
    film2.style.display = "block";
    film3.style.display = "none";
    film4.style.display = "none";
});

gentalmen.addEventListener("click", () => {
    stulya.classList.remove("left-block__link--open");
    briliant.classList.remove("left-block__link--open");
    gentalmen.classList.add("left-block__link--open");
    shurik.classList.remove("left-block__link--open");
    film1.style.display = "none";
    film2.style.display = "none";
    film3.style.display = "block";
    film4.style.display = "none";
});

shurik.addEventListener("click", () => {
    stulya.classList.remove("left-block__link--open");
    briliant.classList.remove("left-block__link--open");
    gentalmen.classList.remove("left-block__link--open");
    shurik.classList.add("left-block__link--open");
    film1.style.display = "none";
    film2.style.display = "none";
    film3.style.display = "none";
    film4.style.display = "block";
});

let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".left-block__list-phone");

burger.addEventListener("click", burger_open)

function burger_open() {
    menu.classList.toggle("left-block__list-phone--open");
    let name = menu.className;
    console.log(name)
}

const stulya1 = document.getElementById("Stulya-1");
const briliant1 = document.getElementById("Briliant-1");
const gentalmen1 = document.getElementById("Gentalmen-1");
const shurik1 = document.getElementById("Shurik-1");

stulya1.addEventListener("click", () => {
    film1.style.display = "block";
    film2.style.display = "none";
    film3.style.display = "none";
    film4.style.display = "none";
});

briliant1.addEventListener("click", () => {
    film1.style.display = "none";
    film2.style.display = "block";
    film3.style.display = "none";
    film4.style.display = "none";
});

gentalmen1.addEventListener("click", () => {
    film1.style.display = "none";
    film2.style.display = "none";
    film3.style.display = "block";
    film4.style.display = "none";
});

shurik1.addEventListener("click", () => {
    film1.style.display = "none";
    film2.style.display = "none";
    film3.style.display = "none";
    film4.style.display = "block";
});
