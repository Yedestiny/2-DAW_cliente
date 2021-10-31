function numero_aleatorio(min, max) {
    return Math.random() * (max - min) + min + 1;
};

function numero_ordenados(numeros){
    for (var i = 1; i<=100;i++ ){
        x =  numero_aleatorio(1,100).toFixed();
       
        if ( x % 2 == 0){
            numeros.push(x);
        }else{
            numeros.unshift(x);
        };

    };
};

var numeros = Array();
numero_ordenados(numeros);
console.log(numeros);