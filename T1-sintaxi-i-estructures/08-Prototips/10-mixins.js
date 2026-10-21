function mixin(Ctr,...args){
    Object.assign(Ctr.prototype,...args);
}
let fly = {
    fly(){
        console.log("Volant...");
        
    }
}
let swim ={
    swim(){
        console.log('Nadant...');
        
    }
}
let walk ={
    walk(){
        console.log('Caminant...');
        
    }
}
let isAnimal = {
    isAnimal(){
        return true;
    }
}
// vola, nada, camina, és animal
function Duck(){
    this.name="Donald Duck"
}
// Object.assign(Duck.prototype,fly,swim,walk,isAnimal);
mixin(Duck,fly,swim,walk,isAnimal);
let dc = new Duck();
console.log(dc);

// nada, camina, és animal
function Dog(){}
Object.assign(Dog.prototype,swim,isAnimal,walk);
let dg = new Dog();
console.log(dg);

//  nada, és animal
function Fish(){}
Object.assign(Fish.prototype,swim,isAnimal)
let f = new Fish();
console.log(f);

// vola, però res de les altres propietats
function Plane(){}
Object.assign(Plane.prototype,fly);
console.log(Plane.prototype,new Plane());




