# Practico2-PiedraPapelTijeras

<img src= "https://github.com/maolivero89/Practico2-PiedraPapelTijeras/blob/main/images/imagenJuego.png" >

**Juego Piedra, Papel o tijeras. desarrollado para practico2 de "Páginas Web con Componentes Dinámicos"**
#### FAMAF - UNC
#### Argentina Programa

<link href= "https://maolivero89.github.io/Practico2-PiedraPapelTijeras/">


### INSTRUCCIONES DE USO
1- Ingrese su nombre en el box destinado a ello.

2- Elija uno de los botones animados : piedra, papel o tijera.

PIEDRA: Rompe la tijera para GANAR. PIERDE contra el papel que lo envuelve. EMPATA con otra piedra.
PAPEL: Envuelve la piedra para GANAR. PIERDE contra la tijera que lo corta. EMPATA con otro papel.
TIJERA: Corta el papel para GANAR. PIERDE contra la piedra que la rompe. EMPATA con otra tijera.

3- La computadora hace su eleccion aleatoriamente. Y de acuerdo a las reglas anteriores, el ganador obtiene un punto.

4- El que obtenga mas puntos al mejor de 5 rondas. Sera el GANADOR.

5- Reinicia el juego y prueba otra vez suerte!








### IMPLEMENTADO
-Css para darle estilo a la web.
-JavaScript para crear la dinamica del juego.
-Html5 como contenedor base del juego..



### ERRORES
```
- En el mensaje final donde anuncia el ganador, teniamos un error, el cual el nombre que ingresaba el usuario nos aparecia en minuscula.
La solucion fue crear la funcion upperCase(), que pasara el texto ingresado en el imput a mayuscula mediante un onchange.

<input type="text" id="nombreJugador" onchange="upperCase()" placeholder="Ingresa tu nombre"


<function upperCase() {
  const x = document.getElementById("nombreJugador");
  x.value = x.value.toUpperCase();
}

```

- Github no nos reconocia la ruta del archivo main.js, la solucion fue sacarlo de la carperta JS y dejarlo en la misma ruta que el archivo index.html
- Github no nos reconocia la ruta del  archivo style.css y no nos mostraba los estilos elegidos, 
```
  la solucion fue agregar un punto en  <href="./css/style.css"> en el archivo index.html.
```
- 






