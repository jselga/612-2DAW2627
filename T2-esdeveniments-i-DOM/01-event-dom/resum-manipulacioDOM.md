# Resum sobre manipulació del DOM

Aquest document és una **referència** per seleccionar elements d'un document HTML, llegir-ne o modificar-ne el contingut i crear, inserir o eliminar nodes amb JavaScript.

[📚 **Referència general**](#referència-general)

## Índex
- [Índex](#índex)
- [Introducció al DOM](#introducció-al-dom)
- [Estructura de l'arbre DOM](#estructura-de-larbre-dom)
- [Nodes i elements](#nodes-i-elements)
  - [Tipus de nodes principals](#tipus-de-nodes-principals)
- [Seleccionar elements](#seleccionar-elements)
- [Col·leccions del DOM](#colleccions-del-dom)
- [Llegir i modificar contingut](#llegir-i-modificar-contingut)
  - [Diferències entre `innerHTML`, `innerText` i `textContent`](#diferències-entre-innerhtml-innertext-i-textcontent)
  - [Exemples pràctics](#exemples-pràctics)
- [Crear i inserir elements](#crear-i-inserir-elements)
- [Modificar i eliminar nodes](#modificar-i-eliminar-nodes)
  - [Eliminar un element](#eliminar-un-element)
  - [Substituir un node existent](#substituir-un-node-existent)
- [Classes CSS i estils](#classes-css-i-estils)
- [Bones pràctiques](#bones-pràctiques)
- [Exemples del bloc](#exemples-del-bloc)
- [Referència general](#referència-general)

---

## Introducció al DOM
El **Document Object Model (DOM)** és una interfície que representa un document HTML com una **estructura d'arbre** de nodes. JavaScript pot utilitzar aquesta interfície per seleccionar, crear, modificar i eliminar contingut de la pàgina.

Els elements, els nodes de text i els comentaris són nodes del document. El navegador construeix l'arbre DOM en analitzar l'HTML.

📘 [MDN - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

## Estructura de l'arbre DOM
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
## Nodes i elements

Quan treballem amb el DOM, **tot és un node**: etiquetes HTML, text, comentaris, etc.
Però **no tots els nodes són elements**.

- Un **`Node`** és qualsevol unitat de l’arbre DOM.
- Un **`Element`** és un tipus específic de node que representa **una etiqueta HTML**.

És important distingir-los perquè alguns mètodes retornen elements (per exemple, `querySelector()`), mentre que d'altres poden incloure nodes de text i comentaris (per exemple, `childNodes`).
###  Tipus de nodes principals

| Tipus de Node | Valor (`nodeType`) | Exemple al DOM |
|:--|:--|:--|
| `ELEMENT_NODE` | `1` | `<p>` |
| `TEXT_NODE` | `3` | text dins d’un element |
| `COMMENT_NODE` | `8` | `<!-- comentari -->` |
| `DOCUMENT_NODE` | `9` | l’objecte `document` principal |




📘 [MDN - Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)  
🎓 [W3S - HTML DOM Tutorial (no oficial)](https://www.w3schools.com/js/js_htmldom.asp)

---

## Seleccionar elements

Els mètodes de `Document` permeten seleccionar elements. `getElementById()` continua sent útil quan es coneix l'identificador; `querySelector()` i `querySelectorAll()` accepten selectors CSS.

| Mètode | Retorna | Exemple |
|---|---|---|
| `getElementById(id)` | L'element amb aquest ID o `null` | `document.getElementById("menu")` |
| `getElementsByClassName(class)` | Una `HTMLCollection` viva | `document.getElementsByClassName("item")` |
| `getElementsByTagName(tag)` | Una `HTMLCollection` viva | `document.getElementsByTagName("li")` |
| `querySelector(selector)` | El primer `Element` coincident o `null` | `document.querySelector(".item")` |
| `querySelectorAll(selector)` | Una `NodeList` estàtica amb els elements coincidents | `document.querySelectorAll("li.item")` |

🧩 **Exemple:** [01-selectors.js](./01-selectors.js)

📘 [MDN - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

---
## Col·leccions del DOM

| Tipus | Exemple de retorn | Contingut | Comportament |
|---|---|---|---|
| `Element` | `getElementById()`, `querySelector()` | Un element o `null` | No és una col·lecció |
| `HTMLCollection` | `getElementsByClassName()`, `getElementsByTagName()` | Elements | Viva: s'actualitza quan canvia el DOM |
| `NodeList` estàtica | `querySelectorAll()` | Els elements coincidents | No s'actualitza quan canvia el DOM |
| `NodeList` viva | `childNodes` | Nodes, inclosos text i comentaris | S'actualitza quan canvia el DOM |

Les col·leccions es poden recórrer per índex. Les `NodeList` modernes també admeten `forEach()`; per a compatibilitat o per utilitzar mètodes d'array, es poden convertir amb `Array.from()`.

🧩 **Exemple:** [02-list-collections.js](./02-list-collections.js)
## Llegir i modificar contingut

Els elements del DOM exposen propietats per llegir i modificar contingut i atributs.

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

| Propietat | Què llegeix | Què passa quan s'hi assigna text | Ús habitual |
|---|---|---|---|
| `innerHTML` | El marcatge HTML intern, incloent-hi etiquetes | Analitza el text com a HTML i reemplaça els fills | Quan cal llegir o crear marcatge HTML controlat |
| `innerText` | El text representat visualment | Reemplaça el contingut per text i reflecteix el comportament de renderització | Quan interessa el text tal com es mostra |
| `textContent` | El text dels nodes descendents, inclòs el text ocult | Reemplaça els fills per un node de text | Quan cal llegir o assignar text sense interpretar HTML |

Evita posar a `innerHTML` dades no fiables (per exemple, text escrit per l'usuari): el navegador les interpreta com a marcatge i poden introduir contingut perillós. Per a text pla, prefereix `textContent`.

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

📘 [MDN - Node: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

📘 [MDN - Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

---


## Crear i inserir elements

`document.createElement()` crea un element desconnectat del document. Després es pot configurar i inserir amb `append()`, `prepend()` o `appendChild()`.

```js
const novaSeccio = document.createElement('section');
novaSeccio.textContent = 'Això s’ha creat amb JavaScript';
document.body.appendChild(novaSeccio);
```

Per afegir elements dins d'un altre node:

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

## Modificar i eliminar nodes

Els nodes del DOM es poden eliminar o substituir.

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
vell.replaceWith(nouParagraf);
```

🧩 **Exemple:** [04-dom.js](./04-dom.js)

📘 [MDN - Node.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
📘 [MDN - Node.replaceChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)

---

## Classes CSS i estils

Les classes CSS es poden gestionar amb `classList`.

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

## Bones pràctiques

- Assegura't que els elements existeixin abans de seleccionar-los i modificar-los.
- Si el codi s'executa abans que s'hagi analitzat el document, pots esperar `DOMContentLoaded`. Amb un script `defer` o situat al final del `<body>`, normalment no cal afegir un listener per aquest esdeveniment.
  ```js
  document.addEventListener('DOMContentLoaded', () => {
    // L'HTML ja s'ha analitzat.
  });
  ```
- `window` emet `load` quan també han acabat de carregar recursos dependents, com imatges i fulls d'estil; no és simplement una versió «més lenta» de `DOMContentLoaded`.
- Evita `document.write()` després de la càrrega inicial.
- Tria el selector més clar: `getElementById()` continua sent adequat per cercar per ID; `querySelector()` i `querySelectorAll()` permeten selectors CSS.
- Prefereix `textContent` abans que `innerHTML` quan no necessitis inserir HTML.
- Utilitza `classList` per modificar classes en lloc de reemplaçar tot el valor de `className`.

---

## Exemples del bloc

Els scripts `.js` manipulen el DOM i s'han de carregar des d'una pàgina HTML amb els elements necessaris. `index.html` carrega `03-elements.js`; per provar un altre script, canvia el `src` o obre la pàgina d'exemple corresponent.

| Fitxer | Descripció |
|--------|-------------|
| 🧩 [01-selectors.js](./01-selectors.js) | Accés als elements amb diferents mètodes |
| 🧩 [02-list-collections.js](./02-list-collections.js) | Treball amb col·leccions d’elements i NodeList |
| 🧩 [03-elements.js](./03-elements.js) | Propietats, atributs i contingut HTML |
| 🧩 [04-dom.js](./04-dom.js) | Creació, inserció i modificació de nodes |

---

## Referència general
- 📘 [MDN - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- 📘 [WHATWG - DOM Standard](https://dom.spec.whatwg.org/)
- 📘 [MDN - Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- 📘 [MDN - Element API](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- 📘 [MDN - Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- 📘 [MDN - Element: innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- 📘 [MDN - HTMLElement: innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
- 📘 [MDN - Node: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- 📘 [MDN - Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- 📘 [MDN - Node: appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- 📘 [MDN - Document: createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- 📘 [MDN - Node.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
- 📘 [MDN - Node.replaceChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
- 📘 [MDN - Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- 📘 [MDN - HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- 🎓 [MDN – Guide: Manipulating documents (Client-side Web APIs)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)


---
