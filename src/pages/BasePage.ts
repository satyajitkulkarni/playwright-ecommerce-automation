import { Page } from "@playwright/test";
export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
    async getPageTitle(): Promise<String> {
        return this.page.title();
    }
    async GetCurrentUrl(): Promise<String> {
        return this.page.url();

    }
}