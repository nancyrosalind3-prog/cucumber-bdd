import { Page, Locator } from '@playwright/test';

export class ContactFormPage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly message: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator('input[name="first_name"]');
        this.lastName = page.locator('input[name="last_name"]');
        this.email = page.locator('input[name="email"]');
        this.phone = page.locator('input[name="phone"]');
        this.message = page.locator('textarea[name="message"]');

        this.submitButton =
            page.getByRole('button', { name: /submit/i });
    }

    async open() {
        await this.page.goto(
            'https://www.webdriveruniversity.com/Contact-Us/contactus.html'
        );
    }

    async fillForm(data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    }) {

        await this.firstName.fill(data.firstName);

        await this.lastName.fill(data.lastName);

        await this.email.fill(data.email);

        // Use only if the actual form contains phone
        if (await this.phone.count()) {
            await this.phone.fill(data.phone);
        }

        await this.message.fill(data.message);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}