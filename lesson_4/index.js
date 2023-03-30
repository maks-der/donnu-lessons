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
    console.log(a, "+", b, "=", result);
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
    console.log(x, "+", y, "=", z);
}

sum3();
sum3(6);
sum3(6, 4);

/* Невизначена кількість параметрів */
function display(...nums) {
    console.log(nums);
    for (n of nums) {
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

function changeString(value) {
    value = "X";
    console.log("In function:", value);
}

let str = "Some string";
console.log("before:", str);
changeString(str);
console.log("after:", str);


function changeFirstInArray(value) {
    value[0] = "X";
    console.log("In function:", value);
}

let arr = [0, 1, 2, 3];

console.log("before:", arr);
changeFirstInArray(arr);
console.log("after:", arr);



/* Результат функції */

function multiply(a, b) {
    const result = a * b;
    return result;
    // return a * b;
}

let num1 = multiply(2, 4);
const num2 = multiply(6, 34);

console.log(num1);
console.log(num2);

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

outer()();


/* Самовикличні функції */
(function () {
    console.log("Hello from IIFE");
})();


/* Рекурсія */

function countdown(number) {
    if (number === 0) {
        console.log(number);
        return;
    } else {
        console.log(number);
        return countdown(number - 1);
    }
}

countdown(10);

function getFibonachi(n) {
    if (n === 0) return 0;

    if (n === 1) {
        return 1;
    } else {
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
// 0, 1, 1, 2, 3, 5, 8...
var result = getFibonachi(8);

console.log(getFibonachi(0));
console.log(getFibonachi(1));
console.log(getFibonachi(2));
console.log(getFibonachi(3));
console.log(getFibonachi(4));
console.log(getFibonachi(5));
console.log(getFibonachi(6));
console.log(getFibonachi(7));
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

(() => {
    console.log("Hello from IIFE");
})();
