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
    
};

export const GetProductByCategoryDetailIdAction = (id: string) => async (dispatch : AppDispatch) => {
    
};

export const GetProductById = (id: any) => async (dispatch : AppDispatch, getState: RootState) => {
    
};
