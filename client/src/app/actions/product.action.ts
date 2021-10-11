import {
    getProductByCategoryDetailIdApi,
    getProductByCategoryIdApi,
    getProductByIdApi,
} from '../../api/productApi';
import {
    getProductsByCategoryId,
    getProductsByCategoryDetailId,
    getProductById,
} from '../reducers/product.reducer';
import { AppDispatch, RootState } from '../store';

export const GetProductByCategoryIdAction = (id: string) => async (dispatch : AppDispatch) => {
    try {
        const products = await getProductByCategoryDetailIdApi(id);

        dispatch(getProductsByCategoryId(products));
    } catch (error: any) {
        console.log(error.message);
    }
};

export const GetProductByCategoryDetailIdAction = (id: string) => async (dispatch : AppDispatch) => {
    try {
        const products = await getProductByCategoryIdApi(id);

        dispatch(getProductsByCategoryDetailId(products));
    } catch (error: any) {
        console.log(error.message);
    }
};

export const GetProductById = (id: any) => async (dispatch : AppDispatch, getState: RootState) => {
    try {
        const product = await getProductByIdApi(id);

        dispatch(getProductById(product));
    } catch (error: any) {
        console.log(error.message);
    }

    return getState.product.product;
};
