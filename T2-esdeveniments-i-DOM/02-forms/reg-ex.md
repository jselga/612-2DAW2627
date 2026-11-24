# Annex — Expressions Regulars (RegEx) per a Formularis
---
- [Annex — Expressions Regulars (RegEx) per a Formularis](#annex--expressions-regulars-regex-per-a-formularis)
  - [1. Per què expressions regulars?](#1-per-què-expressions-regulars)
  - [2. Conceptes bàsics](#2-conceptes-bàsics)
    - [Conjunts](#conjunts)
    - [Negació](#negació)
    - [Grups](#grups)
  - [3. Classes predefinides i metacaràcters](#3-classes-predefinides-i-metacaràcters)
  - [4. Quantificadors](#4-quantificadors)
    - [Exemples](#exemples)
    - [Ancoratges](#ancoratges)
  - [5. Validacions útils (nivell bàsic)](#5-validacions-útils-nivell-bàsic)
    - [Email (bàsic)](#email-bàsic)
    - [Telèfon espanyol simple](#telèfon-espanyol-simple)
    - [Nom i cognoms (lletres + espais)](#nom-i-cognoms-lletres--espais)
    - [Codi postal espanyol](#codi-postal-espanyol)
  - [6. Expressions regulars en JavaScript](#6-expressions-regulars-en-javascript)
    - [Mètodes principals](#mètodes-principals)
    - [Flags](#flags)
    - [Exemple](#exemple)
  - [7. Afirmacions (Lookarounds) — nivell avançat](#7-afirmacions-lookarounds--nivell-avançat)
    - [Lookahead positiu](#lookahead-positiu)
    - [Lookahead negatiu](#lookahead-negatiu)
    - [Lookbehind positiu](#lookbehind-positiu)
  - [8. Validacions avançades i casos pràctics](#8-validacions-avançades-i-casos-pràctics)
    - [Validació d’URL](#validació-durl)
    - [DNI (simple, sense lletra de control)](#dni-simple-sense-lletra-de-control)
    - [Contrasenya forta](#contrasenya-forta)
  - [9. Exemples addicionals: `test`, `match` i `replace`](#9-exemples-addicionals-test-match-i-replace)
    - [`test()` — comprovar si un text compleix un patró](#test--comprovar-si-un-text-compleix-un-patró)
    - [`match()` — obtenir coincidències](#match--obtenir-coincidències)
    - [`replace()` — substituir parts d’un text](#replace--substituir-parts-dun-text)
    - [`replace()` amb funció — transformació de valors](#replace-amb-funció--transformació-de-valors)
    - [Exemple aplicat a formularis](#exemple-aplicat-a-formularis)
  - [10. Eines recomanades](#10-eines-recomanades)

---

## 1. Per què expressions regulars?
Les **expressions regulars (RegEx)** permeten validar text dins dels formularis, com ara:
- emails
- telèfons
- URL
- formats específics (DNI, codis postals, etc.)

Són una eina poderosa en JavaScript per complementar validacions lògiques com *camps obligatoris*, *mínima longitud*, etc.

📘 **MDN — Regular Expressions**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

---

## 2. Conceptes bàsics
Una expressió regular és un patró.

```js
const patro = /abc/;
const altre = new RegExp("abc");
```

Coincideix si la cadena conté les lletres "abc" en aquest ordre.

### Conjunts
```js
/[aeiou]/   // qualsevol vocal
/[0-9]/     // qualsevol dígit
/[A-Z]/     // majúscules
```

### Negació
```js
/[^0-9]/    // qualsevol cosa que NO sigui un dígit
```

### Grups
```js
/(hola)+/   // "hola", "holahola", "holaholahola"...
```

---

## 3. Classes predefinides i metacaràcters
| Patró | Equivalent | Significat |
|-------|------------|------------|
| `\d` | `[0-9]` | dígit |
| `\w` | `[A-Za-z0-9_]` | caràcter "de paraula" |
| `\s` | espai | espai en blanc |
| `.` | qualsevol caràcter (menys salt de línia) |
| `\D` | no dígit | negació de `\d` |

---

## 4. Quantificadors
| Patró | Significat |
|--------|------------|
| `*` | 0 o més |
| `+` | 1 o més |
| `?` | 0 o 1 |
| `{n}` | exactament n |
| `{n,}` | almenys n |
| `{n,m}` | entre n i m |

### Exemples
```js
/\d{9}/       // 9 dígits (telèfon espanyol)
/a{2,4}/       // "aa", "aaa", "aaaa"
```

### Ancoratges
```js
/^Hola/        // comença per "Hola"
/fi$/          // acaba en "fi"
```

---

## 5. Validacions útils (nivell bàsic)
Aquestes regex són suficients per validar formularis típics al mòdul.

### Email (bàsic)
```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Telèfon espanyol simple
```js
/^\d{9}$/
```

### Nom i cognoms (lletres + espais)
```js
/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/
```

### Codi postal espanyol
```js
/^\d{5}$/
```

---

## 6. Expressions regulars en JavaScript
### Mètodes principals
```js
regex.test(text);        // true/false
text.match(regex);       // coincidències
text.replace(regex, nuova);
```

### Flags
| Flag | Significat |
|------|------------|
| `g` | global |
| `i` | ignore case |
| `m` | multiline |

### Exemple
```js
const email = "test@example.com";
const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(reg.test(email)); // true
```
➕ **[Més exemples](#9-exemples-addicionals-test-match-i-replace)**

---

## 7. Afirmacions (Lookarounds) — nivell avançat
Els **lookarounds** permeten validar un patró depenent del que ve abans o després, però **sense consumir text**.

### Lookahead positiu
```js
/\d+(?= euros)/
```
Coincideix números que van seguits de " euros".

### Lookahead negatiu
```js
/\d+(?! euros)/
```
Coincideix números **que NO** van seguits de " euros".

### Lookbehind positiu
*(compatibilitat moderna)*
```js
/(?<=#)\w+/
```
Coincideix paraules precedides per `#`.

---

## 8. Validacions avançades i casos pràctics
### Validació d’URL
```js
/^(https?:\/\/)?[\w.-]+(\.[\w.-]+)+(\/[\w._-]+)*\/?$/
```

### DNI (simple, sense lletra de control)
```js
/^\d{8}[A-Za-z]$/
```

### Contrasenya forta
```js
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
```
\- Mínim 8 caràcters  
\- Majúscula, minúscula i número


---

## 9. Exemples addicionals: `test`, `match` i `replace`

### `test()` — comprovar si un text compleix un patró
```
const telefon = "612345678";
const telReg = /^\d{9}$/;

console.log(telReg.test(telefon)); // true
console.log(telReg.test("1234")); // false
```

### `match()` — obtenir coincidències
```
const text = "El preu és 24 euros i el descompte és 5 euros";
const numberReg = /\d+/g;

console.log(text.match(numberReg)); // ["24", "5"]
```

### `replace()` — substituir parts d’un text
```
const frase = "Hola 123, adéu 456";
const resultat = frase.replace(/\d+/g, "<número>");

console.log(resultat);
// "Hola <número>, adéu <número>"
```

### `replace()` amb funció — transformació de valors
```
const dades = "Nom: Jordi, Edat: 22";
const output = dades.replace(/(\d+)/g, (captura) => Number(captura) + 1);

console.log(output);
// "Nom: Jordi, Edat: 23"
```

### Exemple aplicat a formularis
```
const email = document.querySelector('#email').value;
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!regEmail.test(email)) {
  mostrarError("Email no vàlid");
}

const nomComplet = document.querySelector('#nom').value;
const net = nomComplet.replace(/\s+/g, " ").trim();

console.log(net);

if (/^\d/.test(nomComplet)) {
  mostrarError("El nom no pot començar amb un número");
}
```
---

## 10. Eines recomanades
- 🔧 https://regex101.com
- 🔧 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- 🔧 https://regexr.com

