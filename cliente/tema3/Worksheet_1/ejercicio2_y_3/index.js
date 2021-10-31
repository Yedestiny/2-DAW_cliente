function lanzamiento(){ 
    return parseInt(5*Math.random()+1);
}
   
var uno = dos = tres = cuatro = cinco = seis = 0; 
var numTiradas = 0;

for(i=1; i<=6000; i++){
    tirada = lanzamiento();
    switch(tirada){
        case 1:
            uno++;
            break;
        case 2:
            dos++;
            break;
        case 3:
            tres++;
            break;
        case 4:
            cuatro++;
            break;
        case 5:
            cinco++;
            break;
        case 6:
            seis++;
            break;
    }
}
        
numTiradas = uno+dos+tres+cuatro+cinco+seis;
        
document.write("El 1 :  " + uno + " veces <br> El 2 :  " + dos + " veces <br> El 3 :  " + tres + " veces <br> El 4 :  " + cuatro + " veces <br> El 5 :  " + cinco + " veces <br> El 6 :  " + seis + " veces<br>");
document.write(" <br> Numero de lanzamientos: " + numTiradas);
