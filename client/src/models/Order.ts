import ProductModel from './ProductModel';

type OrderModel = {
    _id: string;
    userId?: string;
    delivery: {
        name: string;
        address: string;
        phone: string;
        status: string;
    };
    payment: {
        status: string;
        method: string;
    };
    description: string;
    total: number;
    products: {
        product: ProductModel;
        quantity: number;
    }[];
    created_at: string;
    updated_at: string;
};

export default OrderModel;