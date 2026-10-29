# Resum sobre tipus bàsics en JavaScript

Aquest document és una **referència** sobre les variables, els tipus de dades i les estructures bàsiques de JavaScript.
Cada secció inclou una explicació breu i, quan correspon, un exemple amb un enllaç al fitxer `.js` corresponent.

## Índex

- [Resum sobre tipus bàsics en JavaScript](#resum-sobre-tipus-bàsics-en-javascript)
  - [1. Variables](#1-variables)
  - [2. Convencions per anomenar variables](#2-convencions-per-anomenar-variables)
  - [3. Tipus de dades primitius](#3-tipus-de-dades-primitius)
  - [4. Constants](#4-constants)
  - [5. Tipatge dinàmic i operador typeof](#5-tipatge-dinàmic-i-operador-typeof)
  - [6. Comentaris](#6-comentaris)
  - [7. Objectes literals](#7-objectes-literals)
  - [8. Arrays](#8-arrays)
  - [9. Funcions](#9-funcions)
  - [10. Paràmetres i arguments](#10-paràmetres-i-arguments)
  - [11. Exercicis](#11-exercicis)

---

## 1. Variables

Una variable és un nom associat a un valor. En JavaScript es pot declarar amb `let`.
Una variable declarada sense valor inicial conté `undefined`.

```js
let nom = "Hola món";
let variable;

console.log(nom);      // Hola món
console.log(variable); // undefined
```

Les variables declarades amb `let` poden rebre un valor nou posteriorment.

📄 Exemple: [01-variables.js](01-variables.js)

---

## 2. Convencions per anomenar variables

Els noms de les variables han de ser descriptius i no poden començar per un número.
JavaScript distingeix entre majúscules i minúscules, per tant `nom` i `Nom` són identificadors diferents.

Les convencions més habituals són:

- **camelCase**: `nomComplet`
- **UpperCamelCase**: `NomComplet`
- **snake_case**: `nom_complet`

En JavaScript, la convenció més habitual per a variables i funcions és `camelCase`.
També és recomanable declarar cada variable en una línia diferent.

```js
let nomComplet;
let cognom;
let animal;
```

📄 Exemple: [02-nombrar-variables.js](02-nombrar-variables.js)

---

## 3. Tipus de dades primitius

Els tipus primitius representen valors simples. Els principals tipus que es treballen inicialment són:

- `number`: nombres enters i decimals.
- `string`: cadenes de text.
- `boolean`: `true` o `false`.
- `undefined`: valor d'una variable declarada sense valor.
- `null`: absència intencionada de valor.

```js
let numero = 1;
let text = "Hola món";
let veritable = true;
let fals = false;
let noDefinit;
let nul = null;
```

📄 Exemple: [03-primitius.js](03-primitius.js)

---

## 4. Constants

Una constant es declara amb `const` i ha de rebre un valor en el moment de la declaració.
Aquest identificador no es pot assignar de nou més endavant.

```js
const nom = "Hola";

// Error: no es pot assignar un valor nou a una constant
// nom = "Adéu";
```

Per als valors que han de canviar, cal utilitzar `let`.
En el cas dels objectes i els arrays, `const` impedeix substituir la referència, però permet modificar-ne el contingut.

```js
const animals = ["gat", "gos"];
animals.push("ocell"); // Correcte

// Error: no es pot substituir l'array complet
// animals = [];
```

📄 Exemple: [04-constants.js](04-constants.js)

---

## 5. Tipatge dinàmic i operador `typeof`

JavaScript és un llenguatge de tipatge dinàmic. Això vol dir que una variable pot contenir valors de tipus diferents durant l'execució.

```js
let valor = 42;
valor = "Hola";
```

L'operador `typeof` permet consultar el tipus d'un valor:

```js
console.log(typeof 42);       // "number"
console.log(typeof "Hola");  // "string"
console.log(typeof true);     // "boolean"
console.log(typeof undefined); // "undefined"
```

Cal tenir en compte que `typeof null` retorna `"object"`. És un comportament històric de JavaScript.

📄 Exemple: [05-tipatge-dinamic.js](05-tipatge-dinamic.js)

---

## 6. Comentaris

Els comentaris serveixen per documentar el codi i no s'executen.

Per escriure un comentari d'una línia s'utilitza `//`:

```js
// Aquest comentari ocupa una línia
let numero = 42;
```

Per escriure comentaris de diverses línies s'utilitza `/* ... */`:

```js
/*
  Aquest comentari
  ocupa diverses línies
*/
```

📄 Exemple: [06-comentaris.js](06-comentaris.js)

---

## 7. Objectes literals

Un objecte és una col·lecció de propietats expressades com a parelles **clau-valor**.
Les propietats es poden consultar amb la notació de punt o amb claudàtors.

```js
let personatge = {
  nom: "Luffy",
  anime: "One Piece",
  edat: 25
};

console.log(personatge.nom);
console.log(personatge["anime"]);
```

Les propietats es poden modificar i eliminar:

```js
personatge.edat = 20;
delete personatge.anime;
```

📄 Exemple: [07-objectes.js](07-objectes.js)

---

## 8. Arrays

Un array és una estructura que permet emmagatzemar diversos valors en una seqüència ordenada.
Els elements s'identifiquen mitjançant un índex que comença en `0`.

```js
let animals = ["gat", "gos", "ocell"];

console.log(animals[0]); // gat
console.log(animals.length); // 3
```

Els arrays són dinàmics i es poden ampliar assignant un valor a una posició concreta.
Si es deixa un espai entre posicions, es creen elements buits.

```js
animals[3] = "cavall";
animals[10] = "peix";
```

Tot i que `typeof` retorna `"object"` per als arrays, es poden identificar correctament amb `Array.isArray()`.

📄 Exemple: [08-arrays.js](08-arrays.js)

---

## 9. Funcions

Una funció és un bloc de codi reutilitzable que es pot executar quan es fa una crida.
Pot retornar un valor amb la instrucció `return`.

```js
function saludar() {
  console.log("Hola");
}

function suma() {
  return 2 + 2;
}

saludar();
console.log(suma()); // 4
```

📄 Exemple: [09-funcions.js](09-funcions.js)

---

## 10. Paràmetres i arguments

Els **paràmetres** són les variables que es defineixen en declarar una funció.
Els **arguments** són els valors que es passen quan es crida.

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(5, 6)); // 11
```

En aquest exemple, `a` i `b` són paràmetres, mentre que `5` i `6` són arguments.

La propietat `arguments` permet consultar els arguments rebuts per una funció tradicional, però no és la forma recomanada per gestionar-los.

📄 Exemple: [10-arguments.js](10-arguments.js)

---

## 11. Exercicis

El fitxer d'exercicis conté activitats sobre variables, tipus de dades, objectes i arrays.

📄 [Enunciats dels exercicis](enunciats-exercicis-1a.md)
