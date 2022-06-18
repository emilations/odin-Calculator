// Declarations


let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let display = {
    displayUpper: document.querySelector(".display__prompt--result"),
    displayLower: document.querySelector(".display__prompt--current"),
    update: function () {
        this.displayLower.textContent = memory.currentNumber;
        this.displayUpper.textContent = `${memory.previousNumber} ${memory.storedOperator}`;
    }
}

let memory = {
    currentNumber: "",
    previousNumber: "",
    storedOperator: "",
}

listenButtons();

// Listen to input from user
function listenButtons() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => button.addEventListener("click", (e) => buttonPress(e, memory)))
}

function buttonPress(e, memory) {
    let input = e.target.innerText;
    // if clear is selected
    if (input == "AC") {
        memory.currentNumber = "";
        memory.previousNumber = "";
        memory.storedOperator = ""
    } else if (input == "C") {
        memory.currentNumber = memory.currentNumber.slice(0, -1);
    // if a number is selected
    } else if (input == "." && !(/[.]/g.test(memory.currentNumber))) {
        memory.currentNumber += input;
    } else if (/[0-9]/.test(input)) {
        memory.currentNumber += input;
    // if an operator is selector
    } else if (/[=\-\+/x]/.test(input)) {
        if (!((memory.currentNumber == "" && memory.previousNumber == "") || (memory.currentNumber !== "" && memory.previousNumber !== "" && memory.storedOperator == "="))) {
            if (memory.currentNumber == "" && memory.previousNumber !== "") {
                memory.storedOperator = input;
            } else if (memory.previousNumber == "") {
                memory.previousNumber = memory.currentNumber;
                memory.storedOperator = input;
                memory.currentNumber = "";
            } else {
                memory.previousNumber = operate(parseFloat(memory.previousNumber), parseFloat(memory.currentNumber), memory.storedOperator)
                memory.storedOperator = input;
                memory.currentNumber = "";
            }
        }
    }
    display.update()
}



// Returns the calculated value
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


