# Exercicis — Esdeveniments del DOM

Aquesta pràctica combina la manipulació del DOM amb els esdeveniments, la propagació i els esdeveniments personalitzats. Completa els apartats de manera progressiva i prova cada canvi al navegador.

## Com començar

1. Copia **tota aquesta carpeta** al teu directori de pràctiques.
2. Obre `index.html` al navegador.
3. Escriu la solució a `script.js`; no cal modificar `index.html`.
4. No moguis ni reanomenis la carpeta `img/`: el codi hi referencia les imatges.

La carpeta és autocontinguda: inclou la pàgina HTML, l'script inicial, aquest enunciat i les imatges necessàries. No cal instal·lar cap eina ni llibreria.

## Objectius

- Registrar esdeveniments amb `addEventListener()`.
- Treballar amb `click`, `dblclick` i propagació.
- Crear i inserir elements al DOM.
- Gestionar estat amb `dataset` i arrays.
- Crear i escoltar un `CustomEvent`.

## Requisits funcionals

1. **Preparació:** espera que el document s'hagi carregat abans d'accedir als elements.
2. **Precarrega d'imatges:** desa les rutes `img/gnulinux.jpg`, `img/gnu.jpg` i `img/linux.jpg` en un array i precarrega-les amb `Image`.
3. **Estil i atributs:** posa els `<h2>` de les targetes en color `#aaaaff` i fixa a totes les imatges `alt="gnu/linux"`, `width="125"` i `height="125"`.
4. **Clic:** cada imatge avança independentment pel cicle original → GNU → Linux → original.
5. **Doble clic:** amaga només la imatge seleccionada.
6. **Botó «Mostra totes»:** crea'l amb JavaScript i insereix-lo abans de `#pId`. Només ha de ser visible quan hi hagi imatges amagades; en clicar-lo, mostra-les totes.
7. **Clic a la targeta:** si es clica dins una targeta però fora de la imatge, mostra el missatge «Cal clicar sobre la imatge».
8. **Esdeveniment personalitzat:** mantén una llista de les imatges amagades i notifica amb un `CustomEvent` cada canvi de visibilitat. El botó ha d'actualitzar-se en resposta a aquest esdeveniment.

## Desenvolupament pas a pas

### 1. Preparació i selecció

- Inicialitza el codi quan el DOM estigui llest.
- Selecciona les targetes, els títols i les imatges amb selectors CSS.
- Recorre els elements amb `for...of` o `forEach()`.
- Defineix les rutes de les imatges i precarrega-les amb `new Image()`.

### 2. Canvi rotatori d'imatges

- Desa l'índex actual de cada imatge a `dataset`.
- Quan es fa clic, avança a la imatge següent i torna al començament en arribar al final.
- Cada imatge ha de mantenir el seu propi estat.

### 3. Amagar i mostrar imatges

- En fer doble clic, amaga només la imatge seleccionada.
- Mantén actualitzada una col·lecció d'imatges amagades.
- Crea un `CustomEvent` per comunicar els canvis d'estat.
- Crea el botó «Mostra totes» amb `createElement()` i insereix-lo abans de `#pId`.
- Fes que el botó només es mostri quan la col·lecció d'imatges amagades no sigui buida.
- En clicar el botó, torna a mostrar les imatges i notifica el canvi d'estat.

### 4. Clic a la targeta

Afegeix el comportament a les targetes: un clic a l'espai de la targeta que no sigui una imatge ha de mostrar el missatge indicat. Pots utilitzar `event.target` o `closest()` per distingir on s'ha fet clic.

## Requisits de codi

- Utilitza `const` i `let`, noms descriptius i funcions petites.
- Utilitza `addEventListener()`; no facis servir atributs `onclick` a l'HTML.
- No utilitzis APIs obsoletes.
- Afegeix comentaris breus quan ajudin a entendre la lògica.

## Repte extra

- Implementa els esdeveniments de clic de les imatges amb delegació: registra un únic listener en un contenidor comú i identifica la imatge amb `closest()`.
- Afegeix una classe CSS per amagar les imatges en lloc de modificar estils en línia.
