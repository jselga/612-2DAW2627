function Select() {

}
Select.prototype.render = function () {
    console.log('renderitzant select');

}
function Checkbox() { }
Checkbox.prototype.render = function(){
    console.log('renderitzant checkbox');
    
}

let components = [
    new Select(),
    new Checkbox(),
];
components.forEach(c=>c.render());
// Podriem canviar els console.log per html i renderitzar els components segons els que sigui
