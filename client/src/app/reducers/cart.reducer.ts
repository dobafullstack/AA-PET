import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartModel, { CartProduct, UpdateCart } from '../../models/CartModel';
import { toast } from 'react-toastify';
import getDiscountPrice from '../../utils/getDiscountPrice';

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
            const discountPrice = getDiscountPrice(
                payload.product.price,
                payload.product.discount_value
            );

            const finalPrice =
                discountPrice === null
                    ? payload.product.price
                    : getDiscountPrice(payload.product.price, payload.product.discount_value) as number;

            if (state.products.length === 0) {
                //cart is null
                state.products.push({
                    count: payload.count,
                    product: {
                        ...payload.product,
                        price: finalPrice,
                    },
                });
            } else {
                //cart is not null
                const index = state.products.findIndex(
                    (product) =>
                        product.product._id === payload.product._id &&
                        product.product.name === payload.product.name
                );
                if (index >= 0) {
                    //already have in cart
                    state.products[index].count += payload.count;
                } else {
                    state.products.push({
                        count: payload.count,
                        product: {
                            ...payload.product,
                            price: finalPrice,
                        },
                    });
                }
            }
            state.total += finalPrice * payload.count;
            toast.success('Added to cart');
            localStorage.setItem('cart', JSON.stringify(state));
        },
        updateCart(state, { payload }: PayloadAction<UpdateCart>) {
            const index = state.products.findIndex(
                (product) =>
                    product.product._id === payload._id && product.product.name === payload.name
            );
            const product = state.products[index];

            if (product.count === 1 && payload.count === -1) return;

            state.total += product.product.price * payload.count;
            state.products[index].count += payload.count;
            toast.info('Updated cart');
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeCart(state, { payload }: PayloadAction<{ _id: string; name: string }>) {
            const index = state.products.findIndex(
                (product) =>
                    product.product._id === payload._id && product.product.name === payload.name
            );

            const product = state.products[index];

            state.total -= product.product.price * product.count;
            state.products = state.products.filter(
                (product) => product.product.name !== payload.name
            );
            toast.error('Removed item');
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart(state) {
            state.products = [];
            state.total = 0;
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export default cartSlice.reducer;

export const { addToCart, updateCart, removeCart, clearCart } = cartSlice.actions;
