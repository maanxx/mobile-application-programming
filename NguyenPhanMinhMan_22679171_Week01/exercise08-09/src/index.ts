interface Animal {
    name: string;
    sound(): string;
}
class Cat implements Animal{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    sound(): string {
        return "Meow meow";
    }
}
class Dog implements Animal{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    sound(): string {
        return "Gau gau";
    }
}

const animals: Animal[] = [
    new Cat("Den"),
    new Dog("Trang")
];

animals.forEach(p => {
    console.log(`${p.name} - ${p.sound()}`)
});
