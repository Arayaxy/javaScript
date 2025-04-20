function saludar (nombre){
    // console.log(arguments);

    // console.log('Hola ' + nombre);

    return [10, 9, 8, 7, 6,];
    // esto nunc se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function (nombre){
    console.log('Hola ' + nombre);// funcion anonima
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornnoDeSaludar = saludar('iñi', 40, true, 'Costa Rica');
console.log(retornnoDeSaludar[0], retornnoDeSaludar[3]);
// saludar2( 'iñi');
// saludarFlecha()
// saludarFlecha2( 'Muris')

//EJERCICIOS

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a,b) =>{
//     return a + b;
// }

const sumar2 = (a,b) => a + b;


console.log(sumar2(35, 6));

function getAleatorio(){
    return Math.random()
}
//n una funcion de flecha  que no tenga llaves {}

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );