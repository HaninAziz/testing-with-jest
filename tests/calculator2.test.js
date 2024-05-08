const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../src/calculator.html';
const defaultTimeout = 10000;
let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('should subtract two numbers correctly', async () => {
    await driver.findElement(By.id('num2')).click(); // Click '2'
    await driver.findElement(By.id('subtract')).click(); // Click '-'
    await driver.findElement(By.id('num1')).click(); // Click '1'
    await driver.findElement(By.id('equals')).click(); // Click '='
    let result = await driver.findElement(By.id('display')).getText();
    expect(result).toEqual('1'); // Check if the display shows '1' after subtracting 1 from 2
});
