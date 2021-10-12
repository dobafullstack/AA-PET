import { toast } from 'react-toastify';
import { ResponseType } from '../../api/axiosClient';
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
        const { code, result, error }: ResponseType = await getProductByCategoryIdApi(id);

        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 200) {
            toast.error(result);
            return;
        }

        dispatch(getProductsByCategoryId(result));
    } catch (error: any) {
        console.log(error.message);
    }
};

export const GetProductByCategoryDetailIdAction = (id: string) => async (dispatch : AppDispatch) => {
    try {
        const {code, result, error}: ResponseType = await getProductByCategoryDetailIdApi(id);
    
        if (error !== null){
            toast.error(error?.message);
            return;
        }

        if (code !== 200){
            toast.error(result);
            return;
        }

        dispatch(getProductsByCategoryDetailId(result));
    } catch (error: any) {
        console.log(error.message)
    }
};

export const GetProductByIdAction = (id: any) => async (dispatch : AppDispatch) => {
    try {
        const { code, result, error }: ResponseType = await getProductByIdApi(id);

        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 200) {
            toast.error(result);
            return;
        }

        dispatch(getProductById(result));
    } catch (error: any) {
        console.log(error.message);
    }
};
