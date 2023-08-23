let puntosJugador = 0;
let puntosComputadora = 0;






function obtenerNombreJugador() {
  let boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
  let input = (document.getElementById("nombreJugador").value);
  let nombreJugador = input;
  document.getElementById("nombreJug").innerHTML=nombreJugador.toUpperCase();

  }); 
} obtenerNombreJugador();

