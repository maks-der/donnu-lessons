class Algebra {
    static sum(x, y) {
        return x + y;
    }

    static sub(x, y) {
        return x - y;
    }

    static mult(x, y) {
        return x * y;
    }

    static div(x, y) {
        if (y === 0) throw new Error('Divide on 0 not allowed!');
        return x / y;
    }
}

module.exports = { Algebra };
