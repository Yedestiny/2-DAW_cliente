columnas = parseInt(prompt('Dime el nº de columnas'));
altura = parseInt(prompt('Dime el numero de px de altura'));
anchura= parseInt(prompt('Dime el numero de px de anchura'));

document.write('<table border = "0" cellspacing = "2" bgcolor="black">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');

for ( let i=0; i<columnas; i++){
    if (i % 2 ==0){
    document.write('<td width ="' + anchura + '" bgcolor="white">&nbsp;</td>')}
    else{
        document.write('<td width ="' + anchura + '" bgcolor="black">&nbsp;</td>')
    }
}
document.write('</tr>');
document.write('</table>');