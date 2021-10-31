cadena = prompt('Introduce una cadena')
cadena2 = prompt('Introduce una segunda cadena')
document.write(`Las cadenas introducidas son: "${cadena}" y "${cadena2}" <br> `)

function subcadena(cadena,cadena2){
    if (cadena.includes(cadena2) == true){
        posicion = cadena.lastIndexOf(cadena2)
         document.write("La segunda cadena aparece en la primera y empieza en la posición " + posicion)
     }
 }

 subcadena(cadena,cadena2)