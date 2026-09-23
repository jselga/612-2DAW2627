let i = 2;
let num=2;
//S'avalua abans la condició i no s'imprimirà si el val de 'i' i 'num' són iguals
while (i < num) {
    if (i % 2 == 0) {
        console.log('Nombre parell: ', i);
    }
    i++;
}

//S'avalua després la condició. S'imprimirà si el val de 'i' i 'num' són iguals de totes formes 
// ja que primer executa i després comprova condició
// do {
//     if (i % 2 == 0) {
//         console.log('Nombre parell: ', i);
//     }
//     i++;
// } while (i < num);

// exemple gràfic https://i.programmerhumor.io/2025/03/8c0c95dabe63a5294acf3a9e140c46ebf189a98b6b9a6907aa4d6390d122b728.png