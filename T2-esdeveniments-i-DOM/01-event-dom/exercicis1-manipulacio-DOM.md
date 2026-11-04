# Bloc 1 — Exercicis de manipulació del DOM (bàsic)

Aquest document recull exercicis pràctics per treballar la manipulació del DOM amb JavaScript. Consulta el [resum de manipulació del DOM](./resum-manipulacioDOM.md) com a referència per als mètodes i les propietats que s'hi fan servir.

> **Aquesta llista d'exercicis s'ampliarà posteriorment.** De moment, prepara i completa els exercicis 1 i 2.

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
5. Si el preu és superior a 100 €, afegeix la classe `car` a la fila amb `classList.add()`.
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
