import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ProductsPage extends BasePage {

    readonly pageTitle: Locator;
    readonly shoppingCartLink: Locator;
    readonly productItems: Locator;

    constructor(page: Page) {
        super(page);
        this.pageTitle = page.locator('.title');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.productItems = page.locator('.inventory_item');
    }
    async verifyProductsPage(): Promise<void> {
        await expect(this.pageTitle).toHaveText("Products");
    }
    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    async addProductToCart(productName: string): Promise<void> {
        const product = this.page.locator('.inventory_item').filter({
            hasText: productName,
        });
        await product.getByRole('button', { name: 'Add To Cart' }).click();
    }
    async openCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }

}