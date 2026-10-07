let usuaris =[
    {id:1,actiu:true},
    {id:2,actiu:false},
    {id:3,actiu:false},
];
// let totsActius = usuaris.every(u=>{
//     console.log('tots actius', u.id);
//     return u.actiu;
    
// })
// console.log(totsActius);

let algunActiu =usuaris.some(u=>{
    console.log(u.id);
    return u.actiu;
    
})
console.log(algunActiu);
