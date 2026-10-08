import {
    Given,
    When,
    Then
} from '@cucumber/cucumber';

import { chromium, Browser, Page } from 'playwright';

import { ContactFormPage }
    from '../pages/ContactFormPage';

import testData
    from '../test-data/users.json';

let browser: Browser;
let page: Page;
let contactFormPage: ContactFormPage;


Given(
    'I open the contact form',
    async function () {

        browser = await chromium.launch({
            headless: false
        });

        page = await browser.newPage();

        contactFormPage =
            new ContactFormPage(page);

        await contactFormPage.open();
    }
);

When(
    'I fill the contact form using {string} test data',
    async function (userKey: string) {
        console.log('Filling the contact form with test data for user:', userKey);
        console.log('Retrieving test data for json:', testData);
        console.log('Retrieving test data for user:', JSON.stringify(testData));
        const data =
            testData[
                userKey as keyof typeof testData
            ];

        if (!data) {
            throw new Error(
                `Test data '${userKey}' not found`
            );
        }

        console.log('Test Data:', data);

        await contactFormPage.fillForm(data);
    }
);


// When(
//     'I submit the contact form',
//     async function () {

//         await contactFormPage.submitForm();
//     }
// );


// Then(
//     'the form should be submitted successfully',
//     async function () {

//         await page.waitForLoadState();

//         console.log(
//             'Form submitted successfully'
//         );

//         await browser.close();
//     }
// );
