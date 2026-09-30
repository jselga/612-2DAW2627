// En el cas de les funcions contructores es fa servir UpperCamelCase amb el nom de la classe com en Java
// {id:1, recuperarClau: function(){}}
function Usuari(){
    this.id = 1;                    //propietat
    this.recuperarClau = function(){ // mètode
        console.log('recuperant clau...');
        
    }
}
// 1. Es crea un objecte literal {}
// 2. Es vincula el prototip de la funció creada (en aquest cas Usuari)
// 3. S'assigna a this l'objecte literal this = {}
// 4. retorna this
let usuari = new Usuari();
console.log(usuari);
