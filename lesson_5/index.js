/* --- String --- */
// let str = "Some random string";

// console.log(str.length);

// console.log(str[0], str.at(0));
// console.log(str[str.length - 1], str.at(-1));

// console.log(str.indexOf("S"));
// console.log(str.indexOf("s"));

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// console.log(str.includes("random"));
// console.log(str.includes("text"));

// let spacesStr = "      data text      ";
// console.log("|" + spacesStr + "|");
// console.log("|" + spacesStr.trim() + "|");
// console.log("|" + spacesStr.trimStart() + "|");
// console.log("|" + spacesStr.trimEnd() + "|");

// const concatenated = str.concat("Added text");
// console.log(concatenated);

// console.log(str.replace(" ", "_"));
// console.log(str.slice(0, 10));
// console.log(str.split(" "));
// console.log(str.split("r"));


/* --- Number --- */
// let num = 125.19734;

// console.log(num.toFixed());
// console.log(num.toFixed(2));
// console.log(num.toFixed(3));

// console.log(num.toExponential());

// console.log(num.toString());


/* --- Symbol --- */
// const sym1 = Symbol("foo");
// const sym2 = Symbol("foo");

// console.log(sym1 == sym2);
// console.log(sym1 === sym2);

// console.log(sym1.description);


/* --- Array --- */
// const arr = [0, 1, 2, 3, "banana", "apple", "orange", true];

// console.log(typeof arr);
// console.log(Array.isArray(arr));

// console.log(arr.length);
// console.log(arr.at(5));
// console.log(arr.at(-1));

// console.log(arr.indexOf("banana"));

// console.log(arr.concat([0.5, 0, 23, "Alex", "Tom"]));

// console.log(arr.includes("orange"));

// console.log(arr.toString());
// console.log(arr.join());
// console.log(arr.join(" "));
// console.log(arr.join(" > "));

// arr.forEach((item, i) => {
//     console.log(i, item);
// });

// const numsArr = arr.map((item) => {
//     if (typeof item === "number") return item;
// });
// console.log(numsArr);

// const filtered = arr.filter((item) => {
//     if (typeof item === "number") return item;
// });
// console.log(filtered);

// console.log(arr.reverse());

// const arr2 = [234, 25, 346, 527, 4, 1414, 5];
// console.log(arr2.sort());
// console.log(arr2.sort((a,b) => (a > b) ? 1 : -1));

// const emptyArr = [];
// emptyArr.push("I");
// console.log(emptyArr);
// emptyArr.push("pushed");
// console.log(emptyArr);
// emptyArr.push("new");
// console.log(emptyArr);
// emptyArr.push("item");
// console.log(emptyArr);
// emptyArr.push("in");
// console.log(emptyArr);
// emptyArr.push("array");
// console.log(emptyArr);

// console.log(emptyArr.pop());
// console.log(emptyArr);
// console.log(emptyArr.pop());
// console.log(emptyArr);
// console.log(emptyArr.pop());
// console.log(emptyArr);
// console.log(emptyArr.pop());
// console.log(emptyArr);
// console.log(emptyArr.pop());
// console.log(emptyArr);
// console.log(emptyArr.pop());
// console.log(emptyArr);


/* --- Date --- */
// console.log(Date.now());

// console.log(new Date());
// console.log(new Date("2012-05-03"));

// console.log(new Date().getDate());
// console.log(new Date().getUTCDate());

// console.log(new Date().getDay());
// console.log(new Date().getUTCDay());

// console.log(new Date().getFullYear());
// console.log(new Date().getUTCFullYear());

// console.log(new Date().getHours());
// console.log(new Date().getUTCHours());

// console.log(new Date().getMilliseconds());
// console.log(new Date().getUTCMilliseconds());

// console.log(new Date().getMinutes());
// console.log(new Date().getUTCMinutes());

// console.log(new Date().getMonth());
// console.log(new Date().getUTCMonth());

// console.log(new Date().getSeconds());
// console.log(new Date().getUTCSeconds());

// console.log(new Date().getTime());

// const date = new Date("1985-12-25T10:45:00");
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());


/* --- Math --- */
// console.log(Math.PI);

// console.log(Math.abs(0));
// console.log(Math.abs(100));
// console.log(Math.abs(-1));
// console.log(Math.abs(-250));

// console.log(Math.floor(2.1));
// console.log(Math.floor(3.99999));
// console.log(Math.floor(0.5));

// console.log(Math.round(2.1));
// console.log(Math.round(3.99999));
// console.log(Math.round(0.5));

// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));

// console.log(Math.max(-123,25,47));
// console.log(Math.min(345,534,-2));

// console.log(Math.pow(2, 2));
// console.log(Math.pow(4, 2));
// console.log(Math.pow(3, 3));
// console.log(Math.pow(5, 4));

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(625));


/* --- Timers --- */
// let count = 0;

// setInterval(() => {
//     console.log(++count);
// }, 1000);

// setTimeout(() => {
//     console.log("Three seconds is over");
// }, 3000);


/* --- Object --- */
