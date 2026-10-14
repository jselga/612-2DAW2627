// console.log(salutacio());
// console.log(vella);
// console.log(hola);
// console.log(chao);
function salutacio(){
    return console.log("Hola des de fn");
    ;
} 
let hola ='hola';
const chao = 'chao';
var vella =`ja no ho has d'utilitzar`;
// No funciona amb Node perque fa referencia a un objecte del navegador
console.log(window);
// Provar al navegador per veure com apareixen dins de l'objecte window


// No utilitzar var perque es carrega a l'objecte window i a més és una forma antiga. 
// A les funcions declarades com es mostra també els hi passa però ja ho solucionarem més endavant
