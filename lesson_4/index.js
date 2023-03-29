/* Функції */

function hello() {
    console.log("Hello World");
}

hello();

/* Змінні та константи як функції */

const message = hello;
message();


/* Анонімні функції */

let anonMessage = function () {
    console.log("Hello Anon Function!");
}
anonMessage();

/* Параметри функції */

function print(message) {
    console.log(message);
}

print("Hello World!");
print("Hello JavaScript!");
print("Hello Applied Linguistics!");
print();


function sum1(a, b) {
    const result = a + b;
    console.log(result);
}

sum1(2, 6);
sum1(4, 5);
sum1(109, 11);

/* Необов'язкові параметри та значення за замовчуванням */

function sum2(x, y) {
    if (y === undefined) y = 5;
    if (x === undefined) x = 8;
    const z = x + y;
    console.log(z);
}

function sum3(x = 8, y = 5) {
    const z = x + y;
    console.log(z);
}

sum3();
sum3(6);
sum3(6, 4);

/* Невизначена кількість параметрів */
function display(...nums) {
    for (n in nums) {
        console.log(n);
    }
}
display(-2, -3, 4, 2, 5);
display(20, 23, 31);

/* Функції як параметри */

function callFunc(func) {
    func();
}

function iAmParam() { console.log("Функція як параметер!") }

callFunc(iAmParam);


/* Передача параметрів за значенням та за посиланням */

function changeFirst(value) {
    value[0] = "X";
}

let str = "Some string";
console.log("before:", str);
changeFirst(str);
console.log("after:", str);



let arr = [0, 1, 2, 3];

console.log("before:", arr);
changeFirst(arr);
console.log("after:", arr);



/* Результат функції */

function multiply(a, b) {
    const result = a + b;
    return result;
    // return a + b;
}

let num1 = multiply(2, 4);
const num2 = multiply(6, 34);


/* Лексична область змінних */
{
    var a = 5;
    let b = 8;
    const c = 9;

    console.log("Local scope a:", a);
    console.log("Local scope b:", b);
    console.log("Local scope c:", c);
}
console.log("Global scope: a", a);
// console.log("Global scope b:", b);
// console.log("Global scope c:", c);



/* Замикання */
function outer() {
    let x = 5;
    function inner() {
        x++;
        console.log(x);
    };
    return inner;
}

outer();
outer();
outer();


/* Самовикличні функції */
(function () {
    console.log("Hello from IIFE");
})();


/* Рекурсія */

function getFibonachi(n) {
    if (n === 0) return 0;

    if (n === 1) {
        return 1;
    } else {
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
var result = getFibonachi(8);
console.log(result);


/* Стрілочні функції */

let printHello = () => console.log("Hello");
printHello();

let printMessage = (mes) => console.log(mes);
printMessage("Welcome to JavaScript");

let sumArrowPrint = (x, y) => console.log("Sum =", x + y);

sumArrowPrint(1, 2);
sumArrowPrint(4, 3);
sumArrowPrint(103, 2);

// Повернення результату
let sumArrow = (x, y) => x + y;
console.log(sumArrow(1, 2));
console.log(sumArrow(4, 3));
console.log(sumArrow(102, 5));


// Функція з кількох інструкцій
const square = n => {
    let result = n * n;
    console.log(result);
}

square(5);
square(6);
