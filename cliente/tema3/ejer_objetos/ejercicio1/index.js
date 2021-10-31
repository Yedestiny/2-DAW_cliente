class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.estomago = [];
    };

    comer(comida) {
        if ( this.estomago.length <=10){
            this.estomago.push(comida);
            console.log("ÑAM!, que rico las/la/el/los o genero no binario " + comida)
            
        }else{
            console.log(`Has cagado ` + this.estomago.pop());
            
        };
    };

    toString(){  
        return "Eres " + this.nombre + " con " + this.edad + " de edad "
    };
};

persona1 =new Persona("Angel",19);
persona1.comer("Espinacas");
persona1.comer("Alcachofas");
persona1.comer("Almendras");
persona1.comer("Manzana");
persona1.comer("Pera");
persona1.comer("Macarrones");
persona1.comer("Patatas");
persona1.comer("Guindillas");
persona1.comer("Una cabra");
persona1.comer("Queso");
persona1.comer("Pan");
persona1.comer("Tostada");
console.log(persona1.toString());