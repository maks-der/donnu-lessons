/* ----- Обробка помилок ----- */
console.log("Before error");
callSomeFunc(); // Виклик неіснуючої функції
console.log("After error");

try {
    console.log("Before error");
    callSomeFunc(); // Виклик неіснуючої функції
    console.log("After error");
} catch (error) {
    console.log("---> Error:", error);
} finally {
    console.log("Finally block");
}

console.log("After try...catch...finaly");

/* ----- Створення помилок ----- */
function devide(num1, num2) {
    if (num2 === 0) throw new Error("Divide by zero is not allowed");
    return num1 / num2;
}

devide(100, 0);

/* ----- Callback ----- */
console.log("Before Timer");

setTimeout(() => {
    console.log("Hello from callback!");
}, 6000);

console.log("After Timer");


/* ----- Promise ----- */
const x = 4;
const y = 2;
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (y === 0) {
            reject("Divide by zero is not allowed");
            return;
        }
        const z = x / y;
        resolve(z);
    }, 2000);
});

/* ----- Отримання результату операції в Promise ----- */
function devide(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (y === 0) {
                reject("Divide by zero is not allowed");
                return;
            }
            const z = x / y;
            resolve(z);
        }, 2000);
    });
}

const result = devide(4,2);
console.log(result);

result.then((value) => {
    console.log(`Promise response: ${value}`);
});


/* ----- Обробка помилок у Promise ----- */
function devide(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (y === 0) {
                reject("Divide by zero is not allowed");
                return;
            }
            const z = x / y;
            resolve(z);
        }, 2000);
    });
}

const result2 = devide(4,0);
console.log(result2);

result2.then((value) => {
    console.log(`Promise response: ${value}`);
}).catch((error) => {
    console.log(error);
});

/* ----- Створення ланцюжків промісів ----- */
new Promise(resolve => resolve("Hello"))
    .then(value => value + " from")
    .then(value => value + " chain")
    .then(value => value + " of")
    .then(value => value + " Promises")
    .then(finalValue => console.log(finalValue))
    .catch(error => console.log(error))
    .finally(() => console.log("End"));


/* ----- Promise.all ----- */
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello")
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("World")
    }, 2000);
});
Promise.all([promise2, promise3]).then(values => {
    values.forEach((val) => {
        console.log(val);
    });
}).catch((e) => {
    console.log(e);
});


/* ----- Async та await ----- */
function sum(x, y) {
    return new Promise((resolve) => {
        const result = x + y;
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

async function calculate() {
    const value1 = await sum(5, 3);
    console.log("Результат 1 асинхронної операції:", value1);
    const value2 = await sum(6, 4);
    console.log("Результат 2 асинхронної операції:", value2);
    const value3 = await sum(7, 5);
    console.log("Результат 3 асинхронної операції:", value3);
}

calculate();
