// HTMLElement
let htmlElement=document.getElementById('cos');
console.log(Object.getPrototypeOf(htmlElement));
// Si inspeccionem l'objecte podrem veure totes les propietats que té com per exemple
// HTMLCollection --> S'assembla a un array però NO ho és
let elementsRed = document.getElementsByClassName('red');
console.log(elementsRed);

// NodeList
let elementsPar4=document.getElementsByName('par-4');
console.log(elementsPar4);
// HTMLCollection
let paragrafs = document.getElementsByTagName('p');
console.log(paragrafs);

// HTMLElement
let el = document.querySelector('#cos');
console.log(el);
// NodeList
let els = document.querySelectorAll('p');
console.log(els);
// Amb querySelector podem indicar com volem seleccionar posant el símbol davant de l'identificador segons:
// # per seleccionar id // #cos
// . per seleccionar class //.red
//   per seleccionar tag // p

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive,pstatic);

let nouP = document.createElement('p');
document.body.append(nouP);

console.log(plive,pstatic);
// Aquí es veu com un HTMLCollection s'actulatiza mentre que un NodeList no, 
// hauríem de fer un altre querySelectorAll després d'afegir l'element.