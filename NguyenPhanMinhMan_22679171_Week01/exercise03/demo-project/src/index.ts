class Rectangle {
    private height: number;
    private width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
// area-rectangle
    calArea(): number{
        return this.height * this.width;
    }
// perimeter-rectangle
    calPerimeter(): number {
        return (this.height + this.width) * 2;
    }

}

let rectangle = new Rectangle(10, 10);
console.log("calArea: " + rectangle.calArea());
console.log("calPerimeter: " + rectangle.calPerimeter());