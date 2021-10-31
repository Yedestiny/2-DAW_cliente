/*
4. El convertidor de temperatura
¡Hace calor afuera! Hagamos un convertidor, y nuevamente tendrás que buscar en Internet cómo hacerlo.

Almacena una temperatura en grados centígrados en una variable.
Conviértalo a Fahrenheit y la salida "NN ° C es NN ° F".
Ahora guarde una temperatura en grados Fahrenheit en una variable.
Conviértalo a grados centígrados y la salida "NN ° F es NN ° C".

*/


var centigrados_original = 10;
var centigrados_a_fahrenheit = (centigrados_original *1.8)+32 ;
var centigrados_a_fahrenheit = centigrados_a_fahrenheit.toFixed(2);


var fahrenheit_original = 20;
var fahrenheit_a_centigrados = (fahrenheit_original-32) / 1.8;
var fahrenheit_a_centigrados = fahrenheit_a_centigrados.toFixed(2);

document.write("<h1>" + centigrados_original + "ºC son: " + centigrados_a_fahrenheit+"ºF </h1> ");
document.write("<h1>" + fahrenheit_original + "ºF son: " + fahrenheit_a_centigrados+"ºC </h1>");

