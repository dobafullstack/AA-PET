import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {},
    },
});

export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
