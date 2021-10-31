/*3. El geometrizador
Calcula las propiedades de un círculo, buscando definiciones en Internet si no las recuerdas.

Almacene un radio en una variable.
Calcule la circunferencia basándose en el radio y emite "La circunferencia es NN".
Calcule el área basándose en el radio y obtenga "El área es NN". */

/*Variables*/
var radio = 10;
var circunferencia = 2 * 3.14 * radio;
var circunferencia = circunferencia.toFixed(2) /*Para limitar a dos decimales*/;
var area = 3.14 * radio**2;

/*Escritura en la página */
document.write("<h1>El radio introducido es: " + radio +" metros <br></h1>");
document.write("<h2>La lungitud de la circunferencia es: " + circunferencia + " metros <br></h2>");
document.write("<h2>El area de la circunferencia es: " + area + " metros </h2>");
