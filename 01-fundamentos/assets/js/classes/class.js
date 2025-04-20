
class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = ' Sin codigo ', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Mario parker', 'Spider Arpia', 'Soy tu querido amigo y vecino');
const ironman = new Persona('Manolo Stark', 'Iron Happy', 'Yo soy Happy man a no que es iron');

console.log(spiderman);
console.log(ironman);

