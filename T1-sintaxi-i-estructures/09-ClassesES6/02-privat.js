// function User(n){
//     let name = n;
//     this.getName = function(){
//         return name;
//     }
// }

class User {
    #name;
    constructor(name) {
        this.#name=name;
    }
    // Apareix una nova propietat a l'inspector [[PrivateMethods]]

    #logger(){

    }
    getName() {
        this.#logger();
            return this.#name;
        };
}
const u = new User('Miquel Pérez');
// u['#name']='lala'; // Es crea una nova propietat #name amb el valor 
// assignat però això pot portar a confusió. Evitar fer-ho!
// console.log(u.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

