import ProductType from "./ProductType";
import UserType from "./UserType";

interface OrderProductType{
    product: ProductType;
    count: number;
}

export default interface OrderType {
    _id: string;
    products: OrderProductType[];
    user_id: UserType;
    status: string;
    createdAt: Date;
}