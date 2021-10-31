var mes = prompt("Pon un mes y te muestro cuantos dias tiene");

switch(mes){
    case 'enero' :
        document.write("31");
        break;

    case 'febrero' :
        document.write("28 o 29");    
        break;
    case 'marzo' :
        document.write("31");
        break;

    case 'abril' :
        document.write("30");   
        break; 

    case 'mayo' :
        document.write("31");
        break;

    case 'junio' :
        document.write("30");  
        break;  

    case 'julio' :
        document.write("31");
        break;

    case 'agosto' :
        document.write("30");  
        break;  

    case 'septiembre' :
        document.write("31");
        break;

    case 'octubre' :
        document.write("30");   
        break; 

    case 'noviembre' :
        document.write("31");
        break;

    case 'diciembre' :
        document.write("30");
        break;
    
    default:
        document.write("Eso no es un mes, prueba a escribirlo todo en minúscula")

}