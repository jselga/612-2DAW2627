const lletres =['a','b'];
// afegir al final de l'array
lletres.push('c','d');

// afegir a l'inici de l'array
lletres.unshift('y','z');
console.log(lletres);

// afegir amb splice

lletres.splice(3,0,1,2)

console.log(lletres);
