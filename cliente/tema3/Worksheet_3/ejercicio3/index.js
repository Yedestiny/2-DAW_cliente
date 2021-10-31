arr = [
    ['34', '21', '32', '41', '25'],
    ['14', '42', '43', '14', '31'],
    ['54', '45', '52', '42', '23'],
    ['33', '15', '51', '31', '35'],
    ['21', '52', '33', '13', '23']];

function encuentra_celda(arr){
    celda = arr[0][0];
    fila = 0;
    columna = 0;
    while(parseInt(celda[0]) != parseInt(fila)){
        fila = celda[0];
        columna = celda[1];
        celda = arr[parseInt(fila)- 1] [parseInt(columna)-1];
    } 
    return celda;
}


document.write(`El tesoro está en ${encuentra_celda(arr)}`);