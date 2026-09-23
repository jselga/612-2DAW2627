# Exercicis - control de flux

## Exercici 1. Mida màxima de càrrega de fitxers
El nostre sistema només acceptarà imatges que ocupin menys de 5 MB. Hem de determinar si totes les imatges que ha introduït l’usuari són menors o iguals a la mida màxima permesa pel nostre servidor. Si no és així, notificarem a l’usuari que el fitxer ha excedit la mida màxima.

### Entrades
Definirem dues variables:  
- Una per a la mida del fitxer.  
- Una altra per a la mida màxima permesa pel sistema.  

### Sortides
Imprimirem:  
- *"El fitxer compleix amb la mida permesa."* si ocupa igual o menys de 5 MB.  
- *"El fitxer ha excedit la mida màxima permesa."* si ocupa més.  

---

## Exercici 2. Contrasenya més segura
En el registre d’usuaris de la nostra aplicació, no permetrem crear un compte amb una contrasenya insegura. Si la contrasenya té menys de 12 caràcters, el compte no es podrà crear.

### Entrades
- Una variable que contingui una contrasenya amb longitud inferior a 12 caràcters.  
- Una altra variable amb el nombre mínim de caràcters requerits.  

### Sortides
En realitzar la comparació, a la consola ha d’aparèixer el missatge corresponent segons si la longitud de la contrasenya és menor, igual o superior a la definida.  

---

## Exercici 3. Bullidora elèctrica
Has de generar el sistema de control d’una bullidora elèctrica.  
La bullidora no s’engegarà si no té aigua i s’apagarà quan arribi a 100 °C.

1. Verificarem que la bullidora tingui aigua.  
   - Si no en té, imprimirem un missatge indicant-ho i no s’encendrà.  
   - Si en té, l’estat d’encesa passarà a `true` i imprimirem un missatge confirmant-ho.  

2. Mitjançant un *loop*, imprimirem la temperatura en intervals de 25 graus fins a arribar a 100.  

3. Quan s’assoleixi la temperatura màxima, l’estat d’encesa passarà a `false` i imprimirem que la bullidora té aigua calenta.  

### Entrades
- Variable booleana `teAigua`, inicialitzada a `true`.  
- Variable booleana `encesa`, inicialitzada a `false`.  
- Variable `temperatura`, inicialitzada a 0.  

### Sortides
- *"La bullidora està encesa"*  
- *"Escalfant aigua... la temperatura és de: X graus"* (per cada iteració)  
- *"La temperatura ha arribat al màxim, la bullidora s’apagarà."*  
- *"Ara tens aigua calenta a 100 graus"*  

Si no hi ha aigua, només s’ha d’imprimir:  
- *"La bullidora no té aigua, no es pot encendre."*  

---

## Exercici 4. Bateria portàtil
Tenim una bateria portàtil que pot carregar múltiples dispositius. Segons el dispositiu connectat, proporcionarà diferents potències:  
- Telèfon mòbil → 25 W  
- Portàtil → 65 W  
- Llum USB → 5 W  
- Qualsevol altre → 0 W  

### Entrades
- Variable `dispositiu`.  
- Variable `potencia` (sense valor inicial).  

### Sortides
Imprimirem la potència subministrada per la bateria segons el dispositiu.  

---

## Exercici 5. Molí de cafè
Als molins de cafè es pot seleccionar el nombre de tasses que necessitem.  

1. Verificarem que l’usuari hagi col·locat el contenidor de cafè mòlt.  
2. Verificarem el nombre de tasses seleccionat.  
3. Determinarem el temps de funcionament del molí segons la selecció.  

### Entrades
- Variable booleana `teContenidor`.  
- Variable `numTasses`.  
- Constant amb el temps en segons per tassa.  

### Sortides
- Si no hi ha contenidor → *"Error: el molí no té contenidor."*  
- Si el nombre de tasses és menor o igual a 0 → *"No s’ha seleccionat cap tassa."*  
- En cas contrari → *"Iniciant procés..."* i després el missatge amb el nombre de tasses i el temps total.  

---

## Exercici 6. Préstecs
Un banc ofereix préstecs a diferents clients, alguns dels quals ja tenen un compte.  

1. Verificarem si el sol·licitant té un compte.  
2. Determinarem la taxa d’interès segons la seva puntuació de crèdit:  
   - ≥ 750 → 10%  
   - 700 – 749 → 15%  
   - 650 – 699 → 20%  
   - < 650 → No es concedeix préstec.  

3. Els clients amb compte poden obtenir un descompte addicional del 10% sempre que la taxa resultant sigui igual o superior al 15%.  

### Entrades
- Variable `teCompte`.  
- Variable `puntuacioCredit`.  
- Variable `taxaInteres` (sense valor inicial).  

### Sortides
Imprimirem la taxa d’interès si s’aprova el préstec.  

---

## Exercici 7. Alimentador de mascotes
Automatitzarem un alimentador per a gossos i gats. La quantitat de menjar dependrà del tipus i pes de la mascota.  

### Entrades
- Variable `tipusMascota`.  
- Variable `pes`.  
- Variable `quantitatMenjar`.  

#### Gossos
- < 5 kg → 100 g  
- 5 – 9,99 kg → 200 g  
- 10 – 19,99 kg → 300 g  
- ≥ 20 kg → 400 g  

#### Gats
- < 3 kg → 50 g  
- 3 – 5,99 kg → 100 g  
- ≥ 6 kg → 150 g  

### Sortides
S’imprimirà la quantitat de grams corresponent segons el tipus de mascota i el seu pes.  

---

## Bonus
Si has acabat els exercicis i vols practicar més:  
- Fes una versió on els missatges surtin amb `document.write` o `alert` per veure’ls al navegador (pots anomenar els fitxers com `Xnav.js`, on X és el número d’exercici).  
- També pots practicar amb `prompt` per demanar les entrades al navegador.  

> ⚠️ Aquests exercicis no seran compatibles amb Node.js.  
