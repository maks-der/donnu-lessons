/* ---- Data Types ---- */
let anyValue: any = 273;
anyValue = "string value";
anyValue = [0,1,2,3,4,5,6,7];

let x: number = 10;
let hello: string = "hello world";
let num1: bigint = BigInt(100);
let isValid: boolean = true;

let strArray: string[] = ["banana", "apple", "orange"];
let numArray: number[] = [0,1,2,3,4,5];

let unique: Symbol = Symbol();

let person: [string, number, boolean] = ["Alex", 32, true];

/* ---- enum ---- */
enum Season {
    Winter,
    Spring,
    Summer,
    Autumn,
};

/* ---- Функції ---- */
function add(a: number, b: number): number {
    // console.log(a + b);
    return a + b;
}

function getName(firstName: string = "Ім'я", lastName: string="Прізвище") {
    return firstName + " " + lastName;
}

let name1 = getName("Іван", "Коваленко");
let name2 = getName("Петро");
let name3 = getName();

/* ---- Класи ---- */
class MyClass {}

let myClassInstance1: MyClass = new MyClass();
let myClassInstance2 = new MyClass();


class User {
    name: string;
    age: number;
    
    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    print(): void {
        console.log(`name: ${this.name} age: ${this.age}`);
    }
    
    toString(): string {
        return `${this.name}: ${this.age}`;
    }
}
 
let user = new User("Alex", 32);
user.print();
