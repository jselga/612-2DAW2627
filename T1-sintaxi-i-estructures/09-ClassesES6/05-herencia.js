class Entity {
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }
    save(){

    }
}
class User extends Entity {
    constructor(name){
        super(1);
        this.name=name;
    }
}
const u = new User('John Doe');
console.log(u);
