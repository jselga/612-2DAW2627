const user = {id:1};
user.name= 'Nicolas';
user.guardar = function(){
    console.log('Desant...',user.name);
    
}
user.guardar();
console.log(user);

delete user.name;
delete user.guardar;
console.log(user);


// // Si volem que el objecte no canvii hem de fer Object.freeze:
// const user1 = Object.freeze({id:1})
// // si volem que no canviin les propietats però si el seu valor:
const user1 = Object.seal({id:1})
user1.name='Nico';
user1.id =2;
console.log(user1);
