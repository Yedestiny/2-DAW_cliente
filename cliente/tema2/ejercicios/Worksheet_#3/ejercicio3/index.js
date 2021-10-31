let cad = "Esto es una prueba de una funcion";
fin = false;
let posicion = 0;
while(!fin){
    posicion=cad.indexOf("una",posicion+1);
    
    if(posicion == -1)
        fin = true;
    else
    console.log(posicion)
    }