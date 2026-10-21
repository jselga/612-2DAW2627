# Prototips en JavaScript — Resum

[📚 **Recursos**](#recursos)

## Conceptes i accions amb Prototips

### 1. Principis de POO
Els quatre pilars de la POO:
- Encapsulació: Agrupar dades i comportament dins d’un objecte, restringint l’accés directe a detalls interns. Les propietats i els mètodes es poden restringir a un context concret.
- Abstracció: Utilitzar mètodes per ocultar la complexitat interna i oferir una interfície clara. No cal conèixer els detalls d'implementació d'una funció definida internament, però sabem que funciona.
- Herència: Reutilitzar comportament definint objectes que deriven d’altres de tal manera que hi hagi propietats i mètodes comuns en els objectes. [➕](#5-implementant-herència) 
- Polimorfisme: Definir mètodes amb el mateix nom però comportaments diferents segons el tipus concret. [➕](#8-polimorfisme)    
  

```js
function Caixa(valorInicial) {
  let _valor = valorInicial; // encapsulació (privat via closure)
  this.llegir = function() { return _valor; }; // abstracció
}
function CaixaEntera(n) { Caixa.call(this, n); } // herència
```
🧩 Exemple: [01-principisPOO.js](./01-principisPOO.js)  
[📘 MDN — Object-oriented JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

---

### 2. Prototips
Tots els objectes tenen un **prototip**. Si una propietat no és a l’objecte, es busca a la **cadena de prototips**. Podem afegir propietats i mètodes al prototip un cop creada la funció constructora. En el cas de mètodes és rellevant perquè és molt més eficient afegir-los al prototip que a la definició de l'objecte.  
**Important**: Si volem que tingui efecte s'ha d'afegir al prototip abans de crear la instància amb `new`.  
Podem analitzar el comportament dels prototips amb les eines de desenvolupador (F12 ➡️ Console) dels navegadors. 

```js
function Robot(nom) { 
  this.nom = nom; 
  this.camina=function(){} // Mètode d'instància (duplicat a cada objecte)
  }
Robot.prototype.saluda = function() { console.log(`Hola, sóc ${this.nom}`); }; // Mètode de prototip (compartit entre instàncies)
```
🧩 Exemple: [02-proto.js](./02-proto.js)  
[📘 MDN — Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

---

### 3. Iterant propietats
Podem distingir entre les **pròpies** vs **heretades del prototip** quan iterem:
- `for...in` + `hasOwnProperty` 
- o bé `Object.keys`)  
ens mostrarà les pròpies declarades a la funció constructora.  

```js
function Cotxe(marca) {   
    this.marca = marca; //hasOwnProperty: true
  }
Cotxe.prototype.tipus = 'turisme'; //hasOwnProperty: false
const c = new Cotxe('Seat');

for (let k in c) {
  console.log(k, c.hasOwnProperty(k) ? '(pròpia)' : '(heretada)');
}
```
🧩 Exemple: [03-iterant.js](./03-iterant.js)  
[📘 MDN — for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)  
[📘 MDN — hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)  
[📘 MDN — Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

---

### 4. Estenent prototips
Afegir mètodes al **prototype** Object. Es poden afegir mètodes a Object que seria l'equivalent a la super classe de Java Object però no és recomanable. També aplicable a Array, Number,...
```js
Object.prototype.tic = function() { console.log('tic'); };
```

🧩 Exemple: [04-extenent.js](./04-extenent.js)  
[📘 MDN — Prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---


### 5. Implementant herència
Quan fem servir **funcions constructores**, podem establir la relació d’herència de dues maneres:

#### Mètode clàssic (antic)
El patró tradicional utilitza `Object.create()` per copiar el prototip i assignar el `constructor`:
```js
function Figura() {}
Figura.prototype.area = function() { return 0; };

function Quadrat(costat) {
  this.costat = costat;
}
Quadrat.prototype = Object.create(Figura.prototype);
Quadrat.prototype.constructor = Quadrat;
```
Aquest patró encara és vàlid, però és més *verbose* i cal redefinir manualment constructor.  

#### Mètode modern (recomanat)
Amb ES6+ podem establir la relació d’herència amb una sola comanda fent servir `Object.setPrototypeOf()`:  

```js
function Figura(nom) {
  this.nom = nom;
}
Figura.prototype.descriure = function () {
  console.log(`Sóc una figura: ${this.nom}`);
};

function Quadrat(costat) {
  this.costat = costat;         // propietat pròpia del fill
}

// Definim la relació d'herència en una sola línia
Object.setPrototypeOf(Quadrat.prototype, Figura.prototype);

const q = new Quadrat(4);
q.descriure();      //  mètode HERETAT del pare
console.log(q.costat); //  propietat PRÒPIA del fill
```
✅ Avantatges:

- Evita haver de recrear el prototip amb `Object.create()`.
- Manté intacte el constructor original (no cal reassignar-lo manualment).
- Codi més simple i proper al comportament de `extends` en les classes modernes (veure secció 9).  

🧩 Exemple: [05-herencia.js](./05-herencia.js)  

[📘 MDN — Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### 6. Constructor pare
Per reutilitzar inicialitzacions, podem cridar el constructor pare dins del fill amb `Function.call()`.
```js
function Usuari(email) {
   this.email = email; 
   }
function Alumne(email, grup) {
   Usuari.call(this, email);  //Propietat del pare
   this.grup = grup; 
   }
```
🧩 Exemple: [06-constructora-mare.js](./06-constructora-mare.js)  
[📘 MDN — Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

### 7. Method override
Una funció constructora filla pot redefinir (sobreescriure) mètodes del prototip del pare.
```js
function Logger() {}
Logger.prototype.log = function(msg) {
  console.log('LOG:', msg);
};

function Debugger() {
  Logger.call(this); // opcional: cridar constructor pare
}

// Relacionem amb el prototip del pare (forma moderna)
Object.setPrototypeOf(Debugger.prototype, Logger.prototype);

// Sobreescrivim el mètode log per adaptar el comportament
Debugger.prototype.log = function(msg) {
  console.debug('DEBUG:', msg);
};

const l = new Logger();
const d = new Debugger();

l.log('Hola'); // LOG: Hola
d.log('Hola'); // DEBUG: Hola

```
🧩 Exemple: [07-method-override.js](./07-method-override.js)  
[📘 MDN — Inheriting "methods"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#inheriting_methods)

---

### 8. Polimorfisme
El polimorfisme permet que diferents objectes comparteixin una mateixa interfície (metode()) amb comportaments diferents.
```js
function Notificador() {}
Notificador.prototype.enviar = function() {
  console.log('Enviant missatge genèric...');
};

function Mail() {}
Object.setPrototypeOf(Mail.prototype, Notificador.prototype);
Mail.prototype.enviar = function() {
  console.log('Enviant EMAIL...');
};

function SMS() {}
Object.setPrototypeOf(SMS.prototype, Notificador.prototype);
SMS.prototype.enviar = function() {
  console.log('Enviant SMS...');
};

// Mateixa interfície, comportaments diferents
const notificadors = [ new Notificador(), new Mail(), new SMS() ];
for (const n of notificadors) {
  n.enviar();  // crida el mètode específic de cada tipus
}
```
🧩 Exemple: [08-polimorfisme.js](./08-polimorfisme.js)  
[📘 MDN — Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)

---

### 9. Composició vs herència
La composició combina comportaments mitjançant objectes o funcions sense jerarquies fixes.  
És més flexible que l’herència tradicional.
```js
const AmbLog = {
   log(msg){ console.log(`[log] ${msg}`); } 
};
const AmbValidacio = {
   valida(txt){ return typeof txt === 'string' && txt.length > 0; } 
};

function Formulari() {}
Object.assign(Formulari.prototype, AmbLog, AmbValidacio);
```
🧩 Exemple: [09-comp-vs-her.js](./09-comp-vs-her.js)  
[📰 Geek for Geeks — 
Difference between Composition and Inheritance in JavaScript](https://www.geeksforgeeks.org/javascript/difference-between-composition-and-inheritance-in-javascript)

---

### 10. Mixins
Els **mixins** permeten afegir funcionalitats a un tipus d’objecte sense fer servir herència.  
En comptes de crear jerarquies, **copiem** directament propietats i mètodes al prototip del constructor mitjançant `Object.assign()`.
```js
const Parla = { parlar(){ console.log('bla bla'); } };
const Corre = { correr(){ console.log('corro!'); } };
const Salta = { saltar(){ console.log(`${this.nom} salta!`); } };
// Constructor base
function Personatge(nom) {
  this.nom = nom;
}
Object.assign(Personatge.prototype, Parla, Corre);
```
També podem crear una funció de **mixin** que sigui versàtil
```js
function mixin(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}
const Parla = { parlar(){ console.log(`${this.nom} parla!`); } };
const Corre = { correr(){ console.log(`${this.nom} corre!`); } };
const Salta = { saltar(){ console.log(`${this.nom} salta!`); } };
function Personatge(nom) {
  this.nom = nom;
}
function Oracle(ubicacio){
  this.ubicacio=ubicacio;
}

mixin(Personatge, Parla, Corre, Salta);
mixin(Oracle, Parla);
const p1 = new Personatge('Ariadna');
const o1 = new Oracle('Temple perdut');
p1.parlar(); 
p1.correr();
p1.saltar(); 
o1.parlar(); 
```

🧩 Exemple: [10-mixins.js](./10-mixins.js)  
[📘 MDN — Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

---

## Recursos
### Referència oficial (MDN)
- [MDN – Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN – Prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN – Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN – Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)
- [MDN – Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN – Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
- [MDN – Inheritance and the prototype chain (method overriding section)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)


### Articles tècnics recomanats
- [Difference between Composition and Inheritance in JavaScript — GeeksforGeeks](https://www.geeksforgeeks.org/javascript/difference-between-composition-and-inheritance-in-javascript/)
- [Overriding prototype property or function — Stack Overflow](https://stackoverflow.com/questions/22060748/overriding-prototype-property-or-function)
- [JavaScript Overrides Made Interesting — Medium](https://beckermanjacob.medium.com/javascript-overrides-made-interesting-part-1-21f9e3613ef2)


---

### Recursos audiovisuals (YouTube)
- 🎥 [Carlos Azaustre — JavaScript ¿Qué es la HERENCIA de PROTOTIPOS?](https://www.youtube.com/watch?v=h_n_UIOycgM)
- 🎥 [#jonmircha — Curso JavaScript: 22. Prototipos](https://www.youtube.com/watch?v=nS5FmAx4u_0)


---

### Altres lectures útils
- [JavaScript.info — Prototypal inheritance](https://javascript.info/prototype-inheritance)

