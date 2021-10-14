import ProductType from "./ProductType";

interface OrderProductType{
    product_id: ProductType;
    count: number;
}

type StatusType = "pending" | "success" | "canceled";

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
    status: StatusType;
    createdAt: Date;
    code: string;
}