// Function to append values to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    } 
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Function to calculate the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Using eval to evaluate the mathematical expression entered by the user
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
