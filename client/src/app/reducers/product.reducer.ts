import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductModel from '../../models/ProductModel';
import { baseUrl } from '../../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseType } from '../../api/axiosClient';

const headers = {
    type: 'aa-pet',
};

const createRequest = (url: string) => ({ url, headers });

type StateType = {
    product: ProductModel;
    products: ProductModel[];
};

const initialState: StateType = {
    product: {
        _id: '',
        name: '',
        description: '',
        quantity: 0,
        saled_count: 0,
        discount_percent: 0,
        price: 0,
        status: 0,
        category_detail_id: '',
        images: [],
        created_at: '',
        updated_at: '',
    },
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearProduct(state) {
            state.product = initialState.product;
        },
        getAllProduct(state, { payload }: PayloadAction<ProductModel[]>) {},
        getProductByCategoryId(state, { payload }: PayloadAction<ProductModel[]>) {
            state.products = [];
            payload.forEach((product) => state.products.push(product));
        },
        getProductByCategoryDetailId(state, { payload }: PayloadAction<ProductModel[]>) {
            state.products = [];
            payload.forEach((product) => state.products.push(product));
        },
        getProductById(state, { payload }: PayloadAction<ProductModel>) {
            state.product = payload;
        },
    },
});

export default productSlice.reducer;

export const { getAllProduct, getProductByCategoryId, getProductByCategoryDetailId, getProductById, clearProduct } = productSlice.actions;

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getProductById: builder.query<ResponseType<ProductModel>, string>({
            query: (productId: string) => createRequest(`/product/detail/${productId}`),
        }),
    }),
});

export const { useGetProductByIdQuery } = productApi;
