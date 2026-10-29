# Resum sobre el control de flux en JavaScript

Aquest document és una **referència** sobre les estructures que permeten prendre decisions i repetir instruccions en JavaScript.
Cada secció inclou una explicació breu i, quan correspon, un exemple amb un enllaç al fitxer `.js` corresponent.

## Índex

- [Resum sobre el control de flux en JavaScript](#resum-sobre-el-control-de-flux-en-javascript)
  - [1. Què és el control de flux](#1-què-és-el-control-de-flux)
  - [2. Condicionals](#2-condicionals)
  - [3. Bucle while](#3-bucle-while)
  - [4. Bucles infinits](#4-bucles-infinits)
  - [5. Bucle do...while](#5-bucle-dowhile)
  - [6. Bucle for](#6-bucle-for)
  - [7. for...of](#7-forof)
  - [8. for...in](#8-forin)
  - [9. break i continue](#9-break-i-continue)
  - [10. switch](#10-switch)
  - [11. Interacció amb el navegador](#11-interacció-amb-el-navegador)
  - [12. Exercicis](#12-exercicis)
  - [13. Recursos](#13-recursos)

---

## 1. Què és el control de flux

El **control de flux** determina l'ordre en què s'executen les instruccions d'un programa.
Amb les estructures de control podem:

- Executar codi només quan es compleix una condició.
- Escollir entre diferents alternatives.
- Repetir un bloc de codi mentre es compleix una condició.
- Recórrer els elements d'una col·lecció.
- Aturar o saltar una iteració d'un bucle.

Les condicions s'avaluen com a valors booleans. Per tant, també s'hi aplica la conversió a valors `truthy` i `falsy` explicada al [resum d'operadors](../03-operadors/resum-operadors.md).

---

## 2. Condicionals

### `if`

La instrucció `if` executa un bloc només si la condició és certa.

```js
const edat = 20;

if (edat >= 18) {
  console.log("Usuari major d'edat");
}
```

Si la condició és `false`, el bloc no s'executa.

📄 Exemple: [01-if.js](01-if.js)

### `if...else`

Amb `else` podem definir el bloc alternatiu que s'executarà quan la condició sigui falsa.

```js
const edat = 10;

if (edat >= 18) {
  console.log("Pot entrar");
} else {
  console.log("No pot entrar");
}
```

### `else if`

`else if` permet comprovar diverses condicions en ordre. Només s'executa el primer bloc amb una condició certa.

```js
const edat = 15;

if (edat >= 18) {
  console.log("Pot entrar sol");
} else if (edat >= 13) {
  console.log("Necessita anar acompanyat");
} else {
  console.log("No pot entrar");
}
```

📄 Exemple: [02-else.js](02-else.js)

Per a una decisió senzilla que només ha de produir un valor, també es pot utilitzar l'[operador ternari](../03-operadors/resum-operadors.md#9-operador-ternari).

---

## 3. Bucle `while`

El bucle `while` repeteix un bloc mentre la seva condició sigui certa.
La condició s'avalua **abans** de cada iteració, de manera que el cos es pot executar zero vegades.

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Cal modificar la variable que controla la condició perquè el bucle pugui acabar.

En aquest exemple només s'imprimeixen els nombres parells:

```js
let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
```

📄 Exemple: [03-while.js](03-while.js)

---

## 4. Bucles infinits

Un bucle infinit és un bucle que no arriba mai a tenir una condició falsa.

```js
let i = 0;

while (i < 10) {
  console.log(i);
  // Falta modificar i: la condició sempre continua sent certa.
}
```

Si s'executa aquest codi, el procés queda ocupat repetint el bucle. En un bucle `while` cal comprovar sempre que alguna instrucció modifiqui la condició de sortida.

⚠️ L'exemple següent és intencionadament incorrecte i no s'ha d'executar sense modificar-lo:

📄 Exemple: [04-loop-infinit.js](04-loop-infinit.js)

---

## 5. Bucle `do...while`

El bucle `do...while` executa primer el bloc i comprova la condició després. Per això, el cos s'executa com a mínim una vegada.

```js
let i = 2;
const num = 2;

do {
  console.log("Aquesta instrucció s'executa una vegada");
  i++;
} while (i < num);
```

La diferència principal és:

| Bucle | Moment en què comprova la condició | Iteracions mínimes |
| --- | --- | --- |
| `while` | Abans d'executar el cos | `0` |
| `do...while` | Després d'executar el cos | `1` |

📄 Exemple: [05-do-while.js](05-do-while.js)

---

## 6. Bucle `for`

El bucle `for` és útil quan coneixem la variable de control i la condició de repetició. La seva sintaxi agrupa tres parts:

```js
for (inicialització; condició; actualització) {
  // instruccions que es repeteixen
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

L'ordre d'execució és:

1. Executar la inicialització una vegada.
2. Comprovar la condició.
3. Executar el cos si la condició és certa.
4. Executar l'actualització.
5. Tornar al pas 2.

⚠️ A l'exemple actual, el bucle comença amb `i` i `num` amb el mateix valor i comprova `i < num`. Per tant, no executa cap iteració.

📄 Exemple: [06-for.js](06-for.js)

---

## 7. `for...of`

El bucle `for...of` recorre directament els **valors** d'un objecte iterable, com ara un array o una cadena.

```js
const animals = ["Gat", "Gos", "Ocell"];

for (const animal of animals) {
  console.log(animal);
}
```

Per recórrer un array sense necessitat de gestionar manualment l'índex, normalment és la forma més clara.

📄 Exemple: [07-for-of.js](07-for-of.js)

---

## 8. `for...in`

El bucle `for...in` recorre les **propietats enumerables** d'un objecte. En el cas d'un array, recorre els índexs, que són cadenes de text.

```js
const usuari = {
  id: 1,
  nom: "Head Chala",
  edat: 25
};

for (const propietat in usuari) {
  console.log(propietat, usuari[propietat]);
}
```

Tot i que també es pot aplicar a arrays, normalment és preferible `for...of` perquè treballa directament amb els valors:

```js
const animals = ["Gat", "Gos", "Ocell"];

for (const index in animals) {
  console.log(index); // "0", "1", "2"
}

for (const animal of animals) {
  console.log(animal); // "Gat", "Gos", "Ocell"
}
```

📄 Exemple: [08-for-in.js](08-for-in.js)

---

## 9. `break` i `continue`

Aquestes instruccions modifiquen el flux normal d'un bucle.

### `break`

`break` atura completament el bucle i en surt.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0, 1, 2, 3, 4
}
```

És útil quan ja s'ha trobat el resultat desitjat i no cal continuar iterant.

### `continue`

`continue` salta la resta de l'iteració actual i passa a la següent.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i); // 0, 1, 3, 4
}
```

| Instrucció | Efecte |
| --- | --- |
| `break` | Atura completament el bucle |
| `continue` | Salta només l'iteració actual |

Cal utilitzar-les quan millorin la claredat del codi. Un ús excessiu pot fer que el flux sigui més difícil de seguir.

📄 Exemple: [09-break-continue.js](09-break-continue.js)

---

## 10. `switch`

La instrucció `switch` compara una expressió amb diversos valors possibles (`case`). El bloc `default` s'executa quan no coincideix cap cas.

```js
const accio = "salvar";

switch (accio) {
  case "llistar":
    console.log("Acció de llistar");
    break;
  case "salvar":
    console.log("Acció de salvar");
    break;
  default:
    console.log("Acció no reconeguda");
}
```

El `break` evita que l'execució continuï en el `case` següent. Si s'omet intencionadament, es produeix un **fall-through** i s'executen també les instruccions del cas següent.

📄 Exemple: [10-switch.js](10-switch.js)

---

## 11. Interacció amb el navegador

Alguns exemples d'aquest apartat interactuen amb el navegador:

- `document.writeln()` escriu contingut al document.
- `window.prompt()` mostra una finestra i retorna el text introduït per l'usuari.
- `alert()` mostra un missatge.

```js
const resposta = window.prompt("Has llegit les dades?");
document.writeln(resposta);
```

Aquestes funcions depenen de les APIs del navegador i no estan disponibles directament en un entorn Node.js. Per a aplicacions reals, és preferible manipular el DOM amb mètodes com `textContent` en lloc d'utilitzar `document.writeln()`.

📄 Exemple: [11-InteraccioNav.js](11-InteraccioNav.js)

---

## 12. Exercicis

Els exercicis practiquen diverses estructures de control de flux:

- Condicionals i comparacions.
- Bucles `while` i `for`.
- `switch`.
- Operadors lògics.
- Combinació de diverses estructures de control.
- Interacció amb el navegador com a activitat bonus.

📄 [Enunciats dels exercicis](enunciats-exercicis-2a.md)

Els exercicis bonus que utilitzen `document.write`, `alert` o `prompt` s'han d'executar en un navegador i no directament amb Node.js.

---

## 13. Recursos

### Referència oficial (MDN)

- [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [`window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [`document.writeln()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln)
