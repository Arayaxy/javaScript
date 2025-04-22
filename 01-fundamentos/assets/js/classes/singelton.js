

class Singleton {
  static instance; //undefined como resultado
  nombre = '';

  constructor(nombre = '') {
    if (!!Singleton.instance) {
        return Singleton.instance;
    } // Si ya existe una instancia, no se crea una nueva   

    Singleton.instance = this;
    this.nombre = nombre;
}
   


}

const instancia1 = new Singleton('ironman'); 
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('capitan america');

console.log(`Nombre en la instancia 1: ${instancia1.nombre}`); // Nombre en la instancia 1:
console.log(`Nombre en la instancia 2: ${instancia2.nombre}`); // Nombre en la instancia 2: 
console.log(`Nombre en la instancia 3: ${instancia3.nombre}`); // Nombre en la instancia 3: