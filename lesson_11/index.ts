/*  Generic types (узагальнюючі типи) */
function returnValue<T>(value: T): T {
    return value;
}

const result1 = returnValue(1024);
const result2 = returnValue('Hello Generics!');

console.log(result1);
console.log(result2);


function arrayToStringList<T>(args: Array<T>): string {
    return args.join(", ");
}

const result3 = arrayToStringList<number>([1, 2, 34, 5]);
const result4 = arrayToStringList<string>(['windows', 'linux', 'macos']);

console.log(result3);
console.log(result4);


/* Узагальнені класи та інтерфейси */

interface IUser<T> {
    getId(): T;
}

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
}

const user1 = new User(143, 'Alex');
const user2 = new User('123e4567-e89b-12d3-a456-426614174000', 'Maria');

/* ----- static ----- */

class MyMath {
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

const num1 = MyMath.sum(10, 4, 6, 8, 7, 9);
const num2 = MyMath.multiply(2, 2, 2, 2, 2);

console.log(num1);
console.log(num2);
