alto= parseInt(prompt('Height of the cells: '));
ancho = alto;

document.write('<table border="0" cellspacing="2" bgcolor="black">');


for(let i = 1; i <= 8; i++){
    if (i % 2 !== 0){
        document.write('<tr bgcolor="black" height="' + alto + '">');
        for (let j = 1; j <= 8; j++){
            if (j % 2 == 0){
                document.write('<td width="' + ancho + '" bgcolor = "white">&nbsp;</td>');
            }
            else {
                document.write('<td width="' + ancho + '" bgcolor = "black">&nbsp;</td>');
            }
        }
    }
    else {
        
        document.write('<tr bgcolor="white" height="' + alto + '">')
        for (let j = 1; j <= 8; j++){
            if (j % 2 !== 0){
                document.write('<td width="' + ancho + '" bgcolor = "white">&nbsp;</td>');
            }
            else{
                document.write('<td width="' + ancho + '" bgcolor = "black">&nbsp;</td>');
            }        
        }
    }
    
}
document.write('</tr>');
document.write('</table>');