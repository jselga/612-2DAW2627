 let usuaris = [
    {edat:17, nom: 'Felipe'},
    {edat:13, nom: 'Nico'},
    {edat:25, nom: 'Poli'},
    {edat:33, nom: 'Maria'},
 ]

 const majors = usuaris.filter(u=>u.edat >17);
 const menors = usuaris.filter(u=>u.edat <=17);

 console.log(majors);
 console.log(menors);
 