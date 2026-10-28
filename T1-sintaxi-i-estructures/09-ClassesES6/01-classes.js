// Abans de ES6 sense class
// function User(name){
//     this.name = name;
//     this.instance = function(){

//     }
// }
// User.prototype.login = function(){
//     console.log("Hello");
    
// }
//A partir de ES6 amb class

//Syntactic Sugar https://en.wikipedia.org/wiki/Syntactic_sugar
class User{
    constructor(name){
        this.name=name;
        this.instance =function(){}
    }
    active = true;
    // És equivalent a afegir-ho mitjançant el prototype
    login() {
        console.log("Hello");
        
    }

    // Si el declarem de la manera següent s'assignarà
    //  a les instàncies, no al prototype. JS no sap si és propietat o funció
    logout = ()=>{
        console.log('logout');
        
    }
}
const u = new User("chanchito");
// u.login();