// 1. Draws a rectangle with # symbols
// process.stdout.write(); - inline output

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 25; j++) {
        process.stdout.write(`#`);
    }
    process.stdout.write(`\n`);
}


// 2. Draws an empty rectangle with # symbols
const height = 10;
const width = 25;

for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
        if (j === 0 || j === width || i === 0 || i === height) {
            process.stdout.write(`#`);
        } else {
            process.stdout.write(` `);
        }
    }
    process.stdout.write(`\n`);
}


// 3. Check odd and even numbers in array
const array = [15, 65, 684, 64, 6, 464, 686, 84, 468, 4686, 8, 190, 81, 98004, 914, 984, 109, 06, 810, 910, 9, 40280, 49, 094, 091, 098, 41, 9541, 9, 4808, 4, 084, 084, 06, 1056, 40, 6504, 49, 094, 094, 0, 06, 010, 416, 065, 1, 6041, 060, 41, 6, 6401, 6081]

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`${array[i]} - even`);
    } else {
        console.log(`${array[i]} - odd`);
    }

    // const text = `${array[i]} - ${(array[i] % 2 === 0) ? 'even' : 'odd'}`
    // console.log(text);
}


// 4. Bubble sort
const arr = [4,1,5,6,68,0,40,504,56,65,54];
console.table(arr);

for(var i = 0; i < arr.length; i++){

    // Last i elements are already in place 
    for(var j = 0; j < ( arr.length - i -1 ); j++){

      // Checking if the item at present iteration
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){

        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.table(arr);



// 5. Saving data to CSV file using fs (file system) module of Node.js
const fs = require('fs');

const data = [
    {
        firstName: "Monika",
        lastName: "Gunnar",
        age: 24,
        revenue: 2000,
        expenses: 1800,
    },
    {
        firstName: "Erica",
        lastName: "Dariy",
        age: 42,
        revenue: 3350,
        expenses: 1500,
    },
    {
        firstName: "Enid",
        lastName: "Breda",
        age: 34,
        revenue: 1500,
        expenses: 1400,
    },
    {
        firstName: "Emilee",
        lastName: "Félicie",
        age: 31,
        revenue: 4200,
        expenses: 3200,
    },
    {
        firstName: "Fred",
        lastName: "Austen",
        age: 20,
        revenue: 1200,
        expenses: 950,
    },
    {
        firstName: "Rachelle",
        lastName: "Glanville",
        age: 36,
        revenue: 2500,
        expenses: 2150,
    },
    {
        firstName: "Maegan",
        lastName: "Anderson",
        age: 25,
        revenue: 2150,
        expenses: 1850,
    },
];

// Creating first row for csv file
const csvArray = [
    ["First Name", "Last Name", "Age", "Revenue", "Expenses", "Difference"]
];
console.log(csvArray);

// Creating arrays from data
for (let i = 0; i < data.length; i++) {
    const row = [
        data[i].firstName,
        data[i].lastName,
        data[i].age,
        data[i].revenue,
        data[i].expenses,
        data[i].revenue - data[i].expenses,
    ];
    csvArray.push(row);
}
console.table(csvArray);


let csvText = "";

// Convering double arrays to one string
for (let i = 0; i < csvArray.length; i++) {
    csvText += csvArray[i].join(',') + "\n";
}

console.log(csvText);

// Writing data to file
fs.writeFileSync('./result.csv', csvText, 'utf-8');
console.log("File saved");