colum = prompt("Di numero de columnas de tu tabla");
fil = prompt("Di numero de filas de tu tabla");
altura = prompt("Altura en px");
ancho = prompt("Ancho en px");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');

for (let i = 1; i<=fil; i++){
    document.write('<tr bgcolor="white" height = "' + altura + '"&nbsp;</td>');
    for(let j=1; j<= colum; j++){
        document.write('<td bgcolor="pink" width = "' + ancho + '"&nbsp;</td>');
    }
}

document.write("</tr>");
document.write("</table>");