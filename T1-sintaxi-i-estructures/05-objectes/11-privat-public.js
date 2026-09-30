// Amb tot públic
// function Usuari(){
//     this.name='Nico';
//     this.log = function(){
//         console.log('logging...');
//     }
//     this.save = function(){
//         this.log()
//         console.log('saving...')
//     }
// }
// const user = new Usuari();
// user.log = function(){
//     console.log('lala');
    
// }
// user.save();
// Amb mètodes privats
function Usuari(){
    this.name='Nico';
    let log = function(){
        console.log('logging...');
    }
    this.save = function(){
        log();
        console.log('saving...');
    }
}
const user = new Usuari();
// mètode privat,una instancia no pot accedir-hi
// user.log = function(){
//     console.log('lala');
    
// }
user.save();