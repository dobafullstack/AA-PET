import Product from "./Product";
import User from "./User";

type Order = {
    _id: string;
    total: number;
    description: string;
    delivery: {
        name: string;
        phone: string;
        address: string;
        status: "pending" | "canceled" | "success";
    };
    payment: {
        status: boolean;
        method: "cash" | "paypal";
    };
    products: {
        product: Product;
        quantity: number;
    }[];
    userId: User | null | undefined;
    haveInBill: boolean;
    created_at: string;
    updated_at: string;
};

export default Order;
