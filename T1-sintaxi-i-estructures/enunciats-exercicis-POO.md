# Exercicis finals de POO: prototips i classes

En aquests exercicis implementaràs el mateix model de dades de dues maneres:

1. **Primera implementació — prototips:** obligatòria. Fes servir funcions constructores, `prototype`, `Object.create()` i `Function.prototype.call()` per definir els tipus i l'herència. En aquesta versió, **no facis servir `class` ni `extends`**. Pots utilitzar sintaxi moderna de JavaScript, com ara `const`, `let` i arrow functions.
2. **Segona implementació — classes (ES6+):** quan hagis acabat i comprovat la primera versió, repeteix l'exercici principal amb `class`, `extends` i `super()`.

Desa les versions en fitxers diferents, per exemple `poo-prototips.js` i `poo-classes.js`, perquè puguis comparar-les.

---

## 1. Escalfament: objectes i prototips

**Objectiu:** distingir entre un objecte literal, una instància d'una funció constructora i propietats pròpies o heretades del prototip.

1. Crea un objecte literal `rectangle1` amb les propietats `costat1` i `costat2`, i els mètodes `area()` i `perimetre()`. Prova'l amb els valors 2 i 3.
2. Defineix la funció constructora `Rectangle2(costat1, costat2)` i crea una instància amb els mateixos valors. Afegeix-hi els mètodes al prototip, no dins del constructor.
3. Defineix una funció constructora buida `Rectangle3`. Afegeix al seu prototip els valors per defecte `costat1 = 10`, `costat2 = 20`, i els mètodes `area()` i `perimetre()`. Crea una instància i comprova els resultats.
4. Assigna `4` i `5` a les propietats de la instància. Comprova que aquestes propietats pròpies amaguen els valors per defecte del prototip.
5. Elimina de la instància una propietat pròpia amb `delete` i comprova que torna a veure's el valor heretat del prototip.

---

## 2. Exercici principal: fabricants, distribuïdors i equips

**Objectiu:** practicar funcions constructores, referències entre objectes, mètodes d'instància i de prototip, arrays i herència prototípica.

### a) Constructors, instàncies i referències

1. Defineix aquestes funcions constructores. Aquesta primera implementació ha de ser amb funcions i prototips, no amb `class`.

```js
function Fabricant(nom, comercial, ciutat, telf) {
  this.nom = nom;
  this.comercial = comercial;
  this.ciutat = ciutat;
  this.telf = telf;
}

function Distribuidor(nom, ciutat, telf, fabricant) {
  this.nom = nom;
  this.ciutat = ciutat;
  this.telf = telf;
  this.fabricant = fabricant;
}

function Equip(nom, model, fabricant, distribuidor, potencia) {
  this.nom = nom;
  this.model = model;
  this.fabricant = fabricant;
  this.distribuidor = distribuidor;
  this.potencia = potencia;
}
```

2. Crea aquests fabricants:

   | Variable | Nom | Comercial | Ciutat | Telèfon |
   |---|---|---|---|---|
   | `fagor` | Fagor | ComercialF | Sant Sebastià | 902105011 |
   | `zanussi` | Zanussi | ComercialZ | Saragossa | 902105111 |
   | `balay` | Balay | ComercialB | Sevilla | 902105211 |

3. Crea aquests distribuïdors. El paràmetre `fabricant` ha de contenir una referència a una instància de `Fabricant`.

   | Variable | Nom | Ciutat | Telèfon | Fabricant |
   |---|---|---|---|---|
   | `distr1` | Distrib1 | Barcelona | 931234567 | `fagor` |
   | `distr2` | Distrib2 | Barcelona | 931234568 | `fagor` |
   | `distr3` | Distrib3 | Girona | 972123456 | `zanussi` |

4. Crea aquests equips. Cada fabricant i distribuïdor ha de ser una referència a l'objecte corresponent.

   | Variable | Nom | Model | Fabricant | Distribuïdor | Potència |
   |---|---|---|---|---|---:|
   | `rentadora` | rentadora | A24 | `fagor` | `distr1` | 45 |
   | `planxa` | planxa | E4 | `balay` | `distr1` | 50 |
   | `aspiradora` | aspiradora | B48 | `zanussi` | `distr2` | 30 |
   | `batedora` | batedora | Z10 | `fagor` | `distr1` | 5 |

