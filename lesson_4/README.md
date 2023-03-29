# Основи JavaScript. Функції в JS. Рекурсія та замикання.

## Зміст
1. Функції
1. Параметри функції
1. Передача параметрів за значенням та за посиланням
1. Результат функції
1. Лексична область змінних
1. Замикання
1. Самовикличні функції
1. Рекурсія
1. Стрілочні функції


#
## Функції

`Функція` - набір інструкцій, які виконують певну дію або обчислюють певне значення.

Визначення функції починається з ключового слова function, після якого слідує ім'я функції. Найменування функції підпорядковується тим же правилам, що й найменування змінної.

Після імені функції у дужках йде перелік параметрів. Навіть якщо параметрів функції немає, то просто йдуть порожні дужки. Потім у фігурних дужках йде тіло функції, що містить набір інструкцій.

```javascript
function назва_функції(параметри){
     // Інструкції
}

// Створення функції
function hello(){
     сonsole.log("Hello World");
}

// Виклик функції
hello();
``` 

### Змінні та константи як функції
Подібно до того, як константам і змінним присвоюються найпростіші значення (числа, рядки і т.д.), також їм можна надавати функції. Потім через таку змінну чи константу можна викликати присвоєну їй функцію:

```javascript
function hello(){
     console.log("Hello World!");
}

const message = hello;

message(); // Викликаємо функцію, посилання на яку зберігається в константі message
```


### Анонімні функції
Необов'язково надавати функціям певне ім'я. Можна використовувати анонімні функції.

```javascript
let anonMessage = function () {
    console.log("Hello Anon Function!");
}
anonMessage();
```

#
## Параметри функції

Функція може приймати параметри. Параметри є способом передачі в функцію даних. Параметри вказуються у дужках після назви функції.

Функція `print()` приймає один параметр – `message`. Тому при виклику функції ми можемо передати йому значення.

Якщо параметр не передається значення, тоді він буде мати значення `undefined`.
```javascript

function print(message){
     console.log(message);
}
print("Hello World!"); // Hello World!
print("Hello JavaScript!"); // Hello JavaScript!
print("Hello Applied Linguistics!"); // Hello Applied Linguistics!
print(); // undefined
 ```

Якщо функція приймає кілька параметрів, то вони перераховуються через кому:

```javascript
function sum1(a, b) {
    const result = a + b;
    console.log(result);
}

sum1(2, 6); // 8
sum1(4, 5); // 9
sum1(109, 11); // 120
```

### Необов'язкові параметри та значення за замовчуванням
Функція може приймати безліч параметрів, але частина або всі параметри можуть бути необов'язковими. Якщо параметри не передається значення, то за умовчанням вони мають значення `undefined`. Однак іноді буває необхідно, щоб параметри обов'язково мали якісь значення, наприклад, значення за промовчанням.

```javascript
// До стандарту `ES6` необхідно було перевіряти значення параметрів на `undefined`
function sum2(x, y) {
    if (y === undefined) y = 5;
    if (x === undefined) x = 8;
    const z = x + y;
    console.log(z);
}

// Наразі можна робити так:
function sum3(x = 8, y = 5) {
    const z = x + y;
    console.log(z);
}

sum3(); // 13
sum3(6); // 11
sum3(6, 4); // 10
```

### Невизначена кількість параметрів
За допомогою оператора `...` (три крапки) ми можемо вказати, що за допомогою параметра можна передати змінну кількість значень:

```javascript
function display(...nums){
     for(n in nums){
         console.log(n);
     }
}
display(-2, -3, 4, 2, 5);
display(20, 23, 31);
```
У цьому випадку другий параметр `...nums` вказує, що замість нього можна передати різну кількість значень. У самій функції `nums` фактично є масив переданих значень, які ми можемо отримати. При цьому, незважаючи на це, при виклику функції в неї передається не масив, а окремі значення.

### Функції як параметри
Функції можуть виступати як інші параметри:

```javascript
function callFunc(func) {
    func();
}

function iAmParam() { console.log("Функція як параметер!") }

callFunc(iAmParam);
```

Функція `callFunc` приймає параметр `func`. `func` - представляє функцію, причому на момент визначення `callFunc` не важливо, що це буде за функція.

#
## Передача параметрів за значенням та за посиланням

`Рядки`, `числа`, `логічні` значення передаються у функцію за `значенням`. Іншими словами при передачі значення у функцію, ця функція отримує копію цього значення.

