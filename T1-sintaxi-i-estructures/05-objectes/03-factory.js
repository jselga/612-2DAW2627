let user = {
    id: 1,
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    active: true,
    recoverPsw: function () {
        console.log('Recuperant clau...');

    },
};

// let user1 = {
//     id: 2,
//     email: 'chanchito@holamundo.io',
//     name: 'Chanchito',
//     active: false, 
//     recoverPsw: function(){
//         console.log('Reecuperant clau...');

//     },
// };

function crearUsuari(name, email) {
    return {
        email,
        name,
        active: true,
        recoverPsw: function () {
            console.log('Recuperant clau...');

        },
    };
}
let user1 = crearUsuari('Chanchito', 'chanchito@holamundo.io');
let user2 = crearUsuari('Felipe', 'felipe@holamundo.io');
console.log(user1);
console.log(user2);