5. Mostra el telèfon del distribuïdor i el del fabricant de la rentadora. Fes-ho tant amb notació de punts com amb notació de claudàtors.
6. Implementa `dObj(obj)`, que recorri les propietats pròpies d'un objecte i mostri per a cadascuna el nom, el valor i el resultat de `typeof`. Prova-la amb un fabricant, un distribuïdor i un equip; observa què mostra quan una propietat conté una referència a un altre objecte.
7. Canvia el fabricant associat a `distr1` perquè sigui `zanussi`. Comprova que el canvi afecta el distribuïdor, però no canvia la variable `fagor` ni les referències que altres objectes tinguin a Fagor.
8. Canvia `zanussi.comercial` a `"Comercial_nou"`. Comprova el valor de `distr3.fabricant.comercial` i explica per què s'actualitza.
9. Crea `distr3b` com una còpia superficial de `distr3` (per exemple, amb `Object.assign()`). Canvia el fabricant de `distr3b` a `balay` i comprova que `distr3.fabricant` continua sent `zanussi`.
10. Desa en una variable addicional la referència original de Fagor. Després executa `fagor = zanussi` i observa què passa amb `fagor.nom`. Explica la diferència entre reassignar una variable i modificar un objecte. Recupera la referència original de Fagor i comprova que les dades originals encara hi són.

### b) Arrays i mètodes

11. Crea l'array `arrEquips` amb les quatre instàncies d'equip.
12. Crida `dObj(arrEquips)` i observa què mostra. Explica per què les propietats d'un array no són les mateixes que les dels seus elements.
13. Afegeix a aquest array el mètode propi `imprimir()`, que recorri i mostri els equips.
14. Afegeix-hi `sortAlf()`, que ordeni els equips pel nom, i `sortNum()`, que els ordeni per potència.
15. Modifica els dos mètodes perquè rebin com a paràmetre el nom de la propietat d'ordenació. Prova'ls amb `nom`, `model` i `potencia`, fent servir un comparador adequat per a cadenes i nombres.

### c) Propietats pròpies i del prototip

16. Afegeix `temperaturaMax = 100` només a la instància `planxa` i comprova que els altres equips no tenen aquesta propietat.
17. Afegeix `dataCompra = "no especificada"` a `Equip.prototype`. Comprova el valor a `rentadora` i a `planxa`.
18. Assigna a `planxa.dataCompra` la data actual en format local amb `toLocaleDateString()`. Comprova que aquesta instància ara té una propietat pròpia que amaga el valor del prototip, mentre que `rentadora` continua mostrant el valor per defecte.
19. Afegeix a `Equip.prototype` el mètode `dProp(prop)`, que mostri el nom de l'equip, el nom de la propietat i el seu valor. Prova'l amb propietats pròpies i heretades.

### d) Eliminació de propietats

20. Elimina `temperaturaMax` de `planxa` amb `delete` i comprova que ja no existeix.
21. Elimina `dataCompra` de `planxa`. Comprova que torna a mostrar el valor heretat de `Equip.prototype`.
22. Elimina `dataCompra` de `Equip.prototype` i comprova que deixa d'estar disponible a totes les instàncies.

### e) Herència amb `prototype`

23. Defineix la funció constructora `General`. Inicialitza-hi la propietat pròpia `garantia` amb el valor `1`. Afegeix `dObj()` a `General.prototype`; el mètode ha de reutilitzar la funció `dObj(obj)` del punt 6.
24. Fes que `Fabricant`, `Distribuidor` i `Equip` heretin de `General`:
    - Crida el constructor pare des de cada constructor fill amb `General.call(this)`.
    - Connecta cada prototip fill amb `General.prototype` mitjançant `Object.create()`.
    - Restaura la propietat `constructor` de cada prototip fill.
25. Crea instàncies noves després d'afegir-hi la crida al constructor pare. Comprova que les instàncies de les tres funcions constructores tenen la seva pròpia propietat `garantia` i hereten el mètode `dObj()`.
26. Assegura't de configurar les cadenes de prototips abans de crear les instàncies. Investiga què passa amb les instàncies creades abans de canviar el prototip.

---

## 3. Segona implementació: repetir l'exercici principal amb classes ES6+

Quan la versió basada en prototips funcioni, crea un **segon fitxer** i torna a implementar l'exercici 2 amb `class`, `extends` i `super()`. Conserva les mateixes dades i comportaments perquè la comparació sigui directa.

Com a punt de partida per a la classe base i una classe derivada:

```js
class General {
  constructor() {
    this.garantia = 1;
  }

  dObj() {
    // Reutilitza la funció dObj(obj).
  }
}

class Fabricant extends General {
  constructor(nom, comercial, ciutat, telf) {
    super();
    this.nom = nom;
    this.comercial = comercial;
    this.ciutat = ciutat;
    this.telf = telf;
  }
}
```

Repeteix amb classes `Distribuidor` i `Equip`, incloent-hi els mètodes que a la primera versió havies afegit als prototips.

### Comparació

Compara les dues implementacions i explica:

- Quines parts són més llegibles o explícites amb `class`.
- Com corresponen `extends` i `super()` a la connexió de prototips i a `General.call(this)`.
- On es troben els mètodes definits dins d'una classe i si es comparteixen entre instàncies.
- Quines propietats són pròpies de cada instància i quines s'hereten del prototip.
- Si el comportament observat amb `instanceof`, referències, sobrescriptura i `delete` canvia entre les dues versions.

📚 **Referències:**
- [MDN – Herència i cadena de prototips](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [MDN – `Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
