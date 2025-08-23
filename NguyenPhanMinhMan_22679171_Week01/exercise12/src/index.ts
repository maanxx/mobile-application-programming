interface Flyable{
    fly(): void;
}
interface Swimable{
    swim(): void;
}
class Bird implements Flyable{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    fly(): void{
        console.log(`${this.name} is flying`)
    }
}

class Fish implements Swimable{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    swim(): void {
        console.log(`${this.name} is swimming`)
    }
}

const bird = new Bird("Minh");
bird.fly();

const fish = new Fish("Man");
fish.swim();