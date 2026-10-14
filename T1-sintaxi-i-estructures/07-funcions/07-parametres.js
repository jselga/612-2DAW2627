/**
 * {
 * url:...
 * bucket: amazon S3
 * port:80
 * 
 * 
 * }
 */
// function configurarAPI(url){
//     const defaultURL = url || 'https://holamundo.io';
//     return `${defaultURL}`;


// }

// function configurarAPI(url = 'https://holamundo.io'){
//     return `${url}`;
// }
// console.log(configurarAPI());
const config = {
    url: 'https://holamundo.io',
}
// function configurarAPI({url}={url:'per defecte'}){
//     return `${url}`;
// }
// Si pasess un valor per defecte, s'ha de passar un valor per defecte a tots els següents de la dreta

// sinó passa això : 
// console.log(configurarAPI('holamundo.io',80));
// holamundo.io/80:undefined
// quant el que voldriem es que agafes el per defecte a bucket i subtitueixi port
function configurarAPI(url,bucket = 145,port){
    return `${url}/${bucket}:${port}`;
}
// console.log(configurarAPI());
// console.log(configurarAPI(config));
console.log(configurarAPI());
console.log(configurarAPI('holamundo.io',80));

// console.log(configurarAPI('https://chaomundo.io'));

