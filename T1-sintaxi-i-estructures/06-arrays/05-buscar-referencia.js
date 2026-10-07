const usuaris = [
    {id:1, name: 'Chanchito'},
        {id:3, name: 'Chanchito'},
    {id:2, name: 'Feliz'},
];

// const resultat =usuaris.indexOf({id:1, name: 'Chanchito'});
// No trobarem res perque els objects es guarden per referència


// Si busquem per propietat ens hem d'assegurar que aquesta sigui única
const resultat =usuaris.find(function(usuari){
    // return usuari.id ===1;
    return usuari.name ==='Chanchito';
});

// Arrow function 
const res2 = usuaris.findIndex(usuari=>
     usuari.name ==='Chanchito');
console.log(resultat);
console.log(res2);
