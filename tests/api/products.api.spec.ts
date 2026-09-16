import { test, expect, } from '@playwright/test';
import { ProductsApi } from '../../src/api/ProductsApi';
import { apiTestData } from '../../src/utils/apiTestData';

test.describe('Products API', () => {

    test('should retrieve products',
        {
            tag: '@smoke',
        }, async ({ request }) => {

            const productsApi = new ProductsApi(request);

            const response =
                await productsApi.getProducts();

            await productsApi.expectSuccess(response, 200);

            const products = await response.json();

            expect(Array.isArray(products)).toBeTruthy();
            expect(products.length).toBeGreaterThan(0);
        });


    test('should create a product',
        {
            tag: '@smoke',
        }, async ({ request }) => {

            const productsApi = new ProductsApi(request);

            const product = apiTestData.createProduct;

            const response =
                await productsApi.createProduct(product);

            await productsApi.expectSuccess(response, 201);

            const responseBody = await response.json();

            expect(responseBody.title).toBe(product.title);
            expect(responseBody.body).toBe(product.body);
            expect(responseBody.userId).toBe(product.userId);
        });


    test('should update a product',
        {
            tag: '@regression',
        }, async ({ request }) => {

            const productsApi = new ProductsApi(request);

            const updatedProduct = apiTestData.updateProduct;

            const response =
                await productsApi.updateProduct(
                    1,
                    updatedProduct,
                );

            await productsApi.expectSuccess(response, 200);

            const responseBody = await response.json();

            expect(responseBody.title)
                .toBe(updatedProduct.title);

            expect(responseBody.body)
                .toBe(updatedProduct.body);
        });


    test('should delete a product',
        {
            tag: '@regression',
        }, async ({ request }) => {

            const productsApi = new ProductsApi(request);

            const response =
                await productsApi.deleteProduct(1);

            await productsApi.expectSuccess(response, 200);
        });

    test('should partially update a product',
        {
            tag: '@regression',
        }, async ({ request }) => {
            const productsApi = new ProductsApi(request);

            const patchData = apiTestData.patchProduct;

            const response = await productsApi.patchProduct(1, patchData);

            await productsApi.expectSuccess(response, 200);

            const responseBody = await response.json();

            expect(responseBody.title).toBe(patchData.title);
        });

});