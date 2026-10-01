// En el cas de les funcions contructores es fa servir UpperCamelCase amb el nom de la classe com en Java
// {id:1, recoverPsw: function(){}}
function Usuari() {
    this.id = 1;                    //propietat
    this.recoverPsw = function () { // mètode
        console.log('recuperant clau...');

    }
}
// 1. Es crea un objecte literal {}
// 2. Es vincula el prototip de la funció creada (en aquest cas Usuari)
// 3. S'assigna a this l'objecte literal this = {}
// 4. retorna de forma automàtica this
let usuari = new Usuari();
console.log(usuari);
let manu = Usuari();
console.log(manu);
// undefined