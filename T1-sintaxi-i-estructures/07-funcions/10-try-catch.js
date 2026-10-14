
function sumaTot(arr) {
    if (!Array.isArray(arr)) {
        // es poden centralitzar els errors amb sentry sentry.io
        throw new Error('El paràmetre no és un array');

    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`L'element ${el} no es un nombre`)
        }
        return acc + el
    }
    );
}
// console.log(sumaTot([1,2,3,4]));
try {
    console.log(sumaTot([1, 2, NaN, 'hola']));
    // console.log(sumaTot({prop:1}));
} catch (e) {
    //Podem Mostar Errors d'una forma més elegant fent servir SweetAlert2
    // Haurem d'incloure el script de: https://sweetalert2.github.io/#download
    //     Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="#">Why do I have this issue?</a>'
    // });
    console.log(e.message);

}
console.log('despres del try-catch');
