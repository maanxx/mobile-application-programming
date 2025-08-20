//Cau 01
class Person {
    private name: string;
    private age: string;

    public constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }
    
    public getFullName(): string {
        return "${this.name} ${this.age}"; 
    }


}
    const man = new Person("man", "21");
    console.log(man.getFullName());

//Cau02
class Student extends Person {
    private grade: string;
    public constructor(name: string, age: string, grade: string) {
        super(name, age);
        this.grade = grade;
    }
}
    const allInf = new Student("man", "21", "12");
    console.log(allInf);
