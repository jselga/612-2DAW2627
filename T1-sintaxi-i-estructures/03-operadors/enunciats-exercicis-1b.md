# Exercicis 1b - Operadors

## Exercici 1: Comparar preus

Estem a la recerca de diversos articles de forma online, el que farem serà comparar els preus dels articles entre 2 botigues. Necessitem saber si el preu de la botiga "a" és més gran el de la botiga "b".   
Després d'analitzar-ho, pot ser que algun article tingui el mateix preu, per això compararem si els preus són iguals.
### Entrades:
El preu de la botiga “a” serà 150.
El preu de la botiga “b” serà 130.

### Sortides
En fer les 2 comparacions hem de veure a la consola els valors de:
- true , perquè 150 si és més gran que el preu de 130.  
i posteriorment:
- false, perquè el preu de 150 no és igual que 130.   

## Exercici 2: Permisos per als usuaris.
Tindrem diversos usuaris als quals els hem de donar o denegar l'accés per poder realitzar canvis als nostres fitxers de codi.   
Suposem que tenim 3 rols: usuari, moderador i propietari.
D'aquests usuaris, només permetrem fer modificacions dels arxius als usuaris que tenen els rols de moderador o propietari. Per tant, haurem de saber si un usuari té algun d'aquests rols. I tornar el valor de true si és que té alguns d'aquests 3 rols. 
### Entrades:

Definirem 3 usuaris, cadascun amb un dels rols, els quals són: “moderador”, “usuari”, i
“propietari”.
I farem 3 vegades l'avaluació per saber si aquest usuari té permisos, una per cada usuari. 

### Sortides:
En realitzar les 3 comparacions hem de veure a la consola els valors de:
- true
- false   
- true


## Exercici 3: Revisar pla.
Tenim usuaris amb un pla “free” i altres que tenen algun tipus de pla de pagament contractat, necessitem fer 2 avaluacions, una si és que els usuaris tens un pla de pagament i una altra on l'usuari té el pla “free”.
Hauràs d'imprimir a la consola cadascuna de les avaluacions.

### Entrades:

- Una variable anomenada plaUsuari.
- 2 avaluacions per revisar si l'usuari té un pla “free” i una altra per si té qualsevol altre pla
contractat. 
### Sortides:

- false
- true

## Exercici 4: Triar un aire condicionat adequat.
Volem triar un sistema d'aire condicionat adequat per a la mida d'una habitació.  
Necessitem determinar l'àrea d'una habitació per fer la compra d'un aire condicionat.Primer caldrà obtenir l'àrea d'aquesta habitació.   
Les mides són: 4m de llargada 3.8 m d'ample.  
Ara, depenent de l'àrea d'aquesta habitació s'haurà de determinar la quantitat de tones refrigerants de l'aparell. En concret farem avaluacions per a 1 tona, 1.5
tones i 2 tones.   
- On per a una habitació de 16m<sup>2</sup> requerirà màxim d'1 tona.
- Per 1.5 tones seria adequat per a habitacions de 15m<sup>2</sup> a 25m<sup>2</sup>.
- I d'entre 25m<sup>2</sup> a 30m<sup>2</sup> correspondrà col·locar-ne un de 2 tones.  

Per això haurem de realitzar les avaluacions perquè puguem saber quina de les opcions seria la més adequada.  
### Entrades:
Crearem una variable per al càlcul de l'àrea de l'habitació.
El següent és que crearem 3 variables més per avaluar si la nostra habitació compleix les condicions per saber així quin aire condicionat hem d'instal·lar.  

Imprimirem cadascuna d'aquestes variables, però ara afegirem al nostre { console.log } de quin sistema d'aire condicionat es tracta o si es tracta de l'àrea de la nostra habitació. 
### Sortides:
Haurem de veure 4 dades a la nostra consola:
- L'àrea de l'habitació.
- Si és adequat per a 1 tona.
- Si és adequada per a 1.5 tones.
- Si és adequada per a 2 tones.

## Exercici 5: Mostrar contingut a usuaris.
Mostrarem 4 tipus de contingut, això dependrà de quin
paquet tinguin contractat els nostres usuaris:   
- no registrats
- amb pla free
- Nacional
- IBER
- EUR
-  AllAccess (Els usuaris AllAccess tindran accés a
tots els continguts)  

Entre els continguts a mostrar tindrem:
- Contingut lliure: aquell contingut que permetrem que visualitzin tots els usuaris, encara que no tinguin
un compte registrat.   

- Contingut free: contingut que només podràn veure els usuaris que inguin un compte registrat.
- Contingut EUR: contingut que només podràn veure els usuaris amb el paquet EUR.
- Contingut Nacional: tindran accés els usuaris amb el paquet nacional i IBER.
- Contingut Península Ibèrica: que ho podran veure els usuaris amb el paquet IBER.
Aquí hauràs de determinar si els següents usuaris poden accedir a aquest contingut, segonsels seus paquets contractats.
### Entrades: 
Crearem una variable que tindrà el paquet de l'usuari.
Realitzarem 5 avaluacions, cadascuna per un tipus de contingut depenent del paquet, i haurem de tornar true, si el paquet del nostre usuari li permet veure el contingut.
### Sortides:
Imprimirem el paquet del nostre usuari, a més de les 5 avaluacions, indicant a quin contingut
correspon.

## Exercici 6: Encesa del molí de cafè.
Tenim un molí de cafè i espècies, però aquest només engegarà si, el tenim connectat a la corrent elèctrica i si té el contenidor per al cafè mòlt a la base. En cas contrari, i per la seguretat dels nostres usuaris, aquest dispositiu no engegarà si no es compleixen les dues condicions.
### Entrades:
Crearem 2 variables, una per definir si el molí està connectat i una altra per saber si tenen el contenidor a la base. Tots dos són valors booleans.
Posteriorment, farem l'avaluació i només si es compleixen les dues condicions podem encendre el nostre molí.
### Sortides:
Imprimirem el valor de l'avaluació, si com a mínim un d'aquests valors és fals, hem de veure false,
però si tots dos són veritables, veurem el valor de true.   

##
Aquests exercicis estan basats en la proposta del curs [Hola Mundo - Ultimate JavaScript](https://academia.holamundo.io/courses/ultimate-javascript).
