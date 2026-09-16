// Personatge
let nom = "Luffy";
let anime = "One Piece";
let edat = "25";

// Objecte literal
let personatge = {
    nom: "Luffy", // Parell clau-valor o bé propietat
    anime: "One Piece",
    edat: "25",
};

console.log(personatge);
console.log(personatge.nom);
console.log(personatge.anime);
console.log(personatge.edat);

// Altres notacions
console.log(personatge['nom']);
console.log(personatge['anime']);

// Canviar propietats
personatge.edat = 20;
personatge['edat'] = 19;

delete personatge.anime;
console.log(personatge);
