import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
// import { faker } from '@faker-js/faker';

// setDefaultTimeout(30_000);

let browser: Browser;
let context: any;
let page: Page;

// Given('I navigate to the WebDriver University Contact Us page', async () => {
//     console.log('Navigating to the WebDriver University Contact Us page');
//     browser = await chromium.launch({ headless: false });
//     context = await browser.newContext(); // {viewport: { width: 1280, height: 720 }}
//     page = await context.newPage();
//     await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html', {
//       waitUntil: 'domcontentloaded',
//     });
//     await page.locator('input[name="first_name"]').waitFor({ state: 'visible' });

// });

// When('I enter the following contact information:', async (dataTable) => {
//   console.log('Entering contact information');
//   // const data = dataTable.rowsHash();
//   // await page.fill('input[name="first_name"]', data['First Name']);
//   // await page.fill('input[name="last_name"]', data['Last Name']);
//   // await page.fill('input[name="email"]', data['Email']);
//   // await page.fill('textarea[name="message"]', data['Message']);
//   await page.fill('input[name="first_name"]', "John");
//   await page.getByPlaceholder('Last Name').fill('Doe');
//   await page.fill('input[name="last_name"]', "Doe");
//   await page.fill('input[name="email"]', "john.doe@example.com");
//   await page.fill('textarea[name="message"]', "Hello, this is a test message.");
// });

Given('I navigate to the WebDriver University Contact Us page', async () => {
    console.log('Navigating to the WebDriver University Contact Us page');
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext(); // {viewport: { width: 1280, height: 720 }}
    page = await context.newPage();
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');

});

// When('I enter the following contact information:', {timeout: 60 * 3000}, async (dataTable) => {
//   console.log('Entering contact information');
//   // const data = dataTable.rowsHash();
//   // await page.fill('input[name="first_name"]', data['First Name']);
//   // await page.fill('input[name="last_name"]', data['Last Name']);
//   // await page.fill('input[name="email"]', data['Email']);
//   // await page.fill('textarea[name="message"]', data['Message']);
//   await page.fill('input[name="first_name"]', "John");
//   await page.getByPlaceholder('Last Name').fill('Doe');
//   await page.fill('input[name="last_name"]', "Doe");
//   await page.fill('input[name="email"]', "john.doe@example.com");
//   await page.fill('textarea[name="message"]', "Hello, this is a test message.");
// });

// When('I enter the following contact information:', async (dataTable) => {
//   console.log('Entering contact information');
//   // const data = dataTable.rowsHash();
//   // await page.fill('input[name="first_name"]', data['First Name']);
//   // await page.fill('input[name="last_name"]', data['Last Name']);
//   // await page.fill('input[name="email"]', data['Email']);
//   // await page.fill('textarea[name="message"]', data['Message']);
//   await page.fill('input[name="first_name"]', "John");
//   await page.getByPlaceholder('Last Name').fill('Doe');
//   await page.fill('input[name="last_name"]', "Doe");
//   await page.fill('input[name="email"]', "john.doe@example.com");
//   await page.fill('textarea[name="message"]', "Hello, this is a test message.");
// });

// When('I enter the following contact information:', async (dataTable) => {
//   console.log('Entering contact information');
//   // const data = dataTable.rowsHash();
//   // await page.fill('input[name="first_name"]', data['First Name']);
//   // await page.fill('input[name="last_name"]', data['Last Name']);
//   // await page.fill('input[name="email"]', data['Email']);
//   // await page.fill('textarea[name="message"]', data['Message']);
//   await page.fill('input[name="first_name"]', faker.person.firstName());
//   await page.getByPlaceholder('Last Name').fill(faker.person.lastName());
//   await page.fill('input[name="last_name"]', faker.person.lastName());
//   await page.fill('input[name="email"]', faker.internet.email());
//   await page.fill('textarea[name="message"]', faker.lorem.sentence());
// });

// When('I click the Submit button', async () => {
//   console.log('Clicking the Submit button');
//   await page.click('input[type="submit"]');
// });

//  Then('I should see a successful submission message', async () => {
//    console.log('Checking for successful submission message');
//    const successMessage = await page.textContent('#contact_reply h1');
//    if (successMessage !== 'Thank You for your Message!') {
//      throw new Error('Submission was not successful');
//    }
//  });
