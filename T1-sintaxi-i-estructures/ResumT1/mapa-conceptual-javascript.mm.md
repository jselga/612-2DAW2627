# JavaScript — sintaxi i estructures

## Fonaments del llenguatge
### Variables i valors
- `let`: valor reassignable
- `const`: referència no reassignable; els objectes i arrays encara es poden modificar
- Tipus primitius: `number`, `string`, `boolean`, `undefined`, `null`
- Tipatge dinàmic i consulta de tipus amb `typeof`
- Convencions: noms descriptius i `camelCase`
### Estructures de dades
- Objectes: propietats en parelles clau-valor
- Arrays: seqüències ordenades amb índexs des de `0`
### Funcions
- Blocs reutilitzables; poden rebre paràmetres i retornar valors
- Els arguments són els valors passats en una crida

## Expressions i operadors
### Expressions i sentències
- Una expressió produeix un valor
- Una sentència és una instrucció executable
- Els parèntesis fan explícita la precedència
### Operadors
- Aritmètics: càlculs amb nombres
- Assignació: `=`, `+=`, `-=`, ...
- Comparació: relacions i igualtat; preferir `===` i `!==`
- Lògics: `&&`, `||`, `!`
- Ternari: selecció compacta entre dos valors
### Conversió booleana
- `truthy`: la majoria de valors
- `falsy`: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
### Curt circuit
- `||`: retorna el primer valor truthy
- `&&`: retorna el primer valor falsy
- `??`: usa el valor alternatiu només amb `null` o `undefined`

## Control de flux
### Decisions
- `if`, `else if`, `else`: branques segons una condició
- `switch`: selecció entre casos; `break` evita continuar al cas següent
- Les condicions utilitzen les regles truthy/falsy
### Repetició
- `while`: comprova la condició abans de cada iteració; pot executar-se zero vegades
- `do...while`: comprova després; s'executa com a mínim una vegada
- `for`: inicialització, condició i actualització
- `for...of`: recorre valors iterables
- `for...in`: recorre claus enumerables d'un objecte
### Modificadors de bucle
- `break`: surt del bucle
- `continue`: salta a la iteració següent

## Funcions i àmbit
### Formes de definir-les
- Declaracions i expressions de funció
- Arrow functions: sintaxi compacta i `this` lèxic
### Paràmetres
- Valors per defecte
- Rest (`...`): recull arguments en un array
- Desestructuració d'objectes i arrays
- `arguments`: disponible en funcions tradicionals; preferir rest
### Àmbit i estat
- `let` i `const`: àmbit de bloc
- `var`: àmbit de funció
- Closure: conserva l'accés a l'àmbit lèxic i permet encapsular estat
### Context i errors
- `this` en funcions tradicionals depèn de com es criden
- `call()`, `apply()` i `bind()` permeten indicar o fixar `this`
- `throw` genera errors; `try...catch` els gestiona

## Objectes i arrays
### Objectes
- Propietats, mètodes i accés amb punt o claudàtors
- Crear objectes amb literals, factories o funcions constructores
- Referències: assignar un objecte copia la referència, no l'objecte
- Spread i `Object.assign()` fan còpies superficials
- `structuredClone()` permet còpies profundes d'estructures compatibles
- Encapsulació: closures o camps privats de classe (`#`)
### Arrays
- Col·lecció ordenada i dinàmica; també és un objecte
- Afegir/eliminar: `push()`, `unshift()`, `pop()`, `shift()`, `splice()`
- Cercar: `includes()`, `indexOf()`, `find()`, `findIndex()`
- Recórrer i transformar amb callbacks
  - `forEach()`: executar una acció per element
  - `filter()`: seleccionar elements
  - `map()`: transformar elements
  - `reduce()`: acumular en un resultat
  - `some()` / `every()`: comprovar condicions
- Combinar i representar: `concat()`, spread (`...`), `join()`
- `sort()` i `reverse()` modifiquen l'array original
- Arrays d'objectes comparteixen referències als elements

## Programació orientada a objectes
### Principis
- Encapsulació: protegir i agrupar dades i operacions
- Abstracció: exposar una interfície útil
- Herència: especialitzar i reutilitzar comportament
- Polimorfisme: mateixa interfície, implementacions diferents
### Prototips
- Cada objecte pot heretar propietats i mètodes del seu prototip
- Cerca de propietats a través de la cadena de prototips
- `Object.keys()` llista propietats pròpies; `for...in` també pot incloure heretades
- `Object.create()` configura prototips per a herència amb constructors
- Composició i mixins combinen comportaments sense jerarquies rígides
### Classes ES6+
- Sintaxi sobre el model de prototips de JavaScript
- `constructor` inicialitza instàncies
- Els mètodes de classe es comparteixen a `Classe.prototype`
- `extends` i `super` implementen herència
- Es poden sobreescriure mètodes o delegar amb composició
- Privacitat amb camps i mètodes `#`
- Membres `static` pertanyen a la classe, no a cada instància
- Getters i setters controlen la lectura i assignació de propietats
- Mixins combinen comportaments
