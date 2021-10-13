export default interface CreateOrderInput {
    user_id: string;
    products: ProductField[];
    delivery_info: {
        name: string;
        address: string;
        phone: string;
    };
    payment_method: string;
    delivery_method: string;
    totalPrice: number;
}

interface ProductField {
    product_id: string;
    count: number;
}