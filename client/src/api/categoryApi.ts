import axiosClient, { ResponseType } from './axiosClient';

export const GetAllCategoriesApi = async (): Promise<ResponseType> => {
    return await axiosClient.get('/cate');
};

export const GetAllCategoryDetailApi = async (): Promise<ResponseType> => {
    return await axiosClient.get('/cate-detail');
};