// calculator2.test.js
const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../src/calculator.html';

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
});

test('should subtract two numbers correctly', async () => {
    // Click the buttons in the correct order: 2 - 1
    await driver.findElement(By.id('num2')).click(); // Click '2'
    await driver.findElement(By.id('subtract')).click(); // Click '-'
    await driver.findElement(By.id('num1')).click(); // Click '1'

    // Click '=' button to perform the subtraction
    await driver.findElement(By.id('equals')).click(); 

    // Retrieve the result from the display
    let result = await driver.findElement(By.id('display')).getText();

    // Print out the result to check its value
    console.log('Result:', result);

    // Check if the result is '-1' (since 2 - 1 = -1)
    expect(result).toEqual('-1');
});
