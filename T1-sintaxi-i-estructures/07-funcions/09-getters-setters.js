// const usuari = {
//     nom: 'Chanchito',
//     cognom: 'Feliz',
//     nomComplet() {
//         return `${usuari.nom} ${usuari.cognom}`;
//     }
// };
// usuari.nomComplet ='Jane Doe';
// console.log(usuari.nomComplet());
// L'objecte no es modifica
// Alternativa: Ús de set i get
const usuari = {
    nom: 'Chanchito',
    cognom: 'Feliz',
    get nomComplet() {
        return `${usuari.nom} ${usuari.cognom}`;
    },

    set nomComplet(valor){
// Fem ús de destructuring
        const [nom, cognom] = valor.split(' ');
        this.nom=nom;
        this.cognom =cognom;
    }
};
usuari.nomComplet ='Jane Doe';
console.log(usuari.nomComplet);
