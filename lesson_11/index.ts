/* Generic types (узагальнюючі типи) */

function returnValue<T>(value: T): T {
    return value;
}

// function regularVariable(value) {
//     return value
// }

// const a = regularVariable('123435');
// a.toLoweCase();

const result1 = returnValue<number>(1024);
const result2 = returnValue<string>('Hello Generics!');

// console.log(result1);
// console.log(result2);


function arrayToStringList<T>(args: Array<T>): string {
    return args.join(", ");
}

const result3 = arrayToStringList<number>([1, 2, 34, 5]);
const result4 = arrayToStringList<string>(['windows', 'linux', 'macos']);

console.log(result3);
console.log(result4);


/* класи та інтерфейси */

interface IUser<T> {
    getId(): T;
}

// const user1: IUser<number> = {
//     getId: () => 123,
// }
// const user2: IUser<string> = {
//     getId: () => '123e4567-e89b-12d3-a456-426614174000'
// }

class User<T> implements IUser<T> {
    constructor(
        private id: T,
        private name: string,
    ) { }

    public getId(): T {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
    
    public logInfo(): void {
        console.log(this.getId() + ': ' + this.getName());
    }
}

const user1 = new User<number>(143, 'Alex');
const user2 = new User<string>('123e4567-e89b-12d3-a456-426614174000', 'Maria');

user1.logInfo();
user2.logInfo();

/* ----- static ----- */

class MyMath {
    public static staticVariable = "Hello";
    public regularVariable = "Hello";

    public static sum(...args: number[]): number {
        let result = 0;
        args.forEach((num) => {
            result += num;
        });
        return result;
    }

    public static multiply(...args: number[]): number {
        let result = 1;
        args.forEach((num) => {
            result *= num;
        });
        return result;
    }
}
Math.PI

const myMath = new MyMath();
myMath.regularVariable

const num1 = MyMath.sum(10, 4, 6, 8, 7, 9);
const num2 = MyMath.multiply(2, 2, 2, 2, 2);

console.log(num1);
console.log(num2);

class Engine {}
class Wheals {}

class Auto {
    engine: Engine = new Engine();
    wheals: Wheals = new Wheals();
    
    constructor(
        public model: string,
    ) {}
}


class MersedesBenz extends Auto {
    constructor(model: string) {
        super(model);
    }
}

const auto = new MersedesBenz("C500");
