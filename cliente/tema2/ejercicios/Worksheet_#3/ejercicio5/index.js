function quitar_repetidos(cadena) {
    cadena = cadena.split("");

    for (let i = 0; i <= cadena.length; i++) {
        for (let j = i + 1; j <= cadena.length; j++) {
            if (cadena[i] === cadena[j]) {
                cadena.splice(i, 1);
                cadena.pop(j);

            }
            

        }
    }
    return cadena.join('');
}

document.write(quitar_repetidos("jelouuuuuooooo"));