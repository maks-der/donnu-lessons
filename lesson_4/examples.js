// 1. Functions on objects
const user = {
    name: "Alex",
    sayHello: function () {
        console.log("Hello! I am", this.name);
    }
};

user.sayHello();


// 2. Fibonachi array
function getFibonachi(length) {
    const result = []
    if (n === 0) result.push(0);

    if (n === 1) {
        return 1;
    } else {
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }

    return result;
}
var result = getFibonachi(8);
console.log(result);