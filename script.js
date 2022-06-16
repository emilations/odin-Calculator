const displayResult = document.querySelector(".display__prompt--result");
const displayCurrent = document.querySelector(".display__prompt--current");
let accum = function(a){return a}
listenButtons();

function listenButtons() {
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => button.addEventListener("click", buttonPress))
}

function buttonPress(e) {
    let input = e.target.innerText
    if (input == "AC") {
        manageDisplay("both", "clear")
        accum = function(a){return a};
    } else if (input == "C") {manageDisplay("lower", "delete");
    } else if (/[0-9.]/.test(input)) {
        if(displayCurrent.textContent == "0") {
            manageDisplay("lower", "delete")
        }
        manageDisplay("lower", "add", input)
    } else if (/[=\-\+/x]/.test(input)) {operate(e)}
}

function operate(e) {
    let operator = e.target.innerText;
    let input = parseFloat(displayCurrent.textContent);
    console.log(input)
    let value = accum(input)
    switch (operator) {
        case "+":
            accum = function(a) {return add(value, a);}
            break;
        case "-":
            accum = function(a) {return substract(value, a);}
            break;
        case "x":
            accum = function(a) {return multiply(value, a);}
            break;
        case "/":
            accum = function(a) {return divide(value, a);}
            break;
        case "=":
            break;
        }
    manageDisplay("lower", "replace", "0")
    manageDisplay("upper", "replace", `${value} ${operator}`)
}

function manageDisplay(location, operation, content) {
    if (location == "upper") {
        if (operation == "replace") {displayResult.textContent = content;}
    } else if (location == "lower"){
        if (operation == "delete") {displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);}
        if (operation == "add") {displayCurrent.textContent += content;}
        if (operation == "replace") {displayCurrent.textContent = content;}
    } else if (location == "both" && operation == "clear"){
        displayResult.textContent = "0";
        displayCurrent.textContent = "0";
}}

function add(a, b) {return a + b;}
function substract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}