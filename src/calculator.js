
// Function to perform subtraction and update the display
function subtractAndUpdateDisplay() {
    let display = document.getElementById('display');
    let num1 = parseInt(document.getElementById('num1').innerText);
    let num2 = parseInt(document.getElementById('num2').innerText);
    let result = num1 - num2;
    display.textContent = result;
}

// Event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', subtractAndUpdateDisplay);
