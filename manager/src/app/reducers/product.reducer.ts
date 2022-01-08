import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../models/Product";

type StateType = {
    product: Product;
    products: Product[];
    loading: boolean;
    message: string;
};

const initialState: StateType = {
    products: [],
    product: {
        _id: "",
        category_detail_id: "",
        name: "",
        description: "",
        discount_value: 0,
        images: [],
        price: 0,
        quantity: 0,
        saled_count: 0,
        created_at: "",
        updated_at: "",
        accessory: {}
    },
    loading: false,
    message: ''
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductRequired(state){
            state.loading = true;
        },
        getAllProducts(state, {payload}: PayloadAction<Product[]>){
            state.products = [];

            payload.map(product => state.products.push(product));
            state.loading = false;
        },
        getDetailProduct(state, {payload}: PayloadAction<Product>){
            state.product = payload;
        },
        createProduct(state, {payload}: PayloadAction<Product>){
            state.products.push(payload);
        },
        updateProduct(state, {payload}: PayloadAction<Product>){
            const index = state.products.findIndex(product => product._id === payload._id);
            
            if (index >= 0){
                state.products[index] = payload;
                state.product = payload;
            }
        },
        deleteProduct(state, {payload}: PayloadAction<string>){
            state.products = state.products.filter(product => product._id !== payload);
            state.loading = false;
        }
    },
});

export default productSlice.reducer;

export const {
    getProductRequired,
    getAllProducts,
    getDetailProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = productSlice.actions;
