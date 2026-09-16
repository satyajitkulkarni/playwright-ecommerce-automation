import apiProducts from '../../test-data/api-products.json';
import { Product } from '../types/apiTypes';

interface ApiTestData {
    createProduct: Product;
    updateProduct: Product;
    patchProduct: Partial<Product>;
}

export const apiTestData = apiProducts as ApiTestData;