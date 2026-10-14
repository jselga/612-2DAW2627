console.log(resta); // No funciona pel Hoisting 

// Declaració de funcions: Function Declaration

// Funció nombranda --> named function
function suma(){
    console.log('sumant...');
    
}
// Funció anònima ->Anonymous function
// Ens dona error perque per si soles no es poden declarar
// Les podem posar dins d'una altra funció (p.e. map)
// function(){
//     console.log('funció anònima');
    
// }
//Expressió de funció anònima
const resta = function(){ // Anonymous function expression
    console.log('restant...');
    
}
const multiplica = function multi(){ // Named function expression
    console.log('multiplicant');
    
}
const divideix = () =>{ // Fat arrow fuction anònima sempre
    console.log('dividint');
    
}
