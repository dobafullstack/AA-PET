import axiosClient from './axiosClient';

export const GetAllCategories = async () => {
    let categories = null;
    try {
        const {result} = await axiosClient.get('/cate');

        categories = result;
    } catch (error) {
        console.log(error.message);
    }

    return categories;
};