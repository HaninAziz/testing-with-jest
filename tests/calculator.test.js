const Calculator = require('../src/calculator');

describe('Calculator tests', () => {
   test('subtract method should subtract two numbers and update display', () => {
      // Mocking the HTML elements and their inner text
      document.body.innerHTML = `
        <div id="display"></div>
        <div id="num1">5</div>
        <div id="num2">2</div>
        <button id="subtract">Subtract</button>
      `;
      
      // Import the function to test
      const { subtractAndUpdateDisplay } = require('../src/calc');

      // Call the function to be tested
      subtractAndUpdateDisplay();

      // Check if display was updated correctly
      expect(document.getElementById('display').textContent).toBe('3');
   });
});
