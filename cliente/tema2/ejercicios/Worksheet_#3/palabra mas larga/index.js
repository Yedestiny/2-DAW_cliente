function devolver_palabra_mas_larga(texto) {
    texto = texto.split(' '); /*Dividimos las palabras en una array */

    var palabra_mas_larga = ""; /*La palabra mas larga  */
    for (let i = 0; i < texto.length; i++) { /*Recorremos la array */
        let palabra = texto[i];
        if (palabra.length > palabra_mas_larga.length) { /*Si el numero de caracteres de la palabra que 
            toca es mayor de la supuesta palabra mas larga se reemplaza */
            palabra_mas_larga = palabra
        }
    }
    return palabra_mas_larga /*Una vez recorrido el bucle devuelve la palabra mas larga */
  }

  var frase = "La palabra mas larga podria ser arroz porque va de la a a la z pero es jhsakdhaksjdhkashdkashdkasdj"
  document.write(devolver_palabra_mas_larga(frase));