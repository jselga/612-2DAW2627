class Restaurants {
    static qty = 0;
    constructor(name){
        this.name = name;
    }
    getTimeTable(){
        console.log('Horari del restaurant');
        
    }
   static getRestaurant(id){
            Restaurants.qty++
    return new Restaurants('BBQ')
    }
}

const r = Restaurants.getRestaurant(12);
console.log(r);

// const arr = new Array();
// Array.isArray();
// Array.from();
// Object.assign();