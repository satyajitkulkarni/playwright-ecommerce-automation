import { test, expect, } from '@playwright/test';
import { ProductsApi } from '../../src/api/ProductsApi';
import { Product, } from '../../src/types/apiTypes';

test.describe('Products API', () => {

    test('should retrieve products', async ({ request }) => {

        const productsApi = new ProductsApi(request);

        const response =
            await productsApi.getProducts();

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const products = await response.json();

        expect(Array.isArray(products)).toBeTruthy();
        expect(products.length).toBeGreaterThan(0);
    });


    test('should create a product', async ({ request }) => {

        const productsApi = new ProductsApi(request);

        const product: Product = {
            title: 'Playwright Automation Product',
            body: 'Created by API automation',
            userId: 1,
        };

        const response =
            await productsApi.createProduct(product);

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody.title).toBe(product.title);
        expect(responseBody.body).toBe(product.body);
        expect(responseBody.userId).toBe(product.userId);
    });


    test('should update a product', async ({ request }) => {

        const productsApi = new ProductsApi(request);

        const updatedProduct: Product = {
            id: 1,
            title: 'Updated Automation Product',
            body: 'Updated using API automation',
            userId: 1,
        };

        const response =
            await productsApi.updateProduct(
                1,
                updatedProduct,
            );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.title)
            .toBe(updatedProduct.title);

        expect(responseBody.body)
            .toBe(updatedProduct.body);
    });


    test('should delete a product', async ({ request }) => {

        const productsApi = new ProductsApi(request);

        const response =
            await productsApi.deleteProduct(1);

        expect(response.status()).toBe(200);
    });

    test('should partially update a product', async ({ request }) => {
        const productsApi = new ProductsApi(request);

        const patchData = {
            title: 'Partially Updated Product',
        };

        const response = await productsApi.patchProduct(1, patchData);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.title).toBe(patchData.title);
    });

});