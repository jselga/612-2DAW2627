// amb variables
let a = 1;
let b= a;
b++;
console.log(a,b);
// sortida 1 2

// amb objectes
let c = {};
let d= c;

c.prop=1;
console.log(c,d);
// { prop: 1 } { prop: 1 }


// En cas de funcions amb variables
let e =1;
function suma(n){
    n++;
}
suma(e);
console.log(e);
// 1

let f ={prop: 1};
function suma1(n){
    n.prop++;
}
suma1(f);
console.log(f);

// { prop: 2 }