type Product = {
    _id: string;
    name: string;
    quantity: number;
    saled_count: number;
    price: number;
    discount_value: number;
    images: Array<string>;
    category_detail_id: string;
    description: string;
    created_at: string;
    updated_at: string;
};

export default Product;
