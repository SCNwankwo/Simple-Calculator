let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    sumEl.textContent = num1 + num2
}
function substract() {
    sumEl.textContent = num1 - num2
}
function divide() {
    sumEl.textContent = num1 / num2
}
function multiply() {
    sumEl.textContent = num1 * num2
}



