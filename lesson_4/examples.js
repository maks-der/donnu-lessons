// 1. Functions on objects
const user = {
    name: "Alex",
    sayHello: function () {
        console.log("Hello! I am", this.name);
    }
};

user.sayHello();


// 2. Bubble sort 
function bubleSort(array) {
    for (var i = 0; i < array.length; i++) {

        // Last i elements are already in place 
        for (var j = 0; j < (array.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {

                // If the condition is true then swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array;
}

const res1 = bubleSort([3,21,2,1]);
const res2 = bubleSort([ 2, 6, 9, 15, 20]);
const res3 = bubleSort([9, 10, 14, 16, 18]);
const res4 = bubleSort([1, 10, 11, 15, 19, 8, 9, 10, 15, 20]);
const res5 = bubleSort([7, 13, 15, 18, 19]);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

