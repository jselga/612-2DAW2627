const punt ={
    x: 10,
    y: 15,
    dibuixar(){
        console.log('dibuixant...');
        
    }
};
// delete punt.dibuixar;

if ('dibuixar' in punt){
    punt.dibuixar();
}else{
    console.log('no existeix la propietat');
    
}
// console.log(Object.keys(punt));

for (let clau of Object.keys(punt)){
    console.log(clau, punt[clau]);
    
}
// Forma moderna, dona la mateixa sortida que l'anterior
for (let clau in punt){
    console.log(clau, punt[clau]);
    
}

// Forma per mostrar com un mapa amb clau i valor
// [ 'x', 10 ]
// [ 'y', 15 ]
// [ 'dibuixar', [Function: dibuixar] ]
for (let entry of Object.entries(punt)){
    console.log(entry);
    
}
