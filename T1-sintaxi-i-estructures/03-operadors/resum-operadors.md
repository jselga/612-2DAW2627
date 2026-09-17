# Resum sobre operadors en JavaScript

Aquest document és una **referència** sobre els operadors i les expressions més habituals de JavaScript.
Cada secció inclou una explicació breu i, quan correspon, un exemple amb un enllaç al fitxer `.js` corresponent.

## Índex

- [Resum sobre operadors en JavaScript](#resum-sobre-operadors-en-javascript)
  - [1. Declaracions, sentències i expressions](#1-declaracions-sentències-i-expressions)
  - [2. Operadors aritmètics](#2-operadors-aritmètics)
  - [3. Precedència i associativitat](#3-precedència-i-associativitat)
  - [4. Operadors d'assignació](#4-operadors-dassignació)
  - [5. Operadors de comparació](#5-operadors-de-comparació)
  - [6. Operadors lògics](#6-operadors-lògics)
  - [7. Valors truthy i falsy](#7-valors-truthy-i-falsy)
  - [8. Avaluació de curt circuit](#8-avaluació-de-curt-circuit)
  - [9. Operador ternari](#9-operador-ternari)
  - [10. Operadors bit a bit](#10-operadors-bit-a-bit)
  - [11. Exercicis](#11-exercicis)
  - [12. Recursos](#12-recursos)

---

## 1. Declaracions, sentències i expressions

Una **declaració** crea o defineix una entitat del programa, com una variable, una funció o una classe.

```js
let nom;

function suma(a, b) {
  return a + b;
}
```

Una **sentència** és una instrucció completa que el motor pot executar. Pot contenir expressions i, en alguns casos, declaracions.

```js
let edat = 20;

if (edat >= 18) {
  console.log("Major d'edat");
}
```

Una **expressió** és un fragment de codi que produeix un valor. Les expressions es poden utilitzar dins d'altres expressions o sentències.

```js
3 + 4;                    // produeix 7
"hola".toUpperCase();    // produeix "HOLA"
edat >= 18;               // produeix true o false
```

Una assignació també és una expressió, perquè produeix el valor assignat:

```js
let resultat;
resultat = 5 * 10; // assignació que conté una expressió aritmètica
```

---

## 2. Operadors aritmètics

Els operadors aritmètics permeten fer càlculs amb nombres:

| Operador | Operació | Exemple |
| --- | --- | --- |
| `+` | Suma | `5 + 2` dona `7` |
| `-` | Resta | `5 - 2` dona `3` |
| `*` | Multiplicació | `5 * 2` dona `10` |
| `/` | Divisió | `5 / 2` dona `2.5` |
| `%` | Residu o mòdul | `5 % 2` dona `1` |
| `**` | Potència | `5 ** 2` dona `25` |

Els operadors `++` i `--` incrementen o decrementen una unitat. La seva posició determina si primer es modifica el valor o si primer se'n retorna el valor anterior.

```js
let numero = 5;

console.log(++numero); // 6: primer incrementa
console.log(numero++); // 6: primer retorna i després incrementa
console.log(numero);   // 7
```

📄 Exemple: [01-aritmetics.js](01-aritmetics.js)

---

## 3. Precedència i associativitat

Quan una expressió conté diversos operadors, JavaScript segueix unes regles de **precedència**. Els parèntesis permeten indicar explícitament quin càlcul s'ha de fer primer.

```js
const primer = 8 / 2 * (2 + 2); // 16
const segon = 8 / (2 * (2 + 2)); // 1
```

En expressions complexes, és recomanable utilitzar parèntesis encara que la precedència faci que no siguin estrictament necessaris. Això millora la lectura i evita errors.

📄 Exemple: [06-ordre.js](06-ordre.js)

---

## 4. Operadors d'assignació

L'operador `=` assigna un valor a una variable. Els operadors d'assignació composta combinen una operació amb l'assignació:

```js
let valor = 10;

valor += 5; // equivalent a valor = valor + 5
valor -= 2; // equivalent a valor = valor - 2
valor *= 2; // equivalent a valor = valor * 2
valor /= 2; // equivalent a valor = valor / 2
valor %= 3; // equivalent a valor = valor % 3
valor **= 2; // equivalent a valor = valor ** 2
```

📄 Exemple: [02-assignacio.js](02-assignacio.js)

---

## 5. Operadors de comparació

Els operadors relacionals comparen valors i produeixen un booleà:

```js
const a = 10;
const b = 5;

console.log(a > b);  // true
console.log(a >= b); // true
console.log(a < b);  // false
console.log(a <= b); // false
```

Els operadors d'igualtat són:

- `==` i `!=`: poden convertir els tipus abans de comparar.
- `===` i `!==`: comparen el valor i també el tipus, sense conversió implícita.

```js
console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(10 != "10");  // false
console.log(10 !== "10"); // true
```

En general, és recomanable utilitzar `===` i `!==` per fer comparacions més previsibles.

📄 Exemple: [03-comparacio.js](03-comparacio.js)

---

## 6. Operadors lògics

Els operadors lògics permeten combinar o negar condicions:

| Operador | Nom | Resultat general |
| --- | --- | --- |
| `&&` | AND lògic | `true` si les dues condicions són certes |
| `||` | OR lògic | `true` si almenys una condició és certa |
| `!` | NOT lògic | Inverteix el valor booleà |

```js
const major = false;
const subscrit = true;

console.log(major && subscrit); // false
console.log(major || subscrit); // true
console.log(!major);            // true
```

Tot i que sovint s'utilitzen amb booleans, `&&` i `||` retornen un dels valors originals. Aquest comportament s'explica a l'apartat de curt circuit.

📄 Exemple: [04-logics.js](04-logics.js)

---

## 7. Valors `truthy` i `falsy`

En un context booleà, JavaScript converteix implícitament qualsevol valor en `true` o `false`.

Els valors **falsy** són:

- `false`
- `0`, `-0` i `0n`
- `""` (cadena buida)
- `null`
- `undefined`
- `NaN`

Qualsevol altre valor és **truthy**, inclosos `[]`, `{}` i una cadena que només contingui espais.

```js
if (0) {
  console.log("No s'executa");
}

if ("Hola") {
  console.log("S'executa");
}
```

---

## 8. Avaluació de curt circuit

Els operadors lògics avaluen les expressions d'esquerra a dreta i poden deixar d'avaluar-les quan ja coneixen el resultat. Aquest comportament s'anomena **curt circuit**.

### Operador `||`

Retorna el primer valor `truthy`. Si tots els valors són `falsy`, retorna l'últim.

```js
const nom = "";
const username = nom || "Anònim";

console.log(username); // "Anònim"
```

### Operador `&&`

Retorna el primer valor `falsy`. Si tots els valors són `truthy`, retorna l'últim. Si troba un valor `falsy`, no avalua les expressions posteriors.

```js
function fn1() {
  console.log("S'executa fn1");
  return false;
}

function fn2() {
  console.log("No s'executa fn2");
  return true;
}

const resultat = fn1() && fn2(); // false
```

Aquest comportament permet establir valors per defecte o executar codi condicionalment:

```js
const usuari = { nom: "Cha" };
usuari && console.log(usuari.nom);
```

### Operador `??`

L'operador **nullish coalescing** retorna el valor de la dreta només quan el valor de l'esquerra és `null` o `undefined`.

```js
const quantitat = 0;

console.log(quantitat || 10); // 10
console.log(quantitat ?? 10); // 0
```

Per tant, `??` és preferible a `||` quan `0`, `false` o `""` són valors vàlids.

📄 Exemple: [05-falsy.js](05-falsy.js)

---

## 9. Operador ternari

L'operador ternari és una expressió condicional compacta. Té tres parts:

```js
condicio ? valorSiCert : valorSiFals
```

```js
const edat = 27;
const acces = edat >= 18 ? "Permetre accés" : "No permetre accés";

console.log(acces); // "Permetre accés"
```

Per a condicions llargues o amb diverses instruccions, és més clar utilitzar `if...else`.

📄 Exemple: [07-ternari.js](07-ternari.js)

---

## 10. Operadors bit a bit

Els operadors bit a bit treballen amb la representació binària dels nombres. Són menys habituals en aplicacions JavaScript inicials, però poden ser útils en casos específics.

```js
console.log(5 & 3); // 1
// 5 = 0101
// 3 = 0011
// & = 0001

console.log(1 | 3); // 3
```

📘 [MDN - Bitwise AND (`&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

---

## 11. Exercicis

Els exercicis treballen les comparacions, els operadors lògics, les expressions aritmètiques i les condicions.

📄 [Enunciats dels exercicis](enunciats-exercicis-1b.md)

---

## 12. Recursos

### Referència oficial (MDN)

- [Expressions i operadors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Precedència d'operadors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Operadors aritmètics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_operators)
- [Operadors d'assignació](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
- [Operadors de comparació](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#comparison_operators)
- [Operadors lògics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)
- [Valors truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Valors falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Operador nullish coalescing (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Operador condicional o ternari](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [Operadors bit a bit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)
