let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    address: {
        street: 'Queen st',
        number: 15,
    },
    active: true,
    // Aquí estem fent servir una funció anònima, es treballarà més endavant
    recoverPsw: function () {
        console.log('Recuperant clau...');

    },


};
user.recoverPsw();

