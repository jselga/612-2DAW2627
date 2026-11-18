# Guia d’estudi del Tema 1 · JavaScript

*M0612 — Desenvolupament web en entorn client · 2n DAW*

Comença pel [mapa conceptual de JavaScript](mapa-conceptual-javascript.mm.md) i fes servir aquesta guia per anar als resums complets i als exemples executables de cada carpeta de T1. Els enllaços **Exemples `.js`** obren fitxers de codi; pots llegir-los o executar-los des de l’arrel del projecte amb `node ruta/al/fitxer.js`. Abans d’executar cada exemple, apunta quin resultat esperes i per què.

## Recorregut dels apunts i exemples

| Bloc | Resum de la carpeta | Exemples `.js` per practicar |
| --- | --- | --- |
| **02 · Tipus bàsics** | [Resum de tipus bàsics](../02-tipus-basics/resum-tipus-basics.md) | [variables](../02-tipus-basics/01-variables.js) · [primitius i `typeof`](../02-tipus-basics/03-primitius.js) · [constants](../02-tipus-basics/04-constants.js) · [tipatge dinàmic](../02-tipus-basics/05-tipatge-dinamic.js) · [arrays](../02-tipus-basics/08-arrays.js) |
| **03 · Operadors** | [Resum d’operadors](../03-operadors/resum-operadors.md) | [aritmètics](../03-operadors/01-aritmetics.js) · [comparació](../03-operadors/03-comparacio.js) · [lògics](../03-operadors/04-logics.js) · [valors falsy](../03-operadors/05-falsy.js) · [precedència](../03-operadors/06-ordre.js) · [ternari](../03-operadors/07-ternari.js) |
| **04 · Control de flux** | [Resum de control de flux](../04-control-de-flux/resum-control-de-flux.md) | [if](../04-control-de-flux/01-if.js) · [while](../04-control-de-flux/03-while.js) · [for](../04-control-de-flux/06-for.js) · [for...of](../04-control-de-flux/07-for-of.js) · [for...in](../04-control-de-flux/08-for-in.js) · [break i continue](../04-control-de-flux/09-break-continue.js) |
| **05 · Objectes** | [Resum d’objectes](../05-objectes/resum-objectes.md) | [objectes](../05-objectes/01-intro.js) · [constructor](../05-objectes/04-constructor.js) · [referències](../05-objectes/08-referencia.js) · [còpies](../05-objectes/10-clons.js) · [propietats privades i públiques](../05-objectes/11-privat-public.js) |
| **06 · Arrays** | [Resum d’arrays](../06-arrays/resum-arrays.md) | [afegir](../06-arrays/01-afegir.js) · [eliminar](../06-arrays/02-eliminar.js) · [cerca de primitius](../06-arrays/03-buscar-primitius.js) · [cerca per referència](../06-arrays/05-buscar-referencia.js) · [spread](../06-arrays/08-spread.js) · [ordenació](../06-arrays/10-ordre.js) · [some i every](../06-arrays/11-every-some.js) · [filter](../06-arrays/12-filter.js) · [map](../06-arrays/13-map.js) · [reduce](../06-arrays/14-reduce.js) |
| **07 · Funcions** | [Resum de funcions](../07-funcions/resum-funcions.md) | [declaració i expressió](../07-funcions/01-declaracio-expressio.js) · [àmbit](../07-funcions/03-ambit.js) · [arrow functions](../07-funcions/05-fat-arrow.js) · [paràmetres](../07-funcions/07-parametres.js) · [getters i setters](../07-funcions/09-getters-setters.js) · [`this`](../07-funcions/11-this.js) |
| **08 · Prototips i POO** | [Resum de prototips](../08-Prototips/resum-prototips.md) | [principis POO](../08-Prototips/01-principisPOO.js) · [prototips](../08-Prototips/02-proto.js) · [herència](../08-Prototips/05-herencia.js) · [polimorfisme](../08-Prototips/08-polimorfisme.js) · [composició vs. herència](../08-Prototips/09-comp-vs-her.js) · [mixins](../08-Prototips/10-mixins.js) |
| **09 · Classes ES6+ i POO** | [Resum de classes ES6+](../09-ClassesES6/resum-classes-es6.md) | [classes i instàncies](../09-ClassesES6/01-classes.js) · [privacitat](../09-ClassesES6/02-privat.js) · [static](../09-ClassesES6/03-static.js) · [getters i setters](../09-ClassesES6/04-get-set.js) · [herència](../09-ClassesES6/05-herencia.js) · [sobreescriptura](../09-ClassesES6/06-method-override.js) · [mixins](../09-ClassesES6/07-mixins.js) |

Per repassar amb problemes complets, consulta els [exercicis de recapitulació](../04-exercicis-recapitulacio/enunciats-exercicis-recapitulacio.md), els [exercicis de POO](../enunciats-exercicis-POO.md) i els apunts complementaris de [POO, prototips i classes](../poo-prototips-i-classes.md).

## Què cal entendre

