listenButtons()
const displayResult = document.querySelector(".display__prompt--result")
const displayCurrent = document.querySelector(".display__prompt--current")

function listenButtons() {
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((button) => button.addEventListener("click", operand))
}

function operand(e) {

}

function operate(e) {
    let input = e.target.innerText;
    let operation = /[/x+-]/;
    if (input == "AC") {return displayResult.textContent = ""}
    if (input == "C") {return displayResult.textContent = displayResult.textContent.slice(0, -1)}
    if (operation.test(input)) {return console.log("operation input")}
}

function changeDisplay() {}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}