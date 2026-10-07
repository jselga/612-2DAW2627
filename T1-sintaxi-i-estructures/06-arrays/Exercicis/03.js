const usuaris = [
    {edat: 17, nom: 'Nico', pla: 'premium'},
    {edat: 13, nom: 'Martin', pla: 'free'},
    {edat: 32, nom: 'Mary', pla: 'free'},
    {edat: 25, nom: 'Robin', pla: 'gold'},
];

function getPaidUsers(usrs){

}
// Extra
function getAdultUsers(usrs){

}
console.log(getPaidUsers(usuaris));
console.log(getAdultUsers(usuaris));


//Sortida
// Només usuaris de pagament
// [
//   { edat: 17, nom: 'Nico', pla: 'premium' },
//   { edat: 25, nom: 'Robin', pla: 'gold' }
// ]

// // Només usuris Adults
// [
//   { edat: 32, nom: 'Mary', pla: 'free' },
//   { edat: 25, nom: 'Robin', pla: 'gold' }
// ]