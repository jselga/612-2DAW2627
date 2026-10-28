# Classes ES6 en JavaScript — Resum

[📚 **Recursos**](#recursos)

## Conceptes i accions amb Classes ES6

### 1. Classes
Les **classes** proporcionen una sintaxi clara sobre el model de prototips per definir **constructors**, **propietats** i **mètodes**.
```js
class Persona {
  constructor(nom) {  // constructor
    this.nom = nom; 
    this.caminar = function(){} // mètode d'instància
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
Amb les classes ES6 es poden encapsular **camps i mètodes** perquè siguin **privats**: Utilitzant  el prefix `#`.  
 D'aquesta manera només seran accessibles dins de la classe.
```js
class Compte {
  #saldo = 0;
  ingressar(q) { this.#saldo += q; }
  veure() { return this.#saldo; }
}
```
🧩 Exemple: [02-privat.js](./02-privat.js)  
[📘 MDN — Camps privats](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

---

### 3. Mètodes estàtics
Un **mètode estàtic** pertany a la classe (no a la instància ni al prototip) i es crida com `Classe.metode()`.
```js
class Util {
  static suma(a, b) { return a + b; }
}
console.log(Util.suma(2, 3));
```
| Tipus de mètode        | On s’emmagatzema               | Accessible des de instàncies? | Exemple típic                   |
| ---------------------- | ------------------------------ | ----------------------------- | ------------------------------- |
| **D’instància (this)** | A l’objecte instància          | ✅ Sí                          | Assignat dins `constructor`     |
| **De prototip**        | `Classe.prototype`             | ✅ Sí                          | Definició normal dins `class`   |
| **Estàtic**            | `Classe` (funció constructora) | ❌ No                          | `Math.random()`, `Array.from()` |


🧩 Exemple: [03-static.js](./03-static.js)  
[📘 MDN — Static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)


---

### 4. Getters i Setters
De la mateixa manera que en Java tenim els mètodes que ens serveixen per accedir a les propietats **privades** i modificar-les. A JavaScript ho podem fer amb les paraules reservades (`get`) **lectura**  i (`set`) **escriptura**.   
Cal tenir en compte que la propietat no es pot dir igual que els mètodes. 
```js
class Persona {
  constructor(nom) { this._nom = nom; }
  get nom() { return this._nom.toUpperCase(); }
  set nom(v) { this._nom = String(v).trim(); }
}
```
🧩 Exemple: [04-get-set.js](./04-get-set.js)  
[📘 MDN — Getters/Setters](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get)

---

### 5. Herència
Per heretar una classe fem servir `extends` que  crea una subclasse. Per accedir al constructor de la classe pare fem servir **`super()`**. 
```js
class Animal { 
  constructor(nom){
      this.nom=nom;    
  }
  sonar(){}
class Gos extends Animal {
  constructor(nom,pelatge){
    super(nom);
    this.pelatge=pelatge;
  }
}
```
🧩 Exemple: [05-herencia.js](./05-herencia.js)  
[📘 MDN — Extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

### 6. Method override
Una subclasse pot **sobreescriure** mètodes del pare per canviar el comportament.
```js
class Animal { 
  constructor(nom){
      this.nom=nom;    
  }
  sonar(){ console.log('so genèric'); }
}
class Gos extends Animal {
  constructor(nom,pelatge){
    super(nom);
    this.pelatge=pelatge;
  }
  sonar(){ console.log('bordar'); // Override}
}
```
🧩 Exemple: [06-method-override.js](./06-method-override.js)  
[📘 MDN — Override](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

---

### 7. Mixins
Un **mixin** “barreja” comportaments en una classe sense heretar d’ella, normalment amb `Object.assign` o `Object.setPrototypeOf`  sobre `prototype`.
```js
const Volador = { volar(){ console.log('volo!'); } };
const Regenaracio = {
   regenerar(){ console.log('Em regenero!'); } 
   };
class Superheroi {}
const mixin = Object.assign({},Volador,Regenaracio);
Object.assign(Superheroi.prototype, Volador,Regenaracio);
Object.setPrototypeOf(Superheroi.prototype,mixin);
```
🧩 Exemple: [07-mixins.js](./07-mixins.js)  
[📘 MDN — Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[📘 MDN — Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

---

## Recursos
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN – Private Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN – Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [MDN – Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN – Inheritance (extends)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN – Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN – Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)