"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    sort() {
    }
}
const sorter = new Sorter([17, 5, -10, -2, 8, 4]);
sorter.sort();
console.log(sorter.collection);
