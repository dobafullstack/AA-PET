import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import ProductType from '../../types/ProductType';

interface CartItemType {
    product: ProductType;
    count: number;
}
interface CartType {
    products: CartItemType[];
    totalPrice: number;
}

const initialState: CartType = {
    products: Boolean(localStorage.getItem('cart'))
        ? JSON.parse(localStorage.getItem('cart') as string).products
        : [],
    totalPrice: Boolean(localStorage.getItem('cart'))
        ? (JSON.parse(localStorage.getItem('cart') as string).totalPrice as number)
        : 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            if (state.products.length === 0) {
                //cart is null
                const newItem = {
                    product: payload as ProductType,
                    count: 1,
                };
                state.products.push(newItem);
            } else {
                //cart is not null
                const index = state.products.findIndex((item) => item.product._id === payload._id);

                if (index < 0) {
                    //item is not exist in cart
                    const newItem = {
                        product: payload as ProductType,
                        count: 1,
                    };
                    state.products.push(newItem);
                } else {
                    state.products[index].count += 1;
                }
            }
            state.totalPrice += payload.price;
            localStorage.setItem('cart', JSON.stringify(state));
            toast.success("Thêm vào giỏ hàng thành công")
        },
        updateCart(state, { payload }) {
            state.products[payload.index].count += payload.value;
            if (payload.value > 0) {
                state.totalPrice += state.products[payload.index].product.price;
            } else {
                state.totalPrice -= state.products[payload.index].product.price;
            }
            
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeCart(state, {payload}){
            state.totalPrice -= state.products[payload.index].product.price * state.products[payload.index].count
            state.products.splice(payload.index, 1)
            localStorage.setItem('cart', JSON.stringify(state))
            toast.error("Đã xóa sản phẩm")
        },
        removeAll(state){
            state.products = [];
            state.totalPrice = 0;
            localStorage.setItem('cart', JSON.stringify(state))
        }
    },
});

export const { addToCart, updateCart, removeCart, removeAll } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
