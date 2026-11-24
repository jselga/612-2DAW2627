# Resum sobre formularis i validació

Aquest document és una **referència** per estructurar formularis HTML, llegir-ne les dades, validar-les i representar el resultat al DOM amb JavaScript.

[📚 **Referència general**](#referència-general)

## Índex

- [1. Estructura del formulari](#1-estructura-del-formulari)
- [2. Esdeveniments dels formularis](#2-esdeveniments-dels-formularis)
- [3. Llegir les dades](#3-llegir-les-dades)
- [4. Validar les dades](#4-validar-les-dades)
- [5. Mostrar errors i resultats](#5-mostrar-errors-i-resultats)
- [6. Flux complet](#6-flux-complet)
- [7. Expressions regulars](#7-expressions-regulars)
- [8. Bones pràctiques](#8-bones-pràctiques)
- [📚 Referència general](#referència-general)

---

## 1. Estructura del formulari

Un control de formulari necessita un `name` perquè les seves dades s'incloguin en un enviament o en un objecte `FormData`. L'atribut `id` serveix, entre altres coses, per associar-hi un `<label>` amb `for`.

```html
<form id="formulari">
  <label for="name">Nom</label>
  <input id="name" name="name" type="text" required />

  <label for="lastname">Cognom</label>
  <input id="lastname" name="lastname" type="text" required />

  <button type="submit">Enviar</button>
</form>

<div id="errors" aria-live="polite"></div>
<ul id="resultats"></ul>
```

🧩 Exemple: [form.html](./form.html)

📚 [MDN – Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

---

## 2. Esdeveniments dels formularis

### `submit`

L'esdeveniment `submit` s'emet al formulari quan s'intenta enviar, normalment amb el botó de tipus `submit` o amb la tecla Enter. Si JavaScript gestionarà l'enviament, es pot aturar la navegació o enviament per defecte amb `event.preventDefault()`.

```js
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Llegir, validar i processar les dades.
});
```

Els formularis també tenen validació nativa. Si un control incompleix una restricció HTML, com `required`, el navegador normalment informa l'usuari i no emet `submit` fins que les dades siguin vàlides. `preventDefault()` no desactiva aquesta validació.

### `input` i `change`

- `input` s'activa mentre canvia el valor d'un camp editable; és útil per actualitzar una validació mentre s'escriu.
- `change` s'activa quan el valor queda confirmat segons el tipus de control. En camps de text, sovint passa quan l'usuari surt del camp després d'haver-lo canviat; en altres controls pot passar en un altre moment.

📚 [MDN – `submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

---

## 3. Llegir les dades

### Llegir un control amb `.value`

```js
const nom = document.querySelector("#name").value;
```

És convenient guardar les referències als controls si s'han de consultar repetidament i comprovar que existeixen abans d'utilitzar-les.

### Llegir el formulari amb `FormData`

`new FormData(form)` recull les dades dels controls del formulari. Per incloure'ls, han de tenir `name` i no estar desactivats; per exemple, les caselles de selecció no marcades no s'hi inclouen.

```js
const formData = new FormData(form);

const dades = {
  name: formData.get("name"),
  lastname: formData.get("lastname")
};
```

Si hi ha diversos controls amb el mateix `name`, `get()` retorna el primer valor i `getAll()` retorna tots. `FormData` també pot contenir fitxers; no tots els seus valors són necessàriament cadenes.

Per convertir entrades simples en un objecte:

```js
const dades = Object.fromEntries(new FormData(form));
```

🧩 Exemple: [formularis.js](./formularis.js)

📚 [MDN – `FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

---

## 4. Validar les dades

### Validació nativa

HTML permet indicar restriccions senzilles amb atributs com `required`, `type="email"`, `min`, `max`, `minlength` i `maxlength`. Es poden consultar amb `checkValidity()` o mostrar els missatges del navegador amb `reportValidity()`.

```html
<input name="email" type="email" required />
<input name="edat" type="number" min="18" max="120" />
```

### Validació pròpia

Una funció de validació pot rebre les dades i retornar un objecte d'errors. L'exemple de [`formularis.js`](./formularis.js) fa servir aquest patró: cada clau identifica el camp amb error.

```js
function validate(dades) {
  const errors = {};

  if (!dades.name || dades.name.trim() === "") {
    errors.name = "El nom és obligatori";
  }

  if (!dades.lastname || dades.lastname.trim() === "") {
    errors.lastname = "El cognom és obligatori";
  }

  return errors;
}
```

Si no hi ha errors, `Object.keys(errors).length` és `0`. La validació del client millora l'experiència d'ús, però no substitueix mai la validació que ha de fer el servidor.

---

## 5. Mostrar errors i resultats

Separa la lògica de validació de la representació al DOM. Quan es mostren dades escrites per l'usuari, prefereix `textContent` a `innerHTML`: així el text s'insereix com a text i no s'interpreta com a HTML.

```js
function renderErrors(errors) {
  const errorsBox = document.querySelector("#errors");
  errorsBox.replaceChildren();

  const llista = document.createElement("ul");

  Object.values(errors).forEach((missatge) => {
    const item = document.createElement("li");
    item.textContent = missatge;
    llista.append(item);
  });

  if (llista.childElementCount > 0) {
    errorsBox.append(llista);
  }
}

function renderResultat(dades) {
  const item = document.createElement("li");
  item.textContent = `${dades.name} ${dades.lastname}`;
  document.querySelector("#resultats").append(item);
}
```

L'exemple `formularis.js` mostra una altra tècnica: generar una plantilla i assignar-la a `innerHTML`. No hi interpolis dades no fiables sense escapament o sanitització, perquè el navegador les interpretarà com a marcatge HTML.

---

## 6. Flux complet

Aquest exemple combina la lectura, la validació i la representació. Suposa que el formulari i els contenidors d'errors i resultats de l'apartat 1 són al document.

```js
const form = document.querySelector("#formulari");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dades = Object.fromEntries(new FormData(form));
  const errors = validate(dades);
  renderErrors(errors);

  if (Object.keys(errors).length > 0) return;

  renderResultat(dades);
  form.reset();
});
```

El flux queda separat en quatre responsabilitats: **capturar l'enviament**, **obtenir les dades**, **validar-les** i **actualitzar la interfície**. Aquesta separació és útil en qualsevol aplicació; no és específica de React.

---

## 7. Expressions regulars

Una **expressió regular** permet comprovar si un text segueix un patró. Per exemple, aquest patró comprova si una cadena conté entre quatre i sis dígits:

```js
const codiPostal = /^\d{4,6}$/;
console.log(codiPostal.test("08001")); // true
```

Fes servir expressions regulars per als formats que realment necessiten un patró; per a camps com correus electrònics, prefereix també la validació nativa `type="email"` i evita patrons que pretenguin validar tots els casos possibles.

📚 [MDN – Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

Per ampliar l'annex de patrons i exemples aplicats als formularis, consulta [Expressions regulars](./reg-ex.md).

---

## 8. Bones pràctiques

- Fes servir `addEventListener("submit", ...)` i gestiona explícitament el comportament per defecte quan el formulari es processa amb JavaScript.
- Associa cada `<label>` amb el seu control mitjançant `for` i `id`; posa `name` als camps que hagis de llegir o enviar.
- Combina restriccions HTML amb validació pròpia quan calgui.
- Retorna errors des d'una funció de validació i mantén la representació del DOM separada.
- Mostra text d'usuari amb `textContent`; evita interpolar-lo directament a `innerHTML`.
- Crida `form.reset()` només quan s'hagi completat l'acció i sigui adequat esborrar els camps.
- Recorda que les dades també s'han de validar al servidor.

## Referència general

- [MDN – Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN – `submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [MDN – `FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN – `FormData()` constructor](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
- [MDN – Constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation)
- [MDN – Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
