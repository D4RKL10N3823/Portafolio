let ataqueJugador;
let ataqueNpc;
let vidasJugador = 3;
let vidasNpc = 3;

//Inicia Juego
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-Ataque');
    sectionSeleccionarAtaque.style.display  = 'none';

    let sectionReiniciar = document.getElementById('Reiniciar');
    sectionReiniciar.style.display = 'none';

    let botonPokemonJugador = document.getElementById('boton-pokemon');
    botonPokemonJugador.addEventListener('click', seleccionarPokemonJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonPlanta = document.getElementById('boton-planta');
    botonPlanta.addEventListener('click', ataquePlanta);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
};

//Selección de Pokemones
function seleccionarPokemonJugador() {
    let sectionSeleccionarPokemon = document.getElementById('Seleccionar-Pokemon');
    sectionSeleccionarPokemon.style.display  = 'none';
    
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-Ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let input1 = document.getElementById('bulbasaur');
    let input2 = document.getElementById('squitle');
    let input3 = document.getElementById('charmander');
    let spanPokemonJugador = document.getElementById('pokemon-jugador');
    
    if(input1.checked) {
        spanPokemonJugador.innerHTML = 'Bulbasaur';
    } else if(input2.checked) {
        spanPokemonJugador.innerHTML = 'Squitle';
    } else if(input3.checked) {
        spanPokemonJugador.innerHTML = 'Charmander';
    } else {
        alert('Selecciona un Pokemon')
        iniciarJuego()
        sectionSeleccionarPokemon.style.display = 'block';
    }

    seleccionarPokemonNpc();
};

function seleccionarPokemonNpc() {
    let pokemonAleatorio = aleatorio(1,3);
    let spanPokemonNpc = document.getElementById('pokemon-npc');

    if(pokemonAleatorio == 1) {
        spanPokemonNpc.innerHTML = 'Bulbasaur';
    } else if(pokemonAleatorio == 2) {
        spanPokemonNpc.innerHTML = 'Squitle';
    } else {
        spanPokemonNpc.innerHTML = 'Charmander';
    }
};

//Empieza el Combate
function ataqueFuego() {
    ataqueJugador = 'Fuego';
    ataqueAleatorioNpc();
};

function ataqueAgua() {
    ataqueJugador = 'Agua';
    ataqueAleatorioNpc();
};

function ataquePlanta() {
    ataqueJugador = 'Planta';
    ataqueAleatorioNpc();
};

function ataqueAleatorioNpc() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueNpc = 'Fuego'
    } else if(ataqueAleatorio == 2) {
        ataqueNpc = 'Agua'
    } else {
        ataqueNpc = 'Planta'
    }

    combate() 
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador') 
    let spanVidasNpc= document.getElementById('vidas-npc') 

    if(ataqueJugador == ataqueNpc) {
        crearMensaje('EMPATE')
    } else if((ataqueJugador == 'Fuego' && ataqueNpc == 'Planta') || (ataqueJugador == 'Agua' && ataqueNpc == 'Fuego') || (ataqueJugador == 'Planta' && ataqueNpc == 'Agua')) {
        crearMensaje('GANASTE')
        vidasNpc--
        spanVidasNpc.innerHTML = vidasNpc
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador 
    }

    revisarVidas () 
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('Mensajes')
    let parrafo = document.createElement('p')
    if (resultado == 'PERDISTE'){
        parrafo.innerHTML = 'Tu Pokemon ataco con ' + ataqueJugador + '.  El Pokemon del enemigo atacó con ' + ataqueNpc + '. ' + resultado
        parrafo.style.color = "red"
        sectionMensajes.appendChild(parrafo)
    } else if (resultado == 'GANASTE'){
        parrafo.innerHTML = 'Tu Pokemon ataco con ' + ataqueJugador + '.  El Pokemon del enemigo atacó con ' + ataqueNpc + '. ' + resultado
        parrafo.style.color = " #5dcf00"
        sectionMensajes.appendChild(parrafo)
    }
    else {
        parrafo.innerHTML = 'Tu Pokemon ataco con ' + ataqueJugador + '.  El Pokemon del enemigo atacó con ' + ataqueNpc + '. ' + resultado
        sectionMensajes.appendChild(parrafo)
    }
}

 //Revisión del combate
function revisarVidas() {
    if(vidasNpc == 0) {
        crearMensajeFinal('FELICIDADES! GANASTE 🎉')
    } else if(vidasJugador == 0) {
        crearMensajeFinal('TRISTEMENTE PERDISTE ☹')
    }
}

 //Fin del combate
function crearMensajeFinal(resultadoFinal) {
    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'block'

    let sectionMensajes = document.getElementById('Mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego) 