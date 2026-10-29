class Entity {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }
    save() {
        console.log(` Guardant info d'entitat: ${this.id} a la data ${this.created_at}`);

    }
    logout = () => {
        console.log("logout");

    }
}
class User extends Entity {
    constructor(name, email) {
        super(Math.floor((Math.random() * 1000)));
        this.name = name;
        this.email = email;
    }
}
const u = new User('John Doe', 'johndoe@example.com');
const u2 = new User('Jane Doe', 'janedoe@example.com');
u.save()
u2.save()
console.log(u);
console.log(u2);


