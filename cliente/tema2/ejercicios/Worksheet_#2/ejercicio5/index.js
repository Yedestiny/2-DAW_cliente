var a = parseInt(prompt('variable A'));
var b = parseInt(prompt('variable B'));
var c = parseInt(prompt('variable C'));

var solucion1=((-b + Math.sqrt((b**2)-(4*c*a)))/2*a);
var solucion2=((-b - Math.sqrt((b**2)-(4*c*a)))/2*a);

document.write(solucion1);
document.write('<br>');
document.write(solucion2);