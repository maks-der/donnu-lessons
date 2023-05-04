/* 
    Переписати код на TypeScript у файл з розширенням .ts
    1. Додати кожній змінній, константі і параметру тип.
    2. Додати тип котрий функція повертає.
*/


function createArrayOfIntegers(lastNum) {
    const result = [];

    for (let i = 0; i <= lastNum; i++) result.push(i);

    return result;
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const arr2 = createArrayOfIntegers(100);
const arr3 = createArrayOfIntegers(3000);

function fizzBuzz(array) {
    array.forEach((num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    });
}

fizzBuzz(arr1);
fizzBuzz(arr2);

function normilizeString(str) {
    return str.split(" ")
        .filter((word) => word)
        .join(" ")
        .toLowerCase()
        .trim();
}

const normText1 = normilizeString("    Text   with  spaces      ");
const normText2 = normilizeString("TeXt WiTh DifFerENt CaseS");
const normText3 = normilizeString("  Text   WitH  ALl  IssuEs    ");

console.log(normText1);
console.log(normText2);
console.log(normText3);