function Punt(x,y){
    this.x = x;
    this.y = y;
    this.dibuixar = function(){
        console.log('Dibuixant...');
        
    }
}
// Extensió d'objectes
let punt = {z:7};
Punt.call(punt,1,2);
// Punt.apply(punt,[1,2]);
console.log(punt);

// No utilitzar new Function 
// const Point = new Function('x','y',`
//     this.x = x;
//     this.y = y;
//     this.dibuixar = function(){console.log('Dibuixant...');}
        
//     `);
//     const p = new Point(1,2);
//     console.log(p);
    