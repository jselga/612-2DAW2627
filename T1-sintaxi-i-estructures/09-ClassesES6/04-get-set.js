class Restaurants {
    #timetable;
    constructor(name) {
        this.name = name;
    }
    get timetable() {
        return this.#timetable;
    }
    set timetable(value) {

        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Data invàlida');
        }
        this.#timetable = date;
    }

}

const r = new Restaurants('BBQ');
r.timetable = '1 march 1978';
// r.timetable = 'hello world';
console.log(r);
