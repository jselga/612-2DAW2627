let form = document.createElement('form');
form.id = 'my-form';
let input = document.createElement('input');
input.setAttribute('type','text');
let btn = document.createElement('button');
btn.innerText ='Enviar';
form.append(input);
form.append(btn);

document.body.append(form);
form.onmouseenter = e=>{
    console.log('entra el ratolí',e);
    
}
form.onmouseleave = e=>{
    console.log('surt el ratolí');
    
}
input.onfocus = e=>{
    console.log('input amb focus');
    
}
input.onblur = e=>{
    console.log('input ha perdut el focus');
    
}
input.onchange = e=>{
    console.log('ha canviat',e.target.value);
    
}
// btn.onclick = e=>{
//     e.preventDefault();
//     console.log('botó clicat');
    
// }
btn.addEventListener('click',e=>{
    e.preventDefault();
    console.log('botó clicat');
    
})