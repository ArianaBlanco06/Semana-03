/*var aleat = Math.random();

document.writeln("<h2> Aleatorio es: " + aleat + "</h2>");

var dado = Math.floor(1 + aleat * 6);

document.writeln("<h2>El valor del dado es " + dado + "</h2>");
document.writeln("<img src='assets/images/ejem-4/" + dado + ".jpg' >");
*/

// Mostrar el mismo dado dos veces
/*
var aleat = Math.random();

var dado = Math.floor(1 + aleat * 6);

document.writeln("<h2>El valor del dado es " + dado + "</h2>");

// mismo dado dos veces
document.writeln("<img src='assets/images/ejem-4/" + dado + ".jpg'>");
document.writeln("<img src='assets/images/ejem-4/" + dado + ".jpg'>");
*/

// Generar 2 dados y verificar si son iguales
/*
var dado1 = Math.floor(1 + Math.random() * 6);
var dado2 = Math.floor(1 + Math.random() * 6);

document.writeln("<h2>Dado 1: " + dado1 + "</h2>");
document.writeln("<h2>Dado 2: " + dado2 + "</h2>");

document.writeln("<img src='assets/images/ejem-4/" + dado1 + ".jpg'>");
document.writeln("<img src='assets/images/ejem-4/" + dado2 + ".jpg'>");

// verificar si son iguales
if (dado1 === dado2) {
    document.writeln("<h2>¡Salieron iguales! </h2>");
}
else 
    document.writeln("<h2>¡Salieron diferentes! </h2>");
*/






function Iniciar() {
    // Generar números aleatorios
    var dado1 = Math.floor(1 + Math.random() * 6);
    var dado2 = Math.floor(1 + Math.random() * 6);

    // Contenedor donde se mostrarán los resultados
    var contenedor = document.getElementById("resultados");

    // Crear el HTML para mostrar solo el último lanzamiento
    var html = "<h3>Dado 1: " + dado1 + "</h3>";
    html += "<h3>Dado 2: " + dado2 + "</h3>";
    html += "<img src='assets/images/ejem-4/" + dado1 + ".jpg' width='100'>";
    html += "<img src='assets/images/ejem-4/" + dado2 + ".jpg' width='100'>";
    html += "<h3>" + (dado1 === dado2 ? "¡Salieron iguales!" : "¡Salieron diferentes!") + "</h3>";

    // Reemplazar el contenido anterior (sin historial)
    contenedor.innerHTML = html;
}

