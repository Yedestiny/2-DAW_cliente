function solonumeros(array){
    suma = 0
    for (e of array){
        if (typeof e == 'number')
            suma +=e
    }
    return suma
    
}

lista=[1, 'cat', 3, 4]
document.write(solonumeros(lista))