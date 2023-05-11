
/* ----- Інтерфейси ----- */
interface IInfo {
    title?: string;
    description?: string;
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
abstract class GeometricFigure implements IShape {
    // constructor (
    //     private title: string,
    // ) {}

    getPerimeter(): number {
        return 0;
    }
    getArea(): number {
        return 0;
    }
    // print(): void {
    //     console.log(`Figure: ${this.title}\nPerimeter: ${this.getPerimeter()}\nArea: ${this.getArea()}`);
    // }
}


/* ----- Успадкування ----- */
class Rectangle extends GeometricFigure {
    x: number = 0;
    y: number = 0;

    constructor(x: number, y: number) {
        super();

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


/* ----- Модифікатори доступу ----- */
class Triangle extends GeometricFigure {
    private a: number = 0;
    private b: number = 0;
    private c: number = 0;

    constructor(a: number, b: number, c: number) {
        super();

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

class Circle extends GeometricFigure {
    constructor(
        private radius: number,
    ) {
        super();
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    }

    getPerimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}


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
