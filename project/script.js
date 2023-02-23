
let number;
let a;
let b;

//// Create function that gets input from user and console logs

function calculate() {

    // prompt first number

    a = prompt("First number: ");

    // prompt second number 

    b = prompt("Second number: ");

    // Test functions with console.log

    console.log(add());
    console.log(subtract());
    console.log(multiply());
    console.log(divide());
}


// Create a function that does addition

function add() {
    number = Number(a) + Number(b);
    return number;
}


// Create a function that does subtraction

function subtract() {
    number = a - b;
    return number;
}


// Create a function that does multiplication

function multiply() {
    number = a * b;
    return number;
}

// Create a function that does division

function divide() {
    number = a / b;
    return number;
}


// Create function that calls functions to test them

calculate();






/*
function calculate(a, b) {
    const plus = a + b;
    const min = a - b;
    const div = a / b;
    const mult = a * b;
    

}

// amount += input;

*/