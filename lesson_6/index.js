const util = require('util');

function logHidden(weak) {
     const data = util.inspect(weak, { showHidden: true });
     console.log(data);
}

/* --- Set --- */

const numbers = new Set([0, 1, 2]);
console.log(numbers);
console.log(numbers.size);

numbers.add(100);
console.log(numbers);

numbers.add(100);
numbers.add(2);
numbers.add("Hello Set!");
console.log(numbers);

numbers.delete(0);
console.log(numbers);

const has100 = numbers.has(100);
console.log(has100);
console.log(numbers.has(123));

numbers.forEach((value1, value2, set) => {
    console.log(value1, value2, set);
});

const setKeys = numbers.keys();
console.log(setKeys);

const setValues = numbers.values();
console.log(setValues);

const setEntries = numbers.entries();
console.log(setEntries);


/* --- Map --- */

const myMap1 = new Map();
console.log(myMap1);

const myMap2 = new Map([[0, "First"], [1, "Second"], [2, "Third"]]);
console.log(myMap2);

const myMap3 = new Map([["String key", 1543], [130, "Super value"], ["Another key", true]]);
console.log(myMap3);


const newMap = new Map([
    ["array", "an orderly arrangement"],    
    ["object", "a discrete item that provides a description of virtually anything known to a computer"],    
    ["map", "a mathematical relation such that each element of a given set (the domain of the function) is associated with an element of another set (the range of the function)"],    
]);
console.log(newMap.size);

newMap.set("apple", "fruit with red or yellow or green skin and sweet to tart crisp whitish flesh")
console.log(newMap);

newMap.set("banana", "elongated crescent-shaped yellow fruit with soft sweet flesh");
console.log(newMap);

newMap.set("orange", "round yellow to orange fruit of any of several citrus trees");
console.log(newMap);


const apple = newMap.get("apple");
console.log(apple);

const hasObject = newMap.has("object")
console.log(hasObject);
console.log(newMap.has("123"));


newMap.forEach((value, key, map) => {
    console.log("Word:", key);
    console.log("Description:", value);
});

const mapKeys = newMap.keys();
console.log(mapKeys);

const mapValues = newMap.values();
console.log(mapValues);

const mapEntries = newMap.entries();
console.log(mapEntries);


newMap.delete("array");
newMap.delete("object");
newMap.delete("map");
console.log(newMap);

newMap.clear();
console.log(newMap);


/* --- WeakSet --- */
let c = { lang: "C", created: new Date("1972") }
let cpp = { lang: "C++", created: new Date("1985") }
let cShapr = { lang: "C#", created: new Date("2001") }
let java = { lang: "Java", created: new Date("1995") }
let js = { lang: "JavaScript", created: new Date("1995") };
let ts = { lang: "TypeScript", created: new Date("2012") };

const weakSet = new WeakSet();
logHidden(weakSet);

weakSet.add(c);
weakSet.add(cpp);
weakSet.add(cShapr);
weakSet.add(java);
weakSet.add(js);
weakSet.add(ts);

logHidden(weakSet);

weakSet.delete(ts);
logHidden(weakSet);

console.log(weakSet.has(js));
console.log(weakSet.has(ts));

js = null;

setInterval(() => {
     console.clear();
     logHidden(weakSet);

     console.log(c);
     console.log(cpp);
     console.log(cShapr);
     console.log(java);
     console.log(js);
     console.log(ts);
}, 1000);



/* --- WeakMap --- */

let cKey = { key: "C" };
let cppKey = { key: "C++" };
let cSharpKey = { key: "C#" };
let javaKey = { key: "Java" };
let jsKey = { key: "JavaScript"};
let tsKey = { key: "TypeScript"};

let cValue = { lang: "C", created: new Date("1972") };
let cppValue = { lang: "C++", created: new Date("1985") };
let cShaprValue = { lang: "C#", created: new Date("2001") };
let javaValue = { lang: "Java", created: new Date("1995") };
let jsValue = { lang: "JavaScript", created: new Date("1995") };
let tsValue = { lang: "TypeScript", created: new Date("2012") };

const weakMap = new WeakMap();
logHidden(weakMap);

weakMap.set(cKey, cValue);
weakMap.set(cppKey, cppValue);
weakMap.set(cSharpKey, cShaprValue);
weakMap.set(javaKey, javaValue);
weakMap.set(jsKey, jsValue);
weakMap.set(tsKey, tsValue);

logHidden(weakMap);

console.log(weakMap.get(cKey));
console.log(weakMap.get(cppKey));
console.log(weakMap.get(cSharpKey));

weakMap.delete(tsKey);
logHidden(weakMap);

console.log(weakMap.has(jsKey));
console.log(weakMap.has(tsKey));

jsKey = null;
cKey = null;
cppKey = null;

setInterval(() => {
     console.clear();
     logHidden(weakMap);

     console.log(cKey);
     console.log(cppKey);
     console.log(cSharpKey);
     console.log(javaKey);
     console.log(jsKey);
     console.log(tsKey);
}, 1000);


/* --- JSON --- */
const user = {
     name: "Alex",
     married: true,
     age: 30
};

const serializedUser = JSON.stringify(user);
console.log(serializedUser);
console.log(typeof serializedUser);

const objUser = JSON.parse(serializedUser);
console.log(objUser);
console.log(typeof objUser);

