const Calculator = require('./calculator');

describe('Calculator tests', () => {
   test('add method should sum two string numbers', () => {
      const calc = new Calculator();
      expect(calc.add("2", "3")).toBe(5);  // This will fail initially
   });
});
