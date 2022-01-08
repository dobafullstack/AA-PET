import Product from "./Product";

type Bill = {
    _id: string;
    total: number;
    products: {
        product: Product;
        quantity: number;
    }[];
    created_at: string;
    updated_at: string;
};

export default Bill;
