import axiosClient, { ResponseType } from '../../api/axiosClient';
import { getAllCategories, getAllDetailCategories } from '../reducers/category.reducer';
import { AppDispatch } from '../store';

export const GetAllCategoriesAction = () => async (dispatch: AppDispatch) => {
    try {
        const { result } : ResponseType = await axiosClient.get('/cate');

        dispatch(getAllCategories(result));

    } catch (error: any) {
        console.log(error.message);
    }
};

export const GetAllDetailCategoriesAction = () => async (dispatch: AppDispatch) => {
    try {
        const { result } : ResponseType = await axiosClient.get('/cate-detail');

        dispatch(getAllDetailCategories(result));

    } catch (error: any) {
        console.log(error.message);
    }
};
