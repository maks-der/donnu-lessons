
console.log(10 + 25);
console.log("10" + 25);
console.log(10 + "25");
console.log("10" + "25");

/* String, parseInt та parseFloat */

const numStr = "56";
const int = 4;
const numStrWithText = "100$";
const floatStr = "39.547";

console.log(String(int));
console.log(typeof String(int));

console.log(parseInt(numStr)); // 57
console.log(parseInt(int)); // 4
console.log(parseInt(numStrWithText)); // 123
console.log(parseInt(floatStr)); // 39

console.log(parseFloat(floatStr)); // 39.547

const binary1 = "01010";
const binary2 = "01101";
const hex1 = "f1";
const hex2 = "ca3";

console.log(parseInt(binary1, 2));
console.log(parseInt(binary2, 2));
console.log(parseInt(hex1, 16));
console.log(parseInt(hex2, 16));

/* NaN та isNaN() */

console.log(parseInt("abc"));   // NaN
console.log(typeof NaN);        // number

console.log(isNaN("javascript")); // true
console.log(isNaN("22")); //  false

/* --- String --- */
let str = "Some random string";

console.log(str.length);

console.log(str[0]);
console.log(str.at(5));

console.log(str[str.length - 1]);
console.log(str.at(-1));

console.log(str.indexOf("S"));
console.log(str.indexOf("s"));
console.log(str.indexOf("m"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.includes("random"));
console.log(str.includes("text"));

let spacesStr = "      data text      ";
console.log("|" + spacesStr + "|");
console.log("|" + spacesStr.trim() + "|");
console.log("|" + spacesStr.trimStart() + "|");
console.log("|" + spacesStr.trimEnd() + "|");

const concatenated = str.concat("Added text");
console.log(concatenated);

console.log(str.replace(" ", "_"));
console.log(str.replace(/ /g , "_"));
console.log(str.slice(0, 10));
console.log(str.split(" "));
console.log(str.split("r"));


/* --- Number --- */
let num = 125.19734;

console.log(num.toFixed());
console.log(num.toFixed(2));
console.log(num.toFixed(3));

console.log(num.toExponential());

console.log(num.toString());
console.log(typeof num.toString());


/* --- Symbol --- */
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");

console.log(sym1 == sym2);
console.log(sym1 === sym2);

console.log(sym1.description);


/* --- Array --- */
const arr = [0, 1, 2, 3, "banana", "apple", "orange", true];

console.log(typeof arr);
console.log(typeof arr === "object");
console.log(Array.isArray(arr));

console.log(arr.length);
console.log(arr.at(5));
console.log(arr.at(-1));

console.log(arr.indexOf("banana"));
console.log(arr.indexOf(1));
console.log(arr.indexOf("1"));

console.log(arr.concat([0.5, 0, 23, "Alex", "Tom"]));

console.log(arr.includes("orange"));
console.log(arr.includes("mint"));

console.log(arr.toString());
console.log(arr.join());
console.log(arr.join(" "));
console.log(arr.join(" > "));

arr.forEach((item, i) => {
    console.log(i, item);
});

const numsArr = arr.map((item) => {
    if (typeof item === "number") return item;
});
console.log(numsArr);

const filtered = arr.filter((item) => {
    if (typeof item === "number") return item;
});
console.log(filtered);

console.log(arr.reverse());

const arr2 = [234, 25, 346, 527, 4, 1414, 5];
console.log(arr2.sort());
console.log(arr2.sort((a,b) => (a > b) ? 1 : -1));

const emptyArr = [];
emptyArr.push("I");
console.log(emptyArr);
emptyArr.push("pushed");
console.log(emptyArr);
emptyArr.push("new");
console.log(emptyArr);
emptyArr.push("item");
console.log(emptyArr);
emptyArr.push("in");
console.log(emptyArr);
emptyArr.push("array");
console.log(emptyArr);

console.log(emptyArr.pop());
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);
console.log(emptyArr.pop());
console.log(emptyArr);


/* --- Date --- */
console.log(Date.now());

console.log(new Date());
console.log(new Date("2012-05-03"));

console.log(new Date().getDate());
console.log(new Date().getUTCDate());

console.log(new Date().getDay());
console.log(new Date().getUTCDay());

console.log(new Date().getFullYear());
console.log(new Date().getUTCFullYear());

console.log(new Date().getHours());
console.log(new Date().getUTCHours());

console.log(new Date().getMilliseconds());
console.log(new Date().getUTCMilliseconds());

console.log(new Date().getMinutes());
console.log(new Date().getUTCMinutes());

console.log(new Date().getMonth());
console.log(new Date().getUTCMonth());

console.log(new Date().getSeconds());
console.log(new Date().getUTCSeconds());

console.log(new Date().getTime());

const date = new Date("1985-12-25T10:45:00");
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());


/* --- Math --- */
console.log(Math.PI);

console.log(Math.abs(0));
console.log(Math.abs(100));
console.log(Math.abs(-1));
console.log(Math.abs(-250));

console.log(Math.floor(2.1));
console.log(Math.floor(3.99999));
console.log(Math.floor(0.5));

console.log(Math.round(2.1));
console.log(Math.round(3.99999));
console.log(Math.round(0.5));

console.log(Math.random());
console.log(Math.round(Math.random() * 10000));

console.log(Math.max(-123,25,47));
console.log(Math.min(345,534,-2));

console.log(Math.pow(2, 2));
console.log(Math.pow(4, 2));
console.log(Math.pow(3, 3));
console.log(Math.pow(5, 4));

console.log(Math.sqrt(4));
console.log(Math.sqrt(16));
console.log(Math.sqrt(81));
console.log(Math.sqrt(625));


/* --- Timers --- */
let count = 0;

setInterval(() => {
    console.log(++count);
}, 1000);

setTimeout(() => {
    console.log("Three seconds is over");
}, 3000);


/* --- Object --- */

const dog = {
    name: "Fluffy",
    age: 2,
    breed: "golden retriever",
    bark: () => console.log("Woof!"),
};

console.log(Object.keys(dog));
console.log(Object.values(dog));

console.log(Object.entries(dog));
  
for (const [key, value] of Object.entries(dog)) {
    console.log(`key: ${key}, value: ${value}`);
}
