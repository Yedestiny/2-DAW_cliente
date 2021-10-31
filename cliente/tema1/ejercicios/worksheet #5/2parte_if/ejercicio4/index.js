var numero = parseInt( prompt("Pon un precio, si es mayor que 100 haremos un descuento del 15%"));
if (numero > 100){
    alert(numero * 0.85);
}else{
    alert(numero);
}