//short-circuit

// Falsy
// false
// 0
// ''
// null
// undefined
// NaN
let nom= 'Cha';
let username= nom ||'Anònim';
console.log(username);
function fn1(){
    console.log('soc la funció 1');
    return false;
}
function fn2(){
    console.log('soc la funció 2');
    return true;
}
let x = fn1() && fn2();


 // Truthy


// [] || {}
// []
// [] && {}
// {}