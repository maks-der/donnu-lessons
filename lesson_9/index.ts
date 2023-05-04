/* ---- Data Types ---- */
let anyValue: any = 273;
console.log(anyValue);

anyValue = "string value";
console.log(anyValue);

anyValue = [0,1,2,3,4,5,6,7];
console.log(anyValue);


let x: number = 10;
let hello: string = "hello world";
let num1: bigint = BigInt(100);
let isValid: boolean = true;
console.log(x, hello, num1, isValid);


let strArray: string[] = ["banana", "apple", "orange"];
let numArray: number[] = [0,1,2,3,4,5];
console.log(strArray);
console.log(numArray);


let unique: Symbol = Symbol();
console.log(unique);

let person: [string, number, boolean] = ["Alex", 32, true];
console.log(person);


/* ---- enum ---- */
enum Season {
    Winter,
    Spring,
    Summer,
    Autumn,
};

let currentSeason: Season = Season.Spring;
console.log(currentSeason);

switch (currentSeason.valueOf()) {
    case Season.Winter:
        console.log("Now is winter!");
        break;
    case Season.Spring:
        console.log("Now is spring!");
        break;
    case Season.Summer:
        console.log("Now is summer!");
        break;
    case Season.Autumn:
        console.log("Now is autumn!");
        break;
}


/* ---- Функції ---- */
function add(a: number, b: number): void {
    console.log(a + b);
    // return a + b;
}
add(10, 24);
// console.log(res1);


function getName(firstName: string = "Ім'я", lastName: string = "Прізвище") {
    return firstName + " " + lastName;
}

let name1 = getName("Іван", "Коваленко");
let name2 = getName("Петро");
let name3 = getName();

console.log(name1);
console.log(name2);
console.log(name3);


/* ---- Класи ---- */
class MyClass {}

let myClassInstance1: MyClass = new MyClass();
let myClassInstance2 = new MyClass();

console.log(myClassInstance1);
console.log(myClassInstance2);


class User {
    name: string = "John";
    age: number = 0;
    
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

let user1: User = new User("Anna", 12);

let user = new User("Alex", 32);
user.print();
console.log(user.toString());

Math.random();