# Annex: tipus d'esdeveniments

Aquest annex complementa el [resum d'esdeveniments](./c-resum-esdeveniments.md) i agrupa esdeveniments habituals segons la interacció o els elements amb què s'utilitzen.

## Índex

- [1. Ratolí i punter](#1-ratolí-i-punter)
- [2. Teclat i focus](#2-teclat-i-focus)
- [3. Formularis i camps editables](#3-formularis-i-camps-editables)
- [4. Càrrega i recursos](#4-càrrega-i-recursos)
- [5. Quin element rep l'esdeveniment?](#5-quin-element-rep-lesdeveniment)
- [Referències](#referències)

---

## 1. Ratolí i punter

| Esdeveniment | Descripció |
|---|---|
| `click` | Activació d'un element amb el punter |
| `dblclick` | Doble clic |
| `mousedown` / `mouseup` | Premuda / alliberament d'un botó del ratolí |
| `mousemove` | Moviment del ratolí |
| `mouseenter` / `mouseleave` | Entrada / sortida del punter d'un element |
| `contextmenu` | Obertura del menú contextual, habitualment amb clic dret |
| `wheel` | Moviment de la roda o gest de desplaçament |

Els **Pointer Events** (`pointerdown`, `pointerup`, `pointermove`, entre d'altres) ofereixen una interfície comuna per a ratolí, llapis i pantalles tàctils. Tria els esdeveniments que s'ajustin al dispositiu i a la interacció que necessites.

---

## 2. Teclat i focus

| Esdeveniment | Descripció |
|---|---|
| `keydown` | Es dispara en prémer una tecla |
| `keyup` | Es dispara en alliberar una tecla |
| `keypress` | Obsolet; evita utilitzar-lo en codi nou |
| `focus` / `blur` | El focus entra a un element / en surt |
| `focusin` / `focusout` | Com `focus` / `blur`, però participen en la propagació |

Els esdeveniments de teclat s'associen al context que té el focus. Es poden escoltar a `document` per a interaccions globals de la pàgina o directament en controls i altres elements enfocables.

```js
document.addEventListener("keydown", (event) => {
  console.log("Tecla premuda:", event.key);
});
```

Si és apropiat, es pot fer que un element que no rep el focus per defecte pugui rebre'l amb `tabindex`. No cal afegir `tabindex` als elements que ja són enfocables, com els botons i els camps de formulari.

---

## 3. Formularis i camps editables

| Esdeveniment | Ús habitual |
|---|---|
| `input` | El valor d'un camp editable canvia; també s'utilitza en contingut editable |
| `change` | El valor d'un control canvia i queda confirmat segons el tipus de control |
| `submit` | S'envia un formulari (`form`) |
| `reset` | Es reinicia un formulari |
| `invalid` | Un control no supera la validació del formulari |

Per exemple, `input` és útil per respondre mentre s'escriu; `change` s'utilitza quan el canvi queda confirmat. El moment exacte en què es dispara `change` depèn del tipus de control.

Per gestionar l'enviament d'un formulari amb JavaScript, escolta `submit` al formulari mateix:

```js
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita l'enviament/navegació per defecte
  console.log("Formulari gestionat amb JavaScript");
});
```

---

## 4. Càrrega i recursos

| Esdeveniment | Ús habitual |
|---|---|
| `DOMContentLoaded` | El document HTML s'ha analitzat; no espera que acabin de carregar totes les imatges |
| `load` | El document o un recurs, com una imatge, s'ha carregat |
| `error` | Hi ha hagut un error en carregar un recurs |

```js
const imatge = document.querySelector("img");
imatge.addEventListener("load", () => console.log("Imatge carregada"));
imatge.addEventListener("error", () => console.log("No s'ha pogut carregar"));
```

---

## 5. Quin element rep l'esdeveniment?

El tipus d'esdeveniment i l'element que el rep depenen de la interacció. Per exemple, `submit` s'emet en enviar un formulari; `input` correspon a camps editables; un esdeveniment de teclat s'adreça al context enfocat. En canvi, un clic pot originar-se en molts tipus d'elements.

No es pot determinar de manera fiable si una interacció tindrà lloc comprovant només si existeix una propietat com `onclick` o `onchange` a l'objecte. La disponibilitat d'una propietat handler no demostra que un esdeveniment natiu concret es generi amb una acció de l'usuari. Consulta la documentació de l'esdeveniment i prova la interacció necessària.

---

## Referències

- [MDN – Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN – `PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent)
- [MDN – `KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [MDN – `InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent)
- [MDN – `SubmitEvent`](https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent)
- [MDN – `DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
