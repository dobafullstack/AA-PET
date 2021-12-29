import ProductModel from './ProductModel';

export type UpdateCart = {
    _id: string;
    name: string;
    count: 1 | -1
}

export type CartProduct = {
    product: ProductModel;
    count: number;
};
type CartModel = {
    products: CartProduct[];
    total: number;
};

export default CartModel;
