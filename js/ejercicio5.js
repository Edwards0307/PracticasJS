/* Ejercicio 5: Mensajes personalizados
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick) */

let nombre = "";

function ingreseNombre() {
  nombre = prompt("Ingrese su nombre");
}

function mostrarMensaje() {
  if (nombre === "" || nombre === null || nombre === undefined) {
    alert("Debes ingresar primero un nombre");
  } else {
    alert(`¡Hola, ${nombre}! Espero que estés disfrutando de JavaScript.`);
  }
}
