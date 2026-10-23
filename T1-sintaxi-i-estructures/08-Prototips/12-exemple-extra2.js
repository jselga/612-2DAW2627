function User (name,email){
    this.name = name;
    this.email = email;
}
User.prototype.info = function(){
    return `Nom: ${this.name}, Email: ${this.email}`;

}
function Admin(name,email){
    User.call(this,name,email);

}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor=Admin;
Admin.prototype.totalAcces = function(){
    return `L'Usuari ${this.name} té accés total al sistema`;
}
function Moderator(name,email){
    User.call(this,name,email);
}
Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;
Moderator.prototype.contentModerate = function(){
    return `L'Usuari ${this.name} pot moderar contingut`;
}
let admin = new Admin("Alice","alice@exemple.com");
let mod = new Moderator("Bob","bob@exemple.com");
console.log(admin.info());
console.log(admin.totalAcces());

console.log(mod.info());
console.log(mod.contentModerate());
// console.log(mod.totalAcces()); //Error


