let currentInput = '';  

function clearDisplay() {  
    currentInput = '';  
    updateDisplay('0');  
}  

function clearAll() {  
    currentInput = '';  
    updateDisplay('0');  
}  

function appendToDisplay(value) {  
    if (currentInput === '0' && !isNaN(value)) {  
        currentInput = value; 
    } else {  
        currentInput += value;  
    }  
    updateDisplay(currentInput);  
}  

function calculateResult() {  
    try {  
        const result = eval(currentInput.replace('/', '/').replace('*', '*'));  
        updateDisplay(result);  
        currentInput = result.toString();  
    } catch (error) {  
        updateDisplay('Error');  
        currentInput = '';  
    }  
}  

function updateDisplay(value) {  
    document.getElementById('display').value = value;  
}  

function appendDecimal() {  
    if (!currentInput.includes('.')) {  
        currentInput += '.';  
        updateDisplay(currentInput);  
    }  
}  


let memory = 0;  

function memoryClear() {  
    memory = 0;  
}  

function memoryAdd() {  
    memory += parseFloat(currentInput);  
}  

