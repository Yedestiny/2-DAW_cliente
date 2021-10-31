var edad = parseInt(prompt("Cual es su edad?"));
if (edad <= 5){
    alert("Debe estar en jardin de infancia")
}
else if (edad <= 11){
    alert("Debes estar en primaria")
}
else if (edad <= 16){
    alert("Debes estar en la ESO")
}
else if (edad <= 21){
    alert("Debes estar en Bachiller o Ciclo")
}
else {
    alert("Debes estar en la Universidad")
}