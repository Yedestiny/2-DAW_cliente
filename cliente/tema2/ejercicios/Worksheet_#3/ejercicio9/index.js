function cuadrado(cadena){
    document.write('<table>');
    document.write('<tr>');
    for (let i = 0; i < cadena.length; i++){
        document.write(`<td>${cadena[i]}</td>`);
    }
    document.write('</tr> <br>');


    for (let i = 1; i < cadena.length - 1; i++){
        document.write('<tr>');
        document.write(`<td>${cadena[i]}</td>`); 
        for (let j = 2; j < cadena.length; j++){
            document.write('<td>&nbsp;&nbsp;&nbsp;</td>'); 
        }
        document.write(`<td>${cadena[cadena.length - i - 1]}</td>`) 
        document.write('</tr>');
    } 
    document.write('<br>');
    document.write('<tr>');

    
    for (let i = cadena.length - 1; i >= 0; i--){ 
        document.write(`<td>${cadena[i]}</td>`);
    } 
    document.write('</tr>');
    document.write('</table>');
}

let cadena = prompt('Introduzca una cadena');
cuadrado(cadena);