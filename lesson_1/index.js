// У коды коментарі позначаються двома шляхами

// Це однорядковий коментар

/* 
        Це
        багаторядковий
        коментар
*/

// Виведення в консоль:
console.log("Hello, Applied Linguistics!");
console.log("My", "name", "is", "Maks!");

// Математичні оператори

let x = 10 + 50; // додавання
let y = 100 - 30; // віднімання
let mult = x * y; // множення
let div = x / y; // ділення
let rem = 10 % 3; // залишок від ділення
let pow1 = 2 ** 3; // зведення в ступінь
let pow2 = x ** 2; // зведення в ступінь

console.log('x:', x);
console.log('y:', y);
console.log('mult:', mult);
console.log('div:', div);
console.log('rem:', rem);
console.log('pow1:', pow1);
console.log('pow2:', pow2);

// Інкремент та декримент
let num1 = 10;
const preInc = ++num1;
console.log('preInc:', preInc);

let num2 = 10;
const postInc = num2++;
console.log('postInc:', postInc);

let num3 = 10;
const preDec = --num1;
console.log('preDec:', preDec);

let num4 = 10;
const postDec = num2--;
console.log('postDec:', postDec);


// Виконання математичних операцій
let ten = 10;
let mathResult = 5 + (6 - 2) * --ten;
console.log("mathResult:",mathResult); // 41


// Оператори порівняння
console.log('123 == 123', 123 == 123);
console.log('123 == "123"', 123 == "123");

console.log('10 === 10', 10 === 10);
console.log('10 === "10"', 10 === "10");

console.log('"word" != "word"', "word" != "word");
console.log('"300" != 300', "300" != 300);

console.log('"word" !== "word"', "word" !== "word");
console.log('"300" !== 300', "300" !== 300);

console.log("12 > 9", 12 > 9);
console.log("12 < 9", 12 < 9);

console.log("300 > 450", 300 > 450);
console.log("300 < 500", 300 < 500);

console.log("1 <= 0", 1 <= 0);
console.log("1 <= 1", 1 <= 1);

console.log("20 >= 24", 20 >= 24);
console.log("320 >= 250", 320 >= 250);

// Логічні оператори

// Оператори привласнення