function potencia(base,exponente){
    if (exponente == 0){
        return 1;
    } else {
        return base * potencia(base, exponente - 1)
    }

}

document.write(potencia(2,4));//16
document.write("<br>")
document.write(potencia(2,6));//64