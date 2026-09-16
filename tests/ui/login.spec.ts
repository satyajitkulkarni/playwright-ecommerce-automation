import { test, expect } from "../../src/fixtures/testFixtures";
//import { LoginPage } from "../../src/pages/LoginPage";
import { testUsers } from "../../src/utils/testData";

test.describe('Login functionality', () => {

    test(
        'valid user should be able to login',
        {
            tag: '@smoke',
        },
        async ({ loginPage, page }) => {

            await loginPage.navigate();

            await loginPage.login(
                testUsers.validUser.username,
                testUsers.validUser.password,
            );

            await expect(page).toHaveURL(/inventory/);
        },
    );

    test(
        'locked user should not be able to login',
        {
            tag: '@regression',
        },
        async ({ loginPage }) => {

            await loginPage.navigate();

            await loginPage.login(
                testUsers.lockedUser.username,
                testUsers.lockedUser.password,
            );

            await expect(loginPage.errorMessage).toBeVisible();
        },
    );
});