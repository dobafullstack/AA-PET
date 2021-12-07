import ProductModel from '../models/ProductModel';
import axiosClient, { ResponseType } from './axiosClient';

const productApi = {
    getAllProduct: async (): Promise<ResponseType<ProductModel[]>> => await axiosClient.get('/product'),
    getProductByCategoryId: async (categoryId: string): Promise<ResponseType<ProductModel[]>> => await axiosClient.get(`/product/cate/${categoryId}`),
    getProductByCategoryDetailId: async (categoryDetailId: string): Promise<ResponseType<ProductModel[]>> => await axiosClient.get(`/product/cate-detail/${categoryDetailId}`),
    getProductBylId: async (productId: string): Promise<ResponseType<ProductModel>> => await axiosClient.get(`/product/detail/${productId}`),
};

export default productApi;
