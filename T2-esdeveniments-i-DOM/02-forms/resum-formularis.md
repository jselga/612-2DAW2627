# Bloc 2 — Formularis i Validacions 

- 🧩 `form.html`  
- 🧩 `formularis.js` 

---
- [Bloc 2 — Formularis i Validacions](#bloc-2--formularis-i-validacions)
  - [1. Introducció](#1-introducció)
  - [2. Estructura del formulari (HTML)](#2-estructura-del-formulari-html)
  - [3. Esdeveniments principals dels formularis](#3-esdeveniments-principals-dels-formularis)
    - [`submit`](#submit)
    - [`input` i `change`](#input-i-change)
  - [4. Obtenció de valors](#4-obtenció-de-valors)
    - [`.value`](#value)
    - [`FormData` (estil recomanat, mateix model de React → event.target)](#formdata-estil-recomanat-mateix-model-de-react--eventtarget)
  - [5. Validacions](#5-validacions)
  - [6. Representació al DOM (estil `render()`)](#6-representació-al-dom-estil-render)
    - [Mostrar errors](#mostrar-errors)
    - [Afegir elements a la llista de resultats](#afegir-elements-a-la-llista-de-resultats)
  - [7. Flux complet](#7-flux-complet)
  - [8. Bones pràctiques](#8-bones-pràctiques)
  - [9. Recursos oficials](#9-recursos-oficials)
  - [Annex: Expressions Regulars (RegEx)](#annex-expressions-regulars-regex)

---

## 1. Introducció
Aquest bloc presenta la manipulació de formularis amb JavaScript fent servir un estil modular semblant al de l’exemple proporcionat (`formularis.js`), on el treball es divideix en:
- una funció **`validate(dades)`** que retorna els errors,
- una funció **`render()`** que actualitza el DOM
- una funció de control que captura l’esdeveniment **`submit`**.

Aquesta organització prepara el terreny per a React, on també es treballa amb funcions de validació i renderitzat.

---

## 2. Estructura del formulari (HTML)
Aquest és un exemple d'estructura mínima d'un formulari HTML: 

```html
<form id="formulari-tasca">
  <label for="nom">Nom de la tasca</label>
  <input id="nom" name="nom" type="text" />

  <label for="categoria">Categoria</label>
  <select id="categoria" name="categoria">
    <option value="">-- Selecciona --</option>
    <option value="casa">Casa</option>
    <option value="feina">Feina</option>
  </select>

  <label for="data">Data</label>
  <input id="data" name="data" type="date" />

  <button type="submit">Afegir</button>
</form>

<div id="errors"></div>
<ul id="llistaTasques"></ul>
```

📘 **MDN — Forms**  
https://developer.mozilla.org/en-US/docs/Learn/Forms

---

## 3. Esdeveniments principals dels formularis

### `submit`
S'intercepta per evitar el comportament per defecte i gestionar les dades amb JS:

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  controlarFormulari(event);
});
```

### `input` i `change`
Són útils si es vol validar mentre l’usuari escriu:
- `input`: cada canvi de caràcter
- `change`: quan el camp perd el focus

📘 **MDN — submit event**  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

---

## 4. Obtenció de valors

### `.value`
```js
const nom = document.querySelector('#nom').value;
```

### `FormData` (estil recomanat, mateix model de React → event.target)

```js
const formData = new FormData(event.target);

const dades = {
  nom: formData.get('nom'),
  categoria: formData.get('categoria'),
  data: formData.get('data')
};
```

📘 **MDN — FormData**  
https://developer.mozilla.org/en-US/docs/Web/API/FormData

---

## 5. Validacions
La funció `validate(dades)` rep un objecte amb les dades i retorna un array d’errors.

```js
const validate = (dades) => {
  const errors = [];

  if (!dades.nom || dades.nom.trim() === '')
    errors.push('El nom és obligatori');

  if (!dades.categoria)
    errors.push('La categoria és obligatòria');

  if (!dades.data)
    errors.push('La data és obligatòria');

  return errors;
};
```

Aquest estil coincideix amb l’exemple  (`formularis.js`).

Regles habituals:
- camps obligatoris
- longitud mínima
- format numèric
- dates correctes

---

## 6. Representació al DOM (estil `render()`)
Seguint el patró de `formularis.js`, la funció `render()` és responsable d’actualitzar el DOM.

### Mostrar errors
```js
const renderErrors = (errors) => {
  const errorsBox = document.querySelector('#errors');
  errorsBox.innerHTML = '';

  if (errors.length === 0) return;

  const ul = document.createElement('ul');

  errors.forEach((msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    ul.appendChild(li);
  });

  errorsBox.appendChild(ul);
};
```

### Afegir elements a la llista de resultats

✍️ **Proposta:** Adaptar el formulari de la secció 2 perquè la representació final de dades (llista, targetes, etc.) es faci **exclusivament** mitjançant aquesta funció `render()`. Això reforça el patró de *separació de responsabilitats* i anticipa el model de treball amb components i renderitzat que utilitzareu a React.

```js
const render = (dades) => {
  const llista = document.querySelector('#llistaTasques');
  const li = document.createElement('li');
  li.textContent = `${dades.nom} — ${dades.categoria} — ${dades.data}`;
  llista.appendChild(li);
};
```

---

## 7. Flux complet 
L’estil recomanat és:

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dades = Object.fromEntries(formData.entries());

  const errors = validate(dades);

  if (errors.length > 0) {
    renderErrors(errors);
    return;
  }

  render(dades);
  event.target.reset();
});
```

Això separa clarament:
- **obtenció de dades**
- **validació** en una funció independent
- **representació** de resultats en una altra

Tal com es treballarà posteriorment en React.

---

## 8. Bones pràctiques
- Mai enviar el formulari sense `event.preventDefault()` quan es gestiona amb JS.
- No utilitzar `onclick=""`; sempre `addEventListener`.
- Centralitzar validacions (una funció `validate`).
- Centralitzar la representació (`render`).
- Fer servir `textContent` en lloc d’`innerHTML` si només s’escriu text.
- Netejar errors i inputs després de validar.

---

## 9. Recursos oficials
📘 https://developer.mozilla.org/en-US/docs/Learn/Forms  
📘 https://developer.mozilla.org/en-US/docs/Web/API/FormData

## [Annex: Expressions Regulars (RegEx)](./RegEx.md)