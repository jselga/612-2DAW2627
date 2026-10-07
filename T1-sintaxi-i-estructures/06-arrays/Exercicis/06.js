const myArray=[
    "Hola",
    12,
    true,
    "Món",
    {},
    {id:15},
    ['lala'],
]

// nombres, strings, objectes,boolean
// Fes la funció amb reduce
function divideixPerTipus(arr){

}

let arr = divideixPerTipus(myArray);
console.log(arr);
/**
 * {
  string: [ 'Hola', 'Món' ],
  number: [ 12 ],
  boolean: [ true ],
  object: [ {}, { id: 15 }, [ 'lala' ] ]
}

 */