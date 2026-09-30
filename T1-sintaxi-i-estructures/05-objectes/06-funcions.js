// Les funcions són objectes de 1a classe: Poden ser assignades a variables, passades com arguments i returnades a altres funcions

function Usuari(name){
    this.name =name;
}

console.log(Usuari.name);
console.log(Usuari.length);

const U = Usuari;
let user =new U('Nicolas');
console.log(user);


function of(Fn,arg){
    return new Fn(arg);
}
let user1 = of(Usuari,'Chanchito');
console.log(user1);

function returned(){
    return function(){
        console.log('Hola Mundo');
        
    }
}

let saludo = returned();
saludo();
