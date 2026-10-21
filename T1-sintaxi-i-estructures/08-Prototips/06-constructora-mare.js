function Entity(entity){
    this.id = Math.random().toString();
    this.entity = entity;
 
}

function User(){
    Entity.call(this,'user');
    this.attr = {
        name: 'Tony Stark',
        email:'tstark@avengers.net'
    }
}
const u = new User();
console.log(u);
