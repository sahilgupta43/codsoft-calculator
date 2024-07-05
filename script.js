let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operator = null;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay('0');
}

function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay(currentOperand || '0');
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay(currentOperand);
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculateResult();
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation;
    operator = null;
    previousOperand = '';
    updateDisplay(currentOperand);
}

function updateDisplay(value) {
    display.innerText = value;
}
