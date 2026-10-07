// const nombres = [1,2,3,4];
//  const suma = nombres.reduce((acc,el)=>{
//     return acc+el;
//  },0);

//  console.log(suma);
 
// const nested = [[1,2],3,[4,5]];
// //[1,2,3,4,5]

// const pla = nested
//     .reduce((acc,el)=> acc.concat(el),[]);
// console.log(pla);
const usuaris = [
    {edat:17, nom: 'Felipe'},
    {edat:13, nom: 'Nico'},
    {edat:25, nom: 'Chanchito'},
    {edat:33, nom: 'Maria'},
 ];
 const indexat = usuaris.reduce((acc,el)=>({
    ...acc,
    [el.nom]: el,
 }),{});

 console.log(indexat);
 