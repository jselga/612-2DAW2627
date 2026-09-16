# Exercicis 1a - Tipus de dades Bàsics

## Exercici 1: Dades d'identificació

En aquest primer exercici definirem variables, realitzarem una carta d'identificació on
col·locarem dades d'un usuari, però haurem de definir ja sigui amb {let} o amb {const} depenent que si la dada es pot modificar o no.
Les dades que definirem són: nom, cognom, data de naixement, adreça, edat, país de naixement, i si té una subscripció activa en un servei.
Al final, hauràs d'imprimir totes aquestes dades de manera que puguem llegir-les a la consola.

### Entrades:

1.  Nom: string
2.  Cognom: string
3.  Data de Naixement: string
4.  Direcció: string
5.  Edat: number
6.  País de naixement: string
7.  Té subscripció activa: boolean

### Sortides
```
    --- Carta d'Identificació ---  
    Nom: Jane  
    Cognom: Doe  
    Data de naixement: 15 de març de 1990  
    Adreça: Carrer Falsa 123  
    Edat: 34  
    País de Naixement: Andorra  
    Subscripció Activa: true  
    --- Fi de les dades ---
```
## Exercici 2: Dades d'un jugador.

En aquest exercici, editarem les estadístiques d'un jugador de futbol, ​​en una variable que es dirà { passadesJugador }, que definirem en una variable on el valor inicial de les passades d'aquest jugador serà { null }, ja que aquest no tindrà passades inicialment.  
El següent pas serà assignar a aquesta variable un nombre de passades, el qual serà 18.  
Posteriorment, ja no necessitem el nombre de passades, sinó l'efectivitat de les seves passades, per la qual cosa a
una línia següent canviarem el valor a un valor en %, aquest serà el valor de 87%.
Assegureu-vos que imprimiu a la consola cadascun d'aquests canvis.

### Entrades:

1.  El valor de la nostra variable serà null.
2.  Després, el valor serà 18.
3.  Finalment ho canviarem per 87%.

### Sortides
```
    Null
    18
    87%
```
## Exercici 3: Crear llistes.

Per a aquest exercici, haurem de definir una llista de compres, desitjos i tasques pendents cadascun dels elements de les llistes haurà de ser un string.  
Farem les llistes següents:

- Una llista de compres.
- Una de desitjos de compra.
- Una de tasques pendents

Al final haurem d'imprimir cadascuna de les nostres llistes.

### Entrades

1.  Llista 1: Articles de la compra al supermercat.
2.  Llista 2: Llista d'articles que voldríem adquirir en el futur.
3.  Llista 3: Llista d'activitats pendents per realitzar.

### Sortides

A la consola haurem d'observar les 3 llistes, cadascuna amb els elements sol·licitats.  
\*No es mostra la sortida de la consola perque surt com la declaració i sería molt temptador

## Exercici 4: Llista de stock amb valors null.

En aquest exercici, treballem a una botiga, i tenim un script que s'encarrega de mostar aquells productes
dels que no tenim estoc.  
Per això necessitarem definir una llista que tindrà l´estoc dels productes,concretament caldrà que almenys 2 articles tinguin l'estoc sense asignar.

- Imprimirem aquesta llista després de la seva definició.
- Imprimirem el tipus de cada element i justificarem perque ens surt el tipus corresponent.

### Entrades

Una llista de números, amb com a mínim 2 valors null entre aquests.

### Sortides

Llistes amb els diferents elements que hem definit als nostres array, entre aquests trobarem els
valors null.
Llista amb els tipus de cada element

## Exercici 5: crear objecte d'usuari.

Per a aquest exercici prendrem les dades que hem fet servir per a l'[Exercici 1](#exercici-1-dades-didentificació), però
ara, en lloc de ser variables separades, les col·locarem en un objecte, ja que aquest format serà el
que utilitzarem per treballar amb les dades dels nostres usuaris.
Al final, igualment imprimirem aquest objecte anomenat { usuari } a la nostra consola.

### Entrades
Un objecte amb les propietats següents:
1.  Nom: string
2.  Cognom: string
3.  Data de Naixement: string
4.  Direcció: string
5.  Edat: number
6.  País de naixement: string
7.  Té subscripció activa: boolean
### Sortides
Objecte, amb les propietats que hem definit.

##
Aquests exercicis estan basats en la proposta del curs [Hola Mundo - Ultimate JavaScript](https://academia.holamundo.io/courses/ultimate-javascript).
