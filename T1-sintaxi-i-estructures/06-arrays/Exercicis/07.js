const usuaris = [
    { edat: 17, nom: 'Nico', pla: 'premium' },
    { edat: 13, nom: 'David', pla: 'premium' },
    { edat: 32, nom: 'Mary', pla: 'free' },
    { edat: 25, nom: 'Robin', pla: 'gold' },
];
// Fes la funció amb reduce 
function groupBy(arr,prop){
}
const grouped = groupBy(usuaris,'pla');
console.log({grouped});
// Sortida (millor veure en Chrome)
/**
 * Object { grouped: {…} }
​
grouped: Object { premium: (2) […], free: (1) […], gold: (1) […] }
​​
free: Array [ {…} ]
​​​
0: Object { edat: 32, nom: "Mary", pla: "free" }
​​​
length: 1
​​​
<prototype>: Array []
​​
gold: Array [ {…} ]
​​​
0: Object { edat: 25, nom: "Robin", pla: "gold" }
​​​
length: 1
​​​
<prototype>: Array []
​​
premium: Array [ {…}, {…} ]
​​​
0: Object { edat: 17, nom: "Nico", pla: "premium" }
​​​
1: Object { edat: 13, nom: "David", pla: "premium" }
​​​
length: 2
​​​
<prototype>: Array []
​​
<prototype>: Object { … }
​
<prototype>: Object { … }
 */