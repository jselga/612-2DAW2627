const punt ={
    x: 10,
    y: 15,
};
// Assingem una propietat nova a l'objecte punt
Object.assign(punt,{z:20});
console.log(punt);
// Copiem l'objecte a un nou objecte
let clonePunt = Object.assign({},punt);
console.log(clonePunt);

// Fem copia però modificant les propietats que ja existeixen i afegint-ne de noves
let clonePunt2 = Object.assign({},punt,{t:21,x:1});
console.log(clonePunt2);

// Spread operator (forma moderna)
let copia3 = {...punt}
console.log(copia3);
// Alternatives: fer un for paràmetre a paràmetre DESACONESELLAT
//Si l'objecte conté altres objectes dins podem fer servir JSON.stringify per tenir una copia profunda
//Les propietats primitives es copien bé, però les niuades comparteixen referència.

let original = { 
  nom: "Anna", 
  adreça: { ciutat: "Barcelona" } 
};

// Spread → còpia superficial
let copia = { ...original };

copia.nom = "Joan"; 
copia.adreça.ciutat = "Girona";

console.log(original.nom);          // "Anna" (independent)
console.log(original.adreça.ciutat); // "Girona" (comparteix la referència!)

// JSON → còpia profunda
let copia2 = JSON.parse(JSON.stringify(original));

copia2.adreça.ciutat = "Girona";

console.log(original.adreça.ciutat); // "Barcelona" (independent!)