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

export const GetProductByCategoryIdAction = (id) => async (dispatch) => {
    try {
        const products = await getProductByCategoryDetailIdApi(id);

        dispatch(getProductsByCategoryId(products));
    } catch (error) {
        console.log(error.message);
    }
};

export const GetProductByCategoryDetailIdAction = (id) => async (dispatch) => {
    try {
        const products = await getProductByCategoryIdApi(id);

        dispatch(getProductsByCategoryDetailId(products));
    } catch (error) {
        console.log(error.message);
    }
};

export const GetProductById = (id) => async (dispatch, getState) => {
    try {
        const product = await getProductByIdApi(id);

        dispatch(getProductById(product));
    } catch (error) {
        console.log(error.message);
    }

    return getState().product.product;
}
