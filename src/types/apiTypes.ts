export interface Product {
    id?: number;
    title: string;
    body: string;
    userId: number;
}

export interface ProductResponse extends Product {
    id: number;
}