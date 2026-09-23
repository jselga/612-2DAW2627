let animals = ["Gat", "Gos", "Ocell"];
// document write
// Alerta Deprecated
document.writeln("Array llistada<br>");

for (let animal of animals) {

    document.writeln(animal);
}
// alert("Dades carregades");
let dadesOK = window.prompt("Has llegit les dades?");
document.writeln("<br>" + dadesOK);