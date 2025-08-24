class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    work(): void{
        console.log(`${this.name} is working`);
    }
    showInf(): void{
        console.log(`Employee Information; ${this.name}, ${this.salary}`);
    }
}
class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, salary: number, teamSize: number){
        super(name, salary);
        this.teamSize = teamSize;
    }

    leadTeam():void{
        console.log(`${this.name} is leading meeting with ${this.teamSize} team`)
    }
    work(): void {
        console.log(`${this.name} is managing the team`);
    }


}
class Developer extends Employee{
    private codeLanguage: string;

    constructor(name: string, salary: number, codeLanguage: string){
        super(name, salary);
        this.codeLanguage = codeLanguage;
    }

    writeCode(): void{
        console.log(`${this.name} is writting the ${this.codeLanguage}`)
    }

    work(): void {
        console.log(`${this.name} is coding`);
    }
}

const manager = new Manager("Man", 1000, 2);
manager.leadTeam();
manager.work();

const dev = new Developer("Minh", 1000, "Typescript");
dev.writeCode();
dev.work();

