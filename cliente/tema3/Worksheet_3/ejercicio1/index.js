let a = [1,2,3,5,8,6,9,4,5,4,0];
var max = Math.max.apply(null, a);
document.write("El mas grande es: "+max+"<br>");
cad = ['Hola', 'Adiós', 'Esta es la más larga'];

function encuentramaslarga(cad) {
    var maslarga = "";
    cad.forEach(function(pal) {
      if(pal.length > maslarga.length) {
        maslarga = pal;
      }
    });
    return maslarga;
} 

document.write(encuentramaslarga(cad)+"<br>");
pares = [];
a.forEach(valor=>{
    if(valor % 2 == 0){
        pares.push(valor);
    }
});
document.write("Los pares son:" + pares+"<br>");

let impares = [];
a.forEach(valor=>{
    if(valor % 2 != 0){
        impares.push(valor);
    }
});
document.write("Los impares son:" + impares+"<br>");
c = ["is", "Missisipi", "Toronto", "Hello"];
palabras_is = [];
c.forEach(palabra=>{
    if (palabra.includes("is")){
        palabras_is.push(palabra);
    }
});
document.write("Las palabras que incluyen IS son: "+palabras_is);
document.write("<br>");

let divisibles = [];
a.forEach(valor=>{
    if(valor % 3 == 0){
        divisibles.push(valor);
    }
});
document.write("Los divisibles entre tres son:" + divisibles+"<br>");
dos_arrays = a.concat(cad);
document.write("Los arrays concatenados son: " + dos_arrays+"<br>");


dos_arrays.sort((a, b) => a - b);
document.write("Los arrays concatenados ordenados son: "+dos_arrays+"<br>");

d = [1,4,7,9,3,4,];
d.shift();
document.write("El array sin el primer valor es:" +d+"<br>");


e = ["hola", "Adios", "Bye"]
e.unshift("Buenaaas");
document.write("Insertamos una palabra y resulta en:"+e+"<br>");

reemplazar = [1,2,3,4,5,6];
reemplazar.splice(2,1,15);
document.write(reemplazar)