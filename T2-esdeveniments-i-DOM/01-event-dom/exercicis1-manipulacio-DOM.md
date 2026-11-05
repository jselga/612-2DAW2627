# Bloc 1 — Exercicis de manipulació del DOM (bàsic)

Aquest document recull exercicis pràctics per treballar la manipulació del DOM amb JavaScript. Consulta el [resum de manipulació del DOM](./resum-manipulacioDOM.md) com a referència per als mètodes i les propietats que s'hi fan servir.

> **Aquesta llista d'exercicis s'ampliarà posteriorment.**

## Indicacions prèvies

Fes els exercicis en un directori de pràctiques separat dels apunts. Per a cada exercici, crea un fitxer HTML que contingui l'estructura necessària i carregui el fitxer JavaScript corresponent. Pots tenir un `index.html` i canviar-ne el `<script src="...">` per provar cada exercici, o bé crear un HTML per exercici.

Per a l'exercici 1, l'HTML ha d'incloure aquest contenidor:

```html
<div id="contenidor"></div>
```

Carrega el JavaScript després del contingut HTML, per exemple just abans de tancar `</body>`, perquè els elements ja existeixin quan s'executi el codi.

---

## Exercici 1 — Generador de llista

**Objectiu:** Practicar la creació i la inserció d'elements amb `createElement()` i `appendChild()`.

### Dades d'entrada

```js
const noms = ["Anna", "Jordi", "Laia", "Pau"]; // Pots canviar o afegir noms
```

### Tasques

1. Selecciona l'element amb l'id `contenidor`.
2. Crea un element `<ul>`.
3. Per a cada nom, crea un `<li>` i assigna-hi el nom com a text amb `textContent`.
4. Afegeix cada `<li>` a la llista i, al final, afegeix la llista al `#contenidor`.

### Requisits

- No utilitzis `innerHTML` per construir la llista: crea nodes amb `createElement()` i insereix-los amb `appendChild()`.
- Mantén el codi net i llegible, amb noms de variables clars.

### Resultat esperat (HTML generat)

```html
<div id="contenidor">
  <ul>
    <li>Anna</li>
    <li>Jordi</li>
    <li>Laia</li>
    <li>Pau</li>
  </ul>
</div>
```

---

## Exercici 2 — Taula de productes

**Objectiu:** Construir una estructura més complexa (una taula) i practicar la creació d'elements, l'assignació de text i la gestió de classes.

### Dades d'entrada

```js
const productes = [
  { nom: "Ordinador", preu: 850 },
  { nom: "Teclat", preu: 40 },
  { nom: "Ratolí", preu: 25 }
];
```

### Tasques

1. Selecciona el `#contenidor`.
2. Crea una taula amb els elements `<table>`, `<thead>` i `<tbody>`.
3. Al `<thead>`, afegeix una fila amb dues capçaleres: **Nom** i **Preu (€)**.
4. Per a cada producte, crea una fila `<tr>` amb dues cel·les `<td>` i assigna-hi el nom i el preu amb `textContent`.
5. Si el preu és superior a 100 €, afegeix la classe `car` a la fila.
6. Afegeix cada fila al `<tbody>` i, un cop construïda la taula, afegeix-la al `#contenidor`.

### Requisits

- No facis servir `innerHTML` per construir la taula: crea els elements amb `createElement()` i assigna el text amb `textContent`.
- Pots afegir CSS opcional a la pàgina HTML per destacar les files amb la classe `car`.

### Resultat orientatiu

```html
<table>
  <thead>
    <tr><th>Nom</th><th>Preu (€)</th></tr>
  </thead>
  <tbody>
    <tr class="car"><td>Ordinador</td><td>850</td></tr>
    <tr><td>Teclat</td><td>40</td></tr>
    <tr><td>Ratolí</td><td>25</td></tr>
  </tbody>
</table>
```
## Exercici 3 — Substituir un node
**Objectiu:** Practicar la substitució d'un node existent sense fer servir esdeveniments.

Afegeix al teu html
```html
    <div id="info">
      <p id="missatge"></p>
    </div>
```
### Tasques
1. Substitueix el paràgraf `<p id="missatge">` per un de nou amb el text `Has accedit com a convidat.`
2. Comprova al navegador que el contingut s'ha substituït.

> **Ampliació de l'exercici 3:** crea un fitxer nou, `03b.js`, i fes que s'executi en una pàgina amb el mateix `#info`. En aquest fitxer, elimina tot el contingut del `div#info` recorrent-ne els fills amb `firstChild` i `removeChild()`.

### Requisits
- No utilitzis cap listener ni `onclick`; tot es fa quan es carrega el script.
- Escriu el codi de manera clara i segmentada en funcions si ho consideres.

---

## Exercici 4 — Directori de contactes

**Objectiu:** Seleccionar elements que ja existeixen al document, modificar-ne el contingut i gestionar classes CSS.

Prepara aquest HTML:

```html
<h1 id="titol">Contactes</h1>
<p id="resum"></p>
<ul id="contactes">
  <li class="contacte preferit">Anna — anna@example.com</li>
  <li class="contacte">Jordi — jordi@example.com</li>
  <li class="contacte preferit">Laia — laia@example.com</li>
  <li class="contacte">Pau — pau@example.com</li>
</ul>
```

### Tasques

1. Canvia el títol de la pàgina a `Els meus contactes`.
2. Selecciona tots els elements amb la classe `preferit` i afegeix-los també la classe `destacat`.
3. Actualitza el text de `#resum` perquè indiqui quants contactes preferits hi ha.
4. Treu la classe `preferit` d'un dels contactes i comprova que les classes restants no desapareixen.

### Requisits

- Fes els canvis amb JavaScript, sense modificar directament l'HTML inicial.
- Utilitza `textContent` per canviar el títol i el resum, i `classList` per gestionar les classes.
- No utilitzis esdeveniments.

Pots afegir CSS opcional per donar un estil visible a la classe `destacat`.
