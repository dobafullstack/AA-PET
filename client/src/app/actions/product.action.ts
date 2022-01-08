import productApi from "../../api/productApi";
import { getBestSeller, getNewArrival, getProductByCategoryDetailId, getProductByCategoryId, getProductById, getSaleProducts } from "../reducers/product.reducer";
import { AppDispatch } from "../store";

export const getProductByCategoryIdAction = (categoryId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, error, result} = await productApi.getProductByCategoryId(categoryId);

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
            return;
        }

        dispatch(getProductByCategoryId(result));
    } catch (error: any) {
        console.log(error);
    }
}

export const getProductsByProductTypeAction = (productType: string) => async (dispatch: AppDispatch) => {
    try {
        const { code, error, result } = await productApi.getProductsByProductType(productType);

        if (code !== 200 || error !== null) {
            console.log(result);
            console.log(error?.message);
            return;
        }

        switch(productType){
            case 'bestSeller':
                dispatch(getBestSeller(result));
                break;
            case 'newArrival':
                dispatch(getNewArrival(result));
                break;
            case 'sale':
                dispatch(getSaleProducts(result));
                break;
            default:
                dispatch(getBestSeller(result));
                break;
        }
    } catch (error: any) {
        console.log(error);
    }
}

export const getProductByCategoryDetailIdAction = (categoryDetailId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, error, result} = await productApi.getProductByCategoryDetailId(categoryDetailId);

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
            return;
        }

        dispatch(getProductByCategoryDetailId(result));
    } catch (error: any) {
        console.log(error);
    }
}

export const getProductByIdAction = (productId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, error, result} = await productApi.getProductBylId(productId);

        if (code !== 200 || error !== null) {
            console.log(result);
            console.log(error?.message);
            return;
        }

        dispatch(getProductById(result));
    } catch (error: any) {
        console.log(error)
    }
}