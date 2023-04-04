//  1. Saving data to CSV file (UPDATED)

const fs = require('fs');

const fileName = './lesson_5/users-list-1000.json';
// const fileName = './lesson_5/users-list-150000.json';


console.log("Reading file...");
const fileString = fs.readFileSync(fileName, 'utf-8');
console.log("File read, total", fileString.length, "symbols.");


console.log("Parsing string to object...");
const json = JSON.parse(fileString);
console.log("Parsed", json.length, "items.");

console.log("Crating CSV file content...");
const headers = Object.keys(json[0]);
const csvMatrix = [headers];

json.forEach((item) => {
    const values = Object.values(item);
    csvMatrix.push(values);
});

let csvText = "";

// Convering double arrays to one string
csvMatrix.forEach((row) => {
    csvText += row.join(',') + "\n";
})
console.log("CSV string created.");


console.log("Writing to CSV file");
fs.writeFileSync('./result.csv', csvText, 'utf-8');
console.log("File saved");


// 2. Clock in Node.js
setInterval(() => {
    console.clear();

    const date = new Date();
    
    console.log(date.toLocaleString());

    console.log(date.toLocaleString("en-US"));
    console.log(date.toLocaleString("en-GB"));
    console.log(date.toLocaleString("ko-KR"));
    console.log(date.toLocaleString("ar-EG"));
    console.log(date.toLocaleString("ja-JP-u-ca-japanese"));

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    console.log(date.toLocaleString("de-DE", options));
    console.log(date.toLocaleString("en-US", options));
    console.log(date.toLocaleString("uk-UK", options));
}, 1000);



