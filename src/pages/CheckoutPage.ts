import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.firstNameInput = page.getByPlaceholder('First Name');

        this.lastNameInput = page.getByPlaceholder('Last Name');

        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');

        this.continueButton = page.getByRole('button', {
            name: 'Continue',
        });

        this.finishButton = page.getByRole('button', {
            name: 'Finish',
        });

        this.confirmationMessage = page.locator('.complete-header');
    }

    async enterCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string,
    ): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToOverview(): Promise<void> {
        await this.continueButton.click();
    }

    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }

    async verifyOrderConfirmation(): Promise<void> {
        await expect(this.confirmationMessage).toHaveText(
            'Thank you for your order!',
        );
    }
}