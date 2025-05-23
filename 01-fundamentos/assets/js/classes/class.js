
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('hola a todos, soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = ' Sin codigo ', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(` Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase}`);
    }
}

const spiderman = new Persona('Mario parker', 'Spider Arpia', 'Soy tu querido amigo y vecino');
const ironman = new Persona('Manolo Stark', 'Iron Happy', 'Yo soy Happy man a no que es iron');


// console.log(ironman);

// ironman.miFrase();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Pastel de cereza de la abuela';
// spiderman.nemesis = 'Duende verde';
// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

// Persona._conteo = 2;

console.log('Conteo statico', Persona._conteo);
console.log( Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'hola mundo';
console.log( Persona.propiedadExterna );

console.log( Persona );