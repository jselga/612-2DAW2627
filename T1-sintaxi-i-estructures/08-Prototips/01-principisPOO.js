// Principis de la POO:
// Encapsulació 
const user = {
    nom: 'John',
    cognom: 'Brown',
    getNomComplet() {
        return [this.nom, this.cognom].join(' ');
    }
}

console.log(user.getNomComplet());

// // Abstracció 
// const user2 = new User();
// user.password = 'Jane Doe';
// user.save();
// No cal coneixer els detalls d'implementació de la funció User però sabem com funciona

// Herència
// User-> id, name, save()
// Restaurant-> id, name, save()
// Motociclista-> id, name, save()
// Tots comparteixen propietats i mètodes i sense herència hauriem d'implementar-ho 3 cops
// Si creem una funció constructora mare
// Polimorfisme
// Sense polimorfisme hauríem de fer el següent:
function validaEntitat(entitat) {
    switch (entitat.nom) {
        case 'user':
            entitat.save();
            break;
        case 'restaurant':
            entitat.save();
            break;
        case 'moto':
            entitat.save();
            break;
    }
}
    // Fent ús del polimorfisme
    function User(nom) {
        this.nom = nom;
        this.save = function () {
            console.log("Guardant usuari " + this.nom + " a la base de dades d'usuaris");
        };
    }


    function Moto(model) {
        this.model = model;
        this.save = function () {
            console.log("Guardant moto " + this.model + " al registre de vehicles");
        };
    }

    function validaEntitat(entitat) {
        entitat.save();
    }



