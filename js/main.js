const nav = document.querySelector("#nav");
const abrir  = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    nav.classList.add("nav-visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("nav-visible");
})


const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const body = document.querySelector("#body")

function darkModeActivo() {
    body.style.background = '#282928';
    body.style.color = 'white';
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
    localStorage.setItem('darkMode', 'activo');
};

function lightModeActivo() {
    body.style.background = 'white';
    body.style.color = 'black';
    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
    localStorage.setItem('darkMode', 'desactivo');
};

darkMode.addEventListener('click', darkModeActivo);
lightMode.addEventListener('click', lightModeActivo);

if(localStorage.getItem('darkMode') === 'activo') {
    darkModeActivo();
} else {
    lightModeActivo();
}