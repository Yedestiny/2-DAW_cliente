var info = document.getElementById("informacion");
// Numero de enlaces de la pagina
var enlaces = document.getElementsByTagName("a");
info.innerHTML = "Numero de enlaces = "+enlaces.length;
  
// Direccion del penultimo enlace
var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
info.innerHTML = info.innerHTML + "<br/>" + mensaje;
  
// Numero de enlaces que apuntan a https://www.google.com/
var contador = 0;
for(var i=0; i<enlaces.length; i++) {
    if(enlaces[i].href == "https://www.google.com/" || enlaces[i].href == "https://www.google.com/") {
    contador++;
    }
}
info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a https://www.google.com/"
  
// Numero de enlaces del tercer párrafo
var parrafos = document.getElementsByTagName("p");
enlaces = parrafos[2].getElementsByTagName("a");
info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
  
