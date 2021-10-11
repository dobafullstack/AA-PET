import axiosClient, { ResponseType } from './axiosClient';

export const getProductByCategoryDetailIdApi = async (id: string) => {
    let products = null;

    try {
        const { result } : ResponseType = await axiosClient.get(`/product/category/${id}`);

        products = result;
    } catch (error: any) {
        console.log(error.message);
    }

    return products;
};

export const getProductByCategoryIdApi = async (id: string) => {
    let products = null;

    try {
        const { result } : ResponseType = await axiosClient.get(`/product/category-detail/${id}`);

        products = result;
    } catch (error: any) {
        console.log(error.message);
    }

    return products;
}

export const getProductByIdApi = async (id: string) => {
    let products = null;

    try {
        const {result} : ResponseType = await axiosClient.get(`/product/${id}`);

        products = result;
    } catch (error: any) {
        console.log(error.message);
    }

    return products;
}
