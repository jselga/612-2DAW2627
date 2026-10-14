# Funcions en JavaScript — Resum


[📚 **Recursos**](#recursos)

## Conceptes i accions amb Funcions

### 1. Declaració vs Expressió de funció
Una **declaració** de funció (`function nom(){}`) es carrega en temps de *hoisting*; una **expressió** (`const x = function(){}`) només existeix després d’avaluar la línia.
```js
// Declaració de funció nombrada
function suma(a, b) { return a + b; }

// Expressió de funció anònima
const resta = function (a, b) { return a - b; };

console.log(suma(2, 3)); // 5
console.log(resta(5, 2)); // 3
```
🧩 Exemple: [01-declaracio-expressio.js](./01-declaracio-expressio.js)  
[📘 MDN — Declarations vs Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations_vs_function_expressions)

---

### 2. Variables let/var/const 
Totes les variables es veuen afectes pel *hoisting* però 
`var` té àmbit de **funció** i es veu afectat plenament pel *hoisting* igual que les funcions; `let` i `const`, en canvi, tenen àmbit de **bloc** i són més previsibles.  Per això es desaconsella utilitzar `var`. Entre altres coses pot donar problemes en fer servir dependències de tercers. Les funcions es "salven" perque hi ha maneres d'encapsular-les. 
| Declaració | Hoisting                 | Inicialització | Accés abans de declarar    |
| ---------- | ------------------------ | -------------- | -------------------------- |
| `var`      | Sí                       | `undefined`    | ✅ Retorna `undefined`      |
| `let`      | Sí (només la declaració) | No             | ❌ Error (`ReferenceError`) |
| `const`    | Sí (només la declaració) | No             | ❌ Error (`ReferenceError`) |
| `function`      | Sí                       | Sí    | ✅ Retorna `[Function: nom-de-la-funció]`      |


```js
function prova() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x); // 1
  // console.log(y); // ReferenceError
}
prova();
```

🧩 Exemple: [02-let-var-const-fn.js](./02-let-var-const-fn.js)    
[📘 MDN — Var Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#hoisting)  
[🎞️ @Carlos Azaustre | Youtube Shorts — Hoisting](https://www.youtube.com/shorts/h-XhhALKm2U)     
[🎞️ @makigas | Youtube Shorts — Let vs Var](https://youtube.com/shorts/cFD9bB3UEtY?si=HeBUC9GPeSzY-7xz)  
[📼 @TodoCode | Youtube — Var, Let y Const](https://www.youtube.com/watch?v=a8SJJPvkGIE)  

---

### 3. Àmbit (scope) i *closure*
L’àmbit determina on són visibles les variables. És important saber on "viu" cada variable. Per això són molt útils les eines de *debug*.  
Un **closure** és una funció que “recorda” l’entorn on va ser creada, encara que s’executi més tard o fora d’aquell lloc on va ser definida. És a dir, un **closure** permet que una funció accedeixi a variables de l’exterior de la seva pròpia definició, fins i tot després que aquesta funció “mare” hagi acabat d’executar-se.
```js
function creadorDeSumadors(a) {
  return function (b) { // funció interna (Closure)
    return a + b;
  };
}
const suma5 = creadorDeSumadors(5);
console.log(suma5(2)); // 7
```
Fent ús d'eines de *debug* o observant el que surt a la consola es pot veure l'àmbit de les variables. Prova els exemples mostrats.   
🧩 Exemple: [03-ambit.js](./03-ambit.js)  
[📘 MDN — Clousures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[📼 @Carlos Azaustre | Youtube — Scope en JS](https://www.youtube.com/watch?v=7zxSu_xlhTE)

---

### 4. Arguments
La paraula reservada `arguments` és semblant a un array amb tots els arguments passats a una funció “clàssica”. Concretament és un objecte on les propietats d'aquest són els arguments. Aquest objecte s'anomena [Iterator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) i el podem recorrer amb un `for` o bé el podem trasformar en un **array** amb `Array.from(arguments)`.

 En el cas de les  **arrow functions** no funciona i  farem servir [**rest** `...args`](#6-paràmetres-rest).
```js
function total() {
  let suma = 0;
  for (const n of arguments) suma += n;
  return suma;
}
console.log(total(1,2,3)); // 6
```
🧩 Exemple: [04-arguments.js](./04-arguments.js)  
[📘 MDN — Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)   
[📘 MDN — Iterator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)  
[📘 MDN — Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

---

### 5. Fat arrow functions
Sintaxi curta, *return* implícit en una sola expressió. És una versió reduïda de les funcions habituals. **No** tenen `arguments`, ni context de `this` ni tampoc compten amb la funció `super`.  Són molt útils en funcions dins de funcions i en contextos on es busca simplicitat de codi.
```js
const doble = n => n * 2;
const suma = (a, b) => a + b;
console.log(doble(4)); // 8
```
🧩 Exemple: [05-fat-arrow.js](./05-fat-arrow.js)  
[📘 MDN — Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### 6. Paràmetres *rest*
S'expressa amb ...*un_nom* i recull un nombre variable d’arguments passats a una funció. D'aquesta manera podem referir-nos d'una banda als paràmetres principals que sabem que són fixes i a continuació amb els `...` a la resta de paràmetres quan estem definint la funció. És més versàtil que `arguments` i es pot fer servir també en les *arrow functions*.
```js
function concat(sep, ...paraules) {
  return paraules.join(sep);
}
console.log(concat("-", "Hola", "que", "tal")); // "Hola-que-tal"
```
🧩 Exemple: [06-rest.js](./06-rest.js)  
[📘 MDN — Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

### 7. Paràmetres i valors per defecte
Pots donar **valors per defecte** als paràmetres d’una funció perquè, si no es rep cap valor en cridar-la, utilitzi aquest valor per omissió.
Això permet que la funció sigui més flexible i eviti errors quan no es passen tots els arguments.
També pots combinar paràmetres amb i sense valor per defecte, però els que tenen valor per defecte han d'anar al final:
```js
function saluda(nom = "anònim", salutacio = "Hola") {
  return `${salutacio}, ${nom}!`;
}
console.log(saluda());             // "Hola, anònim!"
console.log(saluda("Jordi"));      // "Hola, Jordi!"
```
🧩 Exemple: [07-parametres.js](./07-parametres.js)  
[📘 MDN — Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

---

### 8. Desestructuració de paràmetres
La **desestructuració de paràmetres** permet extreure directament valors concrets d’un objecte o d’un array a la mateixa definició de la funció.
Això fa el codi més llegible i evita haver d’escriure moltes línies per accedir als camps o elements.

També pots assignar valors per defecte per si algun camp no existeix.
```js
// Amb objectes
function mostraUsuari({ nom, edat = 18 }) {
  console.log(`${nom} té ${edat} anys.`);
}

mostraUsuari({ nom: "Anna", edat: 22 }); // Anna té 22 anys.
mostraUsuari({ nom: "Pau" });            // Pau té 18 anys. (valor per defecte)
//Amb Arrays
function mostraCoords([x, y, z = 0]) {
  console.log(`x=${x}, y=${y}, z=${z}`);
}

mostraCoords([5, 10]);       // x=5, y=10, z=0 (valor per defecte)
mostraCoords([3, 4, 7]);     // x=3, y=4, z=7

```
Avantatges:
- El codi és més net i fàcil d’entendre.
- Pots donar valors per defecte fàcilment.
- Evites accedir manualment a cada propietat (obj.nom, obj.edat, etc.).  
  
🧩 Exemple: [08-param-destructuring.js](./08-param-destructuring.js)  
[📘 MDN — Destructuring ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

### 9. Getters i Setters
Permeten encapsular lectura/escriptura de propietats d’objectes o classes.
```js
const persona = {
  _nom: "Jordi",
  get nom() { return this._nom; },
  set nom(v) { this._nom = v.trim(); }
};
persona.nom = "  Marta  ";
console.log(persona.nom); // "Marta"
```
🧩 Exemple: [09-getters-setters.js](./09-getters-setters.js)  
[📘 MDN — Get ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)  
[📘 MDN — Set ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

---

### 10. Gestió d’errors amb `try…catch`
Les funcions poden **llançar** excepcions amb `throw` i mostrar errors. Controla’ls amb `try…catch` (i opcionalment `finally`).
```js
function dividir(a, b) {
  if (b === 0) throw new Error("No es pot dividir per zero");
  return a / b;
}
try {
  console.log(dividir(10, 0));
} catch (e) {
  console.log("Error:", e.message);
}
```
Si vols mostrar els errors de manera elegant pots fer servir [SweetAlert2](https://sweetalert2.github.io/)  
🧩 Exemple: [10-try-catch.js](./10-try-catch.js)  
[📘 MDN — Try...catch ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)  
[🚀 Sentry.io — Plataforma per Centralitzar Errors ](https://sentry.io/)

---

### 11. `this` bàsic
La paraula reservada this fa referència al context d’execució actual, és a dir, a l’objecte que “posa en marxa” la funció. El seu valor depèn de com s’invoca la funció:
| Context                                    | Valor de `this`                                |
| ------------------------------------------ | ---------------------------------------------- |
| Dins d’un **mètode d’un objecte**          | L’objecte mateix                               |
| En una **funció normal**                   | `window` (al navegador) o `global` (a Node.js) |
| En una **funció constructora** (amb `new`) | El nou objecte creat                           |

```js
// Dins d’un objecte
const cotxe = {
  marca: 'Toyota',
  mostrar() {
    console.log(this.marca); // → "Toyota"
  }
};
cotxe.mostrar();

// Fora d’un objecte (funció normal)
function mostrarMarca() {
  console.log(this); // → window (navegador) o global (node.js)
}
mostrarMarca();

// Amb constructor
function Cotxe(marca) {
  this.marca = marca;
  console.log(this); // → nova instància 
}
const c1 = new Cotxe('Honda'); // → Cotxe { marca: 'Honda' }
```
🧩 Exemple: [11-this.js](./11-this.js)  
[📘 MDN — this ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

---

### 12. Context de `this` 
Les arrow functions **"hereten"** el `this` extern; els mètodes defineixen `this` pel receptor.
```js
const usuari = {
  nom: 'Laura',
  saluda() {
    // Funció normal
    setTimeout(function() {
      console.log(this.nom); //  undefined (this apunta a window/global)
    }, 500);

    // Arrow function
    setTimeout(() => {
      console.log(this.nom); //  "Laura" (hereta el this de saluda)
    }, 1000);
  }
};

usuari.saluda();
```
🧩 Exemple: [12-this-context.js](./12-this-context.js)  
[📘 MDN — Arrow function ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### 13. Canviant el context de `this` (`call`, `apply`, `bind`)
Quan una funció es crida fora del seu objecte, el valor de `this` pot perdre’s (per exemple, passar a window o undefined).  
Els mètodes `call()`, `apply()` i `bind()` permeten fixar manualment el valor de `this` perquè la funció s’executi amb el context desitjat.
| Mètode                           | Què fa                                   | Arguments |
| :------------------------------- | :--------------------------------------- |  :-------------------- |
| `call(thisArg, arg1, arg2, ...)` | Crida la funció amb el `this` indicat     | Arguments separats    |
| `apply(thisArg, [args])`         | Crida la funció amb el `this` indicat     | Array d’arguments     |
| `bind(thisArg)`                  | Retorna una nova funció amb `this` fixat  | Es passen després     |

```js
function presentar(salutacio, lloc) {
  console.log(`${salutacio}, sóc ${this.nom} de ${lloc}`);
}

const persona = { nom: 'Aina' };

//  call → passa els arguments un a un
presentar.call(persona, 'Hola', 'Girona'); 
// → "Hola, sóc Aina de Girona"

//  apply → passa els arguments com un array
presentar.apply(persona, ['Bon dia', 'Barcelona']); 
// → "Bon dia, sóc Aina de Barcelona"

//  bind → retorna una nova funció amb el this fixat
const presentarAina = presentar.bind(persona);
presentarAina('Ei', 'Tarragona'); 
// → "Ei, sóc Aina de Tarragona"

```
🧩 Exemple: [13-canviant-context-this.js](./13-canviant-context-this.js)  
[📘 MDN — call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)  
[📘 MDN — apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)  
[📘 MDN — bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## Recursos
- [MDN – Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN – Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN – Function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [MDN – Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN – Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN – Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN – Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN – Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
- [MDN – this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN – call / apply / bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [MDN – try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN – Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN – Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
