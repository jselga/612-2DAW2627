console.log(
    Math.PI, // 3.1415...
    Math.abs(-15), // 15
    Math.round(15.5), // 16
    Math.round(15.4), // 15
    Math.floor(15.9), // 15
    Math.ceil(15.0001),// 16
    Math.pow(2,3), // 8
    Math.sqrt(9) // 3
    
); 
console.log(Math.random()); // Nombre pseudo-aleatori (0..1)

function getRandom(min,max){
    return Math.random()*(max-min)+min;
}
console.log(getRandom(1,10));







