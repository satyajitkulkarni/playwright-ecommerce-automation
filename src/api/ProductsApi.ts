import { APIRequestContext } from '@playwright/test';
import { ApiClient } from './ApiClient';
import { Product, ProductResponse, } from '../types/apiTypes';

export class ProductsApi extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getProducts() {
        return await this.get('/posts');
    }

    async getProduct(id: number) {
        return await this.get(`/posts/${id}`);
    }

    async createProduct(data: unknown) {
        return await this.post('/posts', data);
    }

    async updateProduct(
        id: number,
        data: Product,
    ) {
        return await this.put(`/posts/${id}`, data);
    }

    async deleteProduct(id: number) {
        return await this.delete(`/posts/${id}`);
    }
    
    async patchProduct(id: number, data: Partial<Product>) {
        return await this.patch(`/posts/${id}`, data);
    }
}