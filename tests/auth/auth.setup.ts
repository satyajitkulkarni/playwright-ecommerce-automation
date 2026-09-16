import { test as setup, expect } from '@playwright/test';
import { testUsers } from '../../src/utils/testData';

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill(
        testUsers.validUser.username,
    );

    await page.getByPlaceholder('Password').fill(
        testUsers.validUser.password,
    );

    await page.getByRole('button', {
        name: 'Login',
    }).click();

    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({
        path: authFile,
    });
});