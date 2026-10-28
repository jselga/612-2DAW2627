class Entity {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }
    save() {
        console.log('saving from Entity');

    }
}
class User extends Entity {
    constructor(name) {
        super(1);
        this.name = name;

    }
    save() {
        super.save();
        console.log('saving from User');

    }
}
class Cotxe {
    constructor(prop) {
        this.propietari = new User(prop);
    }
    guardar(){
        this.propietari.save();
        console.log("ssagha");
        
        
    }


}
const u = new User('John Doe');
console.log(u);
u.save();
const c = new Cotxe();
console.log(c);
c.guardar();

