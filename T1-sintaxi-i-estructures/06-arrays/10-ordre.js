// let nombres = [15,10,-3];
// nombres.sort();
// nombres.reverse();                          
// console.log(nombres);

// let lletres = ['z','a','d'];
// lletres.sort();
// console.log(lletres);

// let ambMajuscules = ['Z','a','d'];
// ambMajuscules.sort((a,b)=>{
//     /**
//      *  a abans de b => -1
//      *  b abans de a => 1
//      *  iguals => 0
//      */
//     let alower = a.toLowerCase();
//     let blower =b.toLowerCase();
//     if(alower <blower){
//         return -1;
//     }
//     if (alower >blower){
//         return 1;
//     }
//     return 0;
// });
// console.log(ambMajuscules);
 let usuaris = [
    {edat:15, nom: 'Felipe'},
    {edat:25, nom: 'Nico'},
    {edat:13, nom: 'Poli'},
 ]
//  usuaris.sort((a,b)=>{
//     if(a.edat <b.edat){
//         return -1;
//     }
//     if(a.edat >b.edat){
//         return 1;
//     }
//     return 0;
//  });

  usuaris.sort((a,b)=>{
    if(a.edat <b.edat) return -1;
    if(a.edat >b.edat) return 1;
    return 0;
 });
 console.log(usuaris);

 