// function hola(){
//     return 'Hola món';
// }
// // // Fat arrow functions Funció anònima, s'ha d'assignar a una variable o constant
// const hola = ()=> {
//  return 'Hola món';
// }

// // // Amb return implícit, només una sola línia
// const hola = ()=> 'Hola món';


// const hola = (missatge) => missatge + ' Hola món';
// // Si tenim només un paràmetre es poden ometre els parèntesis
// // const hola = missatge=> missatge +' Hola món';
// // const resultat = hola();
// const resultat = hola('chanchito feliz');
// console.log(resultat);

const doble = [1, 2, 3].map(numero => numero * 2);
console.log(doble); // [2, 4, 6]
// // Legacy version

const array = [1, 2, 3];
function numeroPerDos(numero) { return numero * 2 };
function numeroAlQuadrat(numero) { return numero ** 2 };
function maplegacy(array, callback) {
    const doble = [];
    for (let index = 0; index < array.length; index++) {
        doble[index] = callback(array[index]);

    }
    return doble
}
const doble2 = maplegacy(array, numeroPerDos);
const quadrats = maplegacy(array, numeroAlQuadrat);
console.log("Array original: ", array);

console.log("Array amb Dobles: ", doble2);
console.log("Array amb Quadrats: ", quadrats);




