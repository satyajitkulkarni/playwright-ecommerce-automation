import { APIRequestContext, expect, } from '@playwright/test';

export class ApiClient {
    protected readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(endpoint: string) {
        return await this.request.get(
            `${process.env.API_BASE_URL}${endpoint}`,
        );
    }

    async post(
        endpoint: string,
        data: unknown,
    ) {
        return await this.request.post(
            `${process.env.API_BASE_URL}${endpoint}`,
            {
                data,
            },
        );
    }

    async put(
        endpoint: string,
        data: unknown,
    ) {
        return await this.request.put(
            `${process.env.API_BASE_URL}${endpoint}`,
            {
                data,
            },
        );
    }

    async delete(endpoint: string) {
        return await this.request.delete(
            `${process.env.API_BASE_URL}${endpoint}`,
        );
    }

    async patch(
        endpoint: string,
        data: unknown,
    ) {
        return await this.request.patch(
            `${process.env.API_BASE_URL}${endpoint}`,
            {
                data,
            },
        );
    }

    async expectSuccess(response: {
        ok(): boolean;
        status(): number;
    }): Promise<void> {
        expect(response.ok()).toBeTruthy();
    }
}