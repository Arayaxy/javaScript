let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
} )

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

 nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
console.log(juegos)
let juegoBorrados =juegos.splice(pos, 2);
console.log({juegoBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); //fecta la manera escrita
console.log(metroidIndex);
