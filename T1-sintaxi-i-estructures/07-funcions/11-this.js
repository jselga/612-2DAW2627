// 1. Dins d'un objecte: this fa referencia al objecte
// 2. En una funció: this fa referencia al objecte window o global (node) si estem en una funció
// 3. Si es fa servir new fa referencia a l'objecte que serà creat            

// Cas 1:
// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this);
//     }
// };
// user.logout = function logout() {
//     console.log(this);

// }
// user.login();
// user.logout();
// Cas 2:
function log() {
    console.log(this);

}
log();

function Log(missatge) {
    this.missatge = missatge;
    console.log(this);
    this.saluda = function () {
        console.log(this.missatge);
    };
}

/** Quan fem servir la paraula reservada de new
 *  es crea un objecte literal
 *  es vincula aquest objecte a this
 *  es vincula el prototip
 *  si no retorna res, retorna this
 */
const l = new Log('Hola')
l.saluda();