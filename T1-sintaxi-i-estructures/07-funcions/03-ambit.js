let fora = 'estic fora'
function avast() {

    // console.log(fora);
    fora = 'estic dins'
    function salutacio() { }
    var vella = 'no utilitzar';
    let variable = 'Hola món';
    const constant = 'Hola món!';

    // console.log(salutacio);
    // console.log(vella);
    // console.log(variable);
    // console.log(constant);

}
console.log(fora);

avast();
console.log(fora);


const generadorCues = function () {
    let torn = 1; // Variable clausurada (private)
    return function () {
        return torn++;
    }
}

demanarTornPa = generadorDeTorns();

demanarTornPeix = generadorDeTorns();

console.log("Pa torn " + demanarTornPa());
console.log("Peix torn " + demanarTornPeix());
console.log("Pa torn " + demanarTornPa());
console.log("Pa torn " + demanarTornPa());
console.log("Pa torn " + demanarTornPa());
console.log("Peix torn " + demanarTornPeix());
console.log("Pa torn " + demanarTornPa());
console.log("Pa torn " + demanarTornPa());
console.log("Peix torn " + demanarTornPeix());
console.log("Peix torn " + demanarTornPeix());
console.log("Peix torn " + demanarTornPeix());
console.log("Pa torn " + demanarTornPa());
