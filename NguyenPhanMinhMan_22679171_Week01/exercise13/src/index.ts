abstract class Shape{
    abstract area(): number;
}
class Square extends Shape{
    private side: number;

    constructor(side: number){
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}
class Circle extends Shape{
    private radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    area(): number{
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(5);
console.log(`Area of Square: ${square.area()}`);

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.area()}`);