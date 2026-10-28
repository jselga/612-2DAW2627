function User(name) {
    this.name = name;
}
User.prototype.login = function () {
    console.log("Iniciant sessió amb usuari: ", this.name);

}

let user1 = new User("Padme");
// Forma antiga de mostrar només les propietats de la funció constructora
console.log("Només les propietats pròpies del objecte i NO del prototip");
for (let prop in user1) {
    if (user1.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
console.log("Totes les propietats");

for (let prop in user1) {
    console.log(prop);

}
console.log("Array de propietats pròpies");
// Forma nova de mostrar només les propietats de la funció constructora
console.log(Object.keys(user1));
