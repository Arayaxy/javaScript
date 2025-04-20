const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true); //false
console.log(!false);//true

console.log(!regresaFalse()); 

console.warn('And'); // true si todos los valores on verdaderos
console.log( true && true );// treue si ambos son verdaderos
console.log( true && false ); //false

console.log('========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());
console.log('========');

regresaTrue() && regresaFalse();
console.log( true && true && true && false);

console.log('====================~~~~~===========0000000000');

console.warn( 'OR' ); // true si alguna es verdadera
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log( true || true || true || false);


console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo'|| true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo'|| true;

console.log({a1, a2, a3, a4, a5 });

if (true || true || true || false) {
    console.log('Hacer algo');
}else{
    console.log('Hacer otre cosas');
}