```javascript
function changeFirst(value) {
    value[0] = "X";
}

let str = "Some string";
console.log("before:", str);
changeFirst(str);
console.log("after:", str);
```

`Об'єкти` та `масиви` передаються за `посиланням`. Тобто функція отримує сам об'єкт чи масив, а чи не їх копію.

```javascript
let arr = [0, 1, 2, 3];

console.log("before:", arr);
changeFirst(arr);
console.log("after:", arr);
```


#
## Результат функції

Функція може повертати результат. Для цього використовується оператор `return`, після якого вказується значення, що повертається.

```javascript
function multiply(a, b) {
    const result = a + b;
    return result;
    // return a + b;
}
```

Після отримання результату функції ми можемо привласнити його будь-якій іншій змінній або константі:

```javascript
let num1 = multiply(2, 4);
const num2 = multiply(6, 34);
```

#
## Лексична область змінних

Усі змінні та константи в JavaScript мають певну `область видимості`, в межах якої вони можуть діяти.

Усі змінні та константи, які оголошені поза `локальних` областей видимості, є `глобальними`.

Для визначення `локальної області` видимості JavaScript використовуються фігурні дужки `{ }`, які створюють `блок коду`. Цей блок коду може бути безіменним, може бути іменованим, наприклад, функція, або може представляти умовну або циклічну конструкцію.
```javascript
{
    var a = 5;
    let b = 8;
    const c = 9;

    console.log("Local scope a:", a);
    console.log("Local scope b:", b);
    console.log("Local scope c:", c);
}
console.log("Global scope: a", a);
console.log("Global scope b:", b); // error
console.log("Global scope c:", c); // error
```
Поведінка змінної залежить від способу її визначення (через `var` або через `let`) та від типу блоку. `var` визначає локальні змінні рівня функції, а `let` та `const` визначає локальні змінні рівня блоку коду.



#
## Замикання

`Замикання (closure)` - конструкція, коли функція, створена однієї області видимості, запам'ятовує своє лексичне оточення навіть у тому випадку, коли вона виконує поза своєю області видимості.

```javascript
function outer(){ // зовнішня функція
     var n; // деяка змінна
     return inner(){ // вкладена функція
         // Події зі змінною n
     }
}
```

Розглянемо замикання на найпростішому прикладі:
```javascript
function outer(){
     let x = 5;
     function inner(){
         x++;
         console.log(x);
     };
     return inner;
}

outer(); // 6
outer(); // 7
outer(); // 8
```


## Самовикличні функції
Зазвичай ініцалізація функції відокремлюється від її виклику: спочатку ми створюємо функцію, потім викликаємо. Але це необов'язково. Ми також можемо створити такі функції, які будуть викликатись відразу при створенні. Такі функції ще називають `Immediately Invoked Function Expression (IIFE)`.

```javascript
(function(){
     console.log("Hello from IIFE");
})();
```

#
## Рекурсія

Серед функцій можна окремо виділити `рекурсивні` функції. Їхня суть полягає в тому, що функція викликає саму себе.

Розглянемо приклад - визначення чисел Фібоначчі:

```javascript
function getFibonachi(n)
{
     if (n === 0) return 0;
     
     if (n === 1) {
         return 1;
     } else {
         return getFibonachi(n - 1) + getFibonachi(n - 2);
     }
}
var result = getFibonachi(8); //21
console.log(result); // 21
```

#
## Стрілочні функції

`Стрілочні функції (arrow functions)` дозволяють скоротити визначення звичайних функцій. Стрілочні функції утворюються за допомогою знака стрілки `=>`

`(параметри) => дії_функції`

Наприклад:

```javascript
function hello(){
     console.log("Hello");
}
hello(); // Викликаємо функцію
```

Тепер переробимо її у стрілочну функцію:

```javascript
let hello = () => console.log("Hello");
hello();

let print = (mes) => console.log(mes);
print("Welcome to JavaScript");

let sum = (x, y) => console.log("Sum =", x + y);
 
sum(1, 2); //Sum = 3
sum(4, 3); //Sum = 7
sum(103, 2); //Sum = 105

// Повернення результату
let sum = (x, y) => x + y;
console.log(sum(1, 2)); // 3
console.log(sum(4, 3)); // 7
console.log(sum(102, 5)); // 107


// Функція з кількох інструкцій

const square = n => {
     let result = n * n;
     console.log(result);
}
  
square(5); // 25
square(6); // 36
```