import Product from "../models/Product";
import axiosClient, { ResponseType } from "./axiosClient";

export default {
    getAllProducts: async (): Promise<ResponseType<Product[]>> =>
        await axiosClient.get("/product"),
    createProducts: async (body: any): Promise<ResponseType<string>> =>
        await axiosClient.post("/product", { ...body }),
    deleteProducts: async (productId: string): Promise<ResponseType<string>> => await axiosClient.delete(`/product/${productId}`),
    getDetailProduct: async (productId: string): Promise<ResponseType<Product>> => await axiosClient.get(`/product/detail/${productId}`)
};
