const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const inigo = {
  nombre: "inigo",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};
fher.imprimir();
const mario = {
  nombre: "mario",
  edad: 40,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

function Persona(nombre, edad) {
  console.log("Funciona");

  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

const maria = new Persona("Marria", 28);
const mariu = new Persona("mariu", 39);
console.log(maria);
maria.imprimir();
mariu.imprimir();
