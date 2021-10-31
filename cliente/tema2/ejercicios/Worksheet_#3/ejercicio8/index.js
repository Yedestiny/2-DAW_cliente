function cuenta(){
    let cadena = 'JavaScript es un lenguaje de programación';
    let palabras = cadena.split(' ');
    let contador = 0;

    for (i of palabras){
        contador += 1;
    }
    return contador;
}
document.write(cuenta());