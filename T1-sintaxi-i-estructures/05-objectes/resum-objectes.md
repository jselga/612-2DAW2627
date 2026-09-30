# Resum sobre objectes en JavaScript

Aquest document és una **referència** sobre els objectes, les funcions i alguns objectes natius de JavaScript.
Cada secció inclou una explicació breu, un exemple i un enllaç al fitxer `.js` corresponent.

## Índex

- [Resum sobre objectes en JavaScript](#resum-sobre-objectes-en-javascript)
  - [1. Objectes literals](#1-objectes-literals)
  - [2. Objectes dinàmics](#2-objectes-dinàmics)
  - [3. Factory functions](#3-factory-functions)
  - [4. Funcions constructores](#4-funcions-constructores)
  - [5. Constructors natius i boxing](#5-constructors-natius-i-boxing)
  - [6. Funcions com a objectes de primera classe](#6-funcions-com-a-objectes-de-primera-classe)
  - [7. El constructor Function](#7-el-constructor-function)
  - [8. Referències i còpia de valors](#8-referències-i-còpia-de-valors)
  - [9. Propietats i mètodes](#9-propietats-i-mètodes)
  - [10. Clonació d’objectes](#10-clonació-dobjectes)
  - [11. Propietats públiques i privades](#11-propietats-públiques-i-privades)
  - [12. Objecte Math](#12-objecte-math)
  - [13. Objecte Date](#13-objecte-date)
  - [14. Objecte String](#14-objecte-string)
  - [15. Caràcters d’escapament](#15-caràcters-descapament)
  - [16. Template strings](#16-template-strings)
  - [17. Exercicis](#17-exercicis)
  - [18. Recursos](#18-recursos)

---

## 1. Objectes literals

Un objecte és una col·lecció de propietats en forma de parelles **clau-valor**. Una propietat pot contenir un valor primitiu, un altre objecte o una funció. Quan una propietat conté una funció, parlem d’un **mètode**.

```js
const usuari = {
  nom: "Anna",
  edat: 25,
  saluda() {
    console.log("Hola, sóc " + this.nom);
  }
};

usuari.saluda();
```

📄 Exemple: [01-intro.js](01-intro.js)

---

## 2. Objectes dinàmics

Podem afegir, modificar i eliminar propietats després de crear un objecte.

```js
const usuari = { id: 1 };

usuari.nom = "Pere";
usuari.actiu = true;
delete usuari.actiu;
```

`Object.freeze()` impedeix modificar un objecte. `Object.seal()` impedeix afegir-hi o eliminar-ne propietats, però permet modificar els valors existents.

📄 Exemple: [02-dinamic.js](02-dinamic.js)

---

## 3. Factory functions

Una **factory function** és una funció que crea i retorna objectes nous. És útil quan volem repetir una mateixa estructura sense duplicar el codi.

```js
function crearUsuari(nom, email) {
  return {
    nom,
    email,
    actiu: true
  };
}

const usuari = crearUsuari("Anna", "anna@example.com");
```

📄 Exemple: [03-factory.js](03-factory.js)

---

## 4. Funcions constructores

Una funció constructora permet crear instàncies amb l'operador `new`. Per convenció, el nom d'una funció constructora comença amb majúscula.

```js
function Persona(nom, edat) {
  this.nom = nom;
  this.edat = edat;
}

const persona = new Persona("Joan", 30);
console.log(persona);
```

Quan s'utilitza `new`, JavaScript crea un objecte nou, el relaciona amb el prototip de la funció, assigna aquest objecte a `this` i el retorna, tret que el constructor retorni explícitament un altre objecte.

📄 Exemple: [04-constructor.js](04-constructor.js)

---

## 5. Constructors natius i boxing

Els literals són la forma habitual de crear valors i objectes:

```js
const obj = {};
const text = "Hola";
const nombre = 4;
```

També existeixen constructors natius com `Object`, `Array`, `String`, `Number` i `Boolean`, però normalment no cal utilitzar-los directament.

Els valors primitius poden utilitzar mètodes perquè JavaScript els embolcalla temporalment amb un objecte (**boxing**):

```js
const nombre = 4;
console.log(nombre.toString()); // "4"
console.log("Hola".length);     // 4
```

Els objectes `new String()`, `new Number()` i `new Boolean()` no són equivalents als primitius i poden provocar comparacions inesperades. En general, cal preferir els literals.

📄 Exemple: [05-dreceres.js](05-dreceres.js)

---

## 6. Funcions com a objectes de primera classe

Les funcions són valors de primera classe. Es poden assignar a variables, passar com a arguments i retornar des d'una altra funció.

```js
function saluda(nom) {
  console.log(`Hola, ${nom}`);
}

const funcio = saluda;
funcio("Anna");

function crearSalutacio() {
  return function () {
    console.log("Hola món");
  };
}
```

📄 Exemple: [06-funcions.js](06-funcions.js)

---

## 7. El constructor `Function`

El constructor `Function` permet crear una funció a partir de cadenes de text:

```js
const suma = new Function("a", "b", "return a + b");
console.log(suma(2, 3)); // 5
```

No es recomana utilitzar-lo habitualment perquè és semblant a `eval`: pot executar codi no segur, dificulta la lectura i només té accés a l'àmbit global. És preferible declarar les funcions amb la sintaxi normal.

📄 Exemple: [07-function.js](07-function.js)

---

## 8. Referències i còpia de valors

Els valors primitius es copien per valor:

```js
let a = 1;
let b = a;
b++;

console.log(a); // 1
console.log(b); // 2
```

Quan assignem un objecte a una altra variable, es copia el valor de la referència. Les dues variables apunten al mateix objecte:

```js
const original = { valor: 1 };
const copia = original;

copia.valor = 2;
console.log(original.valor); // 2
```

Això també explica que una funció pugui modificar les propietats d'un objecte rebut com a argument, però no modificar directament una variable primitiva externa.

📄 Exemple: [08-referencia.js](08-referencia.js)

---

## 9. Propietats i mètodes

Podem comprovar si una propietat existeix i recórrer les propietats d'un objecte:

```js
const punt = {
  x: 10,
  y: 15,
  dibuixar() {
    console.log("Dibuixant...");
  }
};

console.log("x" in punt); // true
console.log(Object.keys(punt));
console.log(Object.values(punt));
console.log(Object.entries(punt));
```

- `in` comprova si una propietat existeix a l'objecte o a la seva cadena de prototips.
- `Object.hasOwn()` comprova si és una propietat pròpia de l'objecte.
- `Object.keys()` retorna les claus pròpies enumerables.
- `Object.values()` retorna els valors propis enumerables.
- `Object.entries()` retorna parelles `[clau, valor]`.

📄 Exemple: [09-llistat-propietats.js](09-llistat-propietats.js)

---

## 10. Clonació d'objectes

L'operador spread i `Object.assign()` creen una **còpia superficial**. Les propietats primitives es copien, però els objectes niuats continuen compartint referència.

```js
const original = {
  nom: "Anna",
  adreca: { ciutat: "Barcelona" }
};

const copia = { ...original };
copia.nom = "Joan";
copia.adreca.ciutat = "Girona";

console.log(original.nom); // "Anna"
console.log(original.adreca.ciutat); // "Girona"
```

Per a estructures de dades senzilles, `structuredClone()` permet crear una còpia profunda:

```js
const copiaProfunda = structuredClone(original);
```

`JSON.parse(JSON.stringify(objecte))` també pot servir en casos molt limitats, però perd valors com funcions, `undefined` o objectes `Date` i no és una còpia general.

📄 Exemple: [10-clons.js](10-clons.js)

---

## 11. Propietats públiques i privades

Una propietat pública es pot consultar directament des de fora. Una variable local dins d'una funció constructora queda encapsulada i només s'hi pot accedir mitjançant els mètodes públics que la tanquin dins d'una **closure**.

```js
function CompteBancari(saldoInicial) {
  let saldo = saldoInicial;

  this.titular = "Anònim";

  this.getSaldo = function () {
    return saldo;
  };

  this.ingressar = function (quantitat) {
    saldo += quantitat;
  };
}
```

Aquest patró és una forma tradicional de simular propietats privades. JavaScript modern també permet utilitzar camps privats amb `#` dins de les classes.

📄 Exemple: [11-privat-public.js](11-privat-public.js)

---

## 12. Objecte `Math`

`Math` ofereix constants i mètodes matemàtics. No cal crear-lo amb `new`.

```js
console.log(Math.PI);
console.log(Math.round(15.5)); // 16
console.log(Math.floor(15.9)); // 15
console.log(Math.ceil(15.1));  // 16
console.log(Math.sqrt(9));     // 3
```

`Math.random()` retorna un nombre pseudoaleatori més gran o igual que `0` i menor que `1`.

📄 Exemple: [12-math.js](12-math.js)

📘 [MDN - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

## 13. Objecte `Date`

`Date` permet representar dates i hores. Els mesos dels constructors numèrics comencen per `0`: gener és `0` i desembre és `11`.

```js
const ara = new Date();
const data = new Date(1986, 11, 25, 14, 15);

console.log(ara.toLocaleDateString());
console.log(data.getFullYear());
```

📄 Exemple: [13-date.js](13-date.js)

📘 [MDN - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

## 14. Objecte `String`

Les cadenes tenen propietats i mètodes per consultar-les i crear-ne de noves.

```js
const text = "Hola";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("Ho"));
console.log(text.replace("Hola", "Classe"));
```

Els mètodes com `replace()`, `toUpperCase()` i `trim()` no modifiquen la cadena original; retornen una cadena nova.

`substr()` és una API obsoleta. És preferible utilitzar `slice()` o `substring()`.

📄 Exemple: [14-string.js](14-string.js)

📘 [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## 15. Caràcters d'escapament

Els caràcters d'escapament permeten representar caràcters especials dins d'una cadena:

| Seqüència | Significat |
| --- | --- |
| `\\` | Barra invertida |
| `\'` | Cometa simple |
| `\"` | Cometa doble |
| `\n` | Nova línia |
| `\t` | Tabulació |

```js
const frase = "Línia 1\nLínia 2";
console.log(frase);
```

📄 Exemple: [15-escapament.js](15-escapament.js)

---

## 16. Template strings

Les template strings utilitzen accents greus i permeten interpolar expressions amb `${}`. També poden ocupar diverses línies.

```js
const nom = "Anna";
const missatge = `Hola ${nom}, com estàs?`;

console.log(missatge);
```

📄 Exemple: [16-template-strings.js](16-template-strings.js)

📘 [MDN - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

## 17. Exercicis

Els exercicis practiquen objectes literals, funcions constructores, propietats públiques i privades, clonació i mètodes d'objectes.

📄 [Enunciat dels exercicis](enunciat-exercicis-3a.md)

---

## 18. Recursos

- [Objectes - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
- [Treballar amb objectes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [Object prototypes - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Object.assign() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Object.hasOwn() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [structuredClone() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
