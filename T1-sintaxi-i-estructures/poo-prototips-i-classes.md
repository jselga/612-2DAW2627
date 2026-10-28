# POO en JavaScript: prototips i classes

Aquest document compara dues formes d'escriure programació orientada a objectes (POO) en JavaScript:

1. **Funcions constructores i prototips:** el model que s'utilitzava abans de la sintaxi `class`.
2. **Classes ES6+:** una sintaxi més directa per definir constructors, mètodes i relacions d'herència.

Les dues formes treballen amb objectes i cadenes de prototips. Les classes no substitueixen els prototips: ofereixen una sintaxi diferent per crear i relacionar els mateixos tipus d'objectes.

[📚 **Referència general**](#referència-general)

## Índex

- [1. Conceptes comuns](#1-conceptes-comuns)
- [2. Crear instàncies](#2-crear-instàncies)
- [3. Afegir mètodes](#3-afegir-mètodes)
- [4. Implementar herència](#4-implementar-herència)
- [5. Sobreescriure mètodes](#5-sobreescriure-mètodes)
- [6. Diferències importants](#6-diferències-importants)
- [7. Com entendre els exemples del curs](#7-com-entendre-els-exemples-del-curs)
- [📚 Referència general](#referència-general)

---

## 1. Conceptes comuns

En totes dues formes:

- Un **constructor** inicialitza una instància.
- `new` crea un objecte i associa el seu prototip al prototip del constructor o de la classe.
- Les propietats assignades amb `this` al constructor són **pròpies de cada instància**.
- Els mètodes compartits es poden trobar al prototip.
- La cerca d'una propietat segueix la **cadena de prototips** fins a trobar-la o arribar al final de la cadena.

```text
instància de Gos → Gos.prototype → Animal.prototype → Object.prototype → null
```

La paraula «classe» pot fer pensar en un mecanisme separat dels prototips. En JavaScript, els mètodes definits en una classe són mètodes de prototip i les instàncies segueixen sent objectes en una cadena de prototips.

---

## 2. Crear instàncies

El mateix animal es pot representar amb una funció constructora o amb una classe.

### Funció constructora

```js
function Animal(nom, especie) {
  this.nom = nom;
  this.especie = especie;
}

const gos = new Animal("Bobby", "gos");
```

### Classe

```js
class Animal {
  constructor(nom, especie) {
    this.nom = nom;
    this.especie = especie;
  }
}

const gos = new Animal("Bobby", "gos");
```

En tots dos casos, `gos` és una instància i `nom` i `especie` són propietats pròpies de l'objecte. `new` és necessari en tots dos estils; les classes, a més, donen un error si s'intenten cridar sense `new`.

---

## 3. Afegir mètodes

### Funció constructora: afegir el mètode al prototip

```js
function Animal(nom) {
  this.nom = nom;
}

Animal.prototype.saludar = function () {
  return `Hola, sóc ${this.nom}`;
};

const gos1 = new Animal("Bobby");
const gos2 = new Animal("Luna");
console.log(gos1.saludar());
```

### Classe: definir el mètode dins del bloc de classe

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  saludar() {
    return `Hola, sóc ${this.nom}`;
  }
}

const gos1 = new Animal("Bobby");
const gos2 = new Animal("Luna");
console.log(gos1.saludar());
```

En tots dos exemples, el mètode és compartit i es troba al prototip:

```js
console.log(gos1.saludar === gos2.saludar); // true: és el mateix mètode compartit
```

En canvi, una funció creada dins del constructor o un camp de funció de classe (`sortir = () => {}`) és una propietat pròpia de cada instància. No s'ha de confondre amb un mètode normal definit al prototip.

---

## 4. Implementar herència

Per fer que `Gos` hereti de `Animal`, cal resoldre dues coses en tots dos estils:

1. Inicialitzar les propietats de la classe pare per a cada instància.
2. Enllaçar el prototip del fill amb el prototip del pare perquè les instàncies heretin els mètodes.

### Funcions constructores i prototips

```js
function Animal(nom) {
  this.nom = nom;
}

Animal.prototype.descriure = function () {
  return `${this.nom} és un animal`;
};

function Gos(nom, raça) {
  Animal.call(this, nom); // inicialitza les propietats d'Animal
  this.raça = raça;
}

Gos.prototype = Object.create(Animal.prototype); // hereta els mètodes
Gos.prototype.constructor = Gos;

Gos.prototype.lladrar = function () {
  return `${this.nom} borda`;
};

const gos = new Gos("Bobby", "collie");
console.log(gos.descriure());
console.log(gos.lladrar());
console.log(gos instanceof Gos); // true
console.log(gos instanceof Animal); // true
```

**Recorda:** `Animal.call(this, nom)` inicialitza l'estat del pare; `Object.create(Animal.prototype)` estableix la cadena d'herència. Són passos diferents i habitualment calen tots dos.

### Classes ES6+

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  descriure() {
    return `${this.nom} és un animal`;
  }
}

class Gos extends Animal {
  constructor(nom, raça) {
    super(nom); // crida el constructor d'Animal
    this.raça = raça;
  }

  lladrar() {
    return `${this.nom} borda`;
  }
}

const gos = new Gos("Bobby", "collie");
console.log(gos.descriure());
console.log(gos.lladrar());
console.log(gos instanceof Gos); // true
console.log(gos instanceof Animal); // true
```

| Funcions constructores | Classes |
|---|---|
| `Animal.call(this, ...)` inicialitza el pare | `super(...)` crida el constructor pare |
| `Object.create(Animal.prototype)` enllaça els prototips | `extends Animal` estableix l'herència |
| Cal restaurar `Gos.prototype.constructor` després de reemplaçar el prototip | La sintaxi de classe gestiona aquest enllaç |
| `Gos.prototype.metode = function () {}` afegeix un mètode compartit | `metode() {}` defineix un mètode compartit al prototip |

En un constructor derivat amb `extends`, cal cridar `super(...)` abans d'accedir a `this`.

---

## 5. Sobreescriure mètodes

En tots dos estils, el fill pot definir un mètode amb el mateix nom que el pare. El mètode del fill té prioritat; si cal reutilitzar el del pare, se'n pot fer una crida explícita.

### Funcions constructores

```js
function Animal() {}
Animal.prototype.sonar = function () {
  return "So d'animal";
};

function Gos() {}
Gos.prototype = Object.create(Animal.prototype);
Gos.prototype.constructor = Gos;
Gos.prototype.sonar = function () {
  return Animal.prototype.sonar.call(this) + ": bord";
};

console.log(new Gos().sonar());
```

### Classes

```js
class Animal {
  sonar() {
    return "So d'animal";
  }
}

class Gos extends Animal {
  sonar() {
    return super.sonar() + ": bord";
  }
}

console.log(new Gos().sonar());
```

---

## 6. Diferències importants

| Aspecte | Funcions constructores i prototips | Classes |
|---|---|---|
| Definició del tipus | `function Fill(...) { ... }` | `class Fill { constructor(...) { ... } }` |
| Creació d'instància | `new Fill(...)` | `new Fill(...)` |
| Mètode compartit | `Fill.prototype.metode = function () {}` | `metode() {}` dins la classe |
| Herència | `Object.create(Pare.prototype)` | `class Fill extends Pare` |
| Constructor pare | `Pare.call(this, ...)` | `super(...)` |
| Reutilitzar mètode pare | `Pare.prototype.metode.call(this, ...)` | `super.metode(...)` |
| Privacitat | Convencions o encapsulament amb closures | Camps i mètodes privats amb `#` |

Les classes són la forma recomanada per escriure codi nou amb aquesta estructura, però entendre el patró de prototips ajuda a explicar què hi ha darrere de la sintaxi i a llegir codi existent.

### Privacitat

Amb constructors es pot fer servir una closure per mantenir una dada fora de l'objecte públic. Amb classes ES6+, `#camp` crea un membre privat de classe amb accés comprovat pel llenguatge. Un nom com `_saldo` és només una convenció en tots dos estils; no el fa privat.

---

## 7. Com entendre els exemples del curs

- A [`08-Prototips/resum-prototips.md`](./08-Prototips/resum-prototips.md) s'explica el model amb funcions constructores, `prototype` i `Object.create()`.
- A [`09-ClassesES6/resum-classes-es6.md`](./09-ClassesES6/resum-classes-es6.md) s'expliquen les classes, els camps privats, els membres estàtics, els accessors, l'herència i els mixins.
- A [`enunciats-exercicis-POO.md`](./enunciats-exercicis-POO.md) es demana implementar primer la versió amb prototips i després repetir-la amb classes.

Els exemples d'aquest document fan servir animals, no les entitats de l'exercici final. Així es poden comparar les dues sintaxis sense donar la solució de l'activitat. A l'exercici, mantén les mateixes dades i comportaments en dues implementacions separades.

---

## Referència general

- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN – Herència i cadena de prototips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [MDN – `Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN – `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
