Object.prototype.isEqual = function (obj){
    return this == obj;
}

let x = {};
let y= x;
console.log(x.isEqual(y));
 // Posem pel cas que volem extendre una funció al prototype d'Object 
 // JS ens ho permet però pot donar problemes amb dependències de tercers 
 // o bé amb noves versions de JS, imagina una versió futura implementa el 
 // mètode que isEqual però d'un altra manera, ens obligaria a refactoritzar 
 // tot el nostre codi. 
 // Conclusió: Encara que es pugui NO extendrem mètodes d'Objectes 
 // natius del llengutatge. A no ser que ens dediquem a fer llibreries i 
 // en aquest cas ja seguiriem una guia de bones pràctiques