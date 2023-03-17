// if
let num = 24;
if (num > 0) console.log("Число більше 0");

if (num > 0)
    console.log("Число більше 0");

if (num > 0 && num < 100) {
    console.log("Число більше 0 та менше 100");
}


// else
if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число менше 30");
}

if (num > 30) console.log("Число більше 30");
else console.log("Число менше 30");


// else if
if (num > 0) {
    console.log("Число більше 0");
} else if (num > 10) {
    console.log("Число більше 10");
} else if (num > 20) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

// num = 20;
if (num > 0 && num < 10) {
    console.log("Число більше 0");
} else if (num > 10 && num < 20) {
    console.log("Число більше 10");
} else if (num > 20 && num < 30) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

// num = 30;
if (num > 0 && num <= 10) {
    console.log("Число більше 0");
} else if (num > 10 && num <= 20) {
    console.log("Число більше 10");
} else if (num > 20 && num <= 30) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

// num = 21;
// switch
switch(num){
    case 10 : 
        console.log("Number is 10");
        break;
    case 20 : 
        console.log("Number is 20");
        break;
    case 30 : 
        console.log("Number is 30");
        break;
    default: 
        console.log("Number is unknown");
        break;
}

// [1]?[2]:[3]
const a = 10;
const b = 2;

const res1 = (a < b) ? a : b;

let result;
if (a < b) {
    result = a;
} else {
    result = b;
}

const res2 = (a < b) ? a + b : a - b;

console.log("res1:", res1);
console.log("result:", result);
console.log("res2:", res2);

// ??
const sample1 = "hello" ?? "world";
const sample2 = 0 ?? 5;
const sample3 = "" ?? "javascript";
const sample4 = false ?? true;
const sample5 = null ?? "not null";
const sample6 = undefined ?? "defined";

console.log("sample1:", sample1);
console.log("sample2:", sample2);
console.log("sample3:", sample3);
console.log("sample4:", sample4);
console.log("sample5:", sample5);
console.log("sample6:", sample6);

// ??=
let message = "Welcome to JavaScript";
let text = "Hello work!"
text ??= message;
console.log(text);

message = "Welcome to JavaScript";
text = null;
text ??= message;
console.log(text);
