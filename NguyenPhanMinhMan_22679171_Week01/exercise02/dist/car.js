"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = new Date(year);
    }
}
let car = new Car("BMW", "LC300", "2004-05-12");
console.log(car);
