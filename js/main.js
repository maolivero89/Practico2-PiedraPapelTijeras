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





function obtenerNombreJugador() {
  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
  let input = (document.getElementById("nombreJugador").value);
  let nombreJugador = input;
  document.getElementById("nombreJug").innerHTML=nombreJugador.toUpperCase();

  }); 
} obtenerNombreJugador();



function obtenerJugadaComputadora() {
  let valoresJuego = ["Piedra", "Papel", "Tijera"];
   return valoresJuego[Math.floor(Math.random() * valoresJuego.length)];
    }


    function game(opcion){
      const eleccionComp= obtenerJugadaComputadora();
      const eleccionJugador= opcion;
      switch (eleccionComp+eleccionJugador) {
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
          ganarUsuario(eleccionJugador, eleccionComp);
        break;
        case 'PiedraPapel':
        case 'PapelTijera':
        case 'TijeraPiedra':
          ganarPc(eleccionJugador, eleccionComp);
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
            instrucciones.innerText = "Ganaste el juego!"
        }
  
        if (puntosComputadora === 3) {
            instrucciones.innerText = "Perdiste ¡La computadora ganó el juego!"
        }
  
        elegiTuOpcion.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
      }
    } 
    
    
    

    function main(){
      piedra_div.addEventListener('click', () => game("Piedra"));
      papel_div.addEventListener('click', () => game("Papel"));
      tijera_div.addEventListener('click', () => game("Tijera"));
    }
    main();

    function ganarUsuario(){
      puntosJugador++;
      contenedorPuntosUsuario.innerText = puntosJugador;
      contenedorGanaPunto.innerText = "¡Ganaste un punto!  "
    }

    function ganarPc() {
      puntosComputadora++;
      contenedorPuntosPC.innerText = puntosComputadora;
      contenedorGanaPunto.innerText = "¡La computadora ganó un punto!  "
    }

    function empate() {
      contenedorGanaPunto.innerText = "¡Empate!"
    }

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