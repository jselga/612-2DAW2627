let user = {
    id: 1,
    name: 'Head Chala',
    age: 25,
};

for(let prop in user){
    console.log(prop + ":", user[prop]);   
}


let animals = ["Gat","Gos","Ocell"];

for( let index in animals){
    console.log(index+":",animals[index]);
}

// Per arrays és millor fer servir for-of, es poden trobar codis amb for-in perque for-of és una funcionalitat relativament moderna