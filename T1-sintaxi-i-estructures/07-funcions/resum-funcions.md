# Resum sobre funcions en JavaScript

Aquest document és una **referència** sobre la definició i l'ús de funcions en JavaScript.
Cada secció inclou una explicació breu, un exemple, un enllaç al fitxer `.js` corresponent i referències a MDN quan són útils.

[📚 **Referència general**](#-referència-general)

## Índex

- [1. Declaracions i expressions de funció](#1-declaracions-i-expressions-de-funció)
- [2. Àmbit i declaracions de variables](#2-àmbit-i-declaracions-de-variables)
- [3. Àmbit (*scope*) i closures](#3-àmbit-scope-i-closures)
- [4. L'objecte arguments](#4-lobjecte-arguments)
- [5. Arrow functions](#5-arrow-functions)
- [6. Paràmetres rest](#6-paràmetres-rest)
- [7. Paràmetres per defecte](#7-paràmetres-per-defecte)
- [8. Desestructuració de paràmetres](#8-desestructuració-de-paràmetres)
- [9. Getters i setters](#9-getters-i-setters)
- [10. Gestió d'errors](#10-gestió-derrors)
- [11. El valor de `this`](#11-el-valor-de-this)
- [12. `this` i arrow functions](#12-this-i-arrow-functions)
- [13. `call()`, `apply()` i `bind()`](#13-call-apply-i-bind)
- [14. Exercicis](#14-exercicis)
- [Referència general](#-referència-general)

---

## 1. Declaracions i expressions de funció

Una **declaració de funció** defineix una funció amb nom. Les declaracions es poden cridar abans de la seva posició al codi perquè es processen abans d'executar el cos del programa.

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(2, 3)); // 5
```

Una **expressió de funció** crea una funció com a part d'una expressió, sovint assignant-la a una variable. No s'ha de cridar abans que s'hagi avaluat l'assignació.

```js
const resta = function (a, b) {
  return a - b;
};

console.log(resta(5, 2)); // 3
```

🧩 Exemple: [01-declaracio-expressio.js](01-declaracio-expressio.js)

📚 **Referència:**
- [MDN – Function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- [MDN – Function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

---

## 2. Àmbit i declaracions de variables

L'**àmbit** (*scope*) determina des de quines parts del codi es pot accedir a una variable.

- `var` té àmbit de funció i permet tornar a declarar la mateixa variable dins del mateix àmbit.
- `let` i `const` tenen àmbit de bloc. `const` no permet assignar un valor nou a la mateixa variable.
- Les declaracions `let` i `const` existeixen des de l'inici del seu àmbit, però no es poden utilitzar abans de la línia de declaració: es troben a la **zona temporal morta** (*temporal dead zone*).
- Les declaracions de funció es poden cridar abans de la seva definició; les expressions de funció assignades a `let` o `const` no.

```js
function prova() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }

  console.log(x); // 1
  // y i z només són accessibles dins del bloc if
}
```

En general, per al codi nou és preferible utilitzar `const` quan no cal reassignar i `let` quan sí que cal; reserva `var` per entendre codi existent.

🧩 Exemple: [02-let-var-const-fn.js](02-let-var-const-fn.js)

📚 **Referència:**
- [MDN – `var` i hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#hoisting)
- [MDN – `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN – `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN – Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

---

## 3. Àmbit (*scope*) i closures

L'**àmbit** (*scope*) determina on es pot accedir a una variable. Una funció pot llegir variables definides en un àmbit exterior; si les reassigna, modifica aquella variable exterior.

Al fitxer d'exemple, `fora` està declarada fora de `avast()`. La funció la pot llegir i canviar:

```js
let fora = "estic fora";

function avast() {
  console.log(fora); // "estic fora"
  fora = "estic dins";
}

console.log(fora); // "estic fora"
avast();
console.log(fora); // "estic dins"
```

Les variables declarades dins d'una funció són locals i no s'hi pot accedir des de fora. `var` té àmbit de funció; `let` i `const` tenen àmbit de bloc. Aquestes diferències ja s'han introduït a l'[apartat 2](#2-àmbit-i-declaracions-de-variables).

### Closure (*clausura*)

Una **closure** és una funció que conserva l'accés a les variables del seu àmbit lèxic, fins i tot després que la funció externa hagi acabat. Així es pot mantenir un estat privat entre crides:

```js
function generadorDeTorns() {
  let torn = 1;

  return function () {
    return torn++;
  };
}

const demanarTorn = generadorDeTorns();
console.log(demanarTorn()); // 1
console.log(demanarTorn()); // 2
```

La closure es reprèn a [l'apartat 11 del resum d'objectes](../05-objectes/resum-objectes.md#11-propietats-públiques-i-privades), on s'utilitza per encapsular dades privades.

🧩 Exemple: [03-ambit.js](03-ambit.js)

📚 **Referència:**
- [MDN – Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN – Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

## 4. L'objecte `arguments`

En una funció tradicional, `arguments` és un objecte semblant a un array que conté els arguments rebuts. Es pot recórrer o convertir a un array amb `Array.from()`.

```js
function suma() {
  return Array.from(arguments)
    .reduce((acumulador, valor) => acumulador + valor, 0);
}

console.log(suma(1, 2, 3)); // 6
```

`arguments` **no és un array** i les arrow functions no tenen el seu propi objecte `arguments`. Per recollir arguments variables, és preferible utilitzar paràmetres rest.

🧩 Exemple: [04-arguments.js](04-arguments.js)

📚 **Referència:**
- [MDN – The `arguments` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [MDN – Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

---

## 5. Arrow functions

Les **arrow functions** (`=>`) ofereixen una sintaxi compacta. Si el cos conté una sola expressió, el valor d'aquesta es retorna implícitament.

```js
const doble = n => n * 2;
const suma = (a, b) => a + b;

console.log(doble(4)); // 8
console.log(suma(2, 3)); // 5
```

Les arrow functions no tenen un `this`, `arguments` ni `super` propis: els obtenen del context lèxic on es creen. No substitueixen les funcions tradicionals en tots els casos; per exemple, no s'utilitzen com a funcions constructores amb `new`.

🧩 Exemple: [05-fat-arrow.js](05-fat-arrow.js)

📘 [MDN – Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## 6. Paràmetres rest

Un paràmetre rest, escrit amb `...`, recull en un array els arguments que queden després dels paràmetres anteriors. Ha de ser l'últim paràmetre de la definició.

```js
function concat(separador, ...paraules) {
  return paraules.join(separador);
}

console.log(concat("-", "Hola", "què", "tal")); // "Hola-què-tal"
```

Els paràmetres rest funcionen també amb arrow functions.

🧩 Exemple: [06-rest.js](06-rest.js)

📘 [MDN – Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

## 7. Paràmetres per defecte

Un paràmetre pot tenir un valor per defecte, que s'utilitza quan l'argument corresponent s'omet o és `undefined`.

```js
function saluda(nom = "anònim", salutacio = "Hola") {
  return `${salutacio}, ${nom}!`;
}

console.log(saluda()); // "Hola, anònim!"
console.log(saluda("Jordi")); // "Hola, Jordi!"
```

Es poden definir paràmetres obligatoris després d'un paràmetre amb valor per defecte, però les crides posicionals poden requerir passar `undefined` explícitament per utilitzar el valor per defecte i continuar amb els arguments següents. Sovint és més clar agrupar moltes opcions en un objecte.

🧩 Exemple: [07-parametres.js](07-parametres.js)

📘 [MDN – Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

---

## 8. Desestructuració de paràmetres

La desestructuració permet extreure propietats d'un objecte o elements d'un array directament a la definició dels paràmetres.

```js
function mostraUsuari({ nom, edat = 18 }) {
  console.log(`${nom} té ${edat} anys.`);
}

mostraUsuari({ nom: "Anna", edat: 22 }); // Anna té 22 anys.
mostraUsuari({ nom: "Pau" }); // Pau té 18 anys.
```

També es pot desestructurar un array:

```js
function mostraCoords([x, y, z = 0]) {
  console.log(`x=${x}, y=${y}, z=${z}`);
}

mostraCoords([5, 10]); // x=5, y=10, z=0
```

🧩 Exemple: [08-param-destructuring.js](08-param-destructuring.js)

📘 [MDN – Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## 9. Getters i setters

Els getters i setters defineixen com es llegeix o s'assigna una propietat. Es fan servir com si fossin propietats, sense cridar-los com a funcions.

```js
const persona = {
  _nom: "Jordi",
  get nom() {
    return this._nom;
  },
  set nom(valor) {
    this._nom = valor.trim();
  }
};

persona.nom = "  Marta  ";
console.log(persona.nom); // "Marta"
```

🧩 Exemple: [09-getters-setters.js](09-getters-setters.js)

📚 **Referència:**
- [MDN – `get`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN – `set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

---

## 10. Gestió d'errors

Una funció pot indicar que no pot completar una operació llançant una excepció amb `throw`. El bloc `try...catch` permet capturar-la i gestionar-la.

```js
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No es pot dividir per zero");
  }
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}
```

🧩 Exemple: [10-try-catch.js](10-try-catch.js)

📚 **Referència:**
- [MDN – `throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [MDN – `try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

## 11. El valor de `this`

En una funció tradicional, el valor de `this` depèn de **com es crida la funció**:

| Crida | Valor de `this` |
| --- | --- |
| `objecte.metode()` | L'objecte abans del punt |
| `new Constructor()` | La nova instància |
| Crida directa `funcio()` | `undefined` en mode estricte; en mode no estricte es substitueix pel global de l'entorn |

```js
const cotxe = {
  marca: "Toyota",
  mostrar() {
    console.log(this.marca);
  }
};

cotxe.mostrar(); // "Toyota"
```

El mode estricte és l'habitual en mòduls JavaScript. Per això no és correcte assumir que una crida directa a una funció sempre té `window` o `global` com a `this`.

🧩 Exemple: [11-this.js](11-this.js)

📘 [MDN – `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

---

## 12. `this` i arrow functions

Una arrow function no crea un `this` propi: utilitza el `this` del context lèxic on s'ha definit. Això és útil, per exemple, dins d'una callback d'un mètode.

```js
const usuari = {
  nom: "Nico",
  nacionalitats: ["Chile", "Colombia", "NZ"],
  mostrarNacionalitats() {
    this.nacionalitats.forEach(nacionalitat => {
      console.log(this.nom, nacionalitat);
    });
  }
};

usuari.mostrarNacionalitats();
```

🧩 Exemple: [12-this-context.js](12-this-context.js)

📘 [MDN – Arrow functions i `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods)

---

## 13. `call()`, `apply()` i `bind()`

Els mètodes `call()` i `apply()` criden una funció indicant el valor de `this`. `call()` rep els arguments separats; `apply()` els rep en un array o objecte semblant a un array. `bind()` no crida la funció: en retorna una de nova amb `this` fixat.

```js
function presentar(salutacio, lloc) {
  console.log(`${salutacio}, sóc ${this.nom} de ${lloc}`);
}

const persona = { nom: "Aina" };

presentar.call(persona, "Hola", "Girona");
presentar.apply(persona, ["Bon dia", "Barcelona"]);

const presentarAina = presentar.bind(persona);
presentarAina("Ei", "Tarragona");
```

🧩 Exemple: [13-canviant-context-this.js](13-canviant-context-this.js)

📚 **Referència:**
- [MDN – Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN – Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [MDN – Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## 14. Exercicis

Els exercicis permeten practicar callbacks, paràmetres rest, arrow functions, closures i funcions que transformen dades.

📄 [Fitxers d'exercicis](Exercicis/)

---

## 📚 Referència general

- [MDN – Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN – Function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [MDN – Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN – Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
