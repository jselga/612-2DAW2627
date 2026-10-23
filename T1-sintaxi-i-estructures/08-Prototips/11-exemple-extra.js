function Vehicle (marca){
    this.marca=marca;
}
Vehicle.prototype.info= function(){
    return `Marca del vehicle: ${this.marca}`;
}
function Cotxe(marca,model){
    Vehicle.call(this, marca);
    this.model =model;
}
Cotxe.prototype = Object.create(Vehicle.prototype);
Cotxe.prototype.constructor = Cotxe;
Cotxe.prototype.mostrarModel = function(){
    return `Model del cotxe: ${this.model}`;
}
let elMeuCotxe = new Cotxe('Ford','Escort');
console.log(elMeuCotxe.mostrarModel());
console.log(elMeuCotxe.info());

