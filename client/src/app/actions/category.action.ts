import { toast } from 'react-toastify';
import { ResponseType } from '../../api/axiosClient';
import { GetAllCategoriesApi, GetAllCategoryDetailApi } from '../../api/categoryApi';
import { getAllCategories, getAllDetailCategories } from '../reducers/category.reducer';
import { AppDispatch } from '../store';

export const GetAllCategoriesAction = () => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error}: ResponseType = await GetAllCategoriesApi();

        if (error !== null){
            toast.error(error?.message);
            return;
        }

        if (code !== 200){
            toast.error(result);
            return;
        }

        dispatch(getAllCategories(result));
    } catch (error: any) {
        console.log(error.message);
    }
};

export const GetAllDetailCategoriesAction = () => async (dispatch: AppDispatch) => {
    try {
        const { code, result, error }: ResponseType = await GetAllCategoryDetailApi();
        
        if (error !== null) {
            toast.error(error?.message);
            return;
        }

        if (code !== 200) {
            toast.error(result);
            return;
        }

        dispatch(getAllDetailCategories(result));
    } catch (error: any) {
        console.log(error.message)
    }
};
