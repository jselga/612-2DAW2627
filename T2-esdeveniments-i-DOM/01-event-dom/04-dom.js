let el = document.createElement('p');
el.innerText = "Element Creat en un <p> ";

// Pot rebre text i nodes
document.body.append(el);
el.remove();
// L'ultima crida per afegir elements és la que té efecte
document.body.prepend(el);

let div = document.createElement('div');
div.innerText = 'Sóc un text en un <div>';

el.replaceWith(div);

document.body.replaceChild(el,div);
document.body.removeChild(el);
document.body.appendChild(el);
document.body.insertBefore(div,el);
document.body.insertAdjacentElement('beforebegin',div);
document.body.insertAdjacentElement('afterbegin',div);
document.body.insertAdjacentElement('beforeend',div);
document.body.insertAdjacentElement('afterend',div);

// Mètodes addicionals
// document.body.insertAdjacentHTML();
// document.body.insertAdjacentText();
