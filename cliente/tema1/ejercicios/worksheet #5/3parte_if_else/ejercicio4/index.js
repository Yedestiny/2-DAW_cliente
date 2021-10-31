var numero_hermanos = parseInt(prompt("Cuantos hermanos tienes?"));
var cantidad = parseInt(prompt("Pon una cantidad"));

if (numero_hermanos>=3){
    alert("Se a aplicado un descuento del 15%, nuevo precio: " + (cantidad*0.85));
}
else if (numero_hermanos>=1){
    alert("Se a aplicado un descuento del 5%, nuevo precio: " + (cantidad*0.95));
}
else if (numero_hermanos == 0){
    alert("No se a aplicado ningún descuento")
}
else{
    alert("No puedes tener menos de 0 hermanos")
}