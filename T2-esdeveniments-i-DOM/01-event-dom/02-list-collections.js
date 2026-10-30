let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// // Tres maneres d'accedir als elements d'una HTMLCollection
// let item1= collection.namedItem('par-4');
// console.log(item1);
// let item2= collection.item(3);
// console.log(item2);
// let item3 = collection[3];
// console.log(item3);
// collection.array.forEach(element => { console.log(element);
// });
// Uncaught TypeError: can't access property "forEach", collection.array is undefined

// iterar elements
// for (let el of collection){
//     console.log(el);

// }
// // Ens mostrarà cadascun dels objectes
// Array.from(collection).forEach(element => console.log(element));
// // Ens mostrarà cadascun dels elements en si mateix
// [...collection].forEach(element => console.log(element));

// let item1 = list.item(3);
// let item2 = list[3];
// console.log(item1,item2);

// list.forEach(x=>console.log(x));

// // entries, keys i values. 
// // Són ArrayIterator i executant el mètode next podem anar veient els elements
// Entrades completes
let entries = list.entries();
console.log(entries);
// Les claus
let keys = list.keys();
console.log(keys);
// Els valors
let values = list.values();
console.log(values);
// llistem tots els elements
// [...list].forEach(el=>console.log(el));