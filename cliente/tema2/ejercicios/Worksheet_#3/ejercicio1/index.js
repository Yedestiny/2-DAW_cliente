var cadena = prompt("Pon algo");

function reversertir(cadena){
    /* Esta funcion divide la cadena str en una array con cada caracter, la invierte y la vuelve a juntar*/ 
    return cadena.split("").reverse().join("");
}

document.write(reversertir(cadena));


