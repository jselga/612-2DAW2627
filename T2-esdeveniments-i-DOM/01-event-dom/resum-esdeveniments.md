# Bloc 1B — Esdeveniments del DOM

## Índex
- [Bloc 1B — Esdeveniments del DOM](#bloc-1b--esdeveniments-del-dom)
  - [Índex](#índex)
  - [Introducció als esdeveniments](#introducció-als-esdeveniments)
  - [Models de gestió d’esdeveniments](#models-de-gestió-desdeveniments)
    - [Model antic (nivell 0) — *no recomanat*](#model-antic-nivell-0--no-recomanat)
    - [Model modern (nivell 2)](#model-modern-nivell-2)
  - [L’objecte Event](#lobjecte-event)
    - [Propietats principals](#propietats-principals)
  - [Propagació i fases](#propagació-i-fases)
  - [Esdeveniments de ratolí i teclat](#esdeveniments-de-ratolí-i-teclat)
    - [Ratolí](#ratolí)
    - [Exemple](#exemple)
    - [Teclat](#teclat)
  - [Delegació d’esdeveniments](#delegació-desdeveniments)
    - [Exemple](#exemple-1)
  - [CustomEvent i comunicació entre components](#customevent-i-comunicació-entre-components)
    - [Creació i emissió](#creació-i-emissió)
    - [Escolta d’un CustomEvent](#escolta-dun-customevent)
  - [Exemples](#exemples)
  - [Recursos oficials](#recursos-oficials)
  - [Annex: Tipus d'esdeveniments](#annex-tipus-desdeveniments)

---

## Introducció als esdeveniments
Els **esdeveniments** permeten que el codi JavaScript reaccioni a accions de l’usuari o del navegador, com clics, tecles premudes, moviments del ratolí o canvis al DOM.

Un ***listener*** és el mecanisme que escolta un esdeveniment, mentre que el ***handler*** és la funció que s’executa quan l’esdeveniment té lloc. En altres paraules: el ***listener*** registra l’esdeveniment, i el ***handler*** n’és la resposta.

```js
// Handler (funció que s'executarà)
const handler = (e) => {
  console.log("Has fet clic!");
};

// Listener (registra l’esdeveniment + el handler)
button.addEventListener('click', handler);
```
També podem afegir un ***listener*** amb un ***handler*** implícit com a *arrow function*
```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('El document ja està llest.');
});
```

📘 [MDN — Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---

## Models de gestió d’esdeveniments

### Model antic (nivell 0) — *no recomanat*
Assignar directament una funció a una propietat com `onclick`:
```js
button.onclick = function() {
  alert('Has fet clic');
};
```

Només permet **una funció per tipus d’esdeveniment** i **no es pot eliminar fàcilment**.

### Model modern (nivell 2)
El mètode recomanat és `addEventListener()`:
```js
button.addEventListener('click', () => {
  alert('Clic modern!');
});
```
Per eliminar-lo:
```js
const handler = () => alert('Adeu listener');
button.addEventListener('click', handler);
button.removeEventListener('click', handler);
```

📘 [MDN — addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)   
📘 [MDN — removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

---

## L’objecte Event
Quan es dispara un esdeveniment, el ***listener*** "ho detecta" i el navegador passa automàticament un objecte `Event` a la funció ***handler***

### Propietats principals
| Propietat | Descripció |
|------------|-------------|
| `type` | Nom de l’esdeveniment (p. ex. `click`) |
| `target` | Element on s’ha originat l’esdeveniment |
| `currentTarget` | Element on s’executa el ***listener*** |
| `bubbles` | Indica si l’esdeveniment participa en la propagació |
| `detail` | Informació addicional en alguns esdeveniments o `CustomEvent` |

```js
button.addEventListener('click', (e) => {
  console.log(e.type);          // "click"
  console.log(esdeveniment.target.tagName); // "BUTTON"
});
```

📘 [MDN — Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

---

## Propagació i fases
Els esdeveniments passen per **tres fases**:
1. **Capturing**: des de l’arrel fins a l’element objectiu.
2. **Target**: sobre l’element on ocorre l’esdeveniment.
3. **Bubbling**: torna cap amunt a través dels pares.

```html
<div id="pare">
  <button id="fill">Fes clic</button>
</div>
```
```js
const pare = document.getElementById('pare');
const fill = document.getElementById('fill');

pare.addEventListener('click', () => console.log('Pare'));
fill.addEventListener('click', () => console.log('Fill'));
```

**Resultat:** `Fill` → `Pare` (fase bubbling)  

🧩 **Exemple:** [propagacio.html](./propagacio.html)  
Per evitar que es propaguin:
```js
esdeveniment.stopPropagation();
```

📘 [MDN — Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#esdeveniment_bubbling_and_capture)

---

## Esdeveniments de ratolí i teclat

### Ratolí
| Esdeveniment | Descripció |
|---------------|-------------|
| `click` | Clic simple |
| `dblclick` | Doble clic |
| `mousedown` / `mouseup` | Pulsació i alliberament del botó del ratolí |
| `mousemove` | Moviment del ratolí sobre l’element |
| `mouseenter` / `mouseleave` | Entrada o sortida del punter sobre un element |

### Exemple
```js
const imatge = document.querySelector('img');
imatge.addEventListener('mouseenter', () => imatge.style.borderColor = 'red');
imatge.addEventListener('mouseleave', () => imatge.style.borderColor = 'black');
```

### Teclat
| Esdeveniment | Descripció |
|---------------|-------------|
| `keydown` | Quan una tecla s’abaixa |
| `keyup` | Quan s’allibera una tecla |

```js
document.addEventListener('keydown', (e) => {
  console.log(`Has premut: ${e.key}`);
});
```
🧩 **Exemples:**   
[events.html](./events.html#mouseNkey)   
[05-esdeveniments.js](./05-esdeveniments.js)  
✍️ Proposta: Refactoritza l'exemple 05-esdeveniments per a funcionar amb `addEventListener`

📘 [MDN — MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)  
📘 [MDN — KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

---

## Delegació d’esdeveniments
La **delegació** consisteix a afegir un sol ***listener*** a un element pare i detectar quin fill ha originat l’esdeveniment.  
Assignem el listener al pare (ul) i fem servir e.target.closest('li') per saber quin fill realment ha rebut el clic.
Així només tenim un listener, i funciona encara que afegim `<li>` nous dinàmicament.

### Exemple
```html
<ul id="llista">
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ul>
```
```js
const llista = document.getElementById('llista');

llista.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return; // clic fora de <li>
  li.classList.toggle('destacat');
});
```

Avantatges:
- Menys ***listeners*** (eficiència).
- Funciona també amb elements afegits dinàmicament.   
     
🧩 **Exemple:**   
[events.html](./events.html#delegation)   
✍️ Proposta: Canvia l'exemple de tal manera que de desapareixin el elements en fer dobleclick o prèmer una tecla concreta.  
📘 [MDN — Event delegation pattern](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#esdeveniment_delegation)

---

## CustomEvent i comunicació entre components
Els `CustomEvent` permeten **crear i emetre esdeveniments personalitzats** per comunicar canvis d’estat entre parts del codi.

### Creació i emissió
```js
const canviEvent = new CustomEvent('canvi-color', {
  detail: { color: 'blue' },
  bubbles: true // permet que pugi pel DOM
});

document.querySelector('#caixa').dispatchEvent(canviEvent);
```

### Escolta d’un CustomEvent
```js
document.addEventListener('canvi-color', (e) => {
  console.log('Color rebut:', e.detail.color);
});
```

🧩 **Exemple:**   
[CustomEvents.html](./customEvent.html)   

📘 [MDN — CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

---

## Exemples

| Fitxer | Descripció |
|--------|-------------|
| [05-esdeveniments.js](./05-esdeveniments.js) | Exemples bàsics de clic, doble clic i canvis d’estil |
| [06-drag.js](./06-drag.js) | Exemple complet amb esdeveniments `drag` i `drop` |
|[propagacio.html](./propagacio.html)| Exemple de propagació d'esdeveniments|
|[events.html](./events.html)| Exemples de diferents esdeveniments de teclat, ratolí i delegació|
|[customEvent.html](./customEvent.html)| Exemple de Custom Events|


---

## Recursos oficials
- 📘 [MDN — addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- 📘 [MDN — Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- 📘 [MDN — Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#esdeveniment_bubbling_and_capture)
- 📘 [MDN — CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- 📘 [MDN — MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- 📘 [MDN — KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- 📘 [MDN — Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---
## [Annex: Tipus d'esdeveniments](AnnexTipusEveniments.md)


