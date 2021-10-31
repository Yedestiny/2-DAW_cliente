for (let i = 0; i<=10; i++){
    document.write('<b><u>Tabla del ' + i + "</u></b><br><br>");
    for (let j = 0; j<=10; j++){
        document.write(i + "x" + j + "=" + i*j + "<br>");
    }document.write("<br>");
}