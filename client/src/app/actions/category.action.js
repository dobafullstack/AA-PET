import axiosClient from '../../api/axiosClient';
import { getAllCategories, getAllDetailCategories } from '../reducers/category.reducer';

export const GetAllCategoriesAction = () => async (dispatch) => {
    try {
        const { result } = await axiosClient.get('/cate');

        dispatch(getAllCategories(result));

    } catch (error) {
        console.log(error.message);
    }
};

export const GetAllDetailCategoriesAction = () => async (dispatch) => {
    try {
        const { result } = await axiosClient.get('/cate-detail');

        dispatch(getAllDetailCategories(result));

    } catch (error) {
        console.log(error.message);
    }
};
