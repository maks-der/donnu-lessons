// if
let num = 24;
if (num > 0) console.log("Число більше 0");

if (num > 0)
    console.log("Число більше 0");

if (num > 0 && num < 100) {
    console.log("Число більше 0 та менше 100");
}


// else
if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число менше 30");
}

if (num > 30) console.log("Число більше 30");
else console.log("Число менше 30");


// else if
if (num > 0) {
    console.log("Число більше 0");
} else if (num > 10) {
    console.log("Число більше 10");
} else if (num > 20) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

// num = 20;

if (num > 0 && num < 10) {
    console.log("Число більше 0");
} else if (num > 10 && num < 20) {
    console.log("Число більше 10");
} else if (num > 20 && num < 30) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

if (num > 0 && num <= 10) {
    console.log("Число більше 0");
} else if (num > 10 && num <= 20) {
    console.log("Число більше 10");
} else if (num > 20 && num <= 30) {
    console.log("Число більше 20");
} else if (num > 30) {
    console.log("Число більше 30");
} else {
    console.log("Число меньше 0");
}

// switch
switch(num){
    case 10 : 
        console.log("Number is 10");
        break;
    case 20 : 
        console.log("Number is 20");
        break;
    case 30 : 
        console.log("Number is 30");
        break;
    default: 
        console.log("Number is unknown");
        break;
}

// 

// Examples: