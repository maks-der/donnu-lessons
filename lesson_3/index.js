/* Масиви */

const emptyArray = [];
const fruit = ["banana", "apple", "orange"];

console.log("fruit:", fruit);
console.log("fruit[0]:", fruit[0]);
console.log("fruit[1]:", fruit[1]);
console.log("fruit[2]:", fruit[2]);
console.log("fruit[3]:", fruit[3]);

fruit[1] = "corn";
console.log("fruit:", fruit);

const data = ["Some string", 150, true, { name: "Sandy"}];
console.log("data:", data);


// Багатовимірні масиви
const numbers1 = [0, 1, 2, 3, 4, 5];
const numbers2 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
const numbers3 = [
    [
        [0.25, 0.5, 0.75],
        [1.25, 1.5, 1.75],
        [2.25, 2.5, 2.75],
    ],
    [
        [3.25, 3.5, 3.75],
        [4.25, 4.5, 4.75],
        [5.25, 5.5, 5.75],
    ]
];

console.log("numbers1:", numbers1);
console.log("numbers2:", numbers2);
console.log("numbers3:", numbers3);


// Довжина масива
const firstArray = [];
const secondArray = ["Dall", 3652, false, [1.5, 220]];
const thirdArray = [
    {
        name: "Walter",
        age: 50,
        job: "teacher",
        hobby: "chemistry",
    },
    {
        name: "Michael",
        age: 35,
        job: "actor",
        hobby: null,
    },
    {
        name: "Jessica",
        age: 17,
        job: "student",
        hobby: "music",
    },
];

console.log("firstArray.length:", firstArray.length);
console.log("secondArray.length:", secondArray.length);
console.log("secondArray[3].length:", secondArray[3].length);
console.log("thirdArray.length:", thirdArray.length);



/* Цикли */

// While
let i = 1;
while (i <=5) {
    console.log(i);
    i++;
}

// Do while
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5)

// For
for(let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 10; i >= -10; i--) {
    console.log(i);
}

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 1, j=1; i < 5, j < 4; i++, j++) {
    console.log(`${i} + ${j} = ${i + j}`);
}

for (let i=1; i <= 9; i++) {
    for (let j = 1; j <= 8; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// break & continue
for (let i = 1; i <= 10; i++) {
    if (i === 6) break;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) continue;
    console.log(i);
}

// For in
const person = {
    name: "Jerry", 
    age: 37,
    married: true,
};
for (prop in person) {
    console.log(prop);
}

// For of
const people = ["Tom", "Sam", "Bob"];

for (const person of people) {
    console.log(person);
}
