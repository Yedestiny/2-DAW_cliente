let cadena = prompt('Introduzca un texto');

function comparar(cadena){
    cad_aux = cadena;
    if (cadena == cad_aux.toLowerCase()){
        return 'Está todo en minúsculas';
    }
    else if (cadena == cad_aux.toUpperCase()){
        return 'Está todo en mayúsculas';
    }
    else{
        return 'Es una combinación de mayúsculas y minúsculas';
    }
}