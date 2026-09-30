// Dreceres als constructors de JS
// Quan fem la declaració següent estem fent servir 
// una drecera que té JS per executar la funció constructora
let obj = {};
// És equivalent a:
let obj2 = new Object();

/** De la mateixa manera passa amb:
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 */
// Encara que no definim el tipus com objecte, JS automaticament els embolcalla com a objecte per a poder fer servir els seus mètodes
// "".length
// let a = 4; a.toString() ---> '4'
let a = 4;
console.log(a.toString().length);

// let nombre = Number();
// nombre.toString();
// console.log(a.toString().length);
function Usuari() {
    this.name = "Chanchito feliz";
}
let user = new Usuari();
console.log(user.constructor);
// string literal
console.log("literal");
const s1 = "1 + 1";
console.log(s1);
// string com a objecte
console.log("objecte");
const s2 = new String("1 + 1");
console.log(s2);
console.log("Evaluant literal i objecte");

console.log(eval(s1), eval(s2));
// Si volem evaluar s2 hem de fer servir valueOf
console.log("Fent servir valueOf per s2");

console.log(eval(s2.valueOf()));


