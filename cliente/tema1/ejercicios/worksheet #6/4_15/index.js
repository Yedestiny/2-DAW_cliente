num_a_adivinar = prompt("Jugador 1, ntroduce el número a adivinar");
num = prompt("Jugador 2, introduce el número igual");

while (num != num_a_adivinar){
    if (num < num_a_adivinar){
        alert('El número del Jugador1 es mayor:');  
    } else if (num > num_a_adivinar){
        alert('El número del Jugador1 es menor:');
    } 
    num = prompt("Jugador 2, introduce el número igual");
}
alert("¡LO ACERTASTE!");