import { createSlice } from '@reduxjs/toolkit';
import ProductType from '../../types/ProductType';

const initialProduct: ProductType = {
    _id: "",
    name: "",
    price: 0,
    rating_point: 0,
    description: "",
    img: [],
    category_detail_id: {
        _id: "",
        name: "",
        category_id: {
            _id: "",
            name: ""
        }
    }
}

const ProductSlice = createSlice({
    name: 'product',
    initialState: { products: [], product: initialProduct },
    reducers: {
        getProductsByCategoryId(state, { payload }) {
            state.products = payload;
        },
        getProductsByCategoryDetailId(state, { payload }) {
            state.products = payload;
        },
        getProductById(state, { payload }) {
            state.product = payload;
        },
    },
});

export const { getProductsByCategoryId, getProductsByCategoryDetailId, getProductById } =
    ProductSlice.actions;

export default ProductSlice.reducer;
