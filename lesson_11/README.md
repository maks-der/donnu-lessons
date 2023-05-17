# ООП. Класи і інтерфейси. Поліморфізм. Generic types та перевантаження методів.

## Зміст
1. Generic types (узагальнюючі типи)
1. Статичні поля та методи


#
## Принципи ООП:
1. Абстракція даних
1. Інкапсуляція
1. Успадкування
1. Поліморфізм
1. Композиція

#
## Generic types (узагальнюючі типи)
    
`TypeScript` є строго типізованою мовою, проте іноді треба побудувати функціонал так, щоб він міг використовувати дані будь-яких типів. У деяких випадках ми могли б використовувати тип `any`. Але для того, щоб конкретизувати тип, що повертається, ми можемо використовувати `Generic types`.

За допомогою виразу `<T>` ми вказуємо, що функція типізована певним типом `T`. Причому на момент написання функції ми можемо не знати, що це буде за `тип`. А при виконанні функції замість `Т` підставлятиметься `конкретний тип`.

```typescript
function returnValue<T>(value: T): T {
    return value;
}

const result1 = returnValue(123);
const result2 = returnValue('Hello Generics!');

console.log(result1);
console.log(result2);
```

Подібним чином можна використовувати узагальнені масиви:

```typescript
function arrayToStringList<T>(args: Array<T>): string {
    return args.join(", ");
}

const result3 = arrayToStringList<number>([1, 2, 34, 5]);
const result4 = arrayToStringList<string>(['windows', 'linux', 'macos']);

console.log(result3);
console.log(result4);
```


### Generic types в класах та інтерфейсах

Також Generic types можна використовувати у класах та інтерфейсах:

```typescript
// Інтерфейс, котрий описує тип з методом getId котрий повертає тип T
interface IUser<T> {
    getId(): T;
}

// Класс з властівістю id, котра є Generic типом
class User<T> implements IUser<T> {
    constructor(
        private id: T,
    ) { }

    public getId(): T {
        return this.id;
    }
}
```

#
## Статичні поля та методи
    
Крім звичайних полів та методів клас може мати `статичні`. `Статичні поля` та `методи` відносяться не до окремих об'єктів, а `загалом до класу`. І для звернення до статичних полів та методів застосовується ім'я класу.

Статичні поля та методи визначаються за допомогою ключового слова `static`.

Як і звичайні поля та статичні методи можуть мати `модифікатори доступу`.

Також статичні поля та методи можуть `успадковуватись`, що дозволяє звертатися до них через ім'я похідного класу.

```typescript
class MyMath {
    public static sum(...args: number[]): number {
        let result = 0;
        args.forEach((num) => {
            result += num;
        });
        return result;
    }

    public static multiply(...args: number[]): number {
        let result = 1;
        args.forEach((num) => {
            result *= num;
        });
        return result;
    }
}

const num1 = MyMath.sum(10,4,6,8,7,9);
const num2 =MyMath.multiply(2,2,2,2,2);
```