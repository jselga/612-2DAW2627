//Extén un objecte existent afegint-hi els mètodes
//  `login()` i `logout()` sense crear una classe. 
// Fes-ho mitjançant una funció que, aplicada amb `call`, 
// incorpori aquests mètodes a l'objecte rebut.
const obj = {
    nom: 'Nicolas',
};
function Extendre() {

}
Extendre.call(obj);

console.log(obj);
obj.login();
obj.logout();
//SORTIDA: 
// {
//   nom: 'Nicolas',
//   login: [Function (anonymous)],
//   logout: [Function (anonymous)]
// }
// logged in as user Nicolas
// logged out as user Nicolas