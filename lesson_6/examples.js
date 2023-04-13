const fs = require('fs');

const regExp = {
    allLineBreaks: /(\r\n|\r|\n)/g,
    allPunctuationMarks: /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
};

/* 
    1. Функція котра бере шлях до файлу, зчитує файл та рахує скількис слів містить текст.
*/
function wordsInFile(filePath) {
    let text = fs.readFileSync(filePath, "utf-8");
    
    text = text.replace(regExp.allLineBreaks, " ");
    text = text.replace(regExp.allPunctuationMarks,"")

    const arr = text.toLowerCase().split(" ");
    const set = new Set(arr.sort());

    // set.forEach((val) => {
    //     console.log(val);
    // });

    console.log(`Text length of ${arr.length} words contains ${set.size} words.`);
}

// wordsInFile("./lesson_6/poem.txt");


/* 
    2. Функція бере шлях до файлу, зчитує файл і виводить таблицю-словник попередньо прибравши повторення.
*/

function vocabularyToTable(filePath) {
    const text = fs.readFileSync(filePath, "utf-8");
    const wordsArray = text.replace(regExp.allLineBreaks, "\n").split("\n");
    const voc = new Map();

    wordsArray.forEach((item) => {
        const arr = item.split(":");
        voc.set(arr[0], arr[1]);
    });

    const table = [];
    
    voc.forEach((desc, word) => {
        const arr = desc.split(" - ")
        table.push({
            word: word.trim(),
            description: arr[0].trim(),
            example: arr[1].trim(),
        });
    });

    console.table(table);
}

// vocabularyToTable("./lesson_6/fruit.txt");
