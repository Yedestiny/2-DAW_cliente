salir = false;
for( let i=0; i<10 && !salir; i++){
    console.log(i);
    if (prompt("Continuar?") == "N"){
        salir = true;
    }

}