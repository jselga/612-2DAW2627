function getProto(u){
    return Object.getPrototypeOf(u);
}
function Entity(entity){
    // this.id = Math.random().toString();
    // this.entity = entity;
 
}
Entity.prototype.save =function (){
    console.log(`guardant des d'entitat...`);
    
}

function User(){}
User.prototype.save = function(){
    console.log(`guardant des d'usuari...`);
}
// function Product(){}
// function Category(){}


Object.setPrototypeOf(User.prototype,Entity.prototype);

const u = new User();
u.save();
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());
console.log(getProto(getProto(u)).save());
