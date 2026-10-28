# Classes ES6 en JavaScript — Resum (revisat)

[📚 **Recursos**](#recursos)

## Conceptes i accions amb Classes ES6

### 1. Classes
Les **classes** proporcionen una sintaxi clara sobre el model de prototips per definir **constructors**, **propietats** i **mètodes**. Els mètodes definits dins del bloc `class { ... }` s'afegeixen a `Classe.prototype` (compartits per les instàncies).
```js
class Persona {
  constructor(nom) {  // constructor
    this.nom = nom;
  }
  saludar() { // mètode de prototip
    console.log(`Hola, sóc ${this.nom}`);
  }
}
```
🧩 Exemple: [01-classes.js](./01-classes.js)  
[📘 MDN — Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

### 2. Membres privats
Amb les classes ES6+ es poden encapsular **camps i mètodes** perquè siguin **privats** utilitzant el prefix `#`. Només són accessibles dins del cos de la classe.
```js
class Compte {
  #saldo = 0;
  ingressar(q) { this.#saldo += q; }
  veure() { return this.#saldo; }
}
```
🧩 Exemple: [02-privat.js](./02-privat.js)  
[📘 MDN — Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

---

### 3. Mètodes estàtics
Un **mètode estàtic** pertany a la **classe** (no al prototip) i es crida com `Classe.metode()`; no és accessible des d’instàncies.
```js
class Util {
  static suma(a, b) { return a + b; }
}
console.log(Util.suma(2, 3));
```
| Tipus de mètode        | On s’emmagatzema               | Accessible des d’instàncies? | Exemple típic                   |
| ---------------------- | ------------------------------ | ----------------------------- | ------------------------------- |
| **D’instància (this)** | A l’objecte instància          | ✅ Sí                          | Assignat dins `constructor`     |
| **De prototip**        | `Classe.prototype`             | ✅ Sí                          | Definició normal dins `class`   |
| **Estàtic**            | `Classe` (funció constructora) | ❌ No                          | `Math.random()`, `Array.from()` |

🧩 Exemple: [03-static.js](./03-static.js)  
[📘 MDN — Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

---

### 4. Getters i Setters
Controlen l’accés i la validació en **lectura** (`get`) i **escriptura** (`set`). Sovint s’utilitza el prefix `_` per indicar un camp “intern” (conveni).
```js
class Persona {
  constructor(nom) { this._nom = nom; }
  get nom() { return this._nom.toUpperCase(); }
  set nom(v) { this._nom = String(v).trim(); }
}
```
🧩 Exemple: [04-get-set.js](./04-get-set.js)  
[📘 MDN — Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

---

### 5. Herència
`extends` crea una subclasse i **`super()`** invoca el constructor del pare. També pots cridar mètodes del pare amb `super.metode()`.
```js
class Animal {
  constructor(nom){ this.nom = nom; }
  sonar(){ console.log('so genèric'); }
}
class Gos extends Animal {
  constructor(nom, pelatge){
    super(nom);
    this.pelatge = pelatge;
  }
}
```
🧩 Exemple: [05-herencia.js](./05-herencia.js)  
[📘 MDN — extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

### 6. Method override
Una subclasse pot **sobreescriure** mètodes del pare per canviar el comportament. Si cal, es pot reutilitzar part del comportament del pare amb `super.metode()`.
```js
class Logger { log(m){ console.log('LOG:', m); } }
class Debugger extends Logger {
  log(m){
    console.debug('DEBUG:', m);      // nou comportament
    // super.log(m);                 // opcional: reutilitza el pare
  }
}
```
🧩 Exemple: [06-method-override.js](./06-method-override.js)  
[📘 MDN — extends (override)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends#overriding_methods)

---

### 7. Mixins
Els **mixins** permeten “barrejar” comportaments sense crear una jerarquia rígida. Tens tres patrons principals:

**Patró A — Composició per còpia (recomanat per simplicitat):**
```js
// Això assigna tot el que tingui Entity al prototype de User
Object.assign(User.prototype, Entity);
```
✅ Simple, no trenca la cadena existent.  
⚠️ Si sobrescrius noms, el darrer guanya.

**Patró B — Cadena de prototips (quan vols interposar un esglaó a la cadena):**
```js
// D'aquesta manera s'assignen els mètodes en el prototype superior
// com en el cas de l'herència amb extends
Object.setPrototypeOf(User.prototype, Entity);
```
✅ No duplica codi; aprofita el lookup via `[[Prototype]]`.  
⚠️ **Risc:** si `User.prototype` ja tenia un prototip, el substituiràs. Preserva’l així:
```js
const oldProto = Object.getPrototypeOf(User.prototype);
Object.setPrototypeOf(Entity, oldProto);
Object.setPrototypeOf(User.prototype, Entity);
```

**Patró C — Composició com a mixin + preservació de cadena:**
```js
// Finalment si volem fer una composició com a mixin
const newProto = Object.assign({}, Entity, Updating);
const oldProto = Object.getPrototypeOf(User.prototype);
Object.setPrototypeOf(newProto, oldProto);
Object.setPrototypeOf(User.prototype, newProto);
```
✅ Combina diversos mixins i **preserva** el que ja hi havia a la cadena.  
⚠️ `Object.setPrototypeOf` pot tenir impacte de rendiment; usa’l quan realment necessitis canviar la cadena.

> 💡 Recorda: `Object.assign(User.prototype, ...)` **copia** mètodes; `Object.setPrototypeOf(User.prototype, ...)` **canvia** d’on s’hereten (no copia). Tria el patró segons si vols duplicar o delegar.

🧩 Exemple: [07-mixins.js](./07-mixins.js)  
[📘 MDN — Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
 [📘 MDN — Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

---

## Recursos
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN – Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN – Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN – Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN – extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN – Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN – Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
