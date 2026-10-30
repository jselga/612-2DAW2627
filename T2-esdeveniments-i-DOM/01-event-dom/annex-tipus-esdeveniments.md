# Bloc 1B — Annex: Tipus d’esdeveniments i on s'utilitzen 

Aquesta guia complementària serveix per saber **quins esdeveniments tenen sentit en quins elements HTML**, i en quins no. En els materials principals treballem amb `addEventListener`, però és útil conèixer quina mena d’esdeveniments són aplicables a cada tipus d'element.

---


## 1. Introducció
No tots els elements HTML generen els mateixos esdeveniments. Per exemple:
- Un `<form>` pot generar `submit`, però un `<div>` no.
- Un `<input>` genera `input` i `change`, però una `<img>` no.
- Quasi tots els elements poden rebre `click`, però no tots poden rebre `keydown`.

Aquesta guia dóna una visió clara perquè l’alumnat no faci servir esdeveniments innecessaris o impossibles en cada element.

---

## 2. Esdeveniments globals (funcionen a molts elements)
Aquests esdeveniments poden aparèixer a pràcticament qualsevol element:

| Esdeveniment | Descripció |
|--------------|------------|
| `click` | Clic simple |
| `dblclick` | Doble clic |
| `mousedown` / `mouseup` | Botó del ratolí avall / amunt |
| `mousemove` | Moviment del ratolí |
| `mouseenter` / `mouseleave` | Entrada/sortida del punter |
| `wheel` | Gest o roda del ratolí |
| `contextmenu` | Clic dret (obre menú contextual) |

Són útils en elements visuals com `<div>`, `<img>`, `<button>`, però poden aplicar-se quasi a qualsevol element.

---

## 3. Esdeveniments específics de formularis
Només tenen sentit en **controls de formulari** (`input`, `textarea`, `select`, `form`).

| Esdeveniment | Elements |
|--------------|----------|
| `input` | `input`, `textarea` |
| `change` | `input`, `textarea`, `select` |
| `submit` | `form` |
| `reset` | `form` |
| `invalid` | Qualsevol camp de formulari amb validació HTML5 |

Exemples:
- `input` es dispara mentre l’usuari escriu.
- `change` es dispara quan l’usuari surt del camp.
- `submit` només existeix per `<form>`.

---

## 4. Esdeveniments de teclat
Funcionen en elements **focusables**, especialment:
- `document` (per teclat global)
- `input`, `textarea`
- Elements amb `tabindex`

| Esdeveniment | Notes |
|--------------|-------|
| `keydown` | Dispara quan la tecla s'abaixa |
| `keyup` | Quan s'allibera |
| `keypress` | Obsolet, no recomanat |

Exemple:
```js
document.addEventListener('keydown', (e) => {
  console.log('Tecla premuda:', e.key);
});
```

---

## 5. Esdeveniments de ratolí i punter
### Ratolí (antics)
`click`, `mousemove`, `mousedown`, `mouseup`, `mouseenter`, `mouseleave`.

### Pointer Events (recomanat modern)
`pointerdown`, `pointerup`, `pointermove`, `pointerenter`, `pointerleave`.

Funcionen en qualsevol element visible.

---

## 6. Esdeveniments de càrrega i recursos
Generats quan es carreguen fitxers o recursos:

| Esdeveniment | Elements |
|--------------|----------|
| `load` | `window`, `<img>`, `<script>`, `<link>` |
| `error` | Igual que `load`, però en cas d'error |

Exemple per imatge:
```js
const img = document.querySelector('img');
img.addEventListener('load', () => console.log('Imatge carregada'));
```

---

## 7. Esdeveniments que **no** funcionen en certs elements
| Esdeveniment | No aplicable a |
|--------------|----------------|
| `submit` | qualsevol element que **no** sigui un `<form>` |
| `input` | `<div>`, `<img>`, `<button>`… només controls |
| `change` | igual que `input`, només controls |
| `keydown` | elements que no poden tenir focus |

Exemple incorrecte:
```js
div.addEventListener('submit', ...) // No funciona
```

---

## 8. Com comprovar si un element admet un esdeveniment
Truc útil per a l’alumnat:
```js
const el = document.querySelector('div');
console.log('onchange' in el);   // false
console.log('onclick' in el);    // true
```

Si retorna `true`, l’element pot tenir aquest esdeveniment (encara que recomanem `addEventListener`).

---

## Resum final
- Alguns esdeveniments són universals, altres específics.
- Formularis → `input`, `change`, `submit`.
- Teclat → elements focusables o `document`.
- Recursos → `load`, `error`.
- Evitar listeners absurds (`submit` a un div, `input` a una img).
- Fer servir `addEventListener` sempre.



