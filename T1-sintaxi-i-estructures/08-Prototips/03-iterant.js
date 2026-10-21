function User(name) {
    this.name = name;
}
User.prototype.login = function () {
    console.log("Iniciant sessió amb usuari: ", this.name);

}

let user1 = new User("Padme");
// Forma antiga de mostrar només les propietats de la funció constructora
for (let prop in user1) {
    if (user1.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
// Forma nova de mostrar només les propietats de la funció constructora
console.log(Object.keys(user1));
