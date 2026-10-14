

// function suma (a,b,...rest){
//     console.log(rest);
// }
const suma=(a,b,...rest)=>{
    console.log(rest);
    
}
suma(1,2,3,4,5,6,7);

const logMsg = (desc,...msgs) =>{
    for (let msg of msgs){
        console.log(desc,msg);
        
    }
}

//Passant els arguments separadament
logMsg('Servidor:','Error 1','Petició acceptada','Socket actiu')
// Passant els arguments com array i després fent servir el spread operator
let missatges = ['Error 1','Petició acceptada','Socket actiu'];
logMsg('Client mòbil:',...missatges);