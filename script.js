class Calculator {
    
    constructor(operandText){
        this.operandText=operandText;
    }


    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function div(a, b) {

        return a / b;
    }
    function mult(a, b) {
        return a * b;
    }

    function operate(operation) {

    }
    function appendNumber(number) {
        operand = number;
    }
    function computer() {

    }
    function display() {

        operand.innerHTML = operand.innerHTML;
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');
const operand = document.querySelector('[data-current-operand]');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerHTML);
        display();
    })
})
