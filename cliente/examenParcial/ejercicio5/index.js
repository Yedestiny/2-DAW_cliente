function ejercicio5(palabra){
    letras = []

    for (var i = 0; i< palabra.length ;i++){
        
        if (letras.includes(palabra[i])==false  ){
            letra = [palabra[i],1]
            letras.push(letra)
        }else{
            
            letras [letras.indexOf(palabra[i])][1] ++;
        }

    }
    return letras
}

var hola = "holaa"

console.log(ejercicio5(hola))