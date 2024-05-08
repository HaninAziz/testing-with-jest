const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

async function testCalculatorAddition() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Change to the URL where your calculator app is hosted, e.g., 'http://localhost:3000'
        await driver.get('file:///Users/haninbarkawe/testing-with-jest/src/calculator.html');
        await driver.findElement(By.id('num1')).click();
        await driver.findElement(By.id('add')).click();
        await driver.findElement(By.id('num2')).click();
        await driver.findElement(By.id('equals')).click();
        let result = await driver.findElement(By.id('display')).getText();
        if (result !== '4') {  // This should fail as 1 + 2 = 3
            throw new Error('Assertion failed: Expected display to be 4');
        }
    } finally {
        await driver.quit();
    }
}

testCalculatorAddition().catch(err => console.error(err));
