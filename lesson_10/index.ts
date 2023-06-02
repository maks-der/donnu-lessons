
/* ----- Інтерфейси ----- */
interface IInfo {
    title?: string;
    description?: string;
}

const info: IInfo = {
    title: "Title",
    description: "This is description"
}

interface IShape extends IInfo {
    getPerimeter(): number;
    getArea(): number;
}

const shape: IShape = {
    title: "Circle",
    description: "Round figure two dimensional geometric figure",
    getPerimeter: () => 10,
    getArea: () => 10,
}

/* ----- Абстрактні класи ----- */

/* 
                     |- Rectangle  
    GeometricFigure -|- Triangle
                     |- Circle
*/
abstract class GeometricFigure implements IShape {
    // message: string = "Hi, Im GeometricFigure!";

    constructor (
        public title: string,
    ) {}

    public getPerimeter(): number {
        return 0;
    }
    public getArea(): number {
        return 0;
    }
    public print(): void {
        console.log(`Figure: ${this.title}\nPerimeter: ${this.getPerimeter()}\nArea: ${this.getArea()}\n`);
    }
}


/* ----- Успадкування ----- */
class Rectangle extends GeometricFigure {
    x: number = 0;
    y: number = 0;

    constructor(x: number, y: number) {
        super("Rectangle");

        this.x = x;
        this.y = y;
    }

    getArea(): number {
        return this.x * this.y;
    }

    getPerimeter(): number {
        return (this.x * 2) + (this.y * 2)
    }
}

// const rec1: Rectangle = new Rectangle(10, 12);

// console.log(rec1.x);
// console.log(rec1.y);
// console.log(rec1.getArea());
// console.log(rec1.getPerimeter());


/* ----- Модифікатори доступу ----- */
class Triangle extends GeometricFigure {
    private a: number = 0;
    private b: number = 0;
    private c: number = 0;

    constructor(a: number, b: number, c: number) {
        super("Triangle");

        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getArea(): number {
        return (this.a + this.b + this.c) / 2;
    }

    public getPerimeter(): number {
        return this.a + this.b + this.c;
    }
}

// const myTriangle: Triangle = new Triangle(3,4,5);


// console.log(myTriangle.getArea());
// console.log(myTriangle.getPerimeter());


class Circle extends GeometricFigure {
    constructor(
        public radius: number,
    ) {
        super("Circle");
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    }

    getPerimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}

// const circle = new Circle(5.5);
// console.log(circle.getArea());
// console.log(circle.getPerimeter());
const rec = new Rectangle(45,78);
const tri = new Triangle(7,32,14);
const cir = new Circle(78);

rec.print();
tri.print();
cir.print();

class BaseClass {
    public readonly title = "I'm base class!"; 

    constructor(
        private message: string
    ) { }

    protected MessageForDerivedClass(): string {
        return this.message;
    }
}

class DerivedClass extends BaseClass {
    constructor(baseMessage: string) {
        super(baseMessage);
    }

    public GetMessage() {
        return super.MessageForDerivedClass();
    }
}

const dClass = new DerivedClass("msg");