| Bloc del resum | Idees que has de poder explicar |
| --- | --- |
| **02 · Tipus bàsics** | Què pot canviar quan declares una variable amb `let` o `const`. Com identificar el tipus d’un valor i com distingir un array amb `Array.isArray()`. |
| **03 · Operadors** | Com s’avaluen les expressions amb operadors aritmètics, de comparació i lògics. Quan convé fer servir `===` i què passa amb valors com `0`, `false`, `null` i `undefined` en una condició o amb `||` i `??`. |
| **04 · Control de flux** | Com triar entre un condicional i un bucle. Què recorren `for...of` i `for...in` i quan pots acabar un recorregut abans d’hora. |
| **05 · Objectes** | Com es creen i es consulten objectes i com s’accedeix a una propietat quan la clau és una variable. Què comparteixen dues variables que apunten al mateix objecte i què continua compartint-se després d’una còpia superficial. |
| **06 · Arrays** | Quin resultat dona cada operació de cerca, transformació o acumulació. Quins mètodes modifiquen l’array original i quins en creen un de nou. |
| **07 · Funcions** | Com passen els arguments i com es retorna el resultat. Com afecten l’àmbit de les variables i la manera de cridar una funció al comportament del codi. Repassa també les *arrow functions* i l’ús de callbacks. |
| **08 · Prototips** | Com busca JavaScript una propietat o un mètode al llarg de la cadena de prototips. Què vol dir que una propietat sigui pròpia o heretada. |
| **09 · Classes ES6+** | Què inicialitza el constructor, què representa `this` i com les instàncies accedeixen als mètodes definits al prototip. Com funcionen `extends`, `super`, la sobreescriptura de mètodes i la composició. |

### Prioritat d’examen: arrays i POO

- **Arrays:** diferencia els mètodes que modifiquen l’array (`push`, `pop`, `splice`, `sort`, `reverse`) dels que retornen un resultat nou o un valor (`map`, `filter`, `find`, `reduce`, `some`, `every`). Per a cada mètode, sàpigues dir què rep el callback i què retorna el mètode. Atenció: `sort()` modifica l’array; `const` no impedeix modificar-ne el contingut.
- **Arrays d’objectes:** la còpia amb spread (`[...array]`) és superficial. La llista copiada és diferent, però els objectes que conté continuen sent les mateixes referències. Per trobar un objecte, compara una propietat amb `find()`; comparar dos objectes diferents amb `===` no compara el seu contingut.
- **POO:** explica què és una instància, quines dades inicialitza `constructor` i com es comparteixen els mètodes al prototip. Traça la cerca d’una propietat pròpia i una d’heretada; explica `this`, `extends`, `super`, la sobreescriptura i el polimorfisme. Reconeix quan la composició és més adequada que una jerarquia d’herència.
- **Encapsulació:** identifica què queda públic i què protegeixen els camps privats `#`. Distingir els membres d’instància dels `static`, que pertanyen a la classe.

## Què cal saber fer

- **Escriure funcions petites.** Decideix què reben, quin tipus de resultat retornen i quines dades poden modificar. Fes servir `return` perquè el codi que les crida pugui utilitzar el resultat. Amb `console.log` el pots inspeccionar.
- **Treballar amb col·leccions.** Practica la cerca amb `find()`, les comprovacions amb `some()` i `every()`, la selecció amb `filter()`, la transformació amb `map()` i l’acumulació amb `reduce()`. Prova també un recorregut amb `for...of`. En cada cas, identifica què retorna el callback i què retorna el mètode.
- **Manipular dades amb referències.** Accedeix a propietats d’objectes dins d’arrays i a dades niades. Si ordenes amb `sort()` i vols preservar l’ordre original, copia primer l’array. Si després edites un dels objectes, comprova si el canvi també es veu a l’original.
- **Modelar amb objectes.** Identifica quines dades pertanyen a cada instància i quins comportaments poden compartir-se. Prova d’inicialitzar dues instàncies amb valors diferents, cridar-hi mètodes i justificar quan té sentit fer servir herència o composició.
- **Resoldre problemes de POO.** Practica la seqüència constructor → estat de la instància → mètode → cerca al prototip. Amb una subclasse, segueix `super()` i comprova quin mètode s’executa quan se’n sobreescriu un.
- **Executar i comprovar el codi amb Node.js.** Practica amb els exemples de classe. Revisa els noms, els paràmetres i les exportacions quan treballis amb una plantilla. Si disposes de proves, llegeix quin resultat esperaven quan alguna falla.

## Com comprovar si ho domines

1. **Prediu el resultat.** Amb `const a = [{ valor: 2 }]` i `const b = [...a]`, explica per separat què passa a `a` si fas `b.push({ valor: 5 })` i què passa si fas `b[0].valor = 9`. Executa-ho i comprova l’explicació.
2. **Tria una operació.** Amb lectures de temperatura d’un sensor, escriu una funció que comprovi si alguna lectura supera un límit i una altra que converteixi totes les lectures a graus Fahrenheit. Abans de programar, decideix quin tipus de resultat ha de retornar cada funció. Prova un array buit i una lectura igual al límit.
3. **Segueix la cerca d’un mètode.** Crea dues instàncies d’una classe que representi un punt del pla. Dona a cada punt unes coordenades i afegeix un mètode d’instància. Explica on es guarden les coordenades i on troba JavaScript el mètode quan el crides des de qualsevol dels dos punts.
4. **Revisa un exercici de classe.** Canvia les dades i escriu tres comprovacions. Inclou un cas habitual, un cas límit i un cas amb valors repetits quan sigui pertinent. Verifica el valor retornat i, si cal preservar les dades d’entrada, comprova-les també després de la crida.
5. **Practica arrays.** Per un array d’objectes, selecciona els que compleixen una condició amb `filter()`, transforma’ls amb `map()` i calcula un total amb `reduce()`. Prova què passa amb l’array buit, amb duplicats i després d’ordenar-lo.
6. **Practica POO.** Modela una classe base i una subclasse amb dades i mètodes propis. Crea dues instàncies, comprova l’estat, crida un mètode sobreescrit i explica on es troba cada mètode i com s’hi arriba. Acaba proposant una alternativa amb composició.
