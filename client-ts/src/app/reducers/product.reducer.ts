import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: 'product',
    initialState: { products: [], product: {} },
    reducers: {
        getProductsByCategoryId(state, { payload }) {
            state.products = payload;
        },
        getProductsByCategoryDetailId(state, { payload }) {
            state.products = payload;
        },
        getProductById(state, { payload }) {
            state.product = payload
        }
    },
});

export const { getProductsByCategoryId, getProductsByCategoryDetailId, getProductById } =
    ProductSlice.actions;

export default ProductSlice.reducer;
