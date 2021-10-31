cadena = 'Buenos dias me llamo pepe el de pueblo';

array = cadena.split('');

for (let i = 0; i< array.length; i++){
    if (array[i]===' '){
        array.splice(i, 1);
    };
};

while (array.length%8!=0){
    array.push('')
}

array2 = []
while (array.length>0){
    for (let e = 0; e<(array.length)+1; e++){
        array2.push(array.splice(0,8));
    }
}

array2.forEach(linea =>{
    linea.forEach(caracter=>{
        document.write(caracter);
    })
    document.write('<br>');
})

for(let posicion = 0; posicion<8; posicion++){
    for(let linea of array2){
        document.write(linea[posicion])
    }
    document.write(' ')
}