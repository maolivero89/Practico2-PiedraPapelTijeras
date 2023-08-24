let puntosJugador = 0;
let puntosComputadora = 0;


let piedra_div= document.getElementById('Piedra');
let papel_div= document.getElementById('Papel');
let tijera_div= document.getElementById('Tijera');
let contenedorPuntosUsuario = document.querySelector("#puntosJugador");
let contenedorPuntosPC = document.querySelector("#puntosComputadora");



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
    }

    function ganarPc() {
      puntosComputadora++;
      contenedorPuntosPC.innerText = puntosComputadora;
    }

    function empate() {
      alert("Es un empate");
    }