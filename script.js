// Declarations
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// Ask user for input
for (let i = 0; i < 5; i++) {
    let firstValue = parseFloat(prompt("Enter a first"))
    let secondValue = parseFloat(prompt("Enter a second"))
    let operator = prompt("Select which operation")
}

// returns the calculated value
function operate(firstValue, secondValue, operator) {
    if (operator == "+") {
        return add(firstValue, secondValue);
    } else if (operator == "-") {
        return substract(firstValue, secondValue);
    } else if (operator == "x") {
        return multiply(firstValue, secondValue);
    } else if (operator == "/") {
        return divide(firstValue, secondValue);
}}