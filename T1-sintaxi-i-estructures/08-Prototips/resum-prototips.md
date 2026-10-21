# Resum sobre prototips en JavaScript

Aquest document és una **referència** sobre els prototips, la cadena de prototips i alguns patrons de reutilització de comportament en JavaScript.
Cada secció inclou una explicació breu, un exemple, un enllaç al fitxer `.js` corresponent i referències a MDN quan són útils.

[📚 **Referència general**](#referència-general)

## Índex

- [1. Principis de la POO](#1-principis-de-la-poo)
- [2. Prototips i cadena de prototips](#2-prototips-i-cadena-de-prototips)
- [3. Propietats pròpies i heretades](#3-propietats-pròpies-i-heretades)
- [4. Ampliar prototips natius](#4-ampliar-prototips-natius)
- [5. Herència amb funcions constructores](#5-herència-amb-funcions-constructores)
- [6. Cridar el constructor pare](#6-cridar-el-constructor-pare)
- [7. Sobreescriptura de mètodes](#7-sobreescriptura-de-mètodes)
- [8. Polimorfisme](#8-polimorfisme)
- [9. Composició i herència](#9-composició-i-herència)
- [10. Mixins](#10-mixins)
- [📚 Referència general](#referència-general)

---

## 1. Principis de la POO

La **programació orientada a objectes (POO)** organitza el codi al voltant d'objectes que agrupen dades i comportament. Sovint se'n descriuen quatre principis:

- **Encapsulació:** agrupar dades i operacions relacionades i controlar com s'hi accedeix.
- **Abstracció:** exposar una interfície senzilla sense haver de conèixer tots els detalls interns.
- **Herència:** reutilitzar i especialitzar comportament a partir d'un altre tipus.
- **Polimorfisme:** utilitzar una mateixa interfície amb implementacions diferents.

Per exemple, diferents entitats poden oferir un mètode `save()` i implementar-lo segons les seves necessitats:

```js
function User(nom) {
  this.nom = nom;
  this.save = function () {
    console.log(`Guardant usuari ${this.nom}`);
  };
}

function Moto(model) {
  this.model = model;
  this.save = function () {
    console.log(`Guardant moto ${this.model}`);
  };
}

function validaEntitat(entitat) {
  entitat.save();
}
```

🧩 Exemple: [01-principisPOO.js](./01-principisPOO.js)

📚 **Referència:**
- [MDN – Object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)

---

## 2. Prototips i cadena de prototips

Cada objecte JavaScript té un **prototip**: un altre objecte del qual pot heretar propietats i mètodes. Quan no es troba una propietat a l'objecte, JavaScript la cerca successivament a la **cadena de prototips**.

Les funcions constructores tenen una propietat `prototype`. Els objectes creats amb `new` la tenen com a prototip. Per això, posar-hi mètodes permet compartir-los entre totes les instàncies, en lloc de crear una còpia de cada mètode a cada objecte.

```js
function User(name) {
  this.name = name;
}

User.prototype.logout = function () {
  console.log(`Sortint de la sessió: ${this.name}`);
};

const user1 = new User("Luke");
const user2 = new User("Leia");

user1.logout();
console.log(user1.logout === user2.logout); // true
```

🧩 Exemple: [02-proto.js](./02-proto.js)

📚 **Referència:**
- [MDN – Object prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [MDN – Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

---

## 3. Propietats pròpies i heretades

Les **propietats pròpies** pertanyen directament a l'objecte. Les **heretades** es troben en algun prototip de la seva cadena.

- `Object.keys(obj)` retorna les claus pròpies i enumerables.
- `for...in` recorre les propietats enumerables pròpies i heretades. Es pot filtrar amb `Object.hasOwn()` per quedar-se només amb les pròpies.

```js
function User(name) {
  this.name = name;
}

User.prototype.login = function () {};

const user = new User("Padme");

for (const prop in user) {
  if (Object.hasOwn(user, prop)) {
    console.log(prop); // name
  }
}

console.log(Object.keys(user)); // ["name"]
```

🧩 Exemple: [03-iterant.js](./03-iterant.js)

📚 **Referència:**
- [MDN – `for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [MDN – `Object.hasOwn()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [MDN – `Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

---

## 4. Ampliar prototips natius

JavaScript permet afegir propietats a prototips com `Object.prototype`, però normalment **no s'han d'ampliar els prototips natius**. Una ampliació pot interferir amb altres biblioteques o amb codi que espera el comportament estàndard dels objectes.

```js
// Evita fer això en codi d'aplicació:
Object.prototype.isEqual = function (other) {
  return this === other;
};
```

És preferible definir una funció independent o un mètode en un tipus propi.

🧩 Exemple: [04-extenent.js](./04-extenent.js)

📚 **Referència:**
- [MDN – Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

---

## 5. Herència amb funcions constructores

Per fer que una funció constructora filla hereti els mètodes del prototip d'una funció constructora pare, es pot crear el prototip del fill a partir del prototip del pare amb `Object.create()`. Després, cal restablir la propietat `constructor` del fill.

```js
function Entity() {}
Entity.prototype.save = function () {
  console.log(`Guardant: ${this.name}`);
};

function User(name) {
  this.name = name;
}

User.prototype = Object.create(Entity.prototype);
User.prototype.constructor = User;

const user = new User("Luffy");
user.save(); // Guardant: Luffy
```

En aquest patró, `Object.create()` configura la cadena de prototips abans de crear instàncies. `Object.setPrototypeOf()` també pot canviar un prototip, però modificar cadenes de prototips després de crear objectes pot perjudicar el rendiment; no és la forma recomanada per configurar l'herència habitual. En codi modern, sovint s'utilitza la sintaxi `class` i `extends`.

🧩 Exemple: [05-herencia.js](./05-herencia.js)

📚 **Referència:**
- [MDN – `Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN – `Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 6. Cridar el constructor pare

La cadena de prototips permet heretar mètodes, però no executa el constructor pare per inicialitzar les propietats de cada instància. En funcions constructores es pot cridar amb `Function.prototype.call()`, indicant `this` com a primer argument.

```js
function Entity(entity) {
  this.entity = entity;
}

function User() {
  Entity.call(this, "user");
}

const user = new User();
console.log(user.entity); // "user"
```

🧩 Exemple: [06-constructora-mare.js](./06-constructora-mare.js)

📚 **Referència:**
- [MDN – `Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

## 7. Sobreescriptura de mètodes

Una funció constructora filla pot definir al seu prototip un mètode amb el mateix nom que un del pare. La cerca s'atura en la primera coincidència de la cadena, de manera que s'utilitza la versió del fill.

```js
function Entity() {}
Entity.prototype.save = function () {
  console.log("Guardant des d'entitat");
};

function User() {}
User.prototype = Object.create(Entity.prototype);
User.prototype.constructor = User;
User.prototype.save = function () {
  console.log("Guardant des d'usuari");
};

new User().save(); // Guardant des d'usuari
```

🧩 Exemple: [07-method-override.js](./07-method-override.js)

📚 **Referència:**
- [MDN – Inheriting methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#inheriting_methods)

---

## 8. Polimorfisme

El **polimorfisme** permet tractar objectes diferents mitjançant una mateixa interfície, tot i que cadascun implementi el mètode a la seva manera.

```js
function Select() {}
Select.prototype.render = function () {
  console.log("Renderitzant un select");
};

function Checkbox() {}
Checkbox.prototype.render = function () {
  console.log("Renderitzant un checkbox");
};

const components = [new Select(), new Checkbox()];
components.forEach(component => component.render());
```

🧩 Exemple: [08-polimorfisme.js](./08-polimorfisme.js)

📚 **Referència:**
- [MDN – Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)

---

## 9. Composició i herència

Amb **herència**, un tipus deriva d'un altre i rep el seu comportament a través de la cadena de prototips. Amb **composició**, un objecte combina comportaments independents. La composició pot ser més flexible quan els tipus no formen una jerarquia natural.

```js
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
ànec.nedar();
ànec.caminar();
```

🧩 Exemple: [09-comp-vs-her.js](./09-comp-vs-her.js)

---

## 10. Mixins

Un **mixin** és un patró per combinar mètodes de diversos objectes en un objecte o prototip. `Object.assign()` copia les propietats pròpies i enumerables dels objectes font al destí.

```js
const Parla = {
  parlar() {
    console.log(`${this.nom} parla`);
  }
};

const Corre = {
  córrer() {
    console.log(`${this.nom} corre`);
  }
};

function Personatge(nom) {
  this.nom = nom;
}

Object.assign(Personatge.prototype, Parla, Corre);

const personatge = new Personatge("Ariadna");
personatge.parlar();
personatge.córrer();
```

🧩 Exemple: [10-mixins.js](./10-mixins.js)

📚 **Referència:**
- [MDN – `Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

---

## Referència general

### MDN
- [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [`Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

### Altres recursos
- [JavaScript.info – Prototypal inheritance](https://javascript.info/prototype-inheritance)
- [Carlos Azaustre – ¿Qué es la herencia de prototipos?](https://www.youtube.com/watch?v=h_n_UIOycgM)
- [Jon Mircha – Curso JavaScript: Prototipos](https://www.youtube.com/watch?v=nS5FmAx4u_0)
