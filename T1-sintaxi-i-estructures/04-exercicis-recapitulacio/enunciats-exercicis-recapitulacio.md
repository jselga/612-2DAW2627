# Exercicis de recapitulació

## Objectiu

Resol els deu exercicis de recapitulació aplicant els conceptes treballats als apartats següents:

- Tipus bàsics i variables.
- Operadors aritmètics, de comparació i lògics.
- Funcions i paràmetres.
- Arrays i objectes.
- Condicionals i bucles.

Completa el codi de cada fitxer `.js` i comprova el resultat amb `console.log`.

## Exercicis

### 1. Major de dos nombres

Completa `01-major-dos-nombres.js` perquè `quinEsMajor(a, b)` retorni el nombre més gran dels dos paràmetres.

### 2. Nom d'una resolució

Completa `02-nom-resolucio.js` perquè `nomResolucio(amplada, altura)` retorni el nom de la resolució corresponent:

- `8K`: 7680 × 4320
- `4K`: 3840 × 2160
- `WQHD`: 2560 × 1440
- `FHD`: 1920 × 1080
- `HD`: 1280 × 720

Si la resolució no coincideix amb cap de les anteriors, retorna un missatge indicant que no es reconeix.

### 3. Element d'un array

Completa `03-element-array.js` perquè `getByIdx(arr, idx)` retorni l'element de l'índex indicat.

Si l'índex és menor que zero o no existeix dins de l'array, ha de retornar un valor o missatge que indiqui que l'índex no és vàlid.

### 4. Nombres imparells

Completa `04-nombres-imparells.js` per imprimir només els nombres imparells del 0 al 10.

La sortida esperada és:

```text
imparell 1
imparell 3
imparell 5
imparell 7
imparell 9
```

### 5. Nombre menor i major d'un array

Completa `05-menor-i-major-array.js` perquè `getMenorMajor(arr)` retorni el nombre menor i el nombre major de l'array rebut.

Prova la funció amb els valors que ja hi ha al fitxer, incloent-hi nombres negatius.

### 6. Comptar nombres positius

Completa `06-comptar-positius.js` perquè `quantsPositius(arr)` retorni quants nombres positius conté l'array.

Decideix i documenta com vols tractar el valor `0`.

### 7. Preu amb impostos

Completa `07-preu-amb-impostos.js` perquè `preuComplet(preu, impost)` retorni el preu final després d'aplicar l'impost.

El paràmetre `impost` es rep com un valor decimal. Per exemple, `0.15` representa un 15%.

### 8. Convertir objectes en parelles

Completa `08-objectes-a-parells.js` perquè `toPairs(arr)` transformi un array d'objectes en un array de parelles amb aquest format:

```js
[
  [1, { id: 1, name: "John" }],
  [2, { id: 2, name: "Doe" }]
]
```

Cada parella ha de contenir l'identificador de l'objecte i l'objecte mateix.

### 9. Convertir parelles en objectes

Completa `09-parells-a-objectes.js` perquè `toCollection(arr)` faci la transformació inversa de l'exercici anterior.

El resultat ha de ser un array d'objectes amb la propietat `id` incorporada:

```js
[
  { name: "John", id: 1 },
  { name: "Doe", id: 2 }
]
```

### 10. Crear un array

Completa `10-crear-array.js` perquè `crearArray(n)` retorni un array amb els nombres de l'1 fins a `n`.

Per exemple, per a `n = 4` el resultat ha de ser:

```js
[1, 2, 3, 4]
```

## Comprovació opcional al navegador

Si acabes els exercicis, fes una petita comprovació al navegador:

- Crea o amplia l'`index.html` per carregar els fitxers JavaScript.
- Mostra els resultats amb `console.log` i, opcionalment, amb `alert`.
- Pots utilitzar `prompt` per demanar alguna dada a l'usuari.
- No cal fer encara una aplicació ni una manipulació complexa del DOM.
- Si vols mostrar text a la pàgina, pots utilitzar un element HTML senzill i modificar-ne el `textContent`.

La comprovació amb el navegador és complementària. El lliurament principal són els exercicis resolts en JavaScript.

## Lliurament

Comprimeix la carpeta completa en un fitxer `.zip` amb el format:

```text
cognomsNom.zip
```

Per exemple:

```text
garciaPere.zip
```

El fitxer comprimit ha d'incloure:

- Els deu fitxers `.js` resolts.
- Aquest enunciat.
- L'`index.html` si has fet la comprovació al navegador.
- Qualsevol altre fitxer necessari per executar la teva proposta.

Abans de lliurar-lo, comprova que el `.zip` es pot obrir i que els fitxers s'executen correctament.
