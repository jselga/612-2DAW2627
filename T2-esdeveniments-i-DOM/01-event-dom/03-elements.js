let el = document.createElement('p');
// el.innerHTML = "Element creat";
document.body.append(el);
// el.innerText = "<ul><li>Hola</li></ul>";
// el.textContent ="<ul><li>Hola</li></ul>"
el.innerHTML = "<ul><li>Hola</li></ul>";

el.style = 'background-color: red; font-weight:bold;';
el.className='paragraf';
el.id= 'my-paragraf';
el.style.color='#000077';
el.style.fontWeight='200'
el.sytle.font
// // // NO serveix:
// // el.myProp= 'my property';
el.setAttribute('myProp','my property');

let att= el.getAttribute('myProp');
let isAtt = el.hasAttribute('myProp');
console.log(att,isAtt);


