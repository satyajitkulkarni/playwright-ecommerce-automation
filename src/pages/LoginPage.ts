import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {
    //readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        //this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {
            name: 'Login',

        });
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(

        username: string,
        password: string,
    ): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
}


