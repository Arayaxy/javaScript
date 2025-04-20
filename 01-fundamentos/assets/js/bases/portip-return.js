const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona2("Fernando", "Herrera");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...arguments) => {
  // console.log({edad, arguments });
  return arguments;
};
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Iñigo",
  "hola"
);

console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona2("iñi", "ibm");
console.log({ nuevoApellido });

let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark v", "Hulkbuster"],
};
// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
    console.log({nombre}); 
    console.log({codeName}); 
    console.log({vivo});   
    console.log({edad});  
 console.log( {trajes});  
};

imprimePropiedades(tony);
