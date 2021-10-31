class Alumno{
    constructor(nombre,apellidos,curso){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }
    imprime_datos(){
        console.log(`El alumno ${this.nombre} ${this.apellidos} pertenece al curso ${this.curso}`);

    }

    despertar(segundos){
        setTimeout( ()=>console.log (`Acaba de despertar ${this.nombre}`),segundos * 1000);
    }
}

class alumno_cliclo extends Alumno{
    constructor(nombre,apellidos,curso,nivelFrikismo){
        super (nombre, apellidos,curso,nivelFrikismo);
        this.nivelFrikismo = nivelFrikismo;
    }
    imprime_datos(){
        console.log(`El alumno ${this.nombre} ${this.apellidos} pertenece al curso ${this.curso} y su nivel de frikismo es ${this.nivelFrikismo}`);

    }
}

let all = new Alumno("Carlos","Moreno","2ºDAW");
all.imprime_datos();
all.despertar(3);

let all1 = new Alumno("Sebas","Loko","2ºDAW");
all1.imprime_datos();

let friki1 = new alumno_cliclo("Angel","Bailon gracia","2ºDAW",100);
friki1.imprime_datos();