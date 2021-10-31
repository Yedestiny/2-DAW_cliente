document.write(Math.random()+'<br>');
document.write(Math.random()*(101)+100+'<br>');

valor1 = prompt('Dime un valor(1)');
valor2 = prompt('Dime un valor(2)');
if (valor1 < valor2){
    document.write((Math.random() * (valor2 - valor1)) + valor2);
} else if (valor1 > valor2){
    document.write((Math.random() * (valor1 - valor2)) + valor1);
}