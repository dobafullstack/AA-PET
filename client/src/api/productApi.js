import axiosClient from './axiosClient';

export const getProductByCategoryDetailIdApi = async (id) => {
    let products = null;

    try {
        const { result } = await axiosClient.get(`/product/category/${id}`);

        products = result;
    } catch (error) {
        console.log(error.message);
    }

    return products;
};

export const getProductByCategoryIdApi = async (id) => {
    let products = null;

    try {
        const { result } = await axiosClient.get(`/product/category-detail/${id}`);

        products = result;
    } catch (error) {
        console.log(error.message);
    }

    return products;
}

export const getProductByIdApi = async (id) => {
    let products = null;

    try {
        const {result} = await axiosClient.get(`/product/${id}`);

        products = result;
    } catch (error) {
        console.log(error.message);
    }

    return products;
}
