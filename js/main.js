const nav = document.querySelector("#nav");
const abrir  = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    nav.classList.add("nav-visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("nav-visible");
})

const modoOscuro = document.querySelector("#modo-oscuro");
const modoClaro = document.querySelector("#modo-claro");
const body = document.querySelector("#body")

function modoOscuroActivo() {
    body.style.background = '#282928';
    body.style.color = 'white';
    modoOscuro.style.display = 'none';
    modoClaro.style.display = 'block';
    localStorage.setItem('modoOscuro', 'activo');
};

function modoClaroActivo() {
    body.style.background = 'white';
    body.style.color = 'black';
    modoClaro.style.display = 'none';
    modoOscuro.style.display = 'block';
    localStorage.setItem('modoOscuro', 'desactivo');
};

modoOscuro.addEventListener('click', modoOscuroActivo);
modoClaro.addEventListener('click', modoClaroActivo);

if(localStorage.getItem('modoOscuro') === 'activo') {
    modoOscuroActivo();
} else {
    modoClaroActivo();
}