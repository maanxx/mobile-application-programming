
class Car {
    private brand: string;
    private model: string;
    private year: Date;

    public constructor (brand: string, model: string, year: Date | string) {
        this.brand = brand;
        this.model = model;
        this.year = new Date(year);
    }

   
}

let car = new Car("BMW", "LC300","2004-05-12");
console.log(car);
    