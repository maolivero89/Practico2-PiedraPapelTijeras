// Marcadores en 0 para ambos jugadores

let puntosJugador = 0;
let puntosComputadora = 0;

let instrucciones = document.querySelector("#instrucciones");
let piedra_div= document.getElementById('Piedra');
let papel_div= document.getElementById('Papel');
let tijera_div= document.getElementById('Tijera');
let contenedorPuntosUsuario = document.querySelector("#puntosJugador");
let contenedorPuntosPC = document.querySelector("#puntosComputadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuOpcion = document.querySelector("#opciones");


let contenedorEleccionUsuario = document.querySelector("#eleccionUsuario");
let contenedorEleccionPC = document.querySelector("#eleccionComputadora");

//convierte el nombre en Mayuscula en el mensaj final
function upperCase() {
  const x = document.getElementById("nombreJugador");
  x.value = x.value.toUpperCase();
}


// funcion para obtener el nombre del jugador mediante un imput y luego utlizarlo en el juego
function obtenerNombreJugador() {
  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
  let input = (document.getElementById("nombreJugador").value);
  let nombreJugador = input;
  document.getElementById("nombreJug").innerHTML=nombreJugador.toUpperCase(); //convierte el nombre en MAYUS en el tablero
  document.getElementById("entrada").style.display="none"; // Oculta el div luego de presionar el boton

  }); 
} obtenerNombreJugador();

//funcion para obtener jugadas random de la computadora 

function obtenerJugadaComputadora() {
  let valoresJuego = ["Piedra", "Papel", "Tijera"];
   return valoresJuego[Math.floor(Math.random() * valoresJuego.length)];
}

    // funcion para comparar jugadas entre usuario y computadora. Y determinar el ganador del juego.

function game(opcion){
  const eleccionComp= obtenerJugadaComputadora();
  const eleccionJugador= opcion;
   switch (eleccionComp+eleccionJugador) {
     case 'PiedraTijera':
     case 'PapelPiedra':
     case 'TijeraPapel':
         ganarPc(eleccionJugador, eleccionComp);
        break;
     case 'PiedraPapel':
     case 'PapelTijera':
     case 'TijeraPiedra':
         ganarUsuario(eleccionJugador, eleccionComp);
        break;
     case 'PiedraPiedra':
     case 'PapelPapel':
     case 'TijeraTijera':
         empate(eleccionJugador);
        break;
    }

      mensaje.classList.remove("disabled");
      contenedorEleccionUsuario.innerText = eleccionJugador;
      contenedorEleccionPC.innerText = eleccionComp;

      if (puntosJugador === 3|| puntosComputadora === 3) {

        if (puntosJugador === 3) {
            instrucciones.innerText =  "🔥🤪" + nombreJugador.value +"🔥🤪 Ganaste el juego!🥳🥳";       
           }
  
        if (puntosComputadora === 3) {
            instrucciones.innerText =  "😵‍💫"+ nombreJugador.value + "🥴 Perdiste ¡La computadora ganó el juego! 😤😤"            
          }
  
        elegiTuOpcion.classList.add("disabled");
        reiniciar.classList.remove("disabled");        
        reiniciar.addEventListener("click", reiniciarJuego);
                
      }
}   

      //obtener jugada del jugador mediante el click en el boton elegido
function main(){
  piedra_div.addEventListener('click', () => game("Piedra"));
  papel_div.addEventListener('click', () => game("Papel"));
  tijera_div.addEventListener('click', () => game("Tijera"));
}
  main();

    //suma puntos al usuario al ganar una ronda
  function ganarUsuario(){
    puntosJugador++;
    contenedorPuntosUsuario.innerText = puntosJugador;
    contenedorGanaPunto.innerText =  " 🧑‍💻 ¡Ganaste un punto! 💣💥"
  }

    //suma puntos a la computadora la ganar una ronda
  function ganarPc() {
    puntosComputadora++;
    contenedorPuntosPC.innerText = puntosComputadora;
    contenedorGanaPunto.innerText = "💻 ¡La computadora ganó un punto! 💣💥 "
  }

  //muestra un empate, no suma puntos
  function empate() {
     contenedorGanaPunto.innerText = "¡Empate!"
  }

  //reinicia el juego, luego de un ganador.

 function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuOpcion.classList.remove("disabled");
    mensaje.classList.add("disabled");

  
    puntosJugador = 0;
    puntosComputadora = 0;
      
    contenedorPuntosUsuario.innerText = puntosJugador;
    contenedorPuntosPC.innerText = puntosComputadora;
  
    instrucciones.innerText = "El primero en ganar 3 rondas saldra victorioso."
    }