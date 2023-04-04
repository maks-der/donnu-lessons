//  1. Saving data to CSV file (UPDATED)
const fs = require('fs');

function jsonToCSV(path) {
    console.log("Reading file...");
    const fileString = fs.readFileSync(path, 'utf-8');
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
}

// jsonToCSV('./lesson_5/users-list-1000.json');
// jsonToCSV('./lesson_5/users-list-150000.json');

// 2. Clock in Node.js
function createClock() {
    setInterval(() => {
        console.clear();

        const date = new Date();

        console.log(date.toLocaleTimeString());

        // console.log(date.toLocaleString());

        // console.log(date.toLocaleString("en-US"));
        // console.log(date.toLocaleString("en-GB"));
        // console.log(date.toLocaleString("ko-KR"));
        // console.log(date.toLocaleString("ar-EG"));
        // console.log(date.toLocaleString("ja-JP-u-ca-japanese"));

        // const options = {
        //     weekday: "long",
        //     year: "numeric",
        //     month: "long",
        //     day: "numeric",
        //   };
        // console.log(date.toLocaleString("de-DE", options));
        // console.log(date.toLocaleString("en-US", options));
        // console.log(date.toLocaleString("uk-UK", options));
    }, 1000);
}

// createClock();


// 3. Game in terminal: tic-tac-toe

const readline = require('readline/promises');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let winner = null;

const fieldMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

function print(str) {
    process.stdout.write(str);
}

function convertNumberToSymbol(num) {
    switch (num) {
        case 1: return "X";
        case 2: return "O";
        default: return " ";
    }
}

function drawField(matrix) {
    console.clear();

    matrix.forEach((row) => {
        print("|");
        row.forEach((num) => {
            const symbol = convertNumberToSymbol(num);
            print(symbol + "|");
        })
        print("\n");
    });
}

function makeMove(cell, value = 1) {

    switch (Number(cell)) {
        case 1:
            fieldMatrix[0][0] = value;
            break;
        case 2:
            fieldMatrix[0][1] = value;
            break;
        case 3:
            fieldMatrix[0][2] = value;
            break;
        case 4:
            fieldMatrix[1][0] = value;
            break;
        case 5:
            fieldMatrix[1][1] = value;
            break;
        case 6:
            fieldMatrix[1][2] = value;
            break;
        case 7:
            fieldMatrix[2][0] = value;
            break;
        case 8:
            fieldMatrix[2][1] = value;
            break;
        case 9:
            fieldMatrix[2][2] = value;
            break;
    }
}

function isCellEmpty(cell) {
    switch (Number(cell)) {
        case 1: return fieldMatrix[0][0] === 0;
        case 2: return fieldMatrix[0][1] === 0;
        case 3: return fieldMatrix[0][2] === 0;
        case 4: return fieldMatrix[1][0] === 0;
        case 5: return fieldMatrix[1][1] === 0;
        case 6: return fieldMatrix[1][2] === 0;
        case 7: return fieldMatrix[2][0] === 0;
        case 8: return fieldMatrix[2][1] === 0;
        case 9: return fieldMatrix[2][2] === 0;
    }
}

async function playerMove() {
    const answer = await rl.question("Yor move!\n");

    if (isCellEmpty(answer)) {
        makeMove(answer);
        return true;
    }
    return false;
}

function computerMove() {
    const randomCell = (Math.random() * 10).toFixed();

    if (isCellEmpty(randomCell)) {
        makeMove(randomCell, 2);
    } else {
        computerMove();
        return;
    }
}

function checkForWinner(isPlayer = false) {
    const row1 = fieldMatrix[0][0] !== 0 && fieldMatrix[0][0] === fieldMatrix[0][1] && fieldMatrix[0][0] === fieldMatrix[0][2];
    const row2 = fieldMatrix[1][0] !== 0 && fieldMatrix[1][0] === fieldMatrix[1][1] && fieldMatrix[1][0] === fieldMatrix[1][2];
    const row3 = fieldMatrix[2][0] !== 0 && fieldMatrix[2][0] === fieldMatrix[2][1] && fieldMatrix[2][0] === fieldMatrix[2][2];
    const col1 = fieldMatrix[0][0] !== 0 && fieldMatrix[0][0] === fieldMatrix[1][0] && fieldMatrix[0][0] === fieldMatrix[2][0];
    const col2 = fieldMatrix[0][1] !== 0 && fieldMatrix[0][1] === fieldMatrix[1][1] && fieldMatrix[0][1] === fieldMatrix[2][1];
    const col3 = fieldMatrix[0][2] !== 0 && fieldMatrix[0][2] === fieldMatrix[1][2] && fieldMatrix[0][2] === fieldMatrix[2][2];
    const dia1 = fieldMatrix[0][0] !== 0 && fieldMatrix[0][0] === fieldMatrix[1][1] && fieldMatrix[0][0] === fieldMatrix[2][2];
    const dia2 = fieldMatrix[0][2] !== 0 && fieldMatrix[0][2] === fieldMatrix[1][1] && fieldMatrix[0][2] === fieldMatrix[2][0];

    if (row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2) {
        winner = isPlayer ? "Player" : "Computer";
    }
}

async function main() {
    let count = 0;

    while (winner === null && count < 9) {
        drawField(fieldMatrix);

        const isMoved = await playerMove();
        checkForWinner(true);

        if (winner === null && isMoved) {
            count++;
            if (count >= 9) break;
            computerMove();
            checkForWinner();
        }
    }

    drawField(fieldMatrix);

    console.log(winner === null ? "Draw!" : winner + " is won!");
    process.exit();
}

// main();

