const { Algebra } = require('./algebra');

describe('Test class Algebra', () => {
    describe('sum() function', () => {
        it('should return proper result', () => {
            expect(Algebra.sum(0,0)).toBe(0);
            expect(Algebra.sum(1,0)).toBe(1);
            expect(Algebra.sum(0,1)).toBe(1);
            expect(Algebra.sum(2,2)).toBe(4);
            expect(Algebra.sum(-2,2)).toBe(0);
            expect(Algebra.sum(-2,-2)).toBe(-4);
        });
    });

    describe('sub() function', () => {
        it('should return proper result', () => {
            expect(Algebra.sub(0,0)).toBe(0);
            expect(Algebra.sub(1,0)).toBe(1);
            expect(Algebra.sub(0,1)).toBe(-1);
            expect(Algebra.sub(2,2)).toBe(0);
            expect(Algebra.sub(-2,2)).toBe(-4);
            expect(Algebra.sub(-2,-2)).toBe(0);
        });
    });

    describe('mult() function', () => {
        it('should return proper result', () => {
            expect(Algebra.mult(0,0)).toBe(0);
            expect(Algebra.mult(1,0)).toBe(0);
            expect(Algebra.mult(0,1)).toBe(0);
            expect(Algebra.mult(2,2)).toBe(4);
            expect(Algebra.mult(3,3)).toBe(9);
            expect(Algebra.mult(5,5)).toBe(25);
            expect(Algebra.mult(-5,5)).toBe(-25);
            expect(Algebra.mult(-5,-5)).toBe(25);
        });
    });

    describe('div() function', () => {
        it('should return proper result', () => {
            expect(Algebra.div(0,1)).toBe(0);
            expect(Algebra.div(2,2)).toBe(1);
            expect(Algebra.div(-2,2)).toBe(-1);
            expect(Algebra.div(-2,-2)).toBe(1);
            expect(Algebra.div(3,3)).toBe(1);
            expect(Algebra.div(625,5)).toBe(125);
            expect(Algebra.div(81,9)).toBe(9);
        });

        it('should throw error if user try to divide on 0', () => {
            expect(() => Algebra.div(0,0)).toThrowError();
            expect(() => Algebra.div(2,0)).toThrowError();
        });
    });
});