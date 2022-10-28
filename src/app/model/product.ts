export interface Product {
    id: number;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitInStock: number;
    categoryId: number;
    dateCreated: string;
    lastUpdated: string;
}
