class elemento{
    constructor(nombre,gana,pierde){
        this.nombre = nombre;
        this.gana = gana;
        this.pierde = pierde;
    };
};

class juego{
    constructor(){
    this.marcador_maquina = 0;
    this.marcador_humano = 0;
    this.opciones_maquina = [piedra,papel,tijera,lagarto,spock];
    };   


    jugar (opcion_jugador){
        this.opcion_elegida_maquina = this.opciones_maquina[Math.floor((Math.random() * (5 - 0 + 1)) + 0)];
        if (this.opcion_elegida_maquina.gana.includes(opcion_jugador.nombre)===true){
            this.marcador_maquina++;
            document.getElementById('marcador').innerHTML='<h3>Has sacado  '+opcion_jugador.nombre +
            ' <br>Ha ganado la maquina con ' +this.opcion_elegida_maquina.nombre +' :( <br>'
            + 'Marcador: TU: ' +this.marcador_humano + ' CPU: ' + this.marcador_maquina+' </h3>';
        }
        else if (this.opcion_elegida_maquina.pierde.includes(opcion_jugador.nombre)===true) {
            this.marcador_humano++;
            document.getElementById('marcador').innerHTML='<h3>Has sacado '+opcion_jugador.nombre +
            '<br> Has ganado a la maquina con ' +this.opcion_elegida_maquina.nombre +' :D <br>'
            + 'Marcador: TU: ' +this.marcador_humano + ' CPU: ' + this.marcador_maquina + ' </h3>';
            
        } else {
            document.getElementById('marcador').innerHTML='<h3>Has sacado '+opcion_jugador.nombre +
            '<br> EMPATE ' +this.opcion_elegida_maquina.nombre +' :/ <br>'
            + 'Marcador: TU: ' +this.marcador_humano + ' CPU: ' + this.marcador_maquina + ' </h3>';
        }

    }

};

var piedra = new elemento("piedra",["lagarto","tijera"],["spock","papel"]);
var papel = new elemento("papel",["piedra","spock"],["tijera","lagarto"]);
var tijera = new elemento("tijera",["lagarto","papel"],["piedra","spock"]);
var lagarto = new elemento("lagarto",["spock","papel"],["tijera","piedra"]);
var spock = new elemento("spock",["tijera","piedra"],["papel","lagarto"]);


var partida = new juego();

