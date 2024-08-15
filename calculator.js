// Calculator Display
let numberSection = document.querySelector("#number_section")
let answerSection = document.querySelector("#answer_section")
/* 
Calculator Buttons
*/
let clearButton = document.querySelector("#clear_button")
let deleteButton = document.querySelector("#delete_button")

let numberButtons = document.querySelectorAll(".num")
let operatorButtons = document.querySelectorAll(".operator")
let equalsButton = document.querySelector("#equals")

// Needed elements for a calculator operation 
let currentNum = "";
let num1;
let num2;
let operator;

// Calculator operators
const add = ((a, b) => {
    return ((Number(a) * 1000) + (Number(b) * 1000)) / 1000
});
const subtract = ((a, b) => {
    return ((a * 1000) - (b * 1000)) / 1000
});
const multiply = ((a, b) => {
    return ((a * 1000) * (b * 1000)) / 1000000
});
const divide = ((a, b) => {
    return ((a * 1000) / (b * 1000)) / 1000000
});

// Calculates the equation based on the given elements
function equals() {
    let answer;
    switch(operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
    }

    return answer
};

/*
Event Listeners for the Calculator Buttons
*/

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNum += button.id;
        numberSection.textContent += button.id;
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.id;
        num1 = currentNum;
        currentNum = "";
        numberSection.textContent = "";
        answerSection.textContent = "";
    })
});

equalsButton.addEventListener("click", () => {
    num2 = currentNum;
    answerSection.textContent = equals();
    currentNum = equals();
});