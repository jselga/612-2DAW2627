let nom = "Hola Món";
nom = "Chanchito Feliz"
console.log(nom);
const nom2 = "Hola";
nom2 = "Adéu";

// Sortida:
// Chanchito Feliz
//Uncaught TypeError: invalid assignment to const 'nom2'
// Una constant no es pot canviar en altres linies de codi. Un cop assignada a un valor es manté constant
// Si volem canviar hem de fer servir let si es tracta de variables primitives
// Si són dades per referència es pot fer servir const, perque el valor a l'Stack es mantindrà, només canviarà a Heap