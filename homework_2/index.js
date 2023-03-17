/* 
    1. Модифікуйте програму наступним чином, використавши if..else.
    
    Наразі програма виводе у консоль дані у вигляді:
    <user name> - can drink: <true or false>

    Модифікуйте її таким чином, щоб дані виводились у такому форматі:

    <user name> can drink alcohol
    або
    <user name> can not drink alcohol
*/
const user1 = {
    name: "Anna",
    age: 8,
};
const user2 = {
    name: "Victoria",
    age: 18,
};
const user3 = {
    name: "Alexa",
    age: 15,
};
const user4 = {
    name: "Serhii",
    age: 36,
};
// Цю частину замініть своєю відповіддю
console.log(`${user1.name} - can drink: ${user1.age >= 18}`);
console.log(`${user2.name} - can drink: ${user2.age >= 18}`);
console.log(`${user3.name} - can drink: ${user3.age >= 18}`);
console.log(`${user4.name} - can drink: ${user4.age >= 18}`);


/* 
    2. Створити свою версію програми "Вікторина", на основі
    четвертого прикладу у lesson_2/index.js

    1. Бібліотека readline імпортована і налаштована нижче;
    2. Свій код розмістіть у належному місці;
    3. Як корситуватися введенням даних з допомогю readlin - дивіться 4 приклад;
    4. Не забудьте у кінці вимкнути потік введення даних за домогою: rl.close();
*/
const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    // Код тут!!!
})();


/* 
    3. Придумайте та створіть маленьку програмку.
    Ваша програма може робити будь-що, але обов'язково
    використайте умовні конструкції.
*/

// Відповідь тут