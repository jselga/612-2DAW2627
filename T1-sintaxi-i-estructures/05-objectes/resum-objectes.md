# Resum sobre Objectes en JavaScript

Aquest document és una **referència** sobre els objectes en JavaScript i els objectes natius del llenguatge.  
Cada secció inclou: teoria + un petit exemple + enllaç al fitxer `.js` amb més proves.

## Índex

- [Resum sobre Objectes en JavaScript](#resum-sobre-objectes-en-javascript)
  - [Índex](#índex)
  - [1. Concepte d’Objecte](#1-concepte-dobjecte)
  - [2. Objectes dinàmics](#2-objectes-dinàmics)
  - [3. Funció Factory](#3-funció-factory)
  - [4. Funció Constructor](#4-funció-constructor)
  - [5. Dreceres d'objectes](#5-dreceres-dobjectes)
  - [6. Funcions dins objectes](#6-funcions-dins-objectes)
  - [7. Constructor Function](#7-constructor-function)
  - [8. Referències](#8-referències)
  - [9. Llistat de propietats](#9-llistat-de-propietats)
  - [10. Clonació](#10-clonació)
  - [11. Propietats privades i públiques](#11-propietats-privades-i-públiques)
  - [12. Objecte Math](#12-objecte-math)
  - [13. Objecte Date](#13-objecte-date)
  - [14. Objecte String](#14-objecte-string)
  - [15. Caràcters d’escapament](#15-caràcters-descapament)
  - [16. Template Strings](#16-template-strings)

---

## 1. Concepte d’Objecte
Un objecte és una col·lecció de **propietats** (clau-valor).  
Cada propietat pot ser un valor primitiu, un altre objecte o una funció (mètode).

```js
let persona = {
  nom: "Anna",
  edat: 25,
  saluda: function() {
    console.log("Hola, sóc " + this.nom);
  }
};
persona.saluda(); // Hola, sóc Anna
```

📄 Exemple: [01-intro.js](01-intro.js)

---

## 2. Objectes dinàmics
Els objectes es poden crear de manera dinàmica amb `new Object()` i després afegint propietats.

```js
let usuari = new Object();
usuari.nom = "Pere";
usuari.edat = 30;
console.log(usuari);
```

📄 Exemple: [02-dinamic.js](02-dinamic.js)

---

## 3. Funció Factory
Una **factory function** retorna objectes nous amb les propietats definides.

```js
function crearUsuari(nom, edat) {
  return { nom, edat };
}
let u1 = crearUsuari("Anna", 22);
console.log(u1);
```

📄 Exemple: [03-factory.js](03-factory.js)

---

## 4. Funció Constructor
Amb les funcions constructores es poden crear instàncies noves amb `new`.

```js
function Persona(nom, edat) {
  this.nom = nom;
  this.edat = edat;
}
let p1 = new Persona("Joan", 30);
console.log(p1);
```

📄 Exemple: [04-constructor.js](04-constructor.js)

---

## 5. Dreceres d'objectes
JavaScript ofereix diverses utilitats per gestionar propietats.

- `this`: fa referència a l’objecte actual.  
- `in`: comprova si existeix una propietat.  
- `hasOwnProperty`: comprova si la propietat és pròpia de l’objecte.

```js
let persona = { nom: "Anna" };
console.log("nom" in persona);          // true
console.log(persona.hasOwnProperty("nom")); // true
```
Quan declarem objectes sense la paraula `new` JS ho interpreta com si ho fèssim. És per això que podem fer servir els mètodes de l'objecte com `length` en una string declarada com:
```js
let paraula ="Hola"
paraula.length // 4
```
📄 Exemple: [05-dreceres.js](05-dreceres.js)

---

## 6. Funcions dins objectes
Les propietats també poden ser funcions, anomenades **mètodes**.

```js
let cotxe = {
  marca: "Toyota",
  arrenca: function() {
    console.log("Brrrum!");
  }
};
cotxe.arrenca();
```
També podem passar una funció com argument d'una altra funció

📄 Exemple: [06-funcions.js](06-funcions.js)

---

## 7. Constructor Function
També és possible crear funcions amb el constructor integrat `Function`.

```js
let suma = new Function("a", "b", "return a + b");
console.log(suma(2,3)); // 5
```
⚠️ Nota important sobre new Function

Tot i que new Function(...) permet crear funcions a partir de cadenes de text, no es recomana utilitzar-lo habitualment per aquests motius:

**Seguretat**: és equivalent a fer servir eval, i pot executar codi maliciós si la cadena prové de l’usuari.  
**Rendiment**: el motor de JavaScript ha de compilar la cadena a codi cada vegada.  
**Limitacions** de l’àmbit (scope): les funcions creades amb new Function només tenen accés a les variables globals, no al context local.  
**Mantenibilitat**: barrejar codi dins de cadenes dificulta la lectura i el depurat.  
És millor evitar-lo per seguretat, rendiment i claredat de codi   
📄 Exemple: [07-Function.js](07-Function.js)

---

## 8. Referències
Els objectes en JavaScript no es copien en assignar-los, sinó que es passa una **referència** a la mateixa zona de memòria.
Això vol dir que si dues variables apunten al mateix objecte, un canvi en una també es veurà reflectit en l’altra.

```js
let a = {x: 1};
let b = a;
b.x = 2;
console.log(a.x); // 2
console.log(b.x); // 2
```
En canvi, els **valors primitius** (number, string, boolean, null, undefined, symbol, bigint) sí que es copien per **valor**:

📄 Exemple: [08-referencia.js](08-referencia.js)

---

## 9. Llistat de propietats
Amb `Object.keys`, `Object.values` i `Object.entries` podem obtenir informació de les propietats.

```js
let obj = { nom: "Anna", edat: 25 };
console.log(Object.keys(obj));   // ["nom","edat"]
console.log(Object.values(obj)); // ["Anna",25]
```

📄 Exemple: [09-list-props.js](09-list-props.js)

---

## 10. Clonació
Maneres de copiar objectes:

```js
let a = {x:1};
let copia1 = Object.assign({}, a);
let copia2 = {...a};
let copia3 = JSON.parse(JSON.stringify(a)); // còpia profunda
```

📄 Exemple: [10-clons.js](10-clons.js)

---

## 11. Propietats privades i públiques
Amb funcions constructores podem diferenciar entre propietats públiques i privades (simulades amb closures):  
**Públiques**: es defineixen amb `this` i es poden accedir des de fora de l’objecte.  
**Privades**: es defineixen com a variables locals dins de la funció constructora i només es poden accedir a través de mètodes públics.

```js
function CompteBancari(saldoInicial) {
  // Propietat privada (variable local)
  let saldo = saldoInicial;

  // Propietat pública
  this.titular = "Anònim";

  // Mètode públic per llegir el saldo
  this.getSaldo = function() {
    return saldo;
  };

  // Mètode públic per ingressar diners
  this.ingressar = function(quantitat) {
    saldo += quantitat;
  };
}
```
Aquest patró és el que es feia servir abans d’**ES6** per simular propietats privades.
Més endavant veurem com ES6 introdueix les **classes** i, posteriorment, la sintaxi amb `#` per definir propietats realment privades.

📄 Exemple: [11-privat-public.js](11-privat-public.js)

---

## 12. Objecte Math
Proporciona constants i mètodes matemàtics.

```js
console.log(Math.PI);       // 3.14159...
console.log(Math.random()); // número aleatori entre 0 i 1
console.log(Math.floor(4.8)); // 4
```
[Math - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)  
📄 Exemple: [12-Math.js](12-Math.js)

---

## 13. Objecte Date
Serveix per treballar amb dates i hores.

```js
let ara = new Date();
console.log(ara.getFullYear());
console.log(ara.toLocaleDateString());
```
[Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  
📄 Exemple: [13-Date.js](13-Date.js)

---

## 14. Objecte String
Ofereix propietats i mètodes útils.

```js
let txt = "Hola";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.includes("Ho"));
```

📄 Exemple: [14-string.js](14-string.js)

---

## 15. Caràcters d’escapament
Per escriure caràcters especials:

- `\\` → barra invertida  
- `\'` → cometa simple  
- `\"` → cometa doble  
- `\n` → nova línia  
- `\t` → tabulació  

```js
let frase = "Línia1\nLínia2";
console.log(frase);
```

📄 Exemple: [15-escapda.js](15-escapda.js)

---

## 16. Template Strings
Permeten interpolació amb `${}` i multilínia.

```js
let nom = "Anna";
console.log(`Hola ${nom}, com estàs?`);
```

📄 Exemple: [16-templates.js](16-templates.js)

---

