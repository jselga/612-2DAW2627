// Nota: Examinar millor a la consola de Chrome, queda més clar
function User(){
    this.name = "Monkey D. Luffy";

};
function Product(){
    this.name= "Gomu Gomu no Mi";
};
function Entity(){

}
Entity.prototype.save = function(){
    console.log('guardant...', this.name);
}
Entity.prototype.validate = function(){
    console.log('validant: ', this.name);
}
 // Amb herència
 // Abans de ES6
// La funció constructora Entity es perd
 // User.prototype = Entity.prototype;
// User.prototype.constructor = User;
// La funció constructora Entity es conserva
// User.prototype = Object.create(Entity.prototype);
// User.prototype.constructor = User;
// A partir de ES6
Object.setPrototypeOf(User.prototype, Entity.prototype);
Object.setPrototypeOf(Product.prototype, Entity.prototype);
const user = new User();
console.log(user);
const prod = new Product();
console.log(prod);

// Sense herència:
// User.prototype.save = function (){
//     console.log('guardant...');
    
// }

// Product.prototype.save = function (){
//     console.log('guardant...');
    
// }
