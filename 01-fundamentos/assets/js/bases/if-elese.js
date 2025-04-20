let a = 5;

if (a >= 10) {
  // undefinded, null, asignaciones
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log('Fin de Programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); // 0: domingo, 1, lunes 2 martes....
console.log(hoy);
console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  //     if( dia === 1 ){
  //         console.log('lunes');
  //     }else{
  //         console.log('No es lunes ni domingo ');
  // }
} else if (dia === 2) {
  console.log("Martes");
} else {
  ("No es lunes ni martes ni domingo...");
}

//Sin usar If else o switch unicamente objetos
dia = 1;
const diasLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Juves",
  5: "Viernes",
  6: "Sabado",
};

console.log(diasLetras[dia] || "Dia no valido");
//dia de la semana
const diasLetras2 = ["Domingo","Lunes","Martes","Miercoles","Juves","Viernes", "Sabado" ];
console.log(diasLetras2[dia]);
