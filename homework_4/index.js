/* 
    1. Додавання префіксу до рядка

    Функція setPrefixNot повинна додавати до будь-якого рядку префікс "Super".
    Наприклад:
    "Good" -> "SuperGood",
    "Bad" -> "SuperBad",
    "Test" -> "SuperTest",
    Якщо параметр не переданий, функція повинна повернути null.

    str - рядок
*/

function setPrefixSuper(str) {
    // if (str === undefined) return null;
    // return "Super" + str;

    if (str === undefined) {
        // return null;
    } else {
        return "Super" + str;
    }
}

// const result = setPrefixSuper("124gur");
// console.log(result);

/*  
    2. Зведення числа у ступінь

    Написати логіку для функції pow, котра
    буде зводити число у будь-яку не від'ємну ступінь.
    Якщо будь-який з параметрів не буде переданий до функції,
    то вона повинна повернути null.
    
    num - число
    deg - ступінь
*/

function pow(num, deg) {
    if(num === undefined || deg === undefined) return null;

    let result = 1;
    for (let i = 0; i < deg; i++) {
        result *= num;
    }
    return result;
}


/*
    3. Перевернутий масив

    Написати логіку для функції, котра буде приймати в параметр
    одновимірний масив і перевернтати значення.
    Повертати повина масив з перевернутими значеннями, наприклад:
    якщо передали [0,1,2] , то повернутися повинен [2,1,0]
    Якщо параметр не переданий, функція повинна повернути пустий масив.

    arr - масив
*/

function revertArray(arr = []) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result
}



// Наступні тести для перевірки функцій
const { describe, it } = require('node:test');
const { strict: assert } = require('node:assert');

describe("function setPrefixSuper()", async () => {
    it("function should add prefix 'Super' to string", () => {
        assert.strictEqual(setPrefixSuper("Good"), "SuperGood");
        assert.strictEqual(setPrefixSuper("Bad"), "SuperBad");
        assert.strictEqual(setPrefixSuper("12523"), "Super12523");
        assert.strictEqual(setPrefixSuper("Super"), "SuperSuper");
        assert.strictEqual(setPrefixSuper("Word"), "SuperWord");
        assert.strictEqual(setPrefixSuper(""), "Super");
    });
    it("function should return null if param is undefined", () => {
        assert.strictEqual(setPrefixSuper(), null);
    });
});

describe("function pow()", async () => {
    it("function should return proper value", () => {
        assert.strictEqual(pow(8, 0), 1);
        assert.strictEqual(pow(1, 2), 1);
        assert.strictEqual(pow(1, 25), 1);
        assert.strictEqual(pow(2, 2), 4);
        assert.strictEqual(pow(9, 2), 81);
        assert.strictEqual(pow(2, 4), 16);
        assert.strictEqual(pow(3, 3), 27);
        assert.strictEqual(pow(5, 5), 3125);
        assert.strictEqual(pow(9, 4), 6561);
        assert.strictEqual(pow(10, 5), 100000);
    });
    it("function should return null if one or all of params equal undefined", () => {
        assert.strictEqual(pow(), null);
        assert.strictEqual(pow(1), null);
        assert.strictEqual(pow(undefined, 1), null);
    });
});

describe("function revertArray()", async () => {
    it("function should return reverted array", () => {
        assert.deepStrictEqual(revertArray([]), []);
        assert.deepStrictEqual(revertArray([0, 1, 2]), [2, 1, 0]);
        assert.deepStrictEqual(
            revertArray([54, 34, 367, 658536, 5, 215, 12, 5, 667, 4837, 34, 521, 234, 364]),
            [364, 234, 521, 34, 4837, 667, 5, 12, 215, 5, 658536, 367, 34, 54]
        );
        assert.deepStrictEqual(revertArray(["val"]), ["val"]);
        assert.deepStrictEqual(revertArray([false, true]), [true, false]);
        assert.deepStrictEqual(revertArray(["Route10", 234, 0.54, "BigFish", true]), [true, "BigFish", 0.54, 234, "Route10"]);
    });
    it("function should return empty array if param is empty", () => {
        assert.deepStrictEqual(revertArray(), []);
    });
});