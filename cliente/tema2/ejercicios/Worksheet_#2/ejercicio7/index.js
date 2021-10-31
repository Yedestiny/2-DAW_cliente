document.write('<table border=1>');

for (i = 1; i <= 10; i++){
    document.write('<tr>');
    document.write('<td>' + i + '</td>');
    document.write('<td>' + Math.sin((i * Math.PI) / 180) + '</td>');
    document.write('</tr>');
}
document.write('</table>');