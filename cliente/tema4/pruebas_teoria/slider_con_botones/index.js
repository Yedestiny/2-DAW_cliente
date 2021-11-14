function aumentar(){
    if(contador == 1 || contador<4){
        contador ++;
        src = contador + ".jpg";
        document.getElementById("imagen").src = contador + ".jpg";
        document.getElementById('posicion').innerHTML= contador+"/4";
    }else{};
};

function disminuir(){
    if(contador == 1){
    }
    else{
        contador --;
        src = contador + ".jpg";
        document.getElementById("imagen").src = contador + ".jpg";
        document.getElementById('posicion').innerHTML= contador+"/4";
    };
};

contador = 1;

boton_atras = document.getElementById("atras");
boton_adelante = document.getElementById("adelante");

boton_atras.addEventListener("click",disminuir);
boton_adelante.addEventListener("click",aumentar);