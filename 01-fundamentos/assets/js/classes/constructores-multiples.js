


class Persona {    
    
    static porObjeto({ nombre, apellido, pais }){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais ){
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }
    getInfo(){
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Pais: ${this.pais}`);
    }
}

const nombre1 = 'Peter',
        apellido1 = 'Parker', 
        pais1 = 'USA';

const  ini = {
    nombre: 'inigo',
    apellido: 'perez',
    pais: 'España'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(ini);

persona1.getInfo(); // Nombre: Peter, Apellido: Parker, Pais: USA
persona2.getInfo(); // Nombre: inigo, Apellido: perez, Pais: España

