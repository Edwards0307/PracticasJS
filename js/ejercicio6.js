/* Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18 */

function beca() {
    let nombre = prompt("Ingrese su nombre")
    let edad = prompt("Ingrese su edad")
    let pais = prompt("Ingrese su pais").toLowerCase()
    let departamento = prompt("Ingrese el departamento").toLowerCase()

    if (edad < 18 || pais != "canada" || departamento != "toronto") {
        alert(`Lo siento ${nombre} pero no cumples con los requisitos para la beca`)
    } else {
        alert(`Felicitaciones ${nombre} cumples con los requisitos para la beca`)
    }
}