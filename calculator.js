/* 
Calculator Body
*/

// Calculator Display
let numberSection = document.querySelector("#number_section")
let answerSection = document.querySelector("#answer_section")

// System Buttons
let clearButton = document.querySelector("#clear_button")
let deleteButton = document.querySelector("#delete_button")
let negativePositiveButton = document.querySelector("#negative_positive_button")

// Number Buttons
let numberButtons = document.querySelectorAll(".num")

// Operator Buttons and Equals Button
let operatorButtons = document.querySelectorAll(".operator")
let equalsButton = document.querySelector("#equals")

/* 
Calculator Logic
*/

// Needed variables for a calculator operation 
let positive = true;
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

// System Buttons
clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    currentNum = "";

    numberSection.textContent = "";
    answerSection.textContent = "";
});

deleteButton.addEventListener("click", () => {
    currentNum = currentNum.slice(0, currentNum.length - 1);
    numberSection.textContent = numberSection.textContent.slice(0, numberSection.textContent.length - 1);
});

negativePositiveButton.addEventListener("click", () => {
    if (positive == true) {
        currentNum = "-".concat(currentNum);
        numberSection.textContent = numberSection.textContent.slice(0, numberSection.textContent.length - (currentNum.length - 1));
        numberSection.textContent += currentNum;

        positive = false;
    } else {
        currentNum = currentNum.replace("-", "");
        numberSection.textContent = numberSection.textContent.slice(0, numberSection.textContent.length - (currentNum.length + 1));
        numberSection.textContent += currentNum;

        positive = true;
    };
});

// Number Buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNum += button.id;
        numberSection.textContent += button.id;
    })
});

// Operator Buttons and Equals Button
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.id;
        num1 = currentNum;
        currentNum = "";
        numberSection.textContent += button.id;
        answerSection.textContent = "";
    })
});

equalsButton.addEventListener("click", () => {
    num2 = currentNum;
    answerSection.textContent = equals();
    currentNum = equals();
    positive = true;
});