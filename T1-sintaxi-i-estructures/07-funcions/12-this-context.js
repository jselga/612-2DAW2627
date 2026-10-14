const usuari = {
    nom: 'Nico',
    nacionalitats: ['Chile', 'Colombia', 'NZ'],
    mostrarNacionalitats() {
        this.nacionalitats.forEach(nacionalitat => {
            console.log(this.nom, nacionalitat);
        });
        // this.nacionalitats.forEach(function(nacionalitat){
        // No es pot perque el context de this és window
        // console.log(this.nom,nacionalitat);
    }
};
// En el cas de les arrow functions, com que no tenen
// context de this "hereten" el context de la jerarquia superior 
// en aquest cas l'objecte usuari



usuari.mostrarNacionalitats();