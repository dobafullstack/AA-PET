import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductModel from '../../models/ProductModel';
import { baseUrl } from '../../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseType } from '../../api/axiosClient';
import {
    SortByNameAZ,
    SortByNameZA,
    SortByPriceHighToLow,
    SortByPriceLowToHigh,
    SortedList,
} from '../../models/Sort';

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
    products: localStorage.getItem('list-products')
        ? JSON.parse(localStorage.getItem('list-products') as string)
        : [],
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
            localStorage.setItem('list-products', JSON.stringify(state.products));
        },
        getProductByCategoryDetailId(state, { payload }: PayloadAction<ProductModel[]>) {
            state.products = [];
            payload.forEach((product) => state.products.push(product));
            localStorage.setItem('list-products', JSON.stringify(state.products));
        },
        getProductById(state, { payload }: PayloadAction<ProductModel>) {
            state.product = payload;
        },
        changePriceProduct(state, { payload }: PayloadAction<{newPrice: number; newName: string}>) {
            state.product.price = payload.newPrice;
            state.product.name = payload.newName;
        },
        sortProduct(state, { payload }: PayloadAction<'A-Z' | 'Z-A' | 'H-L' | 'L-H'>) {
            let strategy = null;

            switch (payload) {
                case 'A-Z':
                    strategy = new SortByNameAZ();
                    break;
                case 'Z-A':
                    strategy = new SortByNameZA();
                    break;
                case 'H-L':
                    strategy = new SortByPriceHighToLow();
                    break;
                case 'L-H':
                    strategy = new SortByPriceLowToHigh();
                    break;
                default:
                    strategy = new SortByNameAZ();
            }

            const sortedList = new SortedList(strategy, state.products);
            sortedList.sort();
            state.products = sortedList.products;
        },
    },
});

export default productSlice.reducer;

export const {
    getAllProduct,
    getProductByCategoryId,
    getProductByCategoryDetailId,
    getProductById,
    clearProduct,
    changePriceProduct,
    sortProduct,
} = productSlice.actions;

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
