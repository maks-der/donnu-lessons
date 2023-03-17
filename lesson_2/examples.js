/* Examples of usege if, else if, else, etc. */

/*
    Here we'll use 'readline` module from Node.js API to make examples more interesting.
    You can check docs here:
    You dont need to know how to import and set it up at the moment. Just use it for fun 😀😀😀
*/

const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Greeting
(async () => {
    // type String
    const name = await rl.question("What is your name?\n");
    console.log(`Hello, ${name}! Nice to see you!`);
    rl.close();
})();

// 2. Check odd and even numbers
(async () => {
    console.clear();
    const number = await rl.question("Type your number: ");
    
    if (number % 2 == 0) {
        console.log("Your number is even");
    } else {
        console.log("Your number is odd");
    }
    
    rl.close();
})();

// 3. Conversation at the bar
(async () => {
    console.clear();
    const name = await rl.question("What is your name?\n");
    const age = await rl.question("What is your age?\n");
    console.clear();
    console.log('Welcome to the bar "Route 66"');
    console.log(`Hello, ${name}!\nCheck our menu:`);
    console.log(`
    1.Dark Beer;
    2.Lemonade;
    3.Light Ale;
    4.Margarita;
    5.Mojito;
    6.Mojito (non-alcohol);
    7.Orange Juice;
    8.Red Vine.
    9.WhiteVine.
    `);

    // type String
    const drinkNumber = await rl.question("What do you want to drink?\n");
    const num = Number(drinkNumber); // type Number
    
    const isAlcohol = num == 1 || num == 3 || num == 4 || num == 5 || num == 8 || num == 9;
    let message;

    if (isAlcohol) {
        message = (age >= 18) ? "Here you are. Your drink!" : "Sorry, you are not old enough for it!";
    } else {
        message = "Here you are. Your drink!";
    }

    console.log(message);
    rl.close();
})();

// 4. Quiz **
(async () => {
    console.clear();
    const answ1 = await rl.question(`What is the highest mountain in the world?
    1.Everest;
    2.Godwin Austen;
    3.Kangchenjunga;
    4.Lhotse.
    \nYour answer: `);
    const answ2 = await rl.question(`What is the largest ocean in the world?
    1.Arctic Ocean;
    2.Atlantic Ocean;
    3.Indian Ocean;
    4.Pacific Ocean.
    \nYour answer: `);
    const answ3 = await rl.question(`What is the longest river in the world
    1.Amazon River;
    2.Nile River;
    3.Mississippi River.
    4.Yangtze River;
    \nYour answer: `);
    const answ4 = await rl.question(`What is the fifth planet from the Sun?
    1.Earth;
    2.Mars;
    3.Jupiter;
    4.Saturn.
    \nYour answer: `);
    const answ5 = await rl.question(`What is the capital of Australia?
    1.Canberra;
    2.Sydney;
    3.Melbourne;
    4.Brisbane;
    \nYour answer: `);

    let points = 0;
    points += (Number(answ1) == 1) ? 1 : 0;
    points += (Number(answ2) == 4) ? 1 : 0;
    points += (Number(answ3) == 2) ? 1 : 0;
    points += (Number(answ4) == 3) ? 1 : 0;
    points += (Number(answ5) == 1) ? 1 : 0;
    
    console.log(`You earned ${points} points!`);
    rl.close();
})();
