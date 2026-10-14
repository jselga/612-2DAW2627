function suma(a, b) {
    // console.log(arguments);

    // return a +b;
    // let total = 0;
    // // Forma prèvia a ES6
    // for (let valor of arguments){
    //     total+=valor;
    // }
    // return total;
    // // Forma moderna
    return Array.from(arguments)
        .reduce((acc, el) => acc + el)
}
// // Si falta un argument p.e.: 
// console.log(suma(1));
// // surt NaN pq fa 1 + undefined
// // Si tenim més arguments que els previstos
console.log(suma(1, 2, 3, 4, 5));
// //ignora els que no necessita
