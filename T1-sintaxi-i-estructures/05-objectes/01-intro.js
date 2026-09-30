let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClau: function () {
        console.log('Recuperant clau...');

    },


};
user.recuperarClau();

