let film1 = document.getElementById("Stulya");

let film = film1.addEventListener("click", open_film);


function open_film() {
    let film1_1 = document.getElementsByClassName("film-1");
    film1_1.classList.toggle("film--open");
}