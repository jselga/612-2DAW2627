const now = new Date();
console.log(now);
const date1 = new Date('December 25 1986 14:15 GMT');
console.log(date1);
const date2 = new Date(1986,11,25,14,15);
console.log(date2);
console.log();

console.log('datestring',date2.toDateString());
console.log('timestring',date2.toTimeString());
console.log(`Mostrant el dia d'avui...`);

console.log('datestring',now.toDateString());
console.log('ISOstring',now.toISOString());
console.log('timestring',now.toTimeString());

console.log('datestring',date2.toDateString());
console.log("date2.getDate(), dia del mes:", date2.getDate());
console.log("date2.getDay(), dia de la setmana essent diumenge el 0:", date2.getDay());
console.log("date2.getMonth, mes de l'any essent gener 0:", date2.getMonth());
// Inspeccionar tots els mètodes de get

date2.setFullYear(1978);
console.log(date2);
// Inspeccionar tots els mètodes de set



