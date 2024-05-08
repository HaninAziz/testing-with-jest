const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;

// This runs before we start the tests to ensure Firefox is up and running
beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// This runs after all the tests to close Firefox
afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('Pushing an element onto the stack updates the top of the stack', async () => {
    // Click the button to push an element onto the stack
    let pushButton = await driver.findElement(By.id('push'));
    await pushButton.click();

    // Enter the value to be pushed onto the stack in the prompt box
    let alert = await driver.switchTo()alert();
    await alert.sendKeys("Bananer");
    await alert.accept();

    // Get the text of the top of the stack element
    let topOfStack = await driver.findElement(By.id('top_of_stack')).getText();

    // Verify that the top of the stack is updated with the pushed element
    expect(topOfStack).toEqual("Bananer");
});
