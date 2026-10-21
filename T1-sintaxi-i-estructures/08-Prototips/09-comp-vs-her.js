// Amb herència, el comportament s'organitza en una jerarquia.
function Animal(nom) {
  this.nom = nom;
}

Animal.prototype.respirar = function () {
  console.log(`${this.nom} respira`);
};

function ÀnecHeretat(nom) {
  Animal.call(this, nom);
}

ÀnecHeretat.prototype = Object.create(Animal.prototype);
ÀnecHeretat.prototype.constructor = ÀnecHeretat;

// Amb composició, combinem només els comportaments necessaris.
const potNedar = {
  nedar() {
    console.log(`${this.nom} nada`);
  }
};

const potCaminar = {
  caminar() {
    console.log(`${this.nom} camina`);
  }
};

const ànec = Object.assign({ nom: "Donald" }, potNedar, potCaminar);

const ànecAmbHerència = new ÀnecHeretat("Daisy");
ànecAmbHerència.respirar();
ànec.nedar();
ànec.caminar();
