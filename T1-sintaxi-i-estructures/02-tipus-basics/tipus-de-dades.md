# Diferència entre tipus de dades primitives i de referència en JavaScript

En JavaScript, les dades es divideixen en **tipus primitius** i **tipus de referència**.  
La diferència principal rau en **com s’emmagatzemen i es passen les dades** a les variables i funcions.

---

## Tipus de dades primitives

Són **immutables** i es guarden directament a la **pila de memòria (stack)**.  
Quan es fa una assignació o es passa a una funció, es copia el **valor**.

### Exemples
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

### Exemple de comportament

```js
let a = 10;
let b = a;   // b rep una còpia del valor
b = 20;

console.log(a); // 10
console.log(b); // 20
```

## Tipus de dades de referència

Són mutables i es guarden a la memòria heap.
La variable no guarda el valor directament, sinó una referència (punter) a la ubicació de memòria.
Quan es fa una assignació o es passa a una funció, es copia la referència.

### Exemples

- `object`
- `array`
- `function`
- `date`
- `RegExp`

Altres objectes creats amb classes

### Exemple de comportament
```js
let obj1 = { nom: "Joan" };
let obj2 = obj1;   // obj2 apunta al mateix objecte

obj2.nom = "Joan";

console.log(obj1.nom); // "Joan"
console.log(obj2.nom); // "Joan"
```
## Stack vs Heap
```code
STACK
┌─────────┐
│  a: 10  │
│  b: 20  │  <- còpia independent
└─────────┘

STACK                HEAP
┌────────────┐       ┌────────────────────┐
│ obj1: REF ─┼─────▶ │ { nom: "Joan" }    │
│ obj2: REF ─┘       └────────────────────┘
└────────────┘
```

# Tipatge estàtic vs Tipatge dinàmic en llenguatges de programació

Els llenguatges es poden classificar segons **quan** i **com** es comproven els tipus de dades:  
- **Tipatge estàtic** → comprovació de tipus en **temps de compilació**.  
- **Tipatge dinàmic** → comprovació de tipus en **temps d’execució**.

---

## Tipatge estàtic

En els llenguatges amb **tipatge estàtic**, cada variable té un tipus assignat que **no pot canviar**.  
Els errors de tipus es detecten abans d’executar el programa.

### Característiques
- Comprovació en **compilació**.
- Major **seguretat de tipus**.
- Pot millorar **rendiment**, ja que el compilador coneix els tipus per avançat.
- Codi més **previsible** i amb menys errors a llarg termini.

### Exemples de llenguatges
- **Java**
- **C / C++**
- **C#**
- **Rust**
- **TypeScript** (superset de JavaScript)

### Exemple (Java)
```java
int x = 10;
x = "hola"; // Error en compilació: tipus incompatible
```

```
COMPILACIÓ
 ├─ Comprovació de tipus
 └─ Generació de codi segur
EXECUCIÓ
 └─ Sense errors de tipus

```
## Tipatge dinàmic

En els llenguatges amb tipatge dinàmic, el tipus s’assigna en temps d’execució i les variables poden canviar de tipus.

### Característiques

- Comprovació en execució.
- Més flexibilitat i rapidesa de desenvolupament.
- Pot generar errors difícils de detectar fins que el programa s'executa
- Útil per prototipatge ràpid o scripts.
### Exemples de llenguatges

- JavaScript
- Python
- Ruby
- PHP
- Perl
### Exemple (JavaScript)
```js
let x = 10;   // ara és un number
x = "hola";   // ara és un string → cap error en compilació
console.log(x); // "hola"
```

### Exemple amb error en execució

```js
let y = 5;
y.toUpperCase(); 
// Error en execució: y és un number, i no té el mètode toUpperCase

```
```
COMPILACIÓ
 └─ No comprova tipus
EXECUCIÓ
 ├─ Assignació de tipus a runtime
 └─ Pot aparèixer un error de tipus

```
