const salutacio = "Hola \\Món!\nBenvinguts al curs:\t \"2DAW-612-Desenvolupament en entorn Client\"";
const nom1 = 'Grup A';
const nom2 = 'Grup B'
const plantilla = `
Hola \\${nom1} i ${nom2}!
Benvinguts al curs      "2DAW-612-Desenvolupament en entorn Client";

`;


function funcPlantilla(nom) {
    return `Hola ${nom}!`
}
console.log(salutacio);
console.log(plantilla);
console.log(funcPlantilla('Lenovo'));
