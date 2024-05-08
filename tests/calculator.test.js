const Calculator = require('../src/calculator');
const { JSDOM } = require('jsdom');

describe('Calculator tests', () => {
   test('subtractAndUpdateDisplay should update display with correct result', () => {
      // Set up a fake DOM environment
      const dom = new JSDOM(`
        <html>
          <body>
            <div id="display"></div>
            <div id="num1">5</div>
            <div id="num2">2</div>
            <button id="subtract">Subtract</button>
          </body>
        </html>
      `);
      
      // Mock the global window and document objects
      global.window = dom.window;
      global.document = dom.window.document;

      // Import the function to test
      const { subtractAndUpdateDisplay } = require('../src/calc');

      // Call the function to be tested
      subtractAndUpdateDisplay();

      // Check if display was updated correctly
      expect(document.getElementById('display').textContent).toBe('3');
   });

   test('subtractAndUpdateDisplay should handle negative result', () => {
      // Set up a fake DOM environment
      const dom = new JSDOM(`
        <html>
          <body>
            <div id="display"></div>
            <div id="num1">2</div>
            <div id="num2">5</div>
            <button id="subtract">Subtract</button>
          </body>
        </html>
      `);
      
      // Mock the global window and document objects
      global.window = dom.window;
      global.document = dom.window.document;

      // Import the function to test
      const { subtractAndUpdateDisplay } = require('../src/calc');

      // Call the function to be tested
      subtractAndUpdateDisplay();

      // Check if display was updated correctly
      expect(document.getElementById('display').textContent).toBe('-3');
   });
});
