import axiosClient, { ResponseType } from './axiosClient';

export const getProductByCategoryDetailIdApi = async (id: string): Promise<ResponseType> => {
    return await axiosClient.get(`/product/category-detail/${id}`);
};

export const getProductByCategoryIdApi = async (id: string): Promise<ResponseType> => {
   return await axiosClient.get(`/product/category/${id}`);
}

export const getProductByIdApi = async (id: string): Promise<ResponseType> => {
    return await axiosClient.get(`/product/detail/${id}`);
}
