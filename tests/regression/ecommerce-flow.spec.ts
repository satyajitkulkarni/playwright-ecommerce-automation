import { test, expect } from '../../src/fixtures/testFixtures';
import { testUsers } from '../../src/utils/testData';
import { checkoutTestData } from '../../src/utils/checkoutData';

test.describe('E-commerce purchase flow', () => {

    test('user should be able to complete a purchase', {
        tag: '@smoke',
    }, async ({
        loginPage,
        productsPage,
        cartPage,
        checkoutPage,
    }) => {

        // 1. Login
        await loginPage.navigate();

        await loginPage.login(
            testUsers.validUser.username,
            testUsers.validUser.password,
        );

        // 2. Verify Products page
        await productsPage.verifyProductsPage();

        const productCount =
            await productsPage.getProductCount();

        expect(productCount).toBeGreaterThan(0);

        // 3. Add product to cart
        const productName = checkoutTestData.product.name;

        await productsPage.addProductToCart(productName);

        // 4. Open cart
        await productsPage.openCart();

        // 5. Verify cart
        await cartPage.verifyCartPage();

        await cartPage.verifyProductInCart(productName);

        const cartItemCount =
            await cartPage.getCartItemCount();

        expect(cartItemCount).toBe(1);

        // 6. Checkout
        await cartPage.checkout();

        // 7. Enter customer information
        await checkoutPage.enterCustomerInformation(
            checkoutTestData.validCustomer.firstName,
            checkoutTestData.validCustomer.lastName,
            checkoutTestData.validCustomer.postalCode,
        );

        await checkoutPage.continueToOverview();

        // 8. Complete order
        await checkoutPage.finishOrder();

        // 9. Verify confirmation
        await checkoutPage.verifyOrderConfirmation();
    });
});