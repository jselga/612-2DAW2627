let id;
function createDraggable() {
    let span = document.createElement('span');
    span.id = 'element-drag';
    span.innerText = 'Draggable';
    span.draggable = true;
    span.ondragstart = e=>{
        id=e.target.id;
        console.log(e.target);
        
    }
    return span;
}
function createDroppableArea() {
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }
    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }
    dropArea.ondragover =e=>{
        e.preventDefault();
    }
    dropArea.ondrop = e=>{
        e.target.appendChild(document.getElementById(id))
    }

    return dropArea
}

let draggable = createDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();

document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);

