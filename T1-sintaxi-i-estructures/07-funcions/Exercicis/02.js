// Implementa `extendre(user)` que afegeixi a l’objecte rebut 
// els mètodes `login()` i `logout()`
//  i en retorni la versió ampliada.
// Pista: Crea els mètodes i fes servir Object.assign
const obj = {
    nom: 'Nicolas',
};
function extendre(user){

};
const usuari = extendre(obj);
console.log(usuari);
usuari.login();

//SORTIDA: 
// {
//   nom: 'Nicolas',
//   login: [Function (anonymous)],
//   logout: [Function (anonymous)]
// }
// logged in as user Nicolas
// logged out as user Nicolas