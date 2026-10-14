// function suma (a,b){
//     return Array.from(arguments)
//         .reduce((acc,el)=>acc+el);
// }

//Fat arrow functions
// No tenen ARGUMENTS
// ni super ni context this
const suma = (a,b)=>{
    return Array.from(arguments)
        .reduce((acc,el)=>acc+el);
}

console.log(suma(1,2,3,4));
