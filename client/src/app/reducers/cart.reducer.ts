import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartModel, { CartProduct, UpdateCart } from '../../models/CartModel';
import {toast} from 'react-toastify'

const initialState: CartModel = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') as string)
    : {
          products: [],
          total: 0,
      };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, { payload }: PayloadAction<CartProduct>) {
            if (state.products.length === 0) {
                //cart is null
                state.products.push(payload);
            } else {
                //cart is not null
                const index = state.products.findIndex((product) => product.product._id === payload.product._id);

                if (index >= 0) {
                    //already have in cart
                    state.products[index].count += payload.count;
                } else {
                    state.products.push(payload);
                }
            }
            state.total += payload.product.price * payload.count;
            toast.success('Added to cart')
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateCart(state, { payload }: PayloadAction<UpdateCart>) {
            const index = state.products.findIndex((product) => product.product._id === payload._id);
            const product = state.products[index];

            if (product.count === 1 && payload.count === -1) return;

            state.total += product.product.price * payload.count;
            state.products[index].count += payload.count;
            toast.info('Updated cart')
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeCart(state, { payload }: PayloadAction<string>) {
            const index = state.products.findIndex((product) => product.product._id === payload);

            state.total -= state.products[index].product.price * state.products[index].count;
            state.products = state.products.filter((product) => product.product._id !== payload);
            toast.error("Removed item")
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart(state) {
            state.products = [];
            state.total = 0;
            toast.error('Cleared cart')
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export default cartSlice.reducer;

export const { addToCart, updateCart, removeCart, clearCart } = cartSlice.actions;
