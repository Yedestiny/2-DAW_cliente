var nombre = prompt("Dime tu nombre, solo valen: Pablo, Ana, Eduardo y Clara")

if (nombre == 'Pablo' || nombre == 'Eduardo'){
    alert(`Bienvenido, ${nombre}`);
    

}
else if (nombre == 'Ana' || nombre == 'Clara') {
    alert(`Biewnvenida, ${nombre}`);
    
}
else{
    alert("Nombre no valido")
}