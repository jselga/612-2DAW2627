 let usuaris = [
    {edat:17, nom: 'Felipe'},
    {edat:13, nom: 'Nico'},
    {edat:25, nom: 'Chanchito'},
    {edat:33, nom: 'Maria'},
 ];

//  const llista = usuaris.map(u=>`<li>${u.nom}</li>`);
//  const html = `<ol>${llista.join('')}</ol>`
//  console.log(html);
 
//  const mapped = usuaris.map(u=>({   
//         ...u,
//         major: u.edat >17,
//     }
//  ));

//  console.log(mapped);
 
 const llista = usuaris
        .filter(u=> u.edat >17)
        .map(u=>`<li>${u.nom}</li>`);
 const html = `<ol>${llista.join('')}</ol>`
 console.log(html);