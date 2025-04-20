const carros = ["Ford", "Mazda", "honda", "Toyota"];

let i = 0;

// while (i < carros.length) {
//   console.log(carros[i]);
//   // i = i +1 es igual a
//   i++;
// }

//undefined
//nulll
//falseç
console.warn  ('While')
while (carros[i]) {
    if (i ===1) {
        i++;
        continue;
    }
  console.log(carros[i]);
  i++;
}

console.warn('Do while')

 j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);