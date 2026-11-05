# Resum sobre esdeveniments del DOM

Aquest document és una **referència** sobre com escoltar i gestionar esdeveniments al navegador: del registre d'un listener a la propagació, la delegació i els esdeveniments personalitzats.

[📚 **Referència general**](#referència-general)

## Índex

- [1. Esdeveniments, listeners i handlers](#1-esdeveniments-listeners-i-handlers)
- [2. Registrar i eliminar listeners](#2-registrar-i-eliminar-listeners)
- [3. L'objecte `Event`](#3-lobjecte-event)
- [4. Propagació dels esdeveniments](#4-propagació-dels-esdeveniments)
- [5. Ratolí, teclat i formularis](#5-ratolí-teclat-i-formularis)
- [6. Delegació d'esdeveniments](#6-delegació-desdeveniments)
- [7. Esdeveniments personalitzats](#7-esdeveniments-personalitzats)
- [8. Arrossegar i deixar anar](#8-arrossegar-i-deixar-anar)
- [📚 Referència general](#referència-general)

---

## 1. Esdeveniments, listeners i handlers

Un **esdeveniment** és un senyal que indica que ha passat alguna cosa, com ara un clic, una tecla premuda o l'enviament d'un formulari. Un **handler** és la funció que respon a l'esdeveniment; un **listener** és el registre que associa aquesta funció a un tipus d'esdeveniment i a un objecte.

```js
const button = document.querySelector("button");

function gestionaClic(event) {
  console.log("S'ha fet clic", event.type);
}

button.addEventListener("click", gestionaClic);
```

🧩 Exemple: [05-esdeveniments.js](./05-esdeveniments.js)

📚 [MDN – Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---

## 2. Registrar i eliminar listeners

La forma recomanada és `addEventListener()`. Un mateix element pot tenir diversos listeners per al mateix esdeveniment. Per eliminar-ne un, cal passar a `removeEventListener()` la mateixa funció i les mateixes opcions de captura utilitzades en registrar-lo.

```js
function mostraMissatge() {
  console.log("Clic");
}

button.addEventListener("click", mostraMissatge);
button.removeEventListener("click", mostraMissatge);
```

Per controlar la captura, es pot indicar `capture`; l'opció `once` elimina el listener després de la primera execució:

```js
element.addEventListener("click", mostraMissatge, { capture: true, once: true });
```

La propietat `onclick` és una forma més antiga. Només manté un handler per propietat: assignar-ne un de nou reemplaça l'anterior i assignar `null` l'elimina.

```js
button.onclick = () => console.log("Clic");
button.onclick = null;
```

🧩 Exemple: [05-esdeveniments.js](./05-esdeveniments.js)

📚 **Referències:**
- [MDN – `addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN – `removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

---

## 3. L'objecte `Event`

El navegador passa a la funció handler un objecte amb informació sobre l'esdeveniment.

| Propietat | Significat |
|---|---|
| `type` | Tipus d'esdeveniment, per exemple `click` |
| `target` | Element on s'ha originat l'esdeveniment |
| `currentTarget` | Element on està registrat el listener que s'està executant |
| `bubbles` | Indica si l'esdeveniment es propaga cap amunt |
| `detail` | Dades addicionals d'un `CustomEvent` |

```js
button.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target.tagName); // "BUTTON"
  console.log(event.currentTarget === button); // true
});
```

`target` i `currentTarget` poden ser diferents, especialment quan el listener és en un element pare i l'esdeveniment s'hi propaga.

📚 [MDN – `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)

---

## 4. Propagació dels esdeveniments

Els esdeveniments que es propaguen recorren aquestes fases:

1. **Captura (*capturing*):** des de l'arrel del document cap a l'element objectiu.
2. **Objectiu (*target*):** arriben a l'element que ha originat l'esdeveniment.
3. **Bombolleig (*bubbling*):** tornen des de l'objectiu pels seus elements ancestres.

```html
<div id="pare">
  <button id="fill">Fes clic</button>
</div>
```

```js
const pare = document.getElementById("pare");
const fill = document.getElementById("fill");

pare.addEventListener("click", () => console.log("Pare, bubbling"));
pare.addEventListener("click", () => console.log("Pare, captura"), { capture: true });
fill.addEventListener("click", () => console.log("Fill"));
```

En fer clic al botó s'executa primer el listener de captura del pare, després el del botó i, finalment, el listener de bombolleig del pare.

- `event.stopPropagation()` atura la propagació cap a altres elements de la cadena.
- `event.preventDefault()` evita l'acció per defecte, si l'esdeveniment és cancel·lable; no atura la propagació.

🧩 Exemple: [propagacio.html](./propagacio.html)

📚 [MDN – Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)

---

## 5. Ratolí, teclat i formularis

### Ratolí i punter

| Esdeveniment | Quan s'activa |
|---|---|
| `click` | Activació d'un element amb el punter |
| `dblclick` | Doble clic |
| `mousedown` / `mouseup` | Premuda / alliberament d'un botó del ratolí |
| `mousemove` | Moviment del punter |
| `mouseenter` / `mouseleave` | El punter entra / surt de l'element |

```js
const imatge = document.querySelector("img");
imatge.addEventListener("mouseenter", () => {
  imatge.style.borderColor = "red";
});
```

Els **Pointer Events** (`pointerdown`, `pointermove`, `pointerup`, etc.) ofereixen una interfície comuna per a ratolí, llapis i pantalles tàctils.

### Teclat

| Esdeveniment | Quan s'activa |
|---|---|
| `keydown` | En prémer una tecla |
| `keyup` | En alliberar una tecla |

```js
document.addEventListener("keydown", (event) => {
  console.log(`Tecla: ${event.key}`);
});
```

Els esdeveniments de teclat depenen del focus. Es poden escoltar a `document` per detectar tecles a la pàgina o en un element que pugui rebre el focus.

### Formularis

- `input` s'activa mentre canvia el valor d'un camp editable.
- `change` s'activa quan el valor d'un control es confirma segons el seu tipus.
- `submit` s'activa quan s'envia un formulari; sovint es crida `event.preventDefault()` per gestionar-lo amb JavaScript.
- `focus` i `blur` indiquen l'entrada i la sortida del focus d'un control.

🧩 Exemples: [events.html#mouseNkey](./events.html#mouseNkey), [05-esdeveniments.js](./05-esdeveniments.js)

✍️ Proposta: refactoritza els handlers de propietat de `05-esdeveniments.js` perquè facin servir `addEventListener()`.

📚 **Referències:**
- [MDN – `MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [MDN – `KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [MDN – Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---

## 6. Delegació d'esdeveniments

La **delegació** consisteix a registrar un listener en un element pare i utilitzar `event.target` per identificar quin descendent ha originat l'esdeveniment. És útil quan hi ha molts fills o quan se n'afegeixen de nous dinàmicament.

```html
<ul id="llista">
  <li>Element 1</li>
  <li>Element 2</li>
</ul>
```

```js
const llista = document.getElementById("llista");

llista.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item || !llista.contains(item)) return;

  item.classList.toggle("destacat");
});
```

`event.target` identifica l'element que ha rebut el clic; `event.currentTarget` és la llista on està registrat el listener.

🧩 Exemple: [events.html#delegation](./events.html#delegation)

✍️ Proposta: adapta l'exemple perquè un doble clic elimini l'element seleccionat.

📚 [MDN – Event delegation pattern](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

---

## 7. Esdeveniments personalitzats

`CustomEvent` permet crear un esdeveniment propi i adjuntar-hi dades mitjançant `detail`. L'opció `bubbles: true` fa que l'esdeveniment pugui propagar-se cap als ancestres de l'element on s'emet.

```js
const canviColor = new CustomEvent("color-change", {
  detail: { color: "blue" },
  bubbles: true
});

paleta.dispatchEvent(canviColor);

window.addEventListener("color-change", (event) => {
  console.log(event.detail.color);
});
```

🧩 Exemple: [custom-event.html](./custom-event.html)

📚 [MDN – `CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

---

## 8. Arrossegar i deixar anar

La Drag and Drop API permet implementar interaccions d'arrossegar elements. En l'exemple, el destí ha de cancel·lar l'esdeveniment `dragover` amb `preventDefault()` perquè pugui acceptar un `drop`.

🧩 Exemples: [06-drag.js](./06-drag.js), [dragndrop.html](./dragndrop.html)

📚 [MDN – HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

## Exemples del bloc

| Fitxer | Contingut |
|---|---|
| [05-esdeveniments.js](./05-esdeveniments.js) | Handlers de ratolí, focus i formularis |
| [06-drag.js](./06-drag.js) | Exemple d'arrossegar i deixar anar |
| [propagacio.html](./propagacio.html) | Fases de propagació |
| [events.html](./events.html) | Ratolí, teclat i delegació |
| [custom-event.html](./custom-event.html) | `CustomEvent` i delegació |

## Referència general

- [MDN – `addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN – `removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- [MDN – `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN – Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)
- [MDN – Event delegation pattern](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
- [MDN – `CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- [MDN – `MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [MDN – `KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [MDN – HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

## Annex: tipus d'esdeveniments

Consulta l'[annex de tipus d'esdeveniments](./annex-tipus-esdeveniments.md) per a una classificació complementària.
