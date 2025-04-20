let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark v', 'Hulkbuster'],
    
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war'
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('edad',  personaje.edad);
console.log('Coors',  personaje.coords);
console.log('Coors',  personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('ultimo Traje', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-pelicula"]); 

//MAS DETALLES

delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries(personaje) //añadir cosas  al objeto
console.log(entriesPares);

Object.freeze( personaje );// bloquea el objeto evita añadidos directamente no las propiedades indiredctas

personaje.dinero = 10000000000 ;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costar rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});