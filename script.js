class Calculator {

    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }


    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined;
    }
    delete() {
        this.currentOperand =
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    operate(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }
   
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = add(prev, current)
                break
            case '-':
                computation = sub(prev, current)
                break
            case '/':
                computation = div(prev, current)
                break
            case 'x':
                computation = mult(prev, current)
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    updateDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
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
const numberButtons = document.querySelectorAll('[data-number]');//done
const operationButtons = document.querySelectorAll('[data-operation]');//done
const equalButton = document.querySelector('[data-equals]');//done
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');//done
const currentOperandTextElement = document.querySelector('[data-current-operand]');//done
const previousOperandTextElement = document.querySelector('[data-previous-operand]');//done

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operate(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()

})
deleteButton.addEventListener('click',button =>{
    calculator.delete()
    calculator.updateDisplay()
})
