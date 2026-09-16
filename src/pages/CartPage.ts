import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    readonly pageTitle: Locator;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('.title');

        this.cartItems = page.locator('.cart_item');

        this.checkoutButton = page.getByRole('button', {
            name: 'Checkout',
        });
    }

    async verifyCartPage(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Your Cart');
    }

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async verifyProductInCart(productName: string): Promise<void> {
        await expect(
            this.cartItems.filter({
                hasText: productName,
            }),
        ).toBeVisible();
    }

    async checkout(): Promise<void> {
        await this.checkoutButton.click();
    }
}