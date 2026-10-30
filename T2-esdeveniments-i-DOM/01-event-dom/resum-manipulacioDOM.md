# Bloc 1A —  Manipulació del DOM  

## Índex
- [Bloc 1A —  Manipulació del DOM](#bloc-1a---manipulació-del-dom)
  - [Índex](#índex)
  - [Introducció al DOM](#introducció-al-dom)
  - [Estructura de l’arbre DOM](#estructura-de-larbre-dom)
  - [Node vs Element al DOM](#node-vs-element-al-dom)
    - [Tipus de nodes principals](#tipus-de-nodes-principals)
  - [Accés als elements](#accés-als-elements)
  - [Tipus d'elements i col·leccions](#tipus-delements-i-colleccions)
  - [Propietats i contingut](#propietats-i-contingut)
    - [Diferències entre `innerHTML`, `innerText` i `textContent`](#diferències-entre-innerhtml-innertext-i-textcontent)
    - [Exemples pràctics](#exemples-pràctics)
  - [Creació i inserció de nous elements](#creació-i-inserció-de-nous-elements)
  - [Modificació i eliminació de nodes](#modificació-i-eliminació-de-nodes)
    - [Eliminar un element](#eliminar-un-element)
    - [Substituir un node existent](#substituir-un-node-existent)
  - [Manipulació de classes i estils CSS](#manipulació-de-classes-i-estils-css)
  - [Bones pràctiques i precaucions](#bones-pràctiques-i-precaucions)
  - [Exemples del bloc](#exemples-del-bloc)
  - [Recursos i documentació oficial](#recursos-i-documentació-oficial)

---

## Introducció al DOM
El **Document Object Model (DOM)** és una interfície que representa un document HTML com una **estructura d’arbre** on cada element és un **node**. Aquesta representació permet **accedir, crear, modificar o eliminar** elements de la pàgina mitjançant JavaScript.

Cada element del document és un node i pot tenir fills, pares o germans. El navegador construeix automàticament aquest arbre quan carrega la pàgina.

📘 [MDN - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
 

---

## Estructura de l’arbre DOM
![Html tree](https://www.w3schools.com/js/pic_htmltree.gif)   
Quan una pàgina HTML és carregada, el navegador genera un **arbre de nodes** que reflecteix l’estructura del document.

```html
<html>
  <body>
    <p>Hola <strong>món</strong></p>
  </body>
</html>
```

Representació simplificada:
```
Document
 └── html
     └── body
         └── p
             ├── "Hola "
             └── strong
                 └── "món"
```
## Node vs Element al DOM

Quan treballem amb el DOM, **tot és un node**: etiquetes HTML, text, comentaris, etc.  
Però **no tots els nodes són elements**.

- Un **`Node`** és qualsevol unitat de l’arbre DOM.  
- Un **`Element`** és un tipus específic de node que representa **una etiqueta HTML**.  

És important distingir-los perquè alguns mètodes només retornen elements (p. ex. querySelector) mentre que d’altres poden incloure nodes de text (childNodes).
###  Tipus de nodes principals

| Tipus de Node | Valor (`nodeType`) | Exemple al DOM |
|:--|:--|:--|
| `ELEMENT_NODE` | `1` | `<p>` |
| `TEXT_NODE` | `3` | text dins d’un element |
| `COMMENT_NODE` | `8` | `<!-- comentari -->` |
| `DOCUMENT_NODE` | `9` | l’objecte `document` principal |




📘 [MDN - Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)  
🎓 [W3S - HTML DOM  Tutorial (no oficial)](https://www.w3schools.com/js/js_htmldom.asp)  

---

## Accés als elements
Els elements poden ser seleccionats mitjançant diferents mètodes de la interfície `Document`.

| Mètode | Descripció | Exemple |
|---------|-------------|----------|
| `getElementById(id)` | Retorna un element únic (HTMLElement) amb l’ID donat | `document.getElementById("menu")` |
| `getElementsByClassName(class)` | Retorna una col·lecció (HTMLCollection) HTML d’elements | `document.getElementsByClassName("item")` |
| `getElementsByTagName(tag)` | Retorna tots els elements (HTMLCollection) amb l’etiqueta indicada | `document.getElementsByTagName("li")` |
| `querySelector(selector)` | Retorna el primer element (HTMLElement) que compleix el selector per tag, classe, id o atribut |`document.querySelector("p")` `document.querySelector(".item")` `document.querySelector("#element")` `document.querySelector('[name="email"]')`|
| `querySelectorAll(selector)` | Retorna tots els elements (NodeList) que compleixen el selector per tag, classe, id o atribut | `document.querySelectorAll("p")` `document.querySelectorAll(".item"` `document.querySelectorAll("#element")`  `document.querySelectorAll('[name="email"]')` |

🧩 **Exemple:** [01-selectors.js](./01-selectors.js)

📘 [MDN - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---
## Tipus d'elements i col·leccions
| Tipus                | Retornat per                                         | Iteració                                                              | Actualització dinàmica                                         | Accés per índex | Descripció                               |
| :------------------- | :--------------------------------------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------- | :-------------- | :--------------------------------------- |
| **`HTMLElement`**    | `getElementById()`, `querySelector()`                | ❌ No iterable (retorna un únic element)                               | —                                                              | —               | Representa un **únic element HTML**.     |
| **`HTMLCollection`** | `getElementsByTagName()`, `getElementsByClassName()` | ⚠️ Parcial (no admet `forEach`, però sí `for...of` o bucles clàssics) | ✅ Sí, es **refresca automàticament** si el DOM canvia          | ✅ Sí            | Conjunt **viu** d’elements HTML.         |
| **`NodeList`**       | `querySelectorAll()`, `childNodes`                   | ✅ Sí, compatible amb `forEach()` i `for...of`                         | ⚠️ Normalment **estàtica**, no s’actualitza quan el DOM canvia | ✅ Sí            | Conjunt **estàtic** de nodes o elements. |

🧩 **Exemple:** [02-list-collections.js](./02-list-collections.js)
## Propietats i contingut
Els nodes del DOM tenen propietats que permeten llegir i modificar el seu contingut.

```js
const title = document.querySelector('h1');
console.log(title.textContent); // Llegeix el text
title.textContent = 'Nou títol'; // Modifica el text

const div = document.querySelector('#info');
div.innerHTML = '<strong>Text amb HTML</strong>';
```

També és possible accedir i modificar atributs HTML:

```js
const link = document.querySelector('a');
console.log(link.href);
link.setAttribute('target', '_blank');
```


### Diferències entre `innerHTML`, `innerText` i `textContent`

| Propietat | Què retorna | Inclou HTML? | Mostra text ocult (`display:none`)? | Manté salts i espais | Pot modificar HTML intern | Rendiment | Ús recomanat |
|:--|:--|:--|:--|:--|:--|:--|:--|
| **`innerHTML`** | El contingut HTML de l’element (etiquetes + text) | ✅ Sí | ✅ Sí | ❌ No, interpreta el codi HTML | ✅ Sí (pot afegir o eliminar elements) | 🐢 Més lent, reinterpreta el DOM | Quan vols **llegir o injectar HTML** complet dins un element. ⚠️ Per seguretat: **evitar injectar dades provinents de l’usuari** |
| **`innerText`** | Només el **text visible renderitzat** | ❌ No | ❌ No, ignora text ocult | ⚙️ Normalitza segons el renderitzat | ❌ Només text, sense etiquetes | 🐢 Més lent (calcula estils i layout) | Quan vols **mostrar o copiar el text com es veu a pantalla** |
| **`textContent`** | Tot el **text del DOM brut** | ❌ No | ✅ Sí, inclou text ocult | ✅ Manté exactament els nodes de text | ❌ Només text, sense etiquetes | ⚡ Més ràpid (no re-renderitza) | Quan vols **llegir o modificar text pur**, independentment de l’estil |

---

###  Exemples pràctics

```html
<div id="exemple">
  Hola <b>món</b>!
  <span style="display:none">Amagat</span>
</div>

<script>
  const div = document.getElementById('exemple');

  //  innerHTML → conserva les etiquetes HTML
  console.log(div.innerHTML);
  //  "Hola <b>món</b>! <span style="display:none">Amagat</span>"

  //  innerText → només text visible (aplica CSS)
  console.log(div.innerText);
  //  "Hola món!"

  //  textContent → tot el text brut del DOM
  console.log(div.textContent);
  //  "Hola món! Amagat"
</script>
```

🧩 **Exemple:** [03-elements.js](./03-elements.js)

📘 [MDN - Element: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  

📘 [MDN - HTMLElement: innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)  

📘 [MDN - Node: textContent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/textContent)  

📘 [MDN - Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

---


## Creació i inserció de nous elements
Per generar nous elements al document, s’utilitzen els mètodes `createElement` i `appendChild`.

```js
const novaSeccio = document.createElement('section');
novaSeccio.textContent = 'Això s’ha creat amb JavaScript';
document.body.appendChild(novaSeccio);
```

Per afegir elements dins d’un altre node:

```js
const llista = document.querySelector('ul');
const nouElement = document.createElement('li');
nouElement.textContent = 'Element nou';
llista.appendChild(nouElement);
```

🧩 **Exemple:** [04-dom.js](./04-dom.js)

📘 [MDN - Node: appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)  
📘 [MDN - Document: createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

---

## Modificació i eliminació de nodes
Els nodes del DOM es poden substituir o eliminar.

### Eliminar un element
```js
const primer = document.querySelector('li');
primer.remove();
```

### Substituir un node existent
```js
const nouParagraf = document.createElement('p');
nouParagraf.textContent = 'Text substituït';
const vell = document.querySelector('#textAntic');
vell.parentNode.replaceChild(nouParagraf, vell);
```

🧩 **Exemple:** [04-dom.js](./04-dom.js)

📘 [MDN - Node.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)  
📘 [MDN - Node.replaceChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)

---

## Manipulació de classes i estils CSS
Les classes CSS poden gestionar-se amb `classList`.

```js
const bloc = document.querySelector('#bloc');
bloc.classList.add('actiu');
bloc.classList.remove('ocult');
bloc.classList.toggle('destacat');
```

Per modificar estils en línia:

```js
bloc.style.backgroundColor = 'lightblue';
bloc.style.fontWeight = 'bold';
```

🧩 **Exemple:** [04-dom.js](./04-dom.js)

📘 [MDN - Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)  
📘 [MDN - HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

---

## Bones pràctiques i precaucions
- Assegura’t que el DOM estigui carregat abans de manipular-lo amb:
  - `DOMContentLoaded`: Modern i més ràpid
  ```js
  document.addEventListener('DOMContentLoaded', () => {
    // Codi segur aquí quan l’HTML s’ha processat
  });
  ```
  - `window.onload`: Més lent però carrega tot
  ```js
  window.onload = () => {
    // Codi segur aquí quan tota la pàgina s’ha carregat (HTML,imatges,CSS)
  };
  ```  
- Evita `document.write()` després del càrrec inicial.
- Utilitza `querySelector()` i `querySelectorAll()` en lloc de mètodes antics com `getElementById`, `getElementsByClassName`,etc.
- Prefereix `textContent` abans que `innerHTML` quan no necessitis inserir HTML.
- Utilitza `classList` per modificar classes en lloc de `className`.

---

## Exemples del bloc
Es poden executar els scripts individuals (`.js`) des de `index.html`. 

| Fitxer | Descripció |
|--------|-------------|
| 🧩 [01-selectors.js](./01-selectors.js) | Accés als elements amb diferents mètodes |
| 🧩 [02-list-collections.js](./02-list-collections.js) | Treball amb col·leccions d’elements i NodeList |
| 🧩 [03-elements.js](./03-elements.js) | Propietats, atributs i contingut HTML |
| 🧩 [04-dom.js](./04-dom.js) | Creació, inserció i modificació de nodes |

---

## Recursos i documentació oficial
- 📘 [MDN - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- 📘 [WHATWG - DOM Standard](https://dom.spec.whatwg.org/)
- 📘 [MDN - Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- 📘 [MDN - Element API](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- 🎓 [MDN – Guide: Manipulating documents (Client-side Web APIs)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)


---


