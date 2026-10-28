# Resum sobre classes en JavaScript (ES6+)

Aquest document és una **referència** sobre les classes de JavaScript i la seva relació amb els prototips.
Cada secció inclou una explicació breu, un exemple, un enllaç al fitxer `.js` corresponent i referències per ampliar-ne el contingut.

[📚 **Referència general**](#referència-general)

## Índex

- [1. Classes, constructors i mètodes](#1-classes-constructors-i-mètodes)
- [2. Camps i mètodes privats](#2-camps-i-mètodes-privats)
- [3. Membres estàtics](#3-membres-estàtics)
- [4. Getters i setters](#4-getters-i-setters)
- [5. Herència amb `extends` i `super`](#5-herència-amb-extends-i-super)
- [6. Sobreescriptura de mètodes i composició](#6-sobreescriptura-de-mètodes-i-composició)
- [7. Mixins](#7-mixins)
- [📚 Referència general](#referència-general)

---

## 1. Classes, constructors i mètodes

Les **classes** ofereixen una sintaxi per crear objectes i definir-ne el constructor, les propietats i els mètodes. Són una sintaxi sobre el model de prototips de JavaScript.

- `constructor()` s'executa quan es crea una instància amb `new`.
- Els mètodes declarats com `saludar()` es defineixen a `Classe.prototype` i es comparteixen entre les instàncies.
- Els camps declarats a la classe, assignats a `this` dins del constructor o definits com a funcions de camp pertanyen a cada instància.

```js
class User {
  constructor(name) {
    this.name = name;
    this.instance = function () {};
  }

  active = true;

  login() {
    console.log(`Hola, ${this.name}`);
  }

  logout = () => {
    console.log("logout");
  };
}

const user1 = new User("Luke");
const user2 = new User("Leia");

console.log(user1.login === user2.login); // true: mètode compartit al prototype
console.log(user1.logout === user2.logout); // false: cada instància té la seva funció
```

🧩 Exemple: [01-classes.js](./01-classes.js)

📚 **Referència:**
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 2. Camps i mètodes privats

Els camps i mètodes amb el prefix `#` són **privats**: només s'hi pot accedir des del cos de la classe. No són propietats públiques amb un nom especial; intentar accedir-hi des de fora com `objecte.#camp` és un error de sintaxi.

```js
class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  #logger() {
    console.log("Acció interna");
  }

  getName() {
    this.#logger();
    return this.#name;
  }
}

const user = new User("Miquel Pérez");
console.log(user.getName());
```

🧩 Exemple: [02-privat.js](./02-privat.js)

📚 **Referències:**
- [MDN – Private class elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [MDN – Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN – Camps privats (versió en castellà)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

---

## 3. Membres estàtics

Els membres **estàtics** pertanyen a la classe, no a les instàncies. Es criden amb `NomClasse.metode()` i no es poden cridar com a mètodes d'una instància. Una classe també pot tenir camps estàtics.

```js
class Restaurant {
  static qty = 0;

  constructor(name) {
    this.name = name;
  }

  static getRestaurant(id) {
    Restaurant.qty++;
    return new Restaurant(`Restaurant ${id}`);
  }
}

const restaurant = Restaurant.getRestaurant(12);
console.log(Restaurant.qty); // 1
console.log(restaurant.name);
```

| Membre | On es troba | Accés habitual |
|---|---|---|
| Camp d'instància | A cada instància | `instancia.nom` |
| Mètode d'instància | A `Classe.prototype` | `instancia.metode()` |
| Membre estàtic | A la classe | `Classe.metode()` |

🧩 Exemple: [03-static.js](./03-static.js)

📚 **Referència:**
- [MDN – Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

---

## 4. Getters i setters

Un **getter** defineix què passa quan es llegeix una propietat; un **setter**, quan se n'assigna un valor. S'utilitzen com si fossin propietats (`objecte.timetable`), no com a mètodes amb parèntesis.

El prefix `_` és només una convenció per indicar que una propietat és interna: no la fa privada. Per restringir-ne l'accés, es pot fer servir un camp privat `#`.

```js
class Restaurant {
  #timetable;

  get timetable() {
    return this.#timetable;
  }

  set timetable(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new Error("Data invàlida");
    }
    this.#timetable = date;
  }
}

const restaurant = new Restaurant();
restaurant.timetable = "1 march 1978";
console.log(restaurant.timetable);
```

🧩 Exemple: [04-get-set.js](./04-get-set.js)

📚 **Referències:**
- [MDN – Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN – Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [MDN – Getters/Setters (versió en castellà)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get)

---

## 5. Herència amb `extends` i `super`

La paraula clau `extends` defineix una classe derivada. El constructor de la classe derivada crida `super(...)` per executar el constructor pare abans d'utilitzar `this`. Els mètodes heretats es poden cridar amb `super.metode()`.

```js
class Entity {
  constructor(id) {
    this.id = id;
    this.createdAt = new Date();
  }

  save() {
    console.log("Desant entitat");
  }
}

class User extends Entity {
  constructor(name) {
    super(1);
    this.name = name;
  }
}

const user = new User("John Doe");
```

🧩 Exemple: [05-herencia.js](./05-herencia.js)

📚 **Referència:**
- [MDN – `extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

## 6. Sobreescriptura de mètodes i composició

Una subclasse pot **sobreescriure** un mètode heretat definint-ne un altre amb el mateix nom. Pot substituir el comportament o reutilitzar el del pare amb `super.metode()`.

```js
class Entity {
  save() {
    console.log("Desant des d'Entity");
  }
}

class User extends Entity {
  save() {
    super.save();
    console.log("Desant des de User");
  }
}
```

El fitxer també mostra **composició**: `Cotxe` conté una instància de `User` i delega l'acció de desar-hi. Això és una relació «té un», no una relació d'herència «és un».

🧩 Exemple: [06-method-override.js](./06-method-override.js)

📚 **Referències:**
- [MDN – `extends` i sobreescriptura de mètodes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends#overriding_methods)
- [MDN – `extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

## 7. Mixins

Un **mixin** és un patró per combinar comportaments que no encaixen necessàriament en una mateixa jerarquia d'herència. En aquests exemples, els mixins són objectes amb mètodes.

### Copiar mètodes amb `Object.assign()`

`Object.assign()` copia al destí les propietats pròpies i enumerables dels objectes font. No copia els mètodes que només siguin al prototip de la font. Si dos objectes tenen una propietat amb el mateix nom, guanya l'últim que es copia.

```js
Object.assign(User.prototype, Entity, Updating);
```

### Delegar amb la cadena de prototips

`Object.setPrototypeOf()` no copia els mètodes: canvia el prototip de l'objecte. Els mètodes que no es troben a `User.prototype` es busquen al prototip següent.

```js
Object.setPrototypeOf(User.prototype, Entity);
```

Aquesta operació reemplaça el prototip que tenia `User.prototype`. Si cal conservar la cadena anterior i combinar diversos mixins, es pot crear un objecte intermedi:

```js
const oldPrototype = Object.getPrototypeOf(User.prototype);
const mixins = Object.assign(Object.create(oldPrototype), Entity, Updating);
Object.setPrototypeOf(User.prototype, mixins);
```

Canviar la cadena de prototips és una operació lenta en els motors JavaScript; és preferible decidir l'estructura quan es creen els objectes. Tria la còpia o la delegació segons el comportament que necessitis. Al fitxer d'exemple, `User.prototype.save()` propi té prioritat sobre un `save()` heretat de `Entity`.

🧩 Exemple: [07-mixins.js](./07-mixins.js)

📚 **Referències:**
- [MDN – `Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN – `Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

---

## Referència general

### MDN
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [`extends` — overriding methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends#overriding_methods)
- [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [`Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- [Camps privats (versió en castellà)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [Getters/Setters (versió en castellà)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get)
