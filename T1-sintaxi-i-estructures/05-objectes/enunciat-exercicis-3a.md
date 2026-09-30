# Exercicis - Objectes

## Exercici 1: Usuaris

Escriurem una funció constructora. Els nostres usuaris tindran les dades següents: nom, cognom, data de naixement, adreça, edat, país de naixement i si tenen una subscripció activa a l’Acadèmia.  
Crearem 3 usuaris i els imprimirem a la consola.

### Entrades
Definirem la funció constructora per crear usuaris i en definirem 3 usant la paraula reservada `new`, amb les dades següents:

**Usuari 1**  
- Nom: Chanchito  
- Àlies: Feliç  
- Data de naixement: 10 d’abril de 1992  
- Adreça: Av. Sempre Viva, 742  
- Edat: 31 anys  
- País de naixement: Mèxic  
- Subscripció activa: true  

**Usuari 2**  
- Nom: Chanchito  
- Àlies: Trist  
- Data de naixement: 25 de juny de 1985  
- Adreça: Carrer Lluna, 123  
- Edat: 38 anys  
- País de naixement: Espanya  
- Subscripció activa: false  

**Usuari 3**  
- Nom: Felipe  
- Cognom: Schurmann  
- Data de naixement: 3 de setembre de 2000  
- Adreça: Boulevard del Sol, 456  
- Edat: 23 anys  
- País de naixement: Argentina  
- Subscripció activa: true  

### Sortides
Veurem els 3 usuaris a la consola amb les dades corresponents.

---

## Exercici 2: Usuaris (cont.)

Copiarem la funció constructora de l’exercici anterior, però només crearem un usuari. Verificarem si l’objecte té les propietats `subscripció`, `adreça` i `alçada`.  
- Si la subscripció és `true`, la passarem a `false`, i viceversa.  
- Si existeixen les propietats `adreça` i `alçada`, les eliminarem.  

### Entrades
**Usuari 1**  
- Nom: Chanchito  
- Àlies: Feliç  
- Data de naixement: 10 d’abril de 1992  
- Adreça: Av. Sempre Viva, 742  
- Edat: 31 anys  
- País de naixement: Mèxic  
- Subscripció activa: true  

Farem 3 validacions per verificar que aquest objecte tingui les propietats i farem l’acció corresponent.

### Sortides
Imprimirem l’usuari després de les modificacions.  
El resultat ha de ser un objecte amb la propietat `{ subscripció }` = `false` i sense la propietat `{ adreça }`.

---

## Exercici 3: App per vendre entrades d’esdeveniments

Generarem una funció constructora per a la nostra aplicació d’esdeveniments. Aquest objecte tindrà:  
- Nom de l’esdeveniment  
- Durada  
- Entrades disponibles  

I els mètodes següents:  
- **Mostrar informació**: retorna la informació de l’esdeveniment.  
- **Comprar entrada**: redueix la quantitat d’entrades disponibles. Només permet fins a 5 per compra. Si no queden entrades, indicar-ho a l’usuari.  
- **Cancel·lar entrada**: incrementa les entrades disponibles.  

### Entrades
Definirem la funció constructora i un esdeveniment amb almenys 50 entrades disponibles.

### Sortides
Accions a realitzar:  
1. Mostrar la informació de l’esdeveniment.  
2. Comprar 3 entrades.  
3. Mostrar la informació.  
4. Intentar comprar 6 entrades.  
5. Cancel·lar 2 entrades.  
6. Mostrar la informació.  

Al final, l’esdeveniment ha de tenir 49 entrades.

---

## Exercici 4: Propietat privada per a l’app d’entrades

Partim de l’exercici anterior. El problema és que la propietat `entradesDisponibles` es pot modificar des de fora de l’objecte. Ho solucionarem fent-la **privada** i només modificable a través dels mètodes.  

### Entrades
Definirem un esdeveniment amb almenys 50 entrades disponibles, però la propietat de les entrades serà privada.  

### Sortides
Accions a realitzar:  
1. Mostrar la informació de l’esdeveniment.  
2. Comprar 3 entrades.  
3. Mostrar la informació.  
4. Intentar canviar directament el valor de la propietat d’entrades a 100.  
5. Cancel·lar una entrada.  
6. Mostrar la informació.  

Al final, l’esdeveniment ha de tenir 48 entrades.

---

## Exercici 5: Estandarditzar biblioteca

Tenim un llistat d’objectes que representen llibres i volem estandarditzar les seves propietats.  
Tots han de tenir: **títol, autor, any de publicació, categoria i nombre de pàgines**.  

Si falta alguna propietat, l’afegirem amb valor `null`.  

### Entrades
Array de llibres:  

**Llibre 1**  
- Títol: Llibre A  
- Autor: Autor A  
- Categoria: Ficció  

**Llibre 2**  
- Títol: Llibre B  
- Autor: Autor B  
- Any de publicació: 2021  
- Nombre de pàgines: 300  

**Llibre 3**  
- Títol: Llibre C  
- Categoria: Història  
- Nombre de pàgines: 150  

També definirem una funció per estandarditzar les propietats.  

### Sortides
Imprimirem els llibres amb les 5 propietats. Si no en tenien alguna, apareixerà amb valor `null`.

---

## Exercici 6: Joc de cartes

Crearem un joc de cartes, on cada carta serà un objecte amb propietats i mètodes.  

### Propietats  
- Nom  
- Punts de vida  
- Tipus  
- Atacs (1 o 2 en un array, cada atac amb punts de dany i energies necessàries)  
- Energia (inicia a 0)  
- Debilitats  

### Mètodes  
- **Atacar**: rep una carta objectiu i l’índex de l’atac. Comprova si existeix, si hi ha prou energia i, si escau, aplica el dany.  
- **Rebre atac**: resta punts de vida segons el dany rebut. Si arriba a 0 o menys, la carta queda derrotada.  
- **Afegir energia**: incrementa l’energia disponible.  

### Entrades
**Carta 1**  
- Nom: Drac de Foc  
- Punts de vida: 100  
- Tipus: Foc  
- Atacs:  
  - Cridada: 30 dany, requereix 2 energia  
  - Cop Ígnic: 50 dany, requereix 3 energia  
- Debilitat: Aigua  

**Carta 2**  
- Nom: Serp Aquàtica  
- Punts de vida: 120  
- Tipus: Aigua  
- Atacs:  
  - Tsunami: 40 dany, requereix 2 energia  
- Debilitat: Elèctric  

### Sortides
Execució de la seqüència d’atacs i energies, mostrant els missatges coherents:  
- energia guanyada,  
- atac realitzat,  
- dany rebut,  
- punts de vida restants,  
- missatges quan no hi ha prou energia o quan una carta és derrotada.  

##
Aquests exercicis estan basats en la proposta del curs [Hola Mundo - Ultimate JavaScript](https://academia.holamundo.io/courses/ultimate-javascript).
