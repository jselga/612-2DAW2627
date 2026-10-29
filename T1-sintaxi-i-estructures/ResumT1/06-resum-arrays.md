# Resum sobre arrays en JavaScript

Aquest document és una **referència** sobre els arrays i els mètodes més habituals per treballar-hi.
Cada secció inclou una explicació breu, un exemple, referències a MDN i, quan correspon, un enllaç al fitxer `.js` corresponent.

[📚 **Referència general**](#-referència-general)

## Índex

- [Índex](#índex)
- [1. Què és un array?](#1-què-és-un-array)
- [2. Afegir i eliminar elements](#2-afegir-i-eliminar-elements)
- [3. Cercar elements](#3-cercar-elements)
- [4. Funcions callback i arrow functions](#4-funcions-callback-i-arrow-functions)
- [5. Arrays d'objectes i referències](#5-arrays-dobjectes-i-referències)
- [6. Buidar un array](#6-buidar-un-array)
- [7. Combinar i copiar arrays](#7-combinar-i-copiar-arrays)
- [8. Convertir un array en text](#8-convertir-un-array-en-text)
- [9. Ordenar i invertir elements](#9-ordenar-i-invertir-elements)
- [10. Comprovar condicions](#10-comprovar-condicions)
- [11. Filtrar elements](#11-filtrar-elements)
- [12. Transformar elements amb `map()`](#12-transformar-elements-amb-map)
- [13. Acumular valors amb `reduce()`](#13-acumular-valors-amb-reduce)
- [14. Exercicis](#14-exercicis)
- [📚 Referència general](#-referència-general)

---

## 1. Què és un array?

Un **array** és una estructura que permet emmagatzemar diversos valors en una seqüència ordenada. Els índexs comencen per `0`.

```js
const fruites = ["poma", "plàtan", "kiwi"];

console.log(fruites[0]); // "poma"
console.log(fruites.length); // 3
```

Els arrays són dinàmics i poden contenir valors de tipus diferents, tot i que habitualment convé que els elements tinguin una estructura coherent.

```js
const barrejats = ["hola", 3, true, null];
```

📘 [MDN – Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 2. Afegir i eliminar elements

`push()` i `unshift()` afegeixen elements al final i al principi. `pop()` i `shift()` eliminen i retornen l'últim i el primer element, respectivament. Aquests mètodes modifiquen l'array original.

```js
const nums = [1, 2, 3];

nums.push(4);    // afegeix al final
nums.unshift(0); // afegeix al principi
nums.pop();      // elimina l'últim
nums.shift();    // elimina el primer

console.log(nums); // [1, 2, 3]
```

`splice()` pot afegir, eliminar o substituir elements en una posició concreta i també modifica l'array original.

```js
const lletres = ["a", "b", "c", "d"];
lletres.splice(1, 2); // elimina dos elements des de l'índex 1
console.log(lletres); // ["a", "d"]
```

🧩 Exemples: [01-afegir.js](01-afegir.js) · [02-eliminar.js](02-eliminar.js)

📚 **Referència:**
- [MDN – push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN – unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [MDN – pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN – shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [MDN – splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

---

## 3. Cercar elements

`includes()` comprova si un valor primitiu és present. `indexOf()` retorna l'índex de la primera coincidència o `-1` si no la troba.

```js
const noms = ["Anna", "Joan", "Maria"];

console.log(noms.includes("Anna")); // true
console.log(noms.indexOf("Joan"));  // 1
```

Per cercar objectes segons una condició, es poden utilitzar `find()` i `findIndex()`. Els objectes són valors de referència, així que `indexOf()` no troba un objecte diferent encara que tingui les mateixes propietats.

```js
const usuaris = [{ id: 1, nom: "Anna" }, { id: 2, nom: "Joan" }];
const usuari = usuaris.find(element => element.id === 2);

console.log(usuari); // { id: 2, nom: "Joan" }
```

🧩 Exemples: [03-buscar-primitius.js](03-buscar-primitius.js) · [05-buscar-referencia.js](05-buscar-referencia.js)

📚 **Referència:**
- [MDN – includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN – indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [MDN – find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN – findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

---

## 4. Funcions callback i arrow functions

Diversos mètodes d'array reben una **callback**: una funció que s'executa per a cada element o per fer una cerca. Les arrow functions (`=>`) ofereixen una sintaxi compacta per escriure aquestes funcions.

```js
const doble = [1, 2, 3].map(numero => numero * 2);
console.log(doble); // [2, 4, 6]
```

🧩 Exemple: [04-arrow-fuctions.js](04-arrow-fuctions.js)

📘 [MDN – Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## 5. Arrays d'objectes i referències

Els arrays són objectes. Quan assignem un array o un objecte a una altra variable, es copia la referència i totes dues variables accedeixen a la mateixa estructura.

```js
const original = [{ id: 1, nom: "Anna" }];
const referencia = original;

referencia[0].nom = "Joan";
console.log(original[0].nom); // "Joan"
```

Per buscar dins d'un array d'objectes, normalment es compara una propietat que identifiqui l'element, com ara `id`.

🧩 Exemple: [05-buscar-referencia.js](05-buscar-referencia.js)

---

## 6. Buidar un array

Podem buidar un array amb `length = 0` o amb `splice()`. Assignar `[]` a una variable, en canvi, fa que aquesta variable apunti a un array nou i no buida l'array que comparteixen altres referències.

```js
const dades = [1, 2, 3];
const referencia = dades;

dades.length = 0;
console.log(referencia); // []
```

🧩 Exemple: [06-buidant-arrays.js](06-buidant-arrays.js)

📘 [MDN – Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

---

## 7. Combinar i copiar arrays

`concat()` combina arrays i retorna'n un de nou. L'operador spread (`...`) també permet combinar arrays o crear-ne una còpia superficial.

```js
const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b)); // [1, 2, 3, 4]
console.log([...a, ...b]); // [1, 2, 3, 4]
```

La còpia amb spread és superficial: si els elements són objectes niuats, les referències a aquests objectes es comparteixen.

🧩 Exemples: [07-combinant.js](07-combinant.js) · [08-spread.js](08-spread.js)

📚 **Referència:**
- [MDN – concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [MDN – Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## 8. Convertir un array en text

`join()` combina els elements d'un array en una cadena utilitzant el separador indicat.

```js
const noms = ["Anna", "Joan", "Pau"];
console.log(noms.join(", ")); // "Anna, Joan, Pau"
```

🧩 Exemple: [09-join.js](09-join.js)

📘 [MDN – join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

## 9. Ordenar i invertir elements

`sort()` ordena l'array original. Per defecte, ordena els valors com a cadenes; per ordenar nombres cal proporcionar una funció de comparació. `reverse()` també modifica l'array original.

```js
const nums = [10, 2, 5];
nums.sort((a, b) => a - b);
console.log(nums); // [2, 5, 10]

nums.reverse();
console.log(nums); // [10, 5, 2]
```

🧩 Exemple: [10-ordre.js](10-ordre.js)

📚 **Referència:**
- [MDN – sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN – reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

---

## 10. Comprovar condicions

`every()` comprova si tots els elements compleixen una condició; `some()` comprova si almenys un la compleix. Tots dos retornen un booleà.

```js
const edats = [18, 22, 25];

console.log(edats.every(edat => edat >= 18)); // true
console.log(edats.some(edat => edat > 30));   // false
```

🧩 Exemple: [11-every-some.js](11-every-some.js)

📚 **Referència:**
- [MDN – every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [MDN – some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

---

## 11. Filtrar elements

`filter()` retorna un array nou amb els elements que compleixen la condició. No modifica l'array original.

```js
const nums = [1, 2, 3, 4, 5];
const parells = nums.filter(numero => numero % 2 === 0);

console.log(parells); // [2, 4]
```

🧩 Exemple: [12-filter.js](12-filter.js)

📘 [MDN – filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## 12. Transformar elements amb `map()`

`map()` aplica una funció a cada element i retorna un array nou amb els resultats.

```js
const noms = ["anna", "joan", "maria"];
const majuscules = noms.map(nom => nom.toUpperCase());

console.log(majuscules); // ["ANNA", "JOAN", "MARIA"]
```

🧩 Exemple: [13-map.js](13-map.js)

📘 [MDN – map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

## 13. Acumular valors amb `reduce()`

`reduce()` recorre l'array i acumula els elements en un únic resultat. El valor inicial de l'acumulador s'indica com a segon argument.
```
reduce([(acumuludor,elementiterant)=>({})],[valor inicial acumulador])
``` 

```js
const nums = [1, 2, 3, 4];
const suma = nums.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // 10
```

🧩 Exemple: [14-reduce.js](14-reduce.js)

📘 [MDN – reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

## 14. Exercicis

Els exercicis permeten practicar la cerca, la transformació, el filtratge i l'ordenació d'arrays.

📄 [Fitxers d'exercicis](Exercicis/)

---

## 📚 Referència general

- [MDN – Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN – Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
