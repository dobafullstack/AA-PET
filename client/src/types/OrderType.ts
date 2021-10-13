import ProductType from "./ProductType";
import UserType from "./UserType";
import CreateOrderInput from './CreateOrderInput'

interface OrderProductType{
    product_id: ProductType;
    count: number;
}

export default interface OrderType {
    _id: string;
    user_id: string;
    products: OrderProductType[];
    delivery_info: {
        name: string;
        address: string;
        phone: string;
    };
    payment_method: string;
    delivery_method: string;
    totalPrice: number;
    status: string;
    createdAt: Date;
    code: string;
}