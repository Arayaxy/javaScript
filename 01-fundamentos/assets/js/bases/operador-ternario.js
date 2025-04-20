/** 
 * Diad de  semana abrimos a las 11,
 * pero los findes de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 6; // 0 domigo
const horaActual = 9 ;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las xx

// if ( dia === 0 || dia === 6 ){
// if ([0,6].includes( dia)) {
    

//     console.log('Finn de semana');
//     horaApertura = 9;}
// else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia )) ? 9 :11

// if (horaActual  >=  horaApertura) {
//     mensaje = 'Esta abierto';
    
// } else {
//     mensaje = `Esta cerraado, hoy abrimos a las ${horaApertura} ` ;
// }
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerraado, hoy abrimos a las ${horaApertura} `
console.log({horaApertura, mensaje});