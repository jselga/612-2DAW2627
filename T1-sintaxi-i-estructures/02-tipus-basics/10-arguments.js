// Funció amb paràmatre a
function suma(a){
    return a+2;
}
// Crida a la funció amb argument 5
console.log(suma(5));


// Funció amb paràmatres a i b
function suma2(a,b){
    console.log(arguments); // Forma d'accedir als arguments NO recomanada
    
    return a+b;
}
// Crida a la funció amb argument 5
console.log(suma2(5,6));
console.log(typeof suma);
