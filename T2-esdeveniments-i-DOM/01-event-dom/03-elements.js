let el = document.createElement('p');
// el.innerHTML = "Element creat";
document.body.append(el);
// el.innerText = "<ul><li>Hola</li></ul>";
// el.textContent ="<ul><li>Hola</li></ul>"
el.innerHTML = "<ul><li>Hola</li></ul>";
let estil='background-color: red; font-weight:bold;'
// el.style = 'background-color: red; font-weight:bold;';
el.style=estil;

el.className='paragraf';
el.id= 'my-paragraf';
el.style.color='#1d1a7c';
el.style.fontWeight='400'
estil=estil+'color: orange';
el.style=estil;

// // // NO serveix:
// // el.myProp= 'my property';
el.setAttribute('myProp','my property');

let att= el.getAttribute('myProp');
let isAtt = el.hasAttribute('myProp');
console.log(att,isAtt);


