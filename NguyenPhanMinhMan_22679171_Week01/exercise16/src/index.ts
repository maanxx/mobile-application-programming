// generic

class Box<T> {
    private value: T;

    constructor (value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public setValue(newValue: T): void {
        this.value = newValue;
    }
}

const value1 = new Box<string>("Minh Man");
console.log(value1.getValue());

const value2 = new Box<number>(123);
console.log(value2.getValue());


interface User {
    id: string;
    name: string;
}
const value3 = new Box<User>({id: "Id1",name: "Man"});
console.log(value3.getValue());

