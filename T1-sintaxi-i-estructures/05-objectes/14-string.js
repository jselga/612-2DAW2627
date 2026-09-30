const salutacio = "Hola Món!";
//                 012345678
const comiat = new String("Adéu! ");
console.log(typeof salutacio);
console.log(typeof comiat);
console.log(salutacio.length);
console.log(salutacio.indexOf('Mó'));
console.log(salutacio.indexOf("ae"));
console.log(salutacio.includes(" Món"));
console.log(salutacio.replace("Món","Classe"));
console.log(salutacio);

// Si volem que la substitució es faci efectiva a l'string hem de crear una nova variable

let novaSalutacio = salutacio.replace("Món","Classe");
console.log(novaSalutacio,salutacio);
console.log(salutacio.toLowerCase());
console.log(salutacio.toUpperCase());
console.log(salutacio.substring(0,4)); // L'últim índex està exclòs
console.log(salutacio.substr(2,4)); // Deprecated!!

const espais = "       Hola   Món!           ..";
console.log(espais.trim());












