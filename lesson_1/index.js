// У коді коментарі позначаються двома шляхами

// 1. Це однорядковий коментар

/* 
    2.
    Це
    багаторядковий
    коментар
*/
console.clear(); // очистка консолі

// Виведення в консоль:
console.log(123);
console.log("Hello, Applied Linguistics!");
console.log("My", "name", "is", "Maks!");

// Змінні та константи
let title;
title = "Star Wars";

let userName = "Alex";
let userAge = 37;
console.log('title:', title);
title = "Harry Potter";
console.log('title:', title);
console.log('userName:', userName);
console.log('userAge:', userAge);

// Типи даних
// String
let user = "Tom";
let company = 'Microsoft';
let language = `JavaScript`;

console.log(user);
console.log(company);
console.log(language);

let company1 = "Копманія \"Амазон\""; // екранування
let company2 = "Копманія 'Амазон'"; // різні лапки
let company3 = 'Копманія "Амазон"'; // різні лапки

console.log("company1:", company1);
console.log("company2:", company2);
console.log("company3:", company3);

let age = 37;
let isMarried = false;

let interpolation1 = `Name: ${user}`;
let interpolation2 = `Name: ${user}   Age: ${age}   IsMarried: ${isMarried}`;
console.log("interpolation1:", interpolation1);
console.log("interpolation2:", interpolation2);

// Number
let integer = 45;
let float = 23.897;

console.log(integer);
console.log(float);

// BigInt
let num = 9007199254740991; // type Number
console.log("NOT BigInt:", num);
console.log("NOT BigInt:", num + 1);
console.log("NOT BigInt:", num + 2);

let dimension = 19007n;
const value = 2545n;
let myBigInt = 9007199254740991n;
console.log("BigInt:", dimension);
console.log("BigInt:", value);
console.log("BigInt:", myBigInt + 1n);
console.log("BigInt:", myBigInt + 2n);
console.log("BigInt:", myBigInt + 10n);

// Boolean
let done = true;
let isAvailable = false;
console.log(done);
console.log(isAvailable);

// null та undefined
let isAlive;
console.log("isAlive:", isAlive);

isAlive = null;
console.log("isAlive:", isAlive);

isAlive = undefined;
console.log("isAlive:", isAlive);

// Object
let student = {};
console.log(student);
student = {
    firstName: "Ivan",
    lastName: "Kovalenko",
    age: 20,
    spec: "Applied Linguistics",
    course: 3,
};
console.log(student);
console.log("student.firstName:", student.firstName);
console.log("student.lastName:", student.lastName);
console.log("student.age:", student.age);
console.log("student.spec:", student.spec);
console.log("student.course:", student.course);

// Слабка/динамічна типізація
let sampleVariable;
console.log("sampleVariable", sampleVariable);

sampleVariable = 45;
console.log("sampleVariable", sampleVariable);

sampleVariable = "45";
console.log("sampleVariable", sampleVariable);

// typeof
let id;
console.log(typeof id);

id = 45;
console.log(typeof id);

id = 45n;
console.log(typeof id);

id = "45";
console.log(typeof id);
id = {UUID: 1231423}
console.log(typeof id);

console.log(typeof null);


// // Математичні оператори

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

let num2 = 10; // 10
const postInc = num2++;
console.log('postInc:', postInc, " num2:", num2);

let num3 = 10;
const preDec = --num3;
console.log('preDec:', preDec);

let num4 = 10;
const postDec = num4--;
console.log('postDec:', postDec, " num4:", num2);


// Виконання математичних операцій
let ten = 10;
let mathResult = 5 + (6 - 2) * --ten;
console.log("mathResult:", mathResult); // 41


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

// // Логічні оператори
console.log("false && false = ", false && false);
console.log("true && false = ", true && false);
console.log("false && true = ", false && true);
console.log("true && true = ", true && true);

console.log("false || false = ", false || false);
console.log("true || false = ", true || false);
console.log("false || true = ", false || true);
console.log("true || true = ", true || true);

console.log("!true = ", !true);
console.log("!false = ", !false);

// Оператори привласнення
let sum = 23;
sum += 5; // sum = sum + 5
console.log("23 + 5 =", sum);

let sub = 28;
sub -= 10;
console.log("28 - 10 =", sub);

let multip = 20;
multip *= 2;
console.log("20 * 2 =", multip);

let divided = 40;
divided /= 4;
console.log("40 / 4 =", divided);

let pow = 5;
pow **= 2;
console.log("5\u00B2 =", pow);

let afterFloatDot = 10;
afterFloatDot %= 3;
console.log("10 % 3 =", afterFloatDot);


let res0 = false;
let bool0 = false;
res0 &&= bool0;
console.log("false && false =", res0);

let res1 = true;
let bool1 = false;
res1 &&= bool1;
console.log("true && false =", res1);
 
let res2 = false;
let bool2 = true;
res2 &&= bool2;
console.log("false && true =", res2);
 
let res3 = true;
let bool3 = true;
res3 &&= bool3;
console.log("true && true =", res3);
 

let res4 = false;
let bool4 = false;
res4 ||= bool4;
console.log("false || false =", res4);

let res5 = true;
let bool5 = false;
res5 ||= bool5;
console.log("true || false =", res5);
 
let res6 = false;
let bool6 = true;
res6 ||= bool6;
console.log("false || true =", res6);
 
let res7 = true;
let bool7 = true;
res7 ||= bool7;
console.log("true || true =", res7);

