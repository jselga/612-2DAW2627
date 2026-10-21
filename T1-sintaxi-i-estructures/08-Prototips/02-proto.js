function User(name) {
    this.name = name;
    //mètode d'instància (menys eficient)
    this.login = function () {
        console.log("Iniciant sessió");
    };
    this.loggerout = function () {
        console.log("Sortint des de loggerout");
        
        this.logout();
    }
}
// Podem afegir propietats com mètodes amb prototype (més eficient)
// mètode de prototip
User.prototype.logout = function () {
    console.log("Sortint de la sessió", this.name);
    // this.loggerout(); // Si fem això provoquem un loop infinit
}
const user1 = new User("Luke");
const user2 = new User("Leia");
user1.login();
user1.logout();
user2.logout();

// user1.loggerout();
// user2.loggerout();


console.log(user1); //veure en Navegador
console.log(user2); //veure en Navegador

// La funció login es veu dins de les propietats del objecte, és a dir és crea a cada instància
// Mentre que la de logout es crea mitjançant el prototype i per tant ja no es crearà a cada instància

// user1.login();
// console.log(user2.login == user1.login); // false

User.prototype.toString = function (){
    console.log("Usuari: ", this.name);
    
}
user1.toString();
// 02-proto.js:4 Iniciant sessió
// 02-proto.js:13 User {nom: undefined, login: ƒ}login: ƒ ()nom: undefined[[Prototype]]: Objectlogout: ƒ ()length: 0name: ""prototype: {}arguments: nullcaller: null[[FunctionLocation]]: 02-proto.js:8[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]constructor: ƒ User(nom)[[Prototype]]: Object
