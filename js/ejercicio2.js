/* Ejercicio 2: Conversión a minúsculas
Solicita al usuario que ingrese una palabra o frase utilizando prompt(). Luego, muestra la entrada del usuario en minúsculas utilizando toLowerCase(). */

function conversionMinuscula() {
  let palabra = prompt("Ingrese una palabra o frase").toLowerCase();

  alert("La palabra o frase escrita es la siguiente: \n\n" + palabra);
}
