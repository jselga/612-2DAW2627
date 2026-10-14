// function webserver(config){
//     // const url = config.url;
//     const {url} = config;
//     return url;
// }

// const config = {
//     url: 'https://www.google.com',
//     address: {
//         street: 'un carrer',
//         number: 13,

//     }
// }
// function webserver({url}){
//     return url;
// }
// console.log(webserver({url:'https://www.google.com'}));

// Evitar
// function webserver({url,address: {street}}){
//     console.log(street);
//     return url;
    
// }
// console.log(webserver(config));
// function webserver(configuracio){
//     const [url,bucket, port]=configuracio
//     return url;
    
// }
function webserver([url,...rest]){
    
    return url;
    
}
// function webserver({url,...rest}){
    
//     return url;
    
// }

const config = [
    'https://www.google.com',
    145,
    80
]
console.log(webserver(config));
