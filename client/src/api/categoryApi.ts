import axiosClient, { ResponseType } from './axiosClient';

export const GetAllCategories = async () => {
    let categories = null;
    try {
        const { result } : ResponseType = await axiosClient.get('/cate');

        categories = result;
    } catch (error : any) {
        console.log(error.message);
    }

    return categories;
};
