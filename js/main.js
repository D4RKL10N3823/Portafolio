const nav = document.querySelector("#nav");
const abrir  = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    nav.classList.add("nav-visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("nav-visible");
})

function Asistente() {
    var exec = require('child_process').exec;
    exec('python tu_script.py', function(error, stdout, stderr) {
        // Aquí puedes manejar la respuesta de tu script, por ejemplo:
        console.log(stdout);
    });
}