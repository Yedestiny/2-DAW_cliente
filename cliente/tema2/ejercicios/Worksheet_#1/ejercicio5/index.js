/**
 * Muestra la hora del 
 * servidor en tiempo real 
 * en el formato de 12 horas
 */
 const HORA = () => {

    // Constante que almacena el id del elemento donde
    // se va a mostrar el reloj
    const ID_ELEMENT = document.getElementById("reloj");

    // Función que añade un cero a la izquierda
    // a la hora, minutos y segundos cuando el
    // valor de estos es inferior a 10 
    const CERO = n => n = n < 10 ? "0"+n: n;
    let hora, minutos, segundos, meridiano;

    // Funcion que retorna el Reloj
    const RELOJ = () => {
        const DATE = new Date();
        hora = DATE.getHours();
        minutos = DATE.getMinutes();
        segundos = DATE.getSeconds();

        // Determinar el meridiano
        meridiano = hora < 12 ? "am" : "pm";

        // Dar formato de 12 horas ya que por defecto el formato es de 24 horas
        hora = hora == 0 ? 12 : hora || hora > 12 ? hora -= 12 : hora;

        return (
            ID_ELEMENT.textContent = 
            `${CERO(hora)}:${CERO(minutos)}:${CERO(segundos)} ${meridiano}`
        );
    }

    // Llama a la función RELOJ cada segundo
    // para que se vaya actualizando la hora
    return setInterval(RELOJ, 1000);
}

// Llama a la funcion HORA cuando el DOM se haya cargado
 document.addEventListener("DOMContentLoaded", HORA